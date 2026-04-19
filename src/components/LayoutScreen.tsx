import React, { useState, useRef, useEffect } from "react";
import { X, Loader2, Calendar as CalendarIcon } from "lucide-react";
import { supabase } from "../utils/supabaseClient";
import { OfficeMap } from "./OfficeMap";
import svgPaths from "../imports/svg-nhr51sy8dy";
import { format, startOfDay } from "date-fns";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "../lib/utils"; // Assuming this exists, if not I'll inline styles or use generic classes. Actually standard shadcn has it. If not sure, I can skip.
// Safest to avoid cn if not sure, but I'll use template literals.

interface LayoutScreenProps {
  onClose: () => void;
  isAdmin?: boolean;
  userId?: string;
}

interface SeatStatusData {
  status: "available" | "occupied";
  occupantName?: string;
  isMySeat?: boolean;
}

function Compass() {
  const [heading, setHeading] = useState(0);

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      let absoluteHeading = 0;

      // iOS devices
      if ((event as any).webkitCompassHeading) {
        absoluteHeading = (event as any).webkitCompassHeading;
      } 
      // Android / Standard devices
      else if (event.alpha !== null) {
         absoluteHeading = 360 - event.alpha;
      }
      
      setHeading(absoluteHeading);
    };

    if ('ondeviceorientationabsolute' in window) {
       window.addEventListener('deviceorientationabsolute', handleOrientation as any, true);
    } else if (window.DeviceOrientationEvent) {
       window.addEventListener("deviceorientation", handleOrientation, true);
    }

    return () => {
      if ('ondeviceorientationabsolute' in window) {
         window.removeEventListener('deviceorientationabsolute', handleOrientation as any, true);
      } else if (window.DeviceOrientationEvent) {
         window.removeEventListener("deviceorientation", handleOrientation, true);
      }
    };
  }, []);

  const renderAngle = (heading - 90 + 360) % 360;

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative w-[40px] h-[40px] rounded-full border border-primary-foreground/20 bg-primary-foreground/5 flex items-center justify-center">
        <div 
          className="w-full h-full flex items-center justify-center"
          style={{
            transform: `rotate(-${renderAngle}deg)`,
            transition: "transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L16 12H8L12 2Z" fill="var(--destructive)" />
            <path d="M12 22L8 12H16L12 22Z" fill="var(--secondary)" />
            <circle cx="12" cy="12" r="2" fill="var(--background)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function LayoutScreen({ onClose, isAdmin, userId }: LayoutScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Gesture State
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
  const pointers = useRef<Map<number, { x: number; y: number }>>(new Map());
  const lastCenter = useRef<{ x: number; y: number } | null>(null);
  const lastDist = useRef<number | null>(null);

  // Data State
  const [seatStatuses, setSeatStatuses] = useState<Record<string, SeatStatusData>>({});
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date>(startOfDay(new Date()));

  const TOTAL_SEATS = 31;

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleDateSelect = (d: Date | undefined) => {
    if (d) {
      setSelectedDate(startOfDay(d));
      setIsCalendarOpen(false);
    }
  };

  // Fetch Data
  useEffect(() => {
    fetchSeatStatus();
  }, [selectedDate]);

  const fetchSeatStatus = async () => {
    try {
      setLoading(true);
      
      const year = selectedDate.getFullYear();
      const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
      const day = String(selectedDate.getDate()).padStart(2, "0");
      const dateStr = `${year}-${month}-${day}`;

      // Fetch Confirmed Reservations for Selected Date
      const { data: reservations, error } = await supabase
        .from("reservations")
        .select("occupant_name, user_id, seats(seat_name)")
        .eq("date", dateStr)
        .eq("status", "confirmed");

      if (error) throw error;

      // Build Status Map
      const map: Record<string, SeatStatusData> = {};
      
      reservations?.forEach((res: any) => {
        const seatName = res.seats?.seat_name;
        if (seatName) {
           map[seatName] = {
             status: "occupied",
             occupantName: res.occupant_name,
             isMySeat: userId ? res.user_id === userId : false
           };
        }
      });

      setSeatStatuses(map);

    } catch (err) {
      console.error("Error fetching layout data:", err);
    } finally {
      setLoading(false);
    }
  };

  const occupiedCount = Object.keys(seatStatuses).length;
  const availableCount = Math.max(0, TOTAL_SEATS - occupiedCount);

  // Center Map on Mount
  useEffect(() => {
    // Map dimensions (approx based on OfficeMap min-w/h)
    const mapW = 800;
    const mapH = 600; 

    const viewportW = Math.min(window.innerWidth, 560);
    const viewportH = window.innerHeight;
    
    const calculatedScale = Math.min(1, (viewportW - 32) / mapW);
    
    const startX = (viewportW - mapW * calculatedScale) / 2;
    const startY = (viewportH - mapH * calculatedScale) / 2;

    setTransform({
      scale: calculatedScale < 0.4 ? 0.4 : calculatedScale, 
      x: startX,
      y: startY > 80 ? startY : 80 
    });
  }, []);

  // --- GESTURE HANDLERS ---

  const getCenter = (map: Map<number, { x: number; y: number }>) => {
     let x = 0, y = 0;
     map.forEach(p => { x += p.x; y += p.y; });
     return { x: x / map.size, y: y / map.size };
  };

  const getDist = (map: Map<number, { x: number; y: number }>) => {
     if (map.size < 2) return 0;
     const [p1, p2] = Array.from(map.values());
     return Math.hypot(p2.x - p1.x, p2.y - p1.y);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    lastCenter.current = getCenter(pointers.current);
    lastDist.current = getDist(pointers.current);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!pointers.current.has(e.pointerId)) return;
    e.preventDefault();
    
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    
    const currCenter = getCenter(pointers.current);
    const currDist = getDist(pointers.current);
    const prevCenter = lastCenter.current;
    const prevDist = lastDist.current;

    const rect = containerRef.current?.getBoundingClientRect();
    const offsetX = rect ? rect.left : 0;
    const offsetY = rect ? rect.top : 0;

    setTransform(prev => {
        let { x, y, scale } = prev;
        
        // Pan
        if (prevCenter) {
            x += currCenter.x - prevCenter.x;
            y += currCenter.y - prevCenter.y;
        }
        
        // Zoom
        if (pointers.current.size === 2 && prevDist && prevDist > 0) {
             const scaleFactor = currDist / prevDist;
             const newScale = Math.min(Math.max(0.3, scale * scaleFactor), 4);
             
             const zoomCenterX = currCenter.x - offsetX;
             const zoomCenterY = currCenter.y - offsetY;
             
             const worldX = (zoomCenterX - x) / scale;
             const worldY = (zoomCenterY - y) / scale;
             
             x = zoomCenterX - (worldX * newScale);
             y = zoomCenterY - (worldY * newScale);
             scale = newScale;
        }
        return { x, y, scale };
    });

    lastCenter.current = currCenter;
    lastDist.current = currDist;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    pointers.current.delete(e.pointerId);
    e.currentTarget.releasePointerCapture(e.pointerId);
    if (pointers.current.size > 0) {
       lastCenter.current = getCenter(pointers.current);
       lastDist.current = getDist(pointers.current);
    } else {
       lastCenter.current = null;
       lastDist.current = null;
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const sensitivity = 0.001;
    const delta = -e.deltaY * sensitivity;

    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setTransform(prev => {
        const { x, y, scale } = prev;
        const newScale = Math.min(Math.max(0.3, scale + delta * scale), 4);
        
        const worldX = (mouseX - x) / scale;
        const worldY = (mouseY - y) / scale;
        
        const newX = mouseX - (worldX * newScale);
        const newY = mouseY - (worldY * newScale);
        
        return { x: newX, y: newY, scale: newScale };
    });
  };

  const handleZoom = (direction: 'in' | 'out') => {
    setTransform(prev => {
        const factor = direction === 'in' ? 1.2 : 1/1.2;
        const newScale = Math.min(Math.max(0.3, prev.scale * factor), 4);
        
        const rect = containerRef.current?.getBoundingClientRect();
        const centerX = rect ? rect.width / 2 : Math.min(window.innerWidth, 560) / 2;
        const centerY = rect ? rect.height / 2 : window.innerHeight / 2;
        
        const worldX = (centerX - prev.x) / prev.scale;
        const worldY = (centerY - prev.y) / prev.scale;
        
        const newX = centerX - (worldX * newScale);
        const newY = centerY - (worldY * newScale);
        return { x: newX, y: newY, scale: newScale };
    });
  };

  return (
    <div className="absolute inset-0 z-50 bg-[#F4F4F5] flex flex-col overflow-hidden font-['Poppins',sans-serif] w-full h-full">
      {/* HEADER */}
      <div className="absolute top-0 left-0 right-0 z-50 pointer-events-none flex flex-col items-center">
        <div className="bg-white h-[72px] opacity-90 relative shrink-0 w-full pointer-events-auto" data-name="Top app bar">
            <div aria-hidden="true" className="absolute border-[#ddd] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
                <div 
                className="relative shrink-0 size-[40px] cursor-pointer" 
                data-name="Back"
                onClick={onClose}
                >
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                    <g id="Back">
                    <path d={svgPaths.p2eeae600} fill="#1B1B23" id="Union" />
                    </g>
                </svg>
                </div>
                <p className="font-['Poppins',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-center text-nowrap">Layout</p>
                <div className="shrink-0 size-[40px]" data-name="empty" />
            </div>
            </div>
        </div>

        {/* Info Card Strip */}
        <div className="bg-secondary-foreground w-full px-6 py-4 flex items-center justify-between shadow-md pointer-events-auto">
          
          <div className="flex items-center gap-6">
            {/* 1. Occupancy */}
            <div className="flex flex-col items-center text-primary-foreground">
               <div className="flex flex-col items-center gap-1">
                 
                 <div className="flex items-center gap-1">
                 <span className="label-sm-heavy">{occupiedCount}</span>
                 <span className="label-sm-normal opacity-70">/ {TOTAL_SEATS}</span>
                 </div>

<span className="label-sm-normal opacity-80">Occupancy:</span>
                 
               </div>
               
            </div>

           
            
             {/* Divider */}
            <div className="w-px h-8 bg-primary-foreground/20" />

            {/* 3. Date Pill (Interactive) */}
            <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
              <PopoverTrigger asChild>
                <button className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full border border-primary-foreground/20 flex items-center gap-2 transition-colors">
                   <CalendarIcon className="w-4 h-4" />
                   <span className="label-md-normal">
                     {format(selectedDate, "d MMM")}
                   </span>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-[calc(100vw-32px)] sm:w-[350px] p-0 bg-white" align="center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  initialFocus
                  weekStartsOn={1}
                  className="w-full border-none shadow-none p-3"
                  classNames={{
                    months: "w-full flex flex-col",
                    month: "w-full flex flex-col gap-4",
                    table: "w-full border-collapse",
                    head_row: "grid grid-cols-7 w-full mb-2",
                    head_cell: "text-muted-foreground rounded-md w-full font-normal text-[0.8rem] h-9 flex items-center justify-center",
                    row: "grid grid-cols-7 w-full mt-2",
                    cell: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 h-10 flex items-center justify-center",
                    day: "h-10 w-10 p-0 font-normal aria-selected:opacity-100 hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-colors",
                    day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground shadow-[var(--shadow-glow)]",
                    day_today: "bg-accent/50 text-accent-foreground font-semibold",
                    day_outside: "text-muted-foreground opacity-30",
                    day_disabled: "text-muted-foreground opacity-30",
                    day_hidden: "invisible",
                    caption: "flex justify-center pt-1 relative items-center w-full mb-2",
                    caption_label: "text-sm font-medium"
                  }}
                />
              </PopoverContent>
            </Popover>

          </div>

          {/* 4. Compass */}
          <div className="flex flex-col items-center min-w-[80px]">
             {/* Note: Compass component needs to be light/dark aware? 
                 The snippet showed Compass inside the dark strip with E text.
                 I'll reuse the E text logic from snippet. */}
            <div className="text-primary-foreground label-md-normal mb-1">E</div>
            <Compass />
          </div>
        </div>
      </div>

      {/* CANVAS */}
      <div 
        ref={containerRef}
        className="flex-1 w-full h-full relative overflow-hidden bg-[#F4F4F5] touch-none cursor-move"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel={handleWheel}
      >
        <div 
          style={{
            transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
            transformOrigin: "0 0",
            transition: pointers.current.size > 0 ? "none" : "transform 0.1s linear",
            willChange: "transform",
          }}
          className="absolute top-0 left-0"
        >
          {loading ? (
             <div className="w-[800px] h-[600px] flex items-center justify-center">
               <Loader2 className="w-8 h-8 animate-spin text-primary" />
             </div>
          ) : (
             <OfficeMap 
               seatStatuses={seatStatuses} 
               isAdmin={isAdmin} 
             />
          )}
        </div>
      </div>

      {/* ZOOM CONTROLS */}
      <div className="absolute bottom-8 right-4 flex flex-col gap-2 pointer-events-auto">
        <button 
          onClick={() => handleZoom('in')}
          className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 active:scale-95"
        >
          <span className="text-xl">+</span>
        </button>
        <button 
          onClick={() => handleZoom('out')}
          className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 active:scale-95"
        >
          <span className="text-xl">-</span>
        </button>
      </div>
    </div>
  );
}
