import React, { useEffect, useState, useMemo } from "react";
import Slider from "react-slick";
import { supabase } from "../utils/supabaseClient";
import { Loader2, Star } from "lucide-react";
import imgNoLunch from "figma:asset/413c2e906aa84a0ef4cc1a0213c143a63c237dce.png";
import { motion, AnimatePresence } from "motion/react";
import { CommentsScreen, AddCommentScreen } from "./CommentsScreen";
import { api } from "../utils/api";

//import { UnderConstructionOverlay } from "./UnderConstructionOverlay";

interface TodaysMenuScreenProps {
  onClose?: () => void;
  bypassUnderConstruction?: boolean;
  isAdmin?: boolean;
}

interface CafeteriaItem {
  id: string;
  title: string;
  price: number | null | undefined;
  description: string;
  image_url: string;
  display_order: number;
  meal_type: 'breakfast' | 'lunch' | 'snacks' | 'bakery';
  section?: string;
  average_rating?: number;
  comments_count?: number; 
}

// --- Components from Design ---

const closeIconPath = "M12.045 11.8683C12.3379 11.5754 12.8128 11.5754 13.1057 11.8683L20 18.7626L26.8943 11.8683C27.1872 11.5754 27.6621 11.5754 27.955 11.8683C28.2478 12.1612 28.2478 12.636 27.955 12.9289L21.0607 19.8232L28.3085 27.0711C28.6014 27.364 28.6014 27.8388 28.3085 28.1317C28.0156 28.4246 27.5407 28.4246 27.2478 28.1317L20 20.8839L12.7522 28.1317C12.4593 28.4246 11.9844 28.4246 11.6915 28.1317C11.3986 27.8388 11.3986 27.364 11.6915 27.0711L18.9393 19.8232L12.045 12.9289C11.7522 12.636 11.7522 12.1612 12.045 11.8683Z";

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ delay: 0.2, duration: 0.2 }}
      className="absolute bottom-[30px] left-1/2 -translate-x-1/2 z-50"
    >
      <button 
        onClick={onClick}
        className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-foreground shadow-lg active:scale-95 transition-transform"
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
           <rect width="40" height="40" rx="20" className="fill-foreground" />
           <path d={closeIconPath} className="fill-background" />
        </svg>
      </button>
    </motion.div>
  );
}

function TopAppBar({
  activeDay,
  onSelectDay,
}: {
  activeDay: number;
  onSelectDay: (day: number) => void;
}) {
  const days = [
    { id: 1, label: "Mon" },
    { id: 2, label: "Tue" },
    { id: 3, label: "Wed" },
    { id: 4, label: "Thu" },
    { id: 5, label: "Fri" },
  ];

  return (
    <div className="absolute top-0 left-0 w-full h-[56px] z-50 bg-background shadow-[0px_8px_40px_0px_rgba(0,0,0,0.1)]">
      {/* Content Layer */}
      <div className="relative h-full w-full flex items-end justify-between">
        {days.map((day) => {
          const isActive = activeDay === day.id;
          return (
            <div
              key={day.id}
              onClick={() => onSelectDay(day.id)}
              className="flex-1 flex flex-col items-center justify-end h-full cursor-pointer relative pb-0"
            >
              <span
                className={`body-sm-normal mb-[12px] ${
                  isActive ? "text-primary font-normal" : "text-foreground font-normal"
                }`}
              >
                {day.label}
              </span>
              {isActive ? (
                // Active underline with glow
                <div className="h-[2px] w-[80%] bg-primary shadow-glow" />
              ) : (
                // Inactive line
                <div className="h-[1px] w-full bg-gray-300" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MealTabs({
  activeMeal,
  onSelectMeal,
}: {
  activeMeal: string;
  onSelectMeal: (meal: 'breakfast' | 'lunch' | 'snacks' | 'bakery') => void;
}) {
  const meals: { id: 'breakfast' | 'lunch' | 'snacks' | 'bakery'; label: string }[] = [
    { id: "breakfast", label: "Breakfast" },
    { id: "lunch", label: "Lunch" },
    { id: "snacks", label: "Snacks" },
    { id: "bakery", label: "Bakery" },
  ];

  return (
    <div className="w-full flex justify-center pt-4 bg-background z-40">
      <div className="relative flex items-center p-[2px] rounded-full border border-border w-[90%] max-w-[358px]">
        {meals.map((meal) => {
          const isActive = activeMeal === meal.id;
          return (
            <div
              key={meal.id}
              onClick={() => onSelectMeal(meal.id)}
              className={`flex-1 h-[32px] flex items-center justify-center rounded-full cursor-pointer transition-colors ${
                isActive ? "bg-primary" : "bg-transparent"
              }`}
            >
              <p
                className={`label-sm-normal leading-none ${
                  isActive ? "text-primary-foreground" : "text-primary"
                }`}
              >
                {meal.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MealTimeBanner({ activeMeal }: { activeMeal: 'breakfast' | 'lunch' | 'snacks' | 'bakery' }) {
    const timeRanges = {
        breakfast: "08:00 AM - 10:00 AM",
        lunch: "12:00 PM - 02:30 PM",
        snacks: "04:00 PM - 06:00 PM",
        bakery: "10:00 AM - 06:00 PM"
    };

    return (
        <div className="w-full bg-[#f0f4ff] flex items-center justify-center py-[4px] mt-4">
            <p className="label-sm-normal text-black text-center overflow-x-auto whitespace-nowrap w-full px-2">
                {timeRanges[activeMeal]}
            </p>
        </div>
    );
}

// --- Cards & Lists ---

function ThumbnailCard({ 
  item, 
  onClick,
  showPrice = true,
  isSelected,
  isAdmin = false
}: { 
  item: CafeteriaItem; 
  onClick?: () => void;
  showPrice?: boolean;
  isSelected?: boolean;
  isAdmin?: boolean;
}) {
  return (
    <motion.div 
      onClick={onClick}
      className={`bg-card overflow-hidden flex flex-col transition-transform h-full rounded-[16px] ${onClick ? 'cursor-pointer active:scale-[0.98]' : ''} `}
    >
      {/* Image */}
      <div className="aspect-[1/1] w-full relative">
        {item.image_url ? (
          <img
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover rounded-[16px]"
            src={item.image_url}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100 rounded-[16px]">
            <Loader2 className="w-6 h-6 animate-spin" />
          </div>
        )}
      </div>
      
      {/* Content */}
      <div 
        className="p-2 flex flex-col items-center text-center w-full"
      >
        <div className="w-full flex justify-between items-center">
            <p className="label-md-heavy text-foreground line-clamp-1 text-left flex-1">
            {item.title}
            </p>
            {item.average_rating !== undefined && (
                <div className="flex items-center gap-1 shrink-0 ml-1">
                    <Star size={12} className="fill-primary stroke-primary" />
                    <span className="label-sm-normal text-muted-foreground">{item.average_rating !== undefined ? item.average_rating.toFixed(1) : "0.0"}</span>
                </div>
            )}
        </div>
        {showPrice ? (
          <p className="label-sm-normal text-muted-foreground w-full text-left">
            ₹ {(item.price ?? 0).toFixed(2)}
          </p>
        ) : (
          <div className="flex flex-col items-center w-full mt-1 gap-0.5">
            {item.description && item.description.split('\n').map((line, index) => (
              null
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function BakeryView({ items }: { items: CafeteriaItem[] }) {
    // Group by section
    const sections = useMemo(() => {
        const grouped = items.reduce((acc, item) => {
            const sec = item.section || 'Other';
            if (!acc[sec]) acc[sec] = [];
            acc[sec].push(item);
            return acc;
        }, {} as Record<string, CafeteriaItem[]>);

        return Object.keys(grouped).sort().map(sec => ({
            name: sec,
            items: grouped[sec].sort((a, b) => a.title.localeCompare(b.title))
        }));
    }, [items]);

    const [currentSlide, setCurrentSlide] = useState(0);

    if (sections.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center pt-20">
                <p className="body-sm-normal text-foreground">No bakery items available for this day</p>
            </div>
        );
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipe: true,
        beforeChange: (_: number, next: number) => setCurrentSlide(next),
        adaptiveHeight: true,
    };

    return (
        <div className="w-full pb-8">
            <Slider {...settings}>
                {sections.map((section) => (
                    <div key={section.name} className="px-4 focus:outline-none">
                        <h3 className="label-md-heavy text-foreground text-center mb-6 mt-2">
                            {section.name}
                        </h3>
                        <div className="flex flex-col gap-0 w-full">
                            {section.items.map((item) => (
                                <div key={item.id} className="flex items-start justify-between py-3 border-b border-dashed border-border last:border-b-0 w-full">
                                    <p className="body-sm-normal text-muted-foreground">
                                        {item.title}
                                    </p>
                                    <p className="body-sm-normal text-muted-foreground text-right ml-4">
                                        ₹{(item.price ?? 0).toFixed(0)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-[8px] z-10 pointer-events-none">
                {sections.map((_, i) => (
                    <div
                        key={i}
                        className={`rounded-full transition-all duration-300 ${
                            i === currentSlide
                                ? "w-[8px] h-[8px] bg-primary"
                                : "w-[6px] h-[6px] bg-muted"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

// --- Detail View Components (Slider) ---

function FoodTitle({
  title,
  price,
  rating,
  isAdmin = false
}: {
  title: string;
  price: number | null | undefined;
  rating?: number;
  isAdmin?: boolean;
}) {
  return (
    <div
      className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 w-full"
      data-name="Food title"
    >
      <p className="title-medium-heavy relative shrink-0 text-foreground">
        {title}
      </p>
      <div className="flex items-center gap-1">
          <Star size={16} className={`fill-muted-foreground stroke-muted-foreground ${rating ? "" : "text-transparent"}`} />
          <span className="title-medium-heavy text-muted-foreground">{rating !== undefined ? rating.toFixed(1) : "0.0"}</span>
      </div>
    </div>
  );
}

function FoodDescription({ item, onCommentsClick, isAdmin = false }: { item: CafeteriaItem; onCommentsClick: () => void; isAdmin?: boolean }) {
  const lines = item.description
    ? item.description.split("\n")
    : [];

  return (
    <div
      className="absolute bg-card bottom-0 content-stretch flex flex-col gap-[16px] h-[55%] lg:h-[474px] items-start left-0 not-italic p-[24px] rounded-tl-[24px] rounded-tr-[24px] text-foreground text-nowrap w-full z-10 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
      data-name="Food description"
    >
      <FoodTitle title={item.title} price={item.price} rating={item.average_rating} isAdmin={isAdmin} />
      
      <div className="w-full flex items-center justify-between">
         <p className="title-medium-heavy text-muted-foreground">
            ₹ {(item.price ?? 0).toFixed(2)}
         </p>
         <button onClick={onCommentsClick} className="text-primary label-md-normal hover:underline">
            Comments: {item.comments_count || 0}
         </button>
      </div>

      <div className="w-full overflow-y-auto">
        <div className="flex flex-col gap-[8px]">
          {lines.map((line, index) => (
             <p key={index} className="leading-[1.5] whitespace-normal text-foreground body-sm-normal">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function MenuCard({ item, onCommentsClick, isAdmin = false }: { item: CafeteriaItem; onCommentsClick: () => void; isAdmin?: boolean }) {
  return (
    <div 
        className="relative w-full h-full bg-[#d4d9b1] flex flex-col items-center overflow-hidden"
    >
      {/* Hero Image */}
      <div className="h-[50%] w-full relative shrink-0">
        <div className="absolute inset-0 overflow-hidden">
          {item.image_url ? (
            <img
              alt={item.title}
              className="absolute w-full h-full object-cover"
              src={item.image_url}
            />
          ) : (
            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}
        </div>
      </div>

      <div className="contents">
        <FoodDescription item={item} onCommentsClick={onCommentsClick} isAdmin={isAdmin} />
      </div>
    </div>
  );
}

export function TodaysMenuScreen({
  onClose,
  bypassUnderConstruction,
  isAdmin = false,
}: TodaysMenuScreenProps) {
  const [items, setItems] = useState<CafeteriaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showUnderConstruction, setShowUnderConstruction] = useState(!bypassUnderConstruction);

  // Sync prop changes if they happen dynamically
  useEffect(() => {
    setShowUnderConstruction(!bypassUnderConstruction);
  }, [bypassUnderConstruction]);
  
  // State for filtering
  const [activeDay, setActiveDay] = useState<number>(() => {
      const d = new Date().getDay();
      const mappedDay = d === 0 ? 7 : d;
      return (mappedDay >= 1 && mappedDay <= 5) ? mappedDay : 1;
  });

  // Context-aware meal selection based on time
  const [activeMeal, setActiveMeal] = useState<'breakfast' | 'lunch' | 'snacks' | 'bakery'>(() => {
      // Check session storage first (unless user already interacted in that session)
      if (typeof window !== 'undefined') {
          const stored = sessionStorage.getItem('selected_meal_tab');
          if (stored && ['breakfast', 'lunch', 'snacks', 'bakery'].includes(stored)) {
              return stored as 'breakfast' | 'lunch' | 'snacks' | 'bakery';
          }
      }

      const now = new Date();
      const minutes = now.getHours() * 60 + now.getMinutes();

      // Breakfast: 12:00 AM – 10:29 AM -> < 630 mins
      if (minutes < 630) return 'breakfast';
      
      // Lunch: 10:30 AM – 2:29 PM -> < 870 mins
      if (minutes < 870) return 'lunch';
      
      // Snacks: 2:30 PM – 5:59 PM -> < 1080 mins
      if (minutes < 1080) return 'snacks';
      
      // Bakery: 6:00 PM – 11:59 PM
      return 'bakery';
  });

  const handleMealSelect = (meal: 'breakfast' | 'lunch' | 'snacks' | 'bakery') => {
      setActiveMeal(meal);
      sessionStorage.setItem('selected_meal_tab', meal);
  };

  // State for Detail View (Slider)
  const [detailViewOpen, setDetailViewOpen] = useState(false);
  const [detailInitialSlide, setDetailInitialSlide] = useState(0);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  // Comments State
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [addCommentOpen, setAddCommentOpen] = useState(false);
  const [editingComment, setEditingComment] = useState<any>(null);
  const [commentsRefreshKey, setCommentsRefreshKey] = useState(0);

  const sliderRef = React.useRef<Slider>(null);

  // ... (useEffect for slick css)

  useEffect(() => {
    fetchItems();
  }, [activeDay]);

  const handleOpenComments = () => {
      setCommentsOpen(true);
  };
  
  const handleAddComment = () => {
      setEditingComment(null);
      setAddCommentOpen(true);
  };

  const handleEditComment = (comment: any) => {
      setEditingComment(comment);
      setAddCommentOpen(true);
  };

  const handleCommentSuccess = () => {
      setAddCommentOpen(false);
      setEditingComment(null);
      setCommentsRefreshKey(prev => prev + 1);
      // Refresh items to update rating/count
      fetchItems(); 
  };

  const fetchItems = async () => {
    setLoading(true);
    try {
      const todayStr = new Date().toLocaleDateString("en-CA");

      // 1. Get Global Items (with disabled_for_date check)
      // Removed is_active check as per new schema rules
      const { data: globalItems, error: itemsError } =
        await supabase
          .from("cafeteria_items")
          .select("id, title, price, description, image_url, display_order, meal_type, section, disabled_for_date")
          .order("display_order", { ascending: true });

      if (itemsError) throw itemsError;

      if (!globalItems || globalItems.length === 0) {
        setItems([]);
        setLoading(false);
        return;
      }

      // 2. Get Day Availability
      // Removed .eq("is_enabled", true) as per new schema rules
      const { data: dayItems, error: daysError } =
        await supabase
          .from("cafeteria_item_days")
          .select("item_id")
          .eq("day_of_week", activeDay);

      if (daysError) throw daysError;

      const allowedIds = new Set(
        dayItems?.map((d: any) => d.item_id) || [],
      );

      // Fetch ratings and counts via Server API (Bypassing RLS)
      console.log("Fetching batch ratings/comments for IDs:", Array.from(allowedIds));
      
      const ratingsMap = new Map();
      const commentsCountMap = new Map();

      if (allowedIds.size > 0) {
          try {
              const batchData = await api.getBatchRatings(Array.from(allowedIds));
              console.log("RAW BATCH RATINGS RESPONSE:", batchData);

              if (batchData.ratings) {
                  Object.entries(batchData.ratings).forEach(([id, rating]) => {
                      ratingsMap.set(id, rating);
                  });
              }
              if (batchData.commentCounts) {
                  Object.entries(batchData.commentCounts).forEach(([id, count]) => {
                      commentsCountMap.set(id, count);
                  });
              }
          } catch (err) {
              console.error("Error fetching batch ratings:", err);
          }
      }

      // 3. Filter Items
      // Rule: Show IF (exists in dayItems) AND (disabled_for_date != today)
      const filteredItems = globalItems.filter((item) => {
          // Must exist in day allocation
          if (!allowedIds.has(item.id)) return false;

          // Must NOT be disabled for today
          if (item.disabled_for_date === todayStr) return false;
          
          return true;
      }).map((item) => {
          let url = item.image_url;
          if (url && !url.startsWith("http") && !url.startsWith("data:")) {
              const { data } = supabase.storage.from("food_images").getPublicUrl(url);
              url = data.publicUrl;
          }
          
          // Explicit binding rule: rating -> avg_rating
          const avgRating = ratingsMap.has(item.id) ? ratingsMap.get(item.id) : 0;
          const commentsCount = commentsCountMap.get(item.id) || 0;
          
          if (item.id === '89f385bb-57d5-444f-90c5-23625eafcc58') {
              console.log("BINDING UI FOR TARGET:", { id: item.id, avgRating, commentsCount });
          }

          return { 
              ...item, 
              image_url: url,
              average_rating: avgRating, 
              comments_count: commentsCount
          };
      });
      
      setItems(filteredItems);
    } catch (err) {
      console.error("Error fetching menu:", err);
    } finally {
      setLoading(false);
    }
  };

  const displayedItems = useMemo(() => {
    if (!items) return [];
    return items.filter(item => {
        const type = item.meal_type?.toLowerCase().trim();
        return type === activeMeal;
    });
  }, [items, activeMeal]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    initialSlide: detailInitialSlide,
    accessibility: true,
    afterChange: (current: number) => {
        // Update selected item ID when slide changes so layoutId tracks correctly
        if (displayedItems[current]) {
            setSelectedItemId(displayedItems[current].id);
        }
    }
  };

  const handleItemClick = (index: number) => {
    setDetailInitialSlide(index);
    if (displayedItems[index]) {
        setSelectedItemId(displayedItems[index].id);
    }
    setDetailViewOpen(true);
  };
  
  const handleCloseDetail = () => {
    setDetailViewOpen(false);
    // Note: We keep selectedItemId set so that the exit animation knows where to go
  }

  // Under Construction Gate
  //if (showUnderConstruction) {
  //  return <UnderConstructionOverlay onProceed={() => setShowUnderConstruction(false)} />;
  //}

  let content;

  if (loading) {
    content = (
      <div className="h-full w-full bg-background flex items-center justify-center pt-[150px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  } else if (displayedItems.length === 0) {
     content = (
        <div className="flex-1 flex flex-col items-center justify-center gap-8 w-full pt-[100px] pb-20">
          <p className="text-foreground body-sm-normal text-center">
            No items available for {activeMeal} on this day
          </p>
          <div className="relative w-full max-w-[200px] px-8 opacity-50">
            <img
              src={imgNoLunch}
              alt="Empty plate"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
     );
  } else {
     if (activeMeal === 'bakery') {
         content = <BakeryView items={displayedItems} />;
     } else {
         content = (
            <div className="w-full flex-1 min-h-0 px-4 pb-20">
               <div className="grid grid-cols-2 gap-2">
                 {displayedItems.map((item, index) => (
                   <ThumbnailCard 
                     key={item.id} 
                     item={item} 
                     showPrice={activeMeal !== 'breakfast'}
                     onClick={() => handleItemClick(index)}
                     isSelected={selectedItemId === item.id}
                     isAdmin={isAdmin}
                   />
                 ))}
               </div>
            </div>
         );
     }
  }

  return (
    <div className="h-full w-full bg-background relative overflow-hidden">
      {/* Actual Content Container */}
      <div className="w-full h-full flex flex-col relative">
        {/* List View - Always Rendered */}
        <div className="absolute inset-0 flex flex-col w-full h-full bg-background">
            <TopAppBar 
                activeDay={activeDay}
                onSelectDay={setActiveDay}
            />
            
            {/* Tabs Area */}
            <div className="flex flex-col bg-background z-40 pt-14">
                <MealTabs activeMeal={activeMeal} onSelectMeal={handleMealSelect} />
                <MealTimeBanner activeMeal={activeMeal} />
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto bg-background">
                <div className="pt-4">
                    {content}
                </div>
            </div>
        </div>

        {/* Detail View (Overlay) */}
        <AnimatePresence onExitComplete={() => setSelectedItemId(null)}>
            {detailViewOpen && (
                 <motion.div 
                    className="absolute inset-0 z-50 bg-[#dbcffc] flex flex-col"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                 >
                     <div className="w-full flex-1 relative min-h-0">
                        <div className="absolute inset-0">
                            {displayedItems.length > 0 ? (
                                <Slider
                                    ref={sliderRef}
                                    key={`slider-${displayedItems.map(i => i.id).join('-')}`}
                                    {...settings}
                                    className="w-full h-full [&_.slick-track]:h-full [&_.slick-list]:h-full [&_.slick-slide]:h-full [&_.slick-slide>div]:h-full"
                                >
                                    {displayedItems.map((item) => (
                                        <MenuCard 
                                            key={item.id} 
                                            item={item} 
                                            onCommentsClick={handleOpenComments}
                                            isAdmin={isAdmin}
                                        />
                                    ))}
                                </Slider>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full w-full p-6 text-center">
                                    <img 
                                        src={imgNoLunch} 
                                        alt="No menu today" 
                                        className="w-[200px] h-auto mb-4 object-contain opacity-80" 
                                    />
                                    <p className="title-medium-heavy text-muted-foreground">
                                        No menu items available
                                    </p>
                                </div>
                            )}
                        </div>
                        {/* Close Button overlay */}
                        <CloseButton onClick={handleCloseDetail} />
                     </div>
                 </motion.div>
            )}
        </AnimatePresence>

        <AnimatePresence>
            {commentsOpen && selectedItemId && (
                <CommentsScreen 
                    itemId={selectedItemId}
                    onClose={() => setCommentsOpen(false)}
                    onAddComment={handleAddComment}
                    onEditComment={handleEditComment}
                    isAdmin={isAdmin}
                    refreshKey={commentsRefreshKey}
                />
            )}
        </AnimatePresence>

        <AnimatePresence>
            {addCommentOpen && selectedItemId && (
                <AddCommentScreen
                    itemId={selectedItemId}
                    existingComment={editingComment}
                    onClose={() => setAddCommentOpen(false)}
                    onSuccess={handleCommentSuccess}
                />
            )}
        </AnimatePresence>
      </div>

      <style>{`
            /* Essential Slick CSS */
            .slick-slider{position:relative;display:block;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}
            .slick-list{position:relative;display:block;overflow:hidden;margin:0;padding:0}
            .slick-list:focus{outline:0}
            .slick-list.dragging{cursor:pointer;cursor:hand}
            .slick-slider .slick-track,.slick-slider .slick-list{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}
            .slick-track{position:relative;top:0;left:0;display:block;margin-left:auto;margin-right:auto}
            .slick-track:before,.slick-track:after{display:table;content:''}
            .slick-track:after{clear:both}
            .slick-loading .slick-track{visibility:hidden}
            .slick-slide{display:none;float:left;height:100%;min-height:1px}
            [dir='rtl'] .slick-slide{float:right}
            .slick-slide img{display:block}
            .slick-slide.slick-loading img{display:none}
            .slick-slide.slick-dragging img{pointer-events:none}
            .slick-initialized .slick-slide{display:block}
            .slick-loading .slick-slide{visibility:hidden}
            .slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}
            .slick-arrow.slick-hidden{display:none}

            /* Custom overrides for full height */
            .slick-slider, .slick-list, .slick-track, .slick-slide, .slick-slide > div {
                height: 100%;
            }
        `}</style>
    </div>
  );
}
