import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js@2";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Helper to get Supabase client with Service Role (for admin tasks)
const getAdminSupabase = () => {
  return createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  );
};

// Helper to get User from Token
const getUserFromToken = async (c: any) => {
  const authHeader = c.req.header('Authorization');
  if (!authHeader) return null;
  
  const token = authHeader.replace('Bearer ', '');
  const supabase = getAdminSupabase();
  const { data: { user }, error } = await supabase.auth.getUser(token);
  
  if (error || !user) return null;
  return user;
};

// Helper to get Supabase client with User Context (RLS applies)
const getUserSupabase = (c: any) => {
  const authHeader = c.req.header('Authorization');
  return createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    { global: { headers: { Authorization: authHeader ?? '' } } }
  );
};

// Seed endpoint
app.post("/make-server-a3a1e6bf/seed", async (c) => {
  try {
    const supabase = getAdminSupabase();

    const seats = [
      { seat_name: 'S1', floor: 'Zone A', status: 'available' },
      { seat_name: 'S2', floor: 'Zone A', status: 'available' },
      { seat_name: 'S3', floor: 'Zone A', status: 'available' },
      { seat_name: 'S4', floor: 'Zone A', status: 'available' },
      { seat_name: 'S11', floor: 'Zone B', status: 'available' },
      { seat_name: 'S12', floor: 'Zone B', status: 'available' },
    ];

    // Check for existing seats to avoid duplicates manually since no unique constraint exists on seat_name
    const { data: existingSeats, error: fetchError } = await supabase
      .from('seats')
      .select('seat_name');

    if (fetchError) {
      console.error('Error fetching existing seats:', fetchError);
      return c.json({ error: fetchError.message }, 500);
    }

    const existingNames = new Set(existingSeats?.map((s: any) => s.seat_name));
    const newSeats = seats.filter(s => !existingNames.has(s.seat_name));

    if (newSeats.length > 0) {
      const { error } = await supabase.from('seats').insert(newSeats);

      if (error) {
        console.error('Error seeding seats:', error);
        return c.json({ error: error.message }, 500);
      }
      return c.json({ message: `Seeded ${newSeats.length} new seats.` });
    } else {
      return c.json({ message: "All seats already exist. No changes made." });
    }
  } catch (e: any) {
    console.error('Seed error:', e);
    return c.json({ error: e.message }, 500);
  }
});

// Health check endpoint - verified ok - deployment check
app.get("/make-server-a3a1e6bf/health", (c) => {
  return c.json({ status: "ok" });
});

// Delete Account Endpoint
app.delete("/make-server-a3a1e6bf/delete-account", async (c) => {
  try {
    const user = await getUserFromToken(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const supabase = getAdminSupabase();

    // Constraint has ON DELETE CASCADE on reservations.user_id -> auth.users.id
    // We do NOT manually delete rows from reservations. Database cascade handles it.

    const { error: deleteError } = await supabase.auth.admin.deleteUser(user.id);

    if (deleteError) {
      console.error('Error deleting user:', deleteError);
      return c.json({ error: deleteError.message }, 500);
    }
    
    // Attempt to delete profile (best effort)
    const { error: profileError } = await supabase.from('profiles').delete().eq('id', user.id);
    if (profileError) {
       console.error("Error deleting profile:", profileError);
    }

    return c.json({ message: 'User deleted successfully' });
  } catch (e: any) {
    console.error('Delete account error:', e);
    return c.json({ error: e.message }, 500);
  }
});

// Signup Endpoint
app.post("/make-server-a3a1e6bf/signup", async (c) => {
  try {
    const { email, password, full_name } = await c.req.json();
    const supabase = getAdminSupabase();

    const { data, error } = await supabase.auth.admin.createUser({
      email: email,
      password: password,
      user_metadata: { full_name: full_name },
      // Automatically confirm the user's email since an email server hasn't been configured.
      email_confirm: true
    });

    if (error) {
       console.error("Signup error:", error);
       return c.json({ error: error.message }, 400);
    }

    return c.json(data);
  } catch (e: any) {
    console.error("Signup exception:", e);
    return c.json({ error: e.message }, 500);
  }
});

// List Users Endpoint (Super Admin Only)
app.get("/make-server-a3a1e6bf/list-users", async (c) => {
  try {
    const user = await getUserFromToken(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const supabase = getAdminSupabase();

    const { data: requesterProfile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    if (requesterProfile?.role !== 'super_admin') {
      return c.json({ error: 'Unauthorized' }, 403);
    }

    // Fetch all users
    const { data: { users }, error: listError } = await supabase.auth.admin.listUsers();
    if (listError) throw listError;

    // Fetch all profiles to get roles
    const { data: profiles, error: profilesError } = await supabase
      .from('profiles')
      .select('id, role, full_name');
    
    if (profilesError) throw profilesError;

    // Merge data
    const mergedUsers = users.map(u => {
        const profile = profiles?.find(p => p.id === u.id);
        return {
            id: u.id,
            email: u.email,
            full_name: profile?.full_name || u.user_metadata?.full_name || '',
            role: profile?.role || 'user',
            last_sign_in: u.last_sign_in_at
        };
    });

    return c.json({ users: mergedUsers });
  } catch (e: any) {
    console.error("List users error:", e);
    return c.json({ error: e.message }, 500);
  }
});

// Update User Role Endpoint (Super Admin Only)
app.post("/make-server-a3a1e6bf/update-user-role", async (c) => {
  try {
    const user = await getUserFromToken(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }
    
    const { targetUserId, newRole } = await c.req.json();

    if (!targetUserId || !newRole) {
         return c.json({ error: "Missing required fields" }, 400);
    }
    
    // Validate role
    if (!['user', 'admin'].includes(newRole)) {
         return c.json({ error: "Invalid role. Only 'user' or 'admin' allowed." }, 400);
    }

    const supabase = getAdminSupabase();

    const { data: requesterProfile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    if (requesterProfile?.role !== 'super_admin') {
      return c.json({ error: 'Unauthorized' }, 403);
    }
    
    // Perform update
    const { error: updateError } = await supabase
        .from('profiles')
        .update({ role: newRole })
        .eq('id', targetUserId);

    if (updateError) throw updateError;

    return c.json({ message: "Role updated successfully" });

  } catch (e: any) {
    console.error("Update role error:", e);
    return c.json({ error: e.message }, 500);
  }
});

// Expire Pending Admin Reservations (Run by Cron at 11 AM)
app.get("/make-server-a3a1e6bf/expire-admin-reservations-deprecated", async (c) => {
  return c.json({ message: "Deprecated. Use new logic." });
});

// --- Cafeteria Comments & Ratings ---

// Get Comments for Item
app.get("/make-server-a3a1e6bf/comments/:itemId", async (c) => {
  try {
    const itemId = c.req.param('itemId');
    const user = await getUserFromToken(c); // Optional: if logged in, we check for pinning
    const supabase = getAdminSupabase();
    // Use User-Scoped Client for Data Fetching to verify RLS
    const userSupabase = getUserSupabase(c);

    // Check role
    let isAdmin = false;
    if (user) {
        const { data: p } = await supabase.from('profiles').select('role').eq('id', user.id).single();
        if (p?.role === 'admin' || p?.role === 'super_admin') {
            isAdmin = true;
        }
    }

    // Fetch comments (Using User Context)
    console.log(`Fetching comments for item ${itemId}...`);
    const { data: comments, error } = await userSupabase
      .from('cafeteria_item_comments')
      .select(`
        id,
        user_id,
        comment,
        rating,
        created_at
      `)
      .eq('item_id', itemId);

    if (error) {
        console.error("Error fetching comments with user context:", error);
        throw error;
    }
    
    console.log(`Found ${comments?.length || 0} comments`);

    // Fetch user profiles manually to avoid join errors if FK is missing
    const userIds = [...new Set(comments.map((c: any) => c.user_id))];
    let userMap: Record<string, { name: string, role: string }> = {};
    
    if (userIds.length > 0) {
        const { data: profiles, error: profilesError } = await supabase
            .from('profiles')
            .select('id, full_name, role')
            .in('id', userIds);
        
        if (!profilesError && profiles) {
            profiles.forEach((p: any) => {
                userMap[p.id] = { name: p.full_name, role: p.role };
            });
        }
    }

    // Fetch likes counts for these comments
    const commentIds = comments.map((cm: any) => cm.id);
    let likesMap: Record<string, number> = {};
    let userLikesSet = new Set<string>();

    if (commentIds.length > 0) {
        // Get total likes (Using User Context)
        const { data: allLikes, error: likesError } = await userSupabase
            .from('cafeteria_comment_likes')
            .select('comment_id');
        
        if (!likesError && allLikes) {
            allLikes.forEach((l: any) => {
                likesMap[l.comment_id] = (likesMap[l.comment_id] || 0) + 1;
            });
        }

        // Get user likes if logged in (Using User Context)
        if (user) {
            const { data: myLikes, error: myLikesError } = await userSupabase
                .from('cafeteria_comment_likes')
                .select('comment_id')
                .eq('user_id', user.id)
                .in('comment_id', commentIds);
            
            if (!myLikesError && myLikes) {
                myLikes.forEach((l: any) => userLikesSet.add(l.comment_id));
            }
        }
    }

    // Process comments
    let processedComments = comments.map((cm: any) => {
      const userInfo = userMap[cm.user_id] || { name: 'Unknown User', role: 'user' };
      return {
        id: cm.id,
        user_id: cm.user_id,
        user_name: userInfo.name,
        author_role: userInfo.role,
        comment: cm.comment,
        rating: cm.rating,
        created_at: cm.created_at,
        likes_count: likesMap[cm.id] || 0,
        is_liked_by_user: userLikesSet.has(cm.id),
        is_own_comment: user ? cm.user_id === user.id : false
      };
    });

    // Mask user_name for non-admins to ensure privacy (Marvel Aliases handled on frontend)
    // EXCEPTION: Users always see their own real name
    processedComments.forEach((c: any) => {
        if (!isAdmin && !c.is_own_comment) {
            delete c.user_name;
        }
    });

    // Sort: Based on query param
    const sort = c.req.query('sort') || 'most_liked';

    processedComments.sort((a: any, b: any) => {
        // 1. Pin Own Comment
        if (a.is_own_comment && !b.is_own_comment) return -1;
        if (!a.is_own_comment && b.is_own_comment) return 1;

        // 2. Regular Sort
        if (sort === 'most_recent') {
            // Sort by Date Descending
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        } else {
             // Most Liked (Default)
             // Primary: Like count DESC
             const diffLikes = b.likes_count - a.likes_count;
             if (diffLikes !== 0) return diffLikes;
             
             // Secondary: Date Descending
             return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        }
    });

    return c.json({ comments: processedComments });
  } catch (e: any) {
    console.error("Get comments error:", e);
    return c.json({ error: e.message }, 500);
  }
});

// Add Comment
app.post("/make-server-a3a1e6bf/comments", async (c) => {
  try {
    const user = await getUserFromToken(c);
    if (!user) return c.json({ error: 'Unauthorized' }, 401);

    const { item_id, comment, rating } = await c.req.json();
    if (!item_id || !comment || rating === undefined) {
        return c.json({ error: "Missing required fields" }, 400);
    }

    const userSupabase = getUserSupabase(c);

    // Enforce 1 comment per user per item
    const { data: existing } = await userSupabase
        .from('cafeteria_item_comments')
        .select('id')
        .eq('item_id', item_id)
        .eq('user_id', user.id)
        .single();
    
    if (existing) {
        return c.json({ error: "You have already commented on this item." }, 400);
    }

    // Insert comment
    const { data, error } = await userSupabase
        .from('cafeteria_item_comments')
        .insert({
            item_id,
            user_id: user.id,
            comment,
            rating
        })
        .select()
        .single();

    if (error) throw error;

    return c.json(data);
  } catch (e: any) {
    console.error("Add comment error:", e);
    return c.json({ error: e.message }, 500);
  }
});

// Edit Comment
app.put("/make-server-a3a1e6bf/comments/:commentId", async (c) => {
  try {
    const user = await getUserFromToken(c);
    if (!user) return c.json({ error: 'Unauthorized' }, 401);

    const commentId = c.req.param('commentId');
    const { comment, rating } = await c.req.json();
    const supabase = getAdminSupabase(); // Use admin for profile checks if needed
    const userSupabase = getUserSupabase(c);

    // Check ownership and role
    const { data: existing, error: fetchError } = await userSupabase
        .from('cafeteria_item_comments')
        .select('user_id, item_id')
        .eq('id', commentId)
        .single();
    
    if (fetchError || !existing) return c.json({ error: "Comment not found" }, 404);

    let isAuthorized = existing.user_id === user.id;
    if (!isAuthorized) {
        // Check if admin
        const { data: p } = await supabase.from('profiles').select('role').eq('id', user.id).single();
        if (p?.role === 'admin' || p?.role === 'super_admin') {
            isAuthorized = true;
        }
    }

    if (!isAuthorized) return c.json({ error: "Forbidden" }, 403);

    // Update (If user is admin, they still use their own token. RLS must allow admin to update OR code must switch to admin client for admin updates.)
    // Assuming for now regular user updates. If admin updates others' comments, this might fail if RLS is strict "update own".
    // Switching to admin client for update if authorized but not owner:
    const clientToUse = (existing.user_id === user.id) ? userSupabase : supabase;

    const { error: updateError } = await clientToUse
        .from('cafeteria_item_comments')
        .update({
            comment,
            rating
        })
        .eq('id', commentId);

    if (updateError) throw updateError;

    return c.json({ message: "Updated successfully" });
  } catch (e: any) {
    console.error("Edit comment error:", e);
    return c.json({ error: e.message }, 500);
  }
});

// Delete Comment
app.delete("/make-server-a3a1e6bf/comments/:commentId", async (c) => {
  try {
    const user = await getUserFromToken(c);
    if (!user) return c.json({ error: 'Unauthorized' }, 401);

    const commentId = c.req.param('commentId');
    const supabase = getAdminSupabase();
    const userSupabase = getUserSupabase(c);

    // Check ownership and role
    const { data: existing, error: fetchError } = await userSupabase
        .from('cafeteria_item_comments')
        .select('user_id, item_id')
        .eq('id', commentId)
        .single();
    
    if (fetchError || !existing) return c.json({ error: "Comment not found" }, 404);

    let isAuthorized = existing.user_id === user.id;
    if (!isAuthorized) {
        // Check if admin
        const { data: p } = await supabase.from('profiles').select('role').eq('id', user.id).single();
        if (p?.role === 'admin' || p?.role === 'super_admin') {
            isAuthorized = true;
        }
    }

    if (!isAuthorized) return c.json({ error: "Forbidden" }, 403);

    // Delete
    const clientToUse = (existing.user_id === user.id) ? userSupabase : supabase;
    const { error: deleteError } = await clientToUse
        .from('cafeteria_item_comments')
        .delete()
        .eq('id', commentId);

    if (deleteError) throw deleteError;

    return c.json({ message: "Deleted successfully" });
  } catch (e: any) {
    console.error("Delete comment error:", e);
    return c.json({ error: e.message }, 500);
  }
});

// Toggle Like
app.post("/make-server-a3a1e6bf/comments/:commentId/like", async (c) => {
  try {
    const user = await getUserFromToken(c);
    if (!user) return c.json({ error: 'Unauthorized' }, 401);

    const commentId = c.req.param('commentId');
    const userSupabase = getUserSupabase(c);

    // Check if liked
    const { data: existing } = await userSupabase
        .from('cafeteria_comment_likes')
        .select('id')
        .eq('comment_id', commentId)
        .eq('user_id', user.id)
        .single();

    if (existing) {
        // Unlike
        await userSupabase.from('cafeteria_comment_likes').delete().eq('id', existing.id);
    } else {
        // Like
        await userSupabase.from('cafeteria_comment_likes').insert({
            comment_id: commentId,
            user_id: user.id
        });
    }

    // Return new count
    const { count } = await userSupabase
        .from('cafeteria_comment_likes')
        .select('*', { count: 'exact', head: true })
        .eq('comment_id', commentId);
    
    return c.json({ 
        liked: !existing, 
        count: count || 0 
    });
  } catch (e: any) {
    console.error("Like toggle error:", e);
    return c.json({ error: e.message }, 500);
  }
});

// Get Item Rating
app.get("/make-server-a3a1e6bf/ratings/:itemId", async (c) => {
    try {
        const itemId = c.req.param('itemId');
        const userSupabase = getUserSupabase(c);
        
        // Try reading from summary table
        const { data, error } = await userSupabase
            .from('cafeteria_item_rating_summary')
            .select('*')
            .eq('item_id', itemId)
            .single();
        
        if (!error && data) {
            // Handle potential column name variations
            const avg = data.average_rating ?? data.avg_rating ?? data.avg ?? 0;
            const total = data.total_ratings ?? data.count ?? 0;
            return c.json({ average_rating: avg, total_ratings: total });
        }
        
        // Fallback: Calculate from comments table directly if view fails or is empty
        console.log("Rating view failed or empty, calculating from comments...");
        const { data: comments, error: commentsError } = await userSupabase
            .from('cafeteria_item_comments')
            .select('rating')
            .eq('item_id', itemId);
            
        if (!commentsError && comments) {
            const total = comments.length;
            if (total > 0) {
                const sum = comments.reduce((acc: number, c: any) => acc + (Number(c.rating) || 0), 0);
                return c.json({ average_rating: sum / total, total_ratings: total });
            }
        }

        return c.json({ average_rating: 0, total_ratings: 0 });
    } catch (e: any) {
        return c.json({ average_rating: 0, total_ratings: 0 });
    }
});

// Batch Get Ratings and Comment Counts
app.post("/make-server-a3a1e6bf/ratings/batch", async (c) => {
  try {
    const { itemIds } = await c.req.json();
    if (!itemIds || !Array.isArray(itemIds)) {
        return c.json({ error: "Invalid itemIds" }, 400);
    }

    const userSupabase = getUserSupabase(c);

    // Fetch ratings
    // We try to fetch from view, but if it fails we will calculate manually later (or just return 0s if batch fails)
    // To keep batch efficient, we might rely on the view. If view is broken, batch might return empty ratings.
    const { data: ratings, error: ratingsError } = await userSupabase
        .from('cafeteria_item_rating_summary')
        .select('*')
        .in('item_id', itemIds);
    
    // We won't throw on ratings error, just log it, as we can fallback to 0 or manual count if needed (but manual batch is expensive)
    if (ratingsError) {
        console.error("Batch ratings view error:", ratingsError);
    }

    // Fetch comment counts
    // We fetch all comments for these items to count them. 
    // For large datasets, a separate counter table or RPC would be better, but this suffices for now.
    const { data: comments, error: commentsError } = await userSupabase
        .from('cafeteria_item_comments')
        .select('item_id, rating')
        .in('item_id', itemIds);
    
    if (commentsError) throw commentsError;

    const commentCounts: Record<string, number> = {};
    const manualRatingsSum: Record<string, number> = {};
    const manualRatingsCount: Record<string, number> = {};

    comments.forEach((c: any) => {
        commentCounts[c.item_id] = (commentCounts[c.item_id] || 0) + 1;
        // Collect data for manual rating calculation fallback
        if (c.rating !== null && c.rating !== undefined) {
             manualRatingsSum[c.item_id] = (manualRatingsSum[c.item_id] || 0) + Number(c.rating);
             manualRatingsCount[c.item_id] = (manualRatingsCount[c.item_id] || 0) + 1;
        }
    });

    // Map ratings
    const ratingsMap: Record<string, number> = {};
    
    // First try populating from view data
    ratings?.forEach((r: any) => {
        ratingsMap[r.item_id] = r.average_rating ?? r.avg_rating ?? r.avg ?? 0;
    });

    // If any item is missing from view data (or view failed), use manual calculation
    itemIds.forEach((id: string) => {
        if (ratingsMap[id] === undefined) {
            const count = manualRatingsCount[id] || 0;
            ratingsMap[id] = count > 0 ? (manualRatingsSum[id] / count) : 0;
        }
    });

    return c.json({ ratings: ratingsMap, commentCounts });

  } catch (e: any) {
    console.error("Batch ratings error:", e);
    return c.json({ error: e.message }, 500);
  }
});

// --- Check-in Logic (KV Store) ---

// Mark as Checked In
app.post("/make-server-a3a1e6bf/reservation-checkin", async (c) => {
    try {
        const { id } = await c.req.json();
        if (!id) return c.json({ error: "Missing ID" }, 400);
        
        console.log(`Marking reservation ${id} as checked in`);
        
        // Store true. Key format: checkin:{id}
        await kv.set(`checkin:${id}`, true);
        return c.json({ success: true });
    } catch (e: any) {
        return c.json({ error: e.message }, 500);
    }
});

// Check if Checked In
app.get("/make-server-a3a1e6bf/reservation-checkin/:id", async (c) => {
    try {
        const id = c.req.param('id');
        const isCheckedIn = await kv.get(`checkin:${id}`);
        return c.json({ checkedIn: !!isCheckedIn });
    } catch (e: any) {
        return c.json({ error: e.message }, 500);
    }
});

// Expire Unconfirmed Admin Reservations (Run by Cron at 11 AM)
app.get("/make-server-a3a1e6bf/expire-admin-reservations", async (c) => {
  try {
    console.log("Executing Admin Reservation Expiry Job...");

    const supabase = getAdminSupabase();
    const today = new Date().toLocaleDateString("en-CA");

    // 1. Get ALL reservations for today (for admins)
    // We filter by role later, or we can assume only admins use this system if strictly enterprise?
    // Let's filter by admin role to be safe as per previous logic.
    const { data: reservations, error: resError } = await supabase
        .from('reservations')
        .select('id, user_id')
        .eq('date', today);

    if (resError) throw resError;

    if (!reservations || reservations.length === 0) {
        return c.json({ message: "No reservations found for today." });
    }

    // 2. Identify Admins
    const userIds = [...new Set(reservations.map((r: any) => r.user_id))];
    const { data: adminProfiles } = await supabase
        .from('profiles')
        .select('id')
        .in('id', userIds)
        .eq('role', 'admin');
    
    const adminIds = new Set(adminProfiles?.map((p: any) => p.id) || []);
    
    // Filter for admin reservations
    const adminReservations = reservations.filter((r: any) => adminIds.has(r.user_id));

    if (adminReservations.length === 0) {
        return c.json({ message: "No admin reservations found." });
    }

    // 3. Check KV Store for "Check-in" status
    // We need to see which IDs are PRESENT in KV store as "checkin:{id}"
    // Efficient way: mget or just loop since scale is likely small (Enterprise app). 
    // mget requires constructing all keys.
    const keys = adminReservations.map((r: any) => `checkin:${r.id}`);
    const checkInValues = await kv.mget(keys);
    
    // 4. Identify NOT Checked In
    const idsToDelete = [];
    for (let i = 0; i < adminReservations.length; i++) {
        // If value is null/undefined, it means NOT checked in.
        if (!checkInValues[i]) {
            idsToDelete.push(adminReservations[i].id);
        }
    }

    if (idsToDelete.length === 0) {
        return c.json({ message: "All admin reservations are checked in. No deletions." });
    }

    console.log(`Deleting ${idsToDelete.length} non-checked-in reservations...`);

    // 5. Delete from DB
    const { error: deleteError } = await supabase
        .from('reservations')
        .delete()
        .in('id', idsToDelete);
        
    if (deleteError) throw deleteError;

    return c.json({ message: `Auto-cancelled ${idsToDelete.length} reservations.` });

  } catch (e: any) {
    console.error("Expire reservations error:", e);
    return c.json({ error: e.message }, 500);
  }
});

Deno.serve(app.fetch);
