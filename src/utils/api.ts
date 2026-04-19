import { projectId, publicAnonKey } from './supabase/info';
import { supabase } from './supabaseClient';

// Fallback to project ID from supabaseClient URL if import is empty
const getBaseUrl = () => {
    let pid = projectId;
    if (!pid) {
        // Try to extract from supabaseUrl in supabaseClient if accessible, 
        // or hardcode based on the known value "ueklhgudrarkovbnyaue"
        // Since we can't easily import supabaseUrl value if it's not exported as string literal in a way we can grab without execution...
        // We will assume the import works, but if not, user needs to check info.tsx.
        // However, looking at the previous read of supabaseClient.ts, the URL is "https://ueklhgudrarkovbnyaue.supabase.co"
        pid = "ueklhgudrarkovbnyaue";
    }
    return `https://${pid}.supabase.co/functions/v1/make-server-a3a1e6bf`;
}

const BASE_URL = getBaseUrl();

async function getHeaders() {
  const { data: { session } } = await supabase.auth.getSession();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${publicAnonKey}`
  };

  if (session?.access_token) {
    headers['Authorization'] = `Bearer ${session.access_token}`;
  }
  return headers;
}

const handleResponse = async (res: Response) => {
    if (!res.ok) {
        let errorMessage = 'An error occurred';
        try {
            const errorData = await res.json();
            errorMessage = errorData.error || errorData.message || errorMessage;
        } catch (e) {
            errorMessage = `Request failed with status ${res.status}`;
        }
        throw new Error(errorMessage);
    }
    return res.json();
};

export const api = {
  getComments: async (itemId: string, sortBy: 'most_liked' | 'most_recent' = 'most_liked') => {
    const headers = await getHeaders();
    const res = await fetch(`${BASE_URL}/comments/${itemId}?sort=${sortBy}`, { headers });
    return handleResponse(res);
  },

  addComment: async (itemId: string, text: string, rating: number) => {
    const headers = await getHeaders();
    const res = await fetch(`${BASE_URL}/comments`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ item_id: itemId, comment: text, rating })
    });
    return handleResponse(res);
  },

  editComment: async (commentId: string, text: string, rating: number) => {
    const headers = await getHeaders();
    const res = await fetch(`${BASE_URL}/comments/${commentId}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify({ comment: text, rating })
    });
    return handleResponse(res);
  },

  deleteComment: async (commentId: string) => {
    const headers = await getHeaders();
    const res = await fetch(`${BASE_URL}/comments/${commentId}`, {
      method: 'DELETE',
      headers
    });
    return handleResponse(res);
  },

  toggleLike: async (commentId: string) => {
    const headers = await getHeaders();
    const res = await fetch(`${BASE_URL}/comments/${commentId}/like`, {
      method: 'POST',
      headers
    });
    return handleResponse(res);
  },

  getItemRating: async (itemId: string) => {
    const headers = await getHeaders();
    const res = await fetch(`${BASE_URL}/ratings/${itemId}`, { headers });
    // Handle 404/500 gracefully for ratings by returning default
    if (!res.ok) return { average_rating: 0, total_ratings: 0 };
    return res.json();
  },

  getBatchRatings: async (itemIds: string[]) => {
    const headers = await getHeaders();
    const res = await fetch(`${BASE_URL}/ratings/batch`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ itemIds })
    });
    return handleResponse(res);
  }
};
