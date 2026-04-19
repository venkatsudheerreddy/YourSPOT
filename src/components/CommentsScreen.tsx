import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { X, Plus, ThumbsUp, MoreVertical, Edit2, Trash2, Star, Loader2, ChevronDown } from "lucide-react";
import { api } from "../utils/api";

const MARVEL_ALIASES = [
  // Marvel
  "Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye",
  "Spider Man", "Doctor Strange", "Black Panther", "Scarlet Witch", "Vision",
  "Ant Man", "Wasp", "Falcon", "Winter Soldier", "Star Lord", "Gamora",
  "Rocket", "Groot", "Drax", "Nick Fury", "Captain Marvel", "Loki",
  "Shang Chi", "Moon Knight", "Daredevil", "Punisher", "Jessica Jones",
  "Luke Cage", "Iron Fist", "She Hulk", "Ms Marvel", "Okoye", "Mantis",
  "Nebula", "Valkyrie", "Wong", "America Chavez",

  // DC
  "Batman", "Superman", "Wonder Woman", "Flash", "Aquaman", "Cyborg",
  "Green Lantern", "Green Arrow", "Batgirl", "Robin", "Nightwing",
  "Joker", "Harley Quinn", "Catwoman", "Darkseid", "Lex Luthor",
  "Shazam", "Black Adam", "Constantine", "Zatanna",

  // Disney and Pixar
  "Mickey Mouse", "Donald Duck", "Goofy", "Buzz Lightyear", "Woody",
  "Elsa", "Anna", "Olaf", "Simba", "Mufasa",
  "Aladdin", "Genie", "Hercules", "Mulan", "Moana",
  "Baymax", "Stitch", "Lightning McQueen"
];


function getMarvelAlias(userId: string): string {
  let hash = 0;
  for (let i = 0; i < userId.length; i++) {
    hash = userId.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % MARVEL_ALIASES.length;
  return MARVEL_ALIASES[index];
}

// --- Types ---
interface Comment {
  id: string;
  user_id: string;
  user_name?: string;
  author_role: string;
  comment: string;
  rating: number;
  created_at: string;
  likes_count: number;
  is_liked_by_user: boolean;
  is_own_comment: boolean;
}

interface CommentsScreenProps {
  itemId: string;
  onClose: () => void;
  onAddComment: () => void;
  onEditComment: (comment: Comment) => void;
  isAdmin?: boolean;
  refreshKey?: number;
}

// --- Components ---

function CommentItem({ 
  comment, 
  onLike, 
  onEdit, 
  onDelete,
  isAdmin
}: { 
  comment: Comment; 
  onLike: (id: string) => void; 
  onEdit: (comment: Comment) => void;
  onDelete: (id: string) => void;
  isAdmin: boolean;
}) {
  const [likes, setLikes] = useState(comment.likes_count);
  const [isLiked, setIsLiked] = useState(comment.is_liked_by_user);
  const [isLikeLoading, setIsLikeLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLike = async () => {
    if (isLikeLoading) return;
    setIsLikeLoading(true);
    
    // Optimistic update
    const newLiked = !isLiked;
    setIsLiked(newLiked);
    setLikes(prev => newLiked ? prev + 1 : prev - 1);

    try {
      const res = await api.toggleLike(comment.id);
      setLikes(res.count);
      setIsLiked(res.liked);
    } catch (err) {
      // Revert
      setIsLiked(!newLiked);
      setLikes(prev => !newLiked ? prev + 1 : prev - 1);
    } finally {
      setIsLikeLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
      try {
          return new Date(dateString).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
          });
      } catch (e) {
          return "";
      }
  };

  const getRoleBadge = (role: string) => {
      if (role === 'admin' || role === 'super_admin') {
          return <span className="px-1.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">Admin</span>;
      }
      if (role === 'vendor') {
          return <span className="px-1.5 py-0.5 rounded-full bg-orange-500/10 text-orange-600 text-[10px] font-bold uppercase tracking-wider">Vendor</span>;
      }
      return null;
  };

  return (
    <div className="w-full py-4 border-b border-dashed border-border last:border-0">
      <div className="flex items-start justify-between mb-2">
        <div className="flex flex-col">
            <div className="flex items-center gap-2">
                <span className="label-md-heavy text-foreground">
                    {comment.user_name || getMarvelAlias(comment.user_id)}
                </span>
                {getRoleBadge(comment.author_role)}
                <span className="text-foreground opacity-40 text-[6px]">●</span>
                <span className="label-sm-normal text-secondary-foreground">
                    {formatDate(comment.created_at)}
                </span>
            </div>
            {/* Rating Stars in Comment */}
            <div className="flex gap-0.5 mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                    <Star 
                        key={s} 
                        size={10} 
                        fill={s <= comment.rating ? "var(--primary)" : "none"} 
                        stroke={s <= comment.rating ? "var(--primary)" : "var(--input)"} 
                    />
                ))}
            </div>
        </div>

        {(comment.is_own_comment || isAdmin) && (
            <div className="relative">
                <button 
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="p-1 rounded-full hover:bg-muted"
                >
                    <MoreVertical size={16} className="text-secondary-foreground" />
                </button>
                
                {menuOpen && (
                    <>
                        <div className="fixed inset-0 z-[50]" onClick={() => setMenuOpen(false)} />
                        <div className="absolute right-0 top-full mt-1 bg-popover rounded-[12px] shadow-card p-2 w-[120px] z-[60] flex flex-col gap-1 border border-border">
                            {(comment.is_own_comment || isAdmin) && (
                                <button 
                                    onClick={() => { setMenuOpen(false); onEdit(comment); }}
                                    className="flex items-center gap-2 px-2 py-2 text-sm text-secondary-foreground hover:bg-muted w-full text-left rounded-md transition-colors"
                                >
                                    <Edit2 size={14} /> Edit
                                </button>
                            )}
                            {(comment.is_own_comment || isAdmin) && (
                                <button 
                                    onClick={() => { setMenuOpen(false); onDelete(comment.id); }}
                                    className="flex items-center gap-2 px-2 py-2 text-sm text-destructive hover:bg-destructive/10 w-full text-left rounded-md transition-colors"
                                >
                                    <Trash2 size={14} /> Delete
                                </button>
                            )}
                        </div>
                    </>
                )}
            </div>
        )}
      </div>

      <p className="body-sm-normal text-secondary-foreground mb-3 whitespace-pre-wrap">
        {comment.comment}
      </p>

      <button 
        onClick={handleLike}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors border ${
            isLiked 
            ? "bg-primary/10 border-primary text-primary" 
            : "bg-transparent border-input text-secondary-foreground"
        }`}
      >
        <ThumbsUp size={14} className={isLiked ? "fill-current" : ""} />
        <span className="text-xs font-medium">{likes}</span>
      </button>
    </div>
  );
}

export function CommentsScreen({ itemId, onClose, onAddComment, onEditComment, isAdmin = false, refreshKey }: CommentsScreenProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasUserCommented, setHasUserCommented] = useState(false);
  const [sortBy, setSortBy] = useState<'most_liked' | 'most_recent'>('most_liked');
  const [sortMenuOpen, setSortMenuOpen] = useState(false);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const data = await api.getComments(itemId, sortBy);
      const allComments = data.comments;
      setHasUserCommented(allComments.some((c: Comment) => c.is_own_comment));
      
      // Backend handles filtering and sorting (pinning) now
      setComments(allComments);

    } catch (err) {
      console.error(err);
      // Optional: set empty state or error state if needed, but for now we just log
      setComments([]); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [itemId, isAdmin, refreshKey, sortBy]);

  const handleDelete = async (id: string) => {
    // Confirmation message adapted for admin vs user
    const msg = isAdmin ? "Are you sure you want to delete this comment?" : "Are you sure you want to delete your comment?";
    if (!confirm(msg)) return;
    try {
        await api.deleteComment(id);
        fetchComments();
    } catch (err) {
        alert("Failed to delete comment");
    }
  };

  return (
    <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-[60] bg-background flex flex-col h-full w-full"
    >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-border">
            <button onClick={onClose} className="p-2 -ml-2">
                <X size={24} className="text-foreground" />
            </button>
            <h2 className="title-medium-heavy text-foreground">Comments</h2>
            <div className="w-10 flex justify-end">
                {!hasUserCommented && !loading && (
                    <button onClick={onAddComment} className="p-2 -mr-2 text-primary">
                        <Plus size={24} />
                    </button>
                )}
            </div>
        </div>



   

        {/* Sort Control */}
        <div className="px-4 py-2 flex justify-end relative z-40 bg-background">
             <button 
                onClick={() => setSortMenuOpen(!sortMenuOpen)}
                className="flex items-center gap-2 px-6 py-3 rounded-[16px] border border-border bg-background hover:bg-muted transition-colors"
             >
                <span className="text-[14px] text-muted-foreground font-normal leading-none">
                    {sortBy === 'most_liked' ? 'Most liked' : 'Most recent'}
                </span>
                
             </button>
             
             {sortMenuOpen && (
                 <>
                    <div className="fixed inset-0 z-40" onClick={() => setSortMenuOpen(false)} />
                    <div className="absolute top-full right-4 mt-1 w-40 bg-popover rounded-[12px] shadow-card border border-border z-50 flex flex-col py-1 overflow-hidden">
                        <button 
                            onClick={() => { setSortBy('most_liked'); setSortMenuOpen(false); }}
                            className={`px-4 py-2 text-left text-sm hover:bg-muted transition-colors ${sortBy === 'most_liked' ? 'text-primary font-semibold' : 'text-foreground'}`}
                        >
                            Most liked
                        </button>
                        <button 
                            onClick={() => { setSortBy('most_recent'); setSortMenuOpen(false); }}
                            className={`px-4 py-2 text-left text-sm hover:bg-muted transition-colors ${sortBy === 'most_recent' ? 'text-primary font-semibold' : 'text-foreground'}`}
                        >
                            Most recent
                        </button>
                    </div>
                 </>
             )}
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto px-4 pb-8">
            {loading ? (
                <div className="flex justify-center pt-10">
                    <Loader2 className="animate-spin text-primary" />
                </div>
            ) : comments.length === 0 ? (
                <div className="flex flex-col items-center justify-center pt-20 text-center">
                    <p className="body-md-normal text-secondary-foreground">
                        No comments yet.
                    </p>
                    <p className="body-sm-normal text-muted-foreground mt-2">
                        Share your experience!
                    </p>
                </div>
            ) : (
                comments.map(comment => (
                    <CommentItem 
                        key={comment.id} 
                        comment={comment} 
                        onLike={() => {}} // Handle inside component
                        onEdit={onEditComment}
                        onDelete={handleDelete}
                        isAdmin={isAdmin}
                    />
                ))
            )}
        </div>
    </motion.div>
  );
}

// --- Add/Edit Screen ---

interface AddCommentScreenProps {
    itemId: string;
    existingComment?: Comment;
    onClose: () => void;
    onSuccess: () => void;
}

export function AddCommentScreen({ itemId, existingComment, onClose, onSuccess }: AddCommentScreenProps) {
    const [rating, setRating] = useState(existingComment?.rating || 0);
    const [text, setText] = useState(existingComment?.comment || "");
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async () => {
        if (rating === 0) {
            alert("Please select a rating");
            return;
        }
        if (!text.trim()) {
            alert("Please enter a comment");
            return;
        }

        setSubmitting(true);
        try {
            if (existingComment) {
                await api.editComment(existingComment.id, text, rating);
            } else {
                await api.addComment(itemId, text, rating);
            }
            onSuccess();
        } catch (err: any) {
            alert(err.message || "Failed to submit");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[70] bg-background flex flex-col h-full w-full"
        >
             <div className="flex items-center justify-between px-4 py-4 border-b border-border">
                <button onClick={onClose} className="p-2 -ml-2">
                    <X size={24} className="text-foreground" />
                </button>
                <h2 className="title-medium-heavy text-foreground">
                    {existingComment ? "Edit comment" : "Add comment"}
                </h2>
                <div className="w-10" /> 
            </div>

            <div className="p-6 flex flex-col gap-6">
                {/* Star Rating */}
                <div className="flex justify-center gap-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button 
                            key={star} 
                            onClick={() => setRating(star)}
                            className="focus:outline-none transition-transform active:scale-90"
                        >
                            <Star 
                                size={40} 
                                fill={star <= rating ? "var(--primary)" : "none"} 
                                stroke={star <= rating ? "var(--primary)" : "var(--input)"} 
                                strokeWidth={1.5}
                            />
                        </button>
                    ))}
                </div>

                {/* Text Area */}
                <div className="flex-1">
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Comment"
                        className="w-full h-[200px] p-4 rounded-[16px] bg-muted border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                </div>

                {/* Button */}
                <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="w-full py-4 bg-primary text-primary-foreground rounded-[16px] title-small-heavy shadow-glow active:scale-[0.98] transition-all disabled:opacity-50"
                >
                    {submitting ? "Saving..." : "Done"}
                </button>
            </div>
        </motion.div>
    );
}
