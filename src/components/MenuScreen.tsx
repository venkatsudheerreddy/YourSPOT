import React, { useState, useEffect, useMemo } from "react";
import { Search, Plus } from "lucide-react";
import { supabase } from "../utils/supabaseClient";
import svgPaths from "../imports/svg-eftv0tdd2a";

// --- Types ---
interface MenuScreenProps {
  onBack: () => void;
}

interface CafeteriaItem {
  id: string;
  title: string;
  price: number;
  description: string;
  image_url: string;
  display_order: number;
  meal_type: string;
}

type MealTab = "all" | "breakfast" | "lunch" | "snacks" | "bakery";

// --- Components ---

function AddIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Add">
          <path d="M3.75 12H20.25M12 20.25V3.75" id="Vector" stroke="white" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Fab({ onClick }: { onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="absolute bg-primary bottom-[24px] right-[24px] flex items-center justify-center p-[8px] rounded-[100px] shadow-glow size-[56px] z-50 cursor-pointer active:scale-95 transition-transform" 
      data-name="FAB"
    >
      <AddIcon />
    </div>
  );
}

function OverflowMenuVertical() {
  return (
    <div className="relative shrink-0 size-[24px] cursor-pointer" data-name="Overflow Menu Vertical">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Overflow Menu Vertical">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.pd97f480} fill="var(--muted-foreground)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2213b200} fill="var(--muted-foreground)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p33691280} fill="var(--muted-foreground)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MenuItemCard({ item }: { item: CafeteriaItem }) {
  return (
    <div className="bg-card h-[48px] relative rounded-[16px] shrink-0 w-full mb-2 cursor-pointer active:bg-muted transition-colors border border-border">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <p className="body-sm-normal relative shrink-0 text-muted-foreground text-nowrap truncate max-w-[200px]">
            {item.title}
          </p>
          <OverflowMenuVertical />
        </div>
      </div>
    </div>
  );
}

function Tab({ 
  label, 
  isActive, 
  onClick 
}: { 
  label: string; 
  isActive: boolean; 
  onClick: () => void; 
}) {
  return (
    <div 
      onClick={onClick}
      className={`basis-0 content-stretch flex grow h-[36px] items-center justify-center min-h-px min-w-px px-0 py-[8px] relative rounded-[999px] shrink-0 cursor-pointer transition-colors ${
        isActive ? "bg-primary" : "bg-transparent"
      }`}
    >
      <p 
        className={`label-sm-normal text-center text-nowrap capitalize ${
          isActive ? "text-primary-foreground" : "text-primary"
        }`}
      >
        {label}
      </p>
    </div>
  );
}

// --- Main Component ---

export function MenuScreen({ onBack }: MenuScreenProps) {
  // State
  const [activeTab, setActiveTab] = useState<MealTab>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [items, setItems] = useState<CafeteriaItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Debounce search
  const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchQuery), 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fetch Data
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("cafeteria_items")
        .select("*")
        .order("title");
      
      if (error) throw error;
      setItems(data || []);
    } catch (err) {
      console.error("Error fetching items:", err);
    } finally {
      setLoading(false);
    }
  };

  // Filter Logic
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      // 1. Tab Filter
      if (activeTab !== "all") {
        // Case-insensitive check. Some items might be "Breakfast" or "breakfast"
        const type = item.meal_type?.toLowerCase().trim();
        if (type !== activeTab) return false;
      }

      // 2. Search Filter
      if (debouncedSearch) {
        const q = debouncedSearch.toLowerCase();
        const title = item.title?.toLowerCase() || "";
        if (!title.includes(q)) return false;
      }

      return true;
    });
  }, [items, activeTab, debouncedSearch]);

  const handleAddItem = () => {
    // Logic to add item (e.g. open modal)
    // For now, just a placeholder as per instructions "New item appears immediately in the correct tab" 
    // implying we might need an AddItem form. 
    // Since prompt didn't ask for the Add Item Form itself, I'll alert for now.
    alert(`Add new item to ${activeTab === 'all' ? 'Menu' : activeTab}`);
  };

  return (
    <div className="bg-background flex flex-col h-full relative w-full overflow-hidden">
      
      {/* Header */}
      <div className="bg-background relative shrink-0 w-full z-10 shadow-sm">
        <div className="flex flex-col w-full">
           {/* Top Bar with Title and Back */}
           <div className="h-[56px] flex items-center justify-between px-4 relative">
              <div 
                onClick={onBack}
                className="w-10 h-10 flex items-center justify-center -ml-2 cursor-pointer"
              >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground">
                      <path d="M15 18L9 12L15 6" />
                  </svg>
              </div>
              <p className="title-small-heavy text-foreground">Menu</p>
              <div className="w-10" /> {/* Spacer */}
           </div>

           {/* Search Bar */}
           <div className="px-4 pb-4">
              <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search items..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-10 pl-10 pr-4 bg-muted border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all placeholder:text-muted-foreground text-foreground"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </button>
                  )}
              </div>
           </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 pb-2 pt-2 bg-background shrink-0">
        <div className="h-[40px] relative rounded-[999px] w-full border border-border flex items-center p-[2px] gap-[2px]">
          {(["all", "breakfast", "lunch", "snacks", "bakery"] as const).map((tab) => (
            <Tab 
              key={tab} 
              label={tab} 
              isActive={activeTab === tab} 
              onClick={() => setActiveTab(tab)} 
            />
          ))}
        </div>
      </div>

      {/* List Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4 relative bg-background">
        {loading ? (
            <div className="flex justify-center pt-20">
                <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
        ) : filteredItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center pt-20 text-muted-foreground">
                <p>No items available</p>
            </div>
        ) : (
            <div className="flex flex-col gap-[8px] pb-20">
                {filteredItems.map(item => (
                    <MenuItemCard key={item.id} item={item} />
                ))}
            </div>
        )}
      </div>

      {/* FAB */}
      <Fab onClick={handleAddItem} />
    </div>
  );
}
