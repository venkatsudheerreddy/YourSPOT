import React, { useState, useEffect } from "react";
import { Loader2, ChevronLeft, X } from "lucide-react";
import { supabase } from "../utils/supabaseClient";
import { projectId } from "../utils/supabase/info"; // Added for server URL construction
import { Button } from "./Button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./ui/context-menu";
import svgPaths from "../imports/svg-0s0kgg9ufb";
import headerSvgPaths from "../imports/svg-nhr51sy8dy";

interface SeatSelectionScreenProps {
  selectedDate: string; // "May 24, 2025"
  selectedTime?: string; // "9:00 AM - 6:00 PM"
  onBack: () => void;
  onBookSeat: (
    seat: string,
    zone: string,
    seatId: string,
  ) => void;
  onClose: () => void;
  userId?: string;
  onViewBooking?: (booking: {
    seatId: string;
    seat: string;
    zone: string;
    date: string;
    time: string;
  }) => void;
  isAdmin?: boolean;
}

// ------------------------------------------------------------------
// SUB-COMPONENTS
// ------------------------------------------------------------------

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
      // alpha is the device's rotation around the Z axis.
      // 0 is North. Positive values are counter-clockwise rotation.
      // We want clockwise (CW) heading from North.
      else if (event.alpha !== null) {
         absoluteHeading = 360 - event.alpha;
      }
      
      setHeading(absoluteHeading);
    };

    // Try to use absolute orientation event for Android Chrome
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

  // Apply East-up offset correctly:
  // East-up means: East = 0°, North = -90°, West = -180°, South = -270°
  // renderAngle = (absoluteHeading - 90 + 360) % 360
  const renderAngle = (heading - 90 + 360) % 360;

  return (
    <div className="flex flex-col items-center gap-1">
      
      <div className="relative w-[40px] h-[40px] rounded-full border border-primary-foreground/20 bg-primary-foreground/5 flex items-center justify-center">
        {/* Compass Dial Container - Rotates based on heading */}
        {/* We apply negative rotation because as the device turns Right (CW), the dial must turn Left (CCW) to remain fixed */}
        <div 
          className="w-full h-full flex items-center justify-center"
          style={{
            transform: `rotate(-${renderAngle}deg)`,
            transition: "transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          {/* Compass Needle (SVG) - Fixed relative to the dial */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            {/* North Tip (Red) */}
            <path d="M12 2L16 12H8L12 2Z" fill="var(--destructive)" />
            {/* South Tip (White/Grey) */}
            <path d="M12 22L8 12H16L12 22Z" fill="var(--secondary)" />
            {/* Center Dot */}
            <circle cx="12" cy="12" r="2" fill="var(--background)" />
          </svg>
        </div>
        
      </div>
    </div>
  );
}

function DismissIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg
        className="block"
        fill="none"
        viewBox="0 0 16 16"
      >
        <path
          clipRule="evenodd"
          fillRule="evenodd"
          d="M18 7.04993L16.95 5.99993L12 10.9499L7.05 5.99993L6 7.04993L10.95 11.9999L6 16.9499L7.05 17.9999L12 13.0499L16.95 17.9999L18 16.9499L13.05 11.9999L18 7.04993Z"
          fill="var(--foreground)"
        />
      </svg>
    </div>
  );
}

// ------------------------------------------------------------------
// SEAT COMPONENTS (Strict "No Rotation" Implementation)
// ------------------------------------------------------------------

function ChairLeft({ fill, stroke }: { fill: string; stroke: string }) {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Chair">
      <div className="absolute inset-[-1.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
          <g id="Chair">
            <path d={svgPaths.p2afc9b80} fill={fill} id="Rectangle 3" stroke={stroke} />
            <line id="Line 1" stroke={stroke} x1="25" x2="25" y1="0.5" y2="32.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ChairRight({ fill, stroke }: { fill: string; stroke: string }) {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Chair">
      {/* Internal scale is part of the icon definition, not a seat rotation */}
      <div className="absolute inset-[-1.56%]" style={{ transform: "scaleY(-1)" }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
          <g id="Chair">
            <path d={svgPaths.p23cbdd00} fill={fill} id="Rectangle 3" stroke={stroke} />
            <line id="Line 1" stroke={stroke} x1="9" x2="9" y1="0.5" y2="32.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ChairDown({ fill, stroke }: { fill: string; stroke: string }) {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Chair">
      <div className="absolute inset-[-1.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
          <g id="Chair">
            <path d={svgPaths.p38d125c0} fill={fill} id="Rectangle 3" stroke={stroke} />
            <line id="Line 1" stroke={stroke} x1="0.5" x2="32.5" y1="8" y2="8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

interface SeatProps {
    label: string;
    status: "available" | "booked" | "selected" | "blocked";
    onClick?: () => void;
    occupantName?: string;
    isBlocked?: boolean;
    isAdmin?: boolean;
    isMySeat?: boolean;
}

function getSeatStyles(status: string, isBlocked: boolean, isAdmin: boolean, isMySeat?: boolean) {
    const isSelected = status === "selected";
    const isBooked = status === "booked";
    const isBlockedStatus = status === "blocked";

    let deskClass = "";
    let fill = "";

    if (isSelected) {
        deskClass = "bg-primary border-transparent shadow-[var(--shadow-glow)]";
        fill = "var(--primary)";
    } else if (isMySeat) {
        deskClass = "bg-[#ff8c44] border-transparent";
        fill = "#ff8c44";
    } else if (isBooked) {
        deskClass = "bg-secondary border-transparent";
        fill = "var(--secondary)";
    } else if (isBlockedStatus) {
        deskClass = "bg-secondary-foreground border-transparent";
        fill = "var(--secondary)";
    } else {
        deskClass = "bg-background border-secondary-foreground";
        fill = "var(--background)";
    }

    const stroke = isSelected || isBooked || isBlockedStatus || isMySeat ? "none" : "var(--secondary-foreground)";
    
    return { deskClass, fill, stroke, isInteractive: !isBooked && !isBlockedStatus };
}

function SeatLeft({ label, status, onClick, occupantName, isBlocked, isAdmin, isMySeat }: SeatProps) {
    const { deskClass, fill, stroke, isInteractive } = getSeatStyles(status, isBlocked, isAdmin, isMySeat);

    return (
        <div 
            onClick={isInteractive ? onClick : undefined}
            className={`content-stretch flex gap-[6px] items-center relative shrink-0 w-full ${isInteractive ? "cursor-pointer" : "cursor-not-allowed"}`} 
            data-name="Seat Left"
        >
            <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
                <p className="font-['Poppins',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-foreground text-[14px] text-center text-nowrap">{label}</p>
            </div>
            <div className={`h-[64px] w-[32px] relative rounded-[4px] shrink-0 border border-solid flex items-center justify-center overflow-hidden ${deskClass}`} data-name="Desk">
                 {status === "booked" && occupantName && (isAdmin || isMySeat) && (
                    <span className={`text-[10px] -rotate-90 whitespace-nowrap ${isMySeat ? "text-white" : "text-foreground"}`}>{occupantName.slice(0, 8)}</span>
                 )}
            </div>
            <ChairLeft fill={fill} stroke={stroke} />
        </div>
    );
}

function SeatRight({ label, status, onClick, occupantName, isBlocked, isAdmin, isMySeat }: SeatProps) {
    const { deskClass, fill, stroke, isInteractive } = getSeatStyles(status, isBlocked, isAdmin, isMySeat);

    return (
        <div 
            onClick={isInteractive ? onClick : undefined}
            className={`content-stretch flex gap-[6px] items-center justify-end relative shrink-0 w-full ${isInteractive ? "cursor-pointer" : "cursor-not-allowed"}`} 
            data-name="Seat Right"
        >
            <div className="flex items-center justify-center relative shrink-0">
               <ChairRight fill={fill} stroke={stroke} />
            </div>
            <div className={`h-[64px] w-[32px] relative rounded-[4px] shrink-0 border border-solid flex items-center justify-center overflow-hidden ${deskClass}`} data-name="Desk">
                 {status === "booked" && occupantName && (isAdmin || isMySeat) && (
                    <span className={`text-[10px] rotate-90 whitespace-nowrap ${isMySeat ? "text-white" : "text-foreground"}`}>{occupantName.slice(0, 8)}</span>
                 )}
            </div>
             <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
                <p className="font-['Poppins',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-foreground text-[14px] text-center text-nowrap">{label}</p>
                {label === "96" && (
                  <p className="font-['Poppins',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#464a53] text-[12px] text-center text-nowrap">4K</p>
                )}
            </div>
        </div>
    );
}

function SeatDown({ label, status, onClick, occupantName, isBlocked, isAdmin, isMySeat }: SeatProps) {
    const { deskClass, fill, stroke, isInteractive } = getSeatStyles(status, isBlocked, isAdmin, isMySeat);

    return (
        <div 
            onClick={isInteractive ? onClick : undefined}
            className={`content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 ${isInteractive ? "cursor-pointer" : "cursor-not-allowed"}`} 
            data-name="Seat Down"
        >
            <ChairDown fill={fill} stroke={stroke} />
            <div className={`h-[32px] w-[64px] relative rounded-[4px] shrink-0 border border-solid flex items-center justify-center overflow-hidden ${deskClass}`} data-name="Desk">
                 {status === "booked" && occupantName && (isAdmin || isMySeat) && (
                    <span className={`text-[10px] whitespace-nowrap ${isMySeat ? "text-white" : "text-foreground"}`}>{occupantName.slice(0, 8)}</span>
                 )}
            </div>
             <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Seat number">
                <p className="font-['Poppins',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-foreground text-[14px] text-center w-full">{label}</p>
            </div>
        </div>
    );
}

function SeatItem({
  label,
  status,
  orientation,
  onClick,
  type = "standard",
  occupantName,
  isBlocked,
  isAdmin,
  onToggleBlock,
  isMySeat,
}: {
  label: string;
  status: "available" | "booked" | "selected" | "blocked";
  orientation: "left" | "right" | "bottom";
  onClick?: () => void;
  type?: "standard" | "vertical-down";
  occupantName?: string;
  isBlocked?: boolean;
  isAdmin?: boolean;
  onToggleBlock?: () => void;
  isMySeat?: boolean;
}) {
  let Content;
  
  if (orientation === "left") {
      Content = <SeatLeft label={label} status={status} onClick={onClick} occupantName={occupantName} isBlocked={isBlocked} isAdmin={isAdmin} isMySeat={isMySeat} />;
  } else if (orientation === "right") {
      Content = <SeatRight label={label} status={status} onClick={onClick} occupantName={occupantName} isBlocked={isBlocked} isAdmin={isAdmin} isMySeat={isMySeat} />;
  } else {
      // Map "bottom" to SeatDown
      Content = <SeatDown label={label} status={status} onClick={onClick} occupantName={occupantName} isBlocked={isBlocked} isAdmin={isAdmin} isMySeat={isMySeat} />;
  }

  if (isAdmin && onToggleBlock) {
    return (
      <ContextMenu>
        <ContextMenuTrigger>
          {Content}
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem onClick={onToggleBlock}>
            {isBlocked ? "Unblock Seat" : "Block Seat"}
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    );
  }

  return Content;
}

// ------------------------------------------------------------------
// MAIN COMPONENT
// ------------------------------------------------------------------

const ZONES = ["Zone A", "Zone B", "Zone C", "Zone D"];

interface Seat {
  id: string;
  seat_name: string;
  status: "available" | "booked";
  zone: string;
  occupantName?: string;
  occupantId?: string;
  is_blocked?: boolean;
}

export function SeatSelectionScreen({
  selectedDate,
  selectedTime = "9:00 AM - 6:00 PM",
  onBack,
  onBookSeat,
  onClose,
  userId,
  onViewBooking,
  isAdmin,
}: SeatSelectionScreenProps) {
  const [activeZone, setActiveZone] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("last_selected_zone") || "Zone A";
    }
    return "Zone A";
  });
  const [selectedSeatId, setSelectedSeatId] = useState<
    string | null
  >(null);
  const [seatsMap, setSeatsMap] = useState<
    Record<string, Seat>
  >({});
  const [loading, setLoading] = useState(false);
  const [bookingInProgress, setBookingInProgress] =
    useState(false);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe || isRightSwipe) {
        const currentIndex = ZONES.indexOf(activeZone);
        if (isLeftSwipe && currentIndex < ZONES.length - 1) {
            setActiveZone(ZONES[currentIndex + 1]);
        } else if (isRightSwipe && currentIndex > 0) {
            setActiveZone(ZONES[currentIndex - 1]);
        }
    }
  };

  // Date Parsing
  const dateObj = new Date(selectedDate);
  const isValidDate = !isNaN(dateObj.getTime());
  const day = isValidDate ? dateObj.getDate() : "--";
  const month = isValidDate ? dateObj.toLocaleString("default", {
    month: "long",
  }) : "--";
  const year = isValidDate ? dateObj.getFullYear() : "--";

  useEffect(() => {
    fetchSeats();

    // Subscribe to changes in RESERVATIONS, not seats status
    const channel = supabase
      .channel("reservations_realtime")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "reservations" },
        () => {
          fetchSeats();
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [activeZone, selectedDate, selectedTime]);

  const fetchSeats = async () => {
    try {
      setLoading(true);

      // Validate Date
      if (!selectedDate) {
        // If no date selected (e.g. page refresh), just stop
        setLoading(false);
        return;
      }
      
      const d = new Date(selectedDate);
      if (isNaN(d.getTime())) {
        console.error("Invalid date provided:", selectedDate);
        setLoading(false);
        return;
      }

      // 1. Fetch ALL seats for the active zone
      // We ignore the 'status' column in the seats table as per requirements
      const { data: seatsData, error: seatsError } =
        await supabase
          .from("seats")
          .select("id, seat_name, zone, is_blocked")
          .eq("zone", activeZone);

      if (seatsError) throw seatsError;

      // 2. Fetch Reservations for the specific date and time
      // Parse Date
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const dayStr = String(d.getDate()).padStart(2, "0");
      const isoDate = `${year}-${month}-${dayStr}`;

      // Fetch ALL confirmed reservations for this date to check conflicts
      const { data: reservations, error: resError } =
        await supabase
          .from("reservations")
          .select("seat_id, occupant_name, user_id, start_time, end_time, status")
          .eq("date", isoDate)
          .in("status", ["pending", "confirmed"]); // Treat pending AND confirmed as occupied

      if (resError) throw resError;

      // Helper to normalize time strings (remove leading zeros)
      // e.g. "09:00 AM" -> "9:00 AM", "01:00 PM" -> "1:00 PM"
      const normalizeTime = (t: string) => t.replace(/^0/, "");

      // Create a Map of booked seat IDs to occupant details
      const bookedSeats = new Map<string, { name: string; userId: string }>();
      
      reservations?.forEach((r) => {
        const rStart = normalizeTime(r.start_time);
        const rEnd = normalizeTime(r.end_time);
        
        // Determine existing reservation type
        const isResFull = rStart === "9:00 AM" && rEnd === "6:00 PM";
        const isResMorning = rStart === "9:00 AM" && rEnd === "1:00 PM";
        const isResAfternoon = rStart === "1:00 PM" && rEnd === "6:00 PM";
        
        // Also handle legacy/custom times if any (treat as conflict if they overlap)
        // For strictness, we assume these exact slots.

        let isConflict = false;

        // Normalize selected time (props)
        const [selStartRaw, selEndRaw] = selectedTime.split(" - ");
        const selStart = normalizeTime(selStartRaw || "9:00 AM");
        const selEnd = normalizeTime(selEndRaw || "6:00 PM");

        // Determine Requested Slot Type
        const isReqFull = selStart === "9:00 AM" && selEnd === "6:00 PM";
        const isReqMorning = selStart === "9:00 AM" && selEnd === "1:00 PM";
        const isReqAfternoon = selStart === "1:00 PM" && selEnd === "6:00 PM";

        if (isReqFull) {
            // Full Day Request: Blocked by ANY existing reservation
            isConflict = true;
        } else if (isReqMorning) {
            // Morning Request: Blocked by Full Day OR Morning
            if (isResFull || isResMorning) isConflict = true;
        } else if (isReqAfternoon) {
            // Afternoon Request: Blocked by Full Day OR Afternoon
            if (isResFull || isResAfternoon) isConflict = true;
        } else {
             // Custom/Unknown Request: Assume conflict if any overlap (fallback)
             isConflict = true;
        }

        if (isConflict) {
          // Use stored occupant_name or fallback
          const name = r.occupant_name || "Occupied";
          bookedSeats.set(r.seat_id, { name, userId: r.user_id });
        }
      });

      // 3. Merge Data: Determine status dynamically
      const map: Record<string, Seat> = {};
      seatsData?.forEach((s) => {
        const booking = bookedSeats.get(s.id);
        
        let status: "available" | "booked" = "available";
        
        if (s.is_blocked) {
           // If blocked, handling depends on role
           // If admin, we treat it as bookable unless it has a reservation.
           // If user, we treat it as blocked (status doesn't support 'blocked' in generic Type, so we handle it in SeatItem render)
           // But here we map DB status to component props.
        }

        if (booking) {
            status = "booked";
        }
        
        map[s.seat_name] = {
          id: s.id,
          seat_name: s.seat_name,
          zone: s.zone,
          status: status,
          occupantName: booking?.name,
          occupantId: booking?.userId,
          is_blocked: s.is_blocked,
        };
      });

      setSeatsMap(map);

      // Deselect if the selected seat became booked
      if (selectedSeatId) {
        if (bookedSeats.has(selectedSeatId)) {
          setSelectedSeatId(null);
        }
      }
    } catch (err) {
      console.error("Error fetching seats:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleBlock = async (seat: Seat) => {
    if (!isAdmin) return;
    
    const newBlockedState = !seat.is_blocked;
    
    // Update Supabase
    const { error } = await supabase
        .from("seats")
        .update({ is_blocked: newBlockedState })
        .eq("id", seat.id);

    if (error) {
        console.error("Error updating block status:", error);
        alert("Failed to update seat status.");
        return;
    }
    
    // Refresh
    fetchSeats();
  };

  const handleSeatClick = (seat: Seat) => {
    // If blocked and NOT admin, do nothing (handled by UI disable, but safety check here)
    if (seat.is_blocked && !isAdmin) return;

    if (seat.status === "booked") {
      // If booked, view booking
      // For Admin, can they book over a booked seat? 
      // Prompt says "Can book multiple times on same date", "Can book multiple seats". 
      // But doesn't explicitly say "Can override existing booking". 
      // Usually "booked" means occupied.
      // But maybe Admin wants to view who booked it? 
      // Let's keep existing "View Booking" behavior for booked seats.
      
      if (onViewBooking) {
        onViewBooking({
          seatId: seat.id,
          seat: seat.seat_name,
          zone: seat.zone,
          date: selectedDate,
          time: selectedTime,
        });
      }
      return;
    }
    
    setSelectedSeatId((prev) =>
      prev === seat.id ? null : seat.id,
    );
  };

  const handleDone = async () => {
    if (!selectedSeatId || bookingInProgress) return;
    
    const selectedSeat = Object.values(seatsMap).find(s => s.id === selectedSeatId);
    if (!selectedSeat) return;
    
    const seatName = selectedSeat.seat_name;

    setBookingInProgress(true);

    try {
      // Check Admin overrides
      // If Admin, skip "one seat per day" check?
      // "Non-admin ... Can book only one seat per day"
      
      const d = new Date(selectedDate);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const dayStr = String(d.getDate()).padStart(2, "0");
      const isoDate = `${year}-${month}-${dayStr}`;
      const [startTime, endTime] = selectedTime.split(" - ");
      const normalizeTime = (t: string) => t.replace(/^0/, "");
      
      const finalStartTime = normalizeTime(startTime || "9:00 AM");
      const finalEndTime = normalizeTime(endTime || "6:00 PM");

      // Validate Time-Based Rules (Today only)
      // Admins might bypass this too? Prompt doesn't specify. Assuming rules apply to everyone unless specified.
      // But "Non-admin ... Can book only one seat per day". Admin can book multiple.
      
      const now = new Date();
      const bookingDate = new Date(selectedDate);
      const isToday = bookingDate.toDateString() === now.toDateString();
      const currentHour = now.getHours();

      if (isToday) {
         if (currentHour >= 16) { 
             alert("Bookings for today are closed after 4:00 PM.");
             setBookingInProgress(false);
             return;
         }
         
         const isFullDay = finalStartTime === "9:00 AM" && finalEndTime === "6:00 PM";
         const isMorning = finalStartTime === "9:00 AM" && finalEndTime === "1:00 PM";
         
         if (currentHour >= 12 && (isFullDay || isMorning)) {
             alert("Morning and Full Day slots cannot be booked after 12:00 PM.");
             setBookingInProgress(false);
             return;
         }
      }

      // 1. Check for double booking (Conflict check)
      // Even admins shouldn't double book the SAME seat at the SAME time, right?
      // "No duplicate bookings" is a success criteria.
      const { data: existingBookings } = await supabase
        .from("reservations")
        .select("start_time, end_time")
        .eq("seat_id", selectedSeatId)
        .eq("date", isoDate)
        .in("status", ["pending", "confirmed"]); // Conflict with both pending and confirmed

      // Check for conflicts
      const hasConflict = existingBookings?.some((booking) => {
          const bStart = normalizeTime(booking.start_time);
          const bEnd = normalizeTime(booking.end_time);
          
          const isBookedFull = bStart === "9:00 AM" && bEnd === "6:00 PM";
          const isBookedMorning = bStart === "9:00 AM" && bEnd === "1:00 PM";
          const isBookedAfternoon = bStart === "1:00 PM" && bEnd === "6:00 PM";

          const isReqFull = finalStartTime === "9:00 AM" && finalEndTime === "6:00 PM";
          const isReqMorning = finalStartTime === "9:00 AM" && finalEndTime === "1:00 PM";
          const isReqAfternoon = finalStartTime === "1:00 PM" && finalEndTime === "6:00 PM";

          if (isReqFull) return true; 
          if (isReqMorning) return isBookedFull || isBookedMorning;
          if (isReqAfternoon) return isBookedFull || isBookedAfternoon;
          return false;
      });

      if (hasConflict) {
        alert(
          "This seat has just been booked by someone else for a conflicting time.",
        );
        fetchSeats();
        setBookingInProgress(false);
        return;
      }
      
      // Check for user existing bookings on this date (RLS should handle it for non-admin, but we can pre-check or handle error)
      // "If a booking action is rejected by backend (RLS): Show a clear message"
      
      // Fetch current user details
      const { data: { user } } = await supabase.auth.getUser();
      const occupantName = user?.user_metadata?.display_name || user?.user_metadata?.full_name || null;

      // 2. Insert Reservation
      // Status Logic:
      // - Insert row means reserved.
      // - Status column is irrelevant (using 'confirmed' to satisfy DB constraint).
      const { data: insertedData, error: insertError } = await supabase
        .from("reservations")
        .insert({
          seat_id: selectedSeatId,
          user_id: userId || null, 
          date: isoDate,
          start_time: finalStartTime,
          end_time: finalEndTime,
          status: "confirmed", // DB requires 'confirmed'
          occupant_name: occupantName, 
        })
        .select('id')
        .single();

      if (insertError) {
          // Check for RLS policy violation code (usually 42501 or explicit message)
          // Or our specific constraint logic
          // If the error message indicates "one seat per day"
          console.error("Booking insert error:", insertError);
          
          if (insertError.message.includes("policy") || insertError.code === "42501" || insertError.message.includes("row-level security")) {
              alert("You can reserve only one seat per day.");
          } else {
              alert("Booking failed: " + insertError.message);
          }
          throw insertError;
      }
      
      // Success
      if (typeof window !== "undefined") {
        localStorage.setItem("last_selected_zone", activeZone);
      }
      onBookSeat(seatName, activeZone, selectedSeatId);

      // Success
      if (typeof window !== "undefined") {
        localStorage.setItem("last_selected_zone", activeZone);
      }
      onBookSeat(seatName, activeZone, selectedSeatId);
    } catch (err) {
      console.error("Booking failed:", err);
      // alert handled above
      setBookingInProgress(false);
    }
  };

  const renderSeat = (
    name: string,
    type: "standard" | "vertical-down",
    orientation: "left" | "right" | "bottom",
  ) => {
    const seat = seatsMap[name];
    if (!seat) {
      // Placeholder loading state
      return (
        <div className="opacity-50 pointer-events-none grayscale">
          <SeatItem
            label={name}
            status="available"
            orientation={orientation}
            type={type}
          />
        </div>
      );
    }

    const isSelected = selectedSeatId === seat.id;
    const isMySeat = seat.occupantId === userId;
    
    // Determine status for UI
    let status: "available" | "booked" | "selected" | "blocked" = "available";
    
    if (seat.status === "booked") {
        status = "booked";
    } else if (seat.is_blocked && !isAdmin) {
        status = "blocked";
    } else if (isSelected) {
        status = "selected";
    }
    
    return (
      <SeatItem
        label={name}
        status={status}
        orientation={orientation}
        type={type}
        onClick={() => handleSeatClick(seat)}
        occupantName={seat.occupantName}
        isBlocked={seat.is_blocked}
        isAdmin={isAdmin}
        onToggleBlock={() => handleToggleBlock(seat)}
        isMySeat={isMySeat}
      />
    );
  };

  return (
    <div className="flex flex-col h-screen bg-background relative font-[family-name:var(--font-primary)]">
      {/* Header - Added Shadow */}
      <div className="bg-white h-[72px] opacity-90 relative shrink-0 w-full z-10" data-name="Top app bar">
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
                    <path d={headerSvgPaths.p1cbb9870} fill="#1B1B23" id="Union" />
                </g>
                </svg>
            </div>
            <p className="font-['Poppins',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-center text-nowrap">Reserve seat</p>
            <div className="shrink-0 size-[40px]" data-name="empty" />
            </div>
        </div>
      </div>

      {/* Date + Time + Compass Strip */}
      <div className="bg-secondary-foreground w-full px-6 py-4 flex items-center justify-between shadow-md">
        
        {/* Left: Date */}
        <div className="flex flex-col items-start min-w-[80px]">
          <span className="text-primary-foreground label-md-heavy">
            {selectedTime === "9:00 AM - 6:00 PM"
              ? "Full day"
              : selectedTime === "9:00 AM - 1:00 PM"
                ? "Morning"
                : selectedTime === "1:00 PM - 6:00 PM"
                  ? "Afternoon"
                  : "Custom"}
          </span>
          <span className="text-primary-foreground/80 label-md-normal">
            {day} {month}, {year}
          </span>
        </div>

        
       

        {/* Right: Compass */}
        <div className="flex flex-col items-center min-w-[80px]">
          <div className="text-primary-foreground label-md-normal">E</div>
          <Compass />
        </div>
      </div>

      {/* Zone Tabs */}
      <div className="flex items-start justify-between w-full pt-[16px] pb-[8px] bg-background relative">
        {ZONES.map((zone) => {
          const isActive = activeZone === zone;
          return (
            <button
              key={zone}
              onClick={() => setActiveZone(zone)}
              className="flex-1 flex flex-col items-center justify-center gap-[8px] pb-0 pt-[16px] relative"
            >
              <span
                className={`label-md-normal ${isActive ? "text-primary" : "text-foreground"}`}
              >
                {zone}
              </span>
              {isActive ? (
                <div className="h-[2px] w-[80%] bg-primary shadow-[var(--shadow-glow)]" />
              ) : (
                <div className="h-[1px] w-full bg-secondary" />
              )}
            </button>
          );
        })}
      </div>

      {/* Fixed Seat Layout */}
      <div 
        className="flex-1 overflow-y-auto w-full bg-background"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {loading && Object.keys(seatsMap).length === 0 ? (
          <div className="w-full h-full flex items-center justify-center">
            <Loader2 className="animate-spin text-primary" />
          </div>
        ) : (
          /* Fixed height container to prevent layout shift between zones */
          <div className="flex items-end justify-center w-full">
            {activeZone === "Zone A" ? (
               <div className="flex items-end justify-between w-[358px] pt-[24px] px-4">
                  <div className="flex flex-col gap-2">
                    {renderSeat("106", "standard", "left")}
                    {renderSeat("107", "standard", "left")}
                    {renderSeat("108", "standard", "left")}
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <div className="pr-8 pb-4">
                        {renderSeat("105", "vertical-down", "bottom")}
                    </div>
                    {renderSeat("104", "standard", "right")}
                    {renderSeat("103", "standard", "right")}
                    {renderSeat("102", "standard", "right")}
                  </div>
               </div>
            ) : activeZone === "Zone B" ? (
              <div className="flex items-end justify-between w-[358px] pt-[24px] px-4">
                <div className="flex flex-col gap-2">
                  {renderSeat("98", "standard", "left")}
                  {renderSeat("99", "standard", "left")}
                  {renderSeat("100", "standard", "left")}
                  {renderSeat("101", "standard", "left")}
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <div className="pr-8 pb-4">
                    {renderSeat("97", "vertical-down", "bottom")}
                  </div>
                  {renderSeat("96", "standard", "right")}
                  {renderSeat("95", "standard", "right")}
                  {renderSeat("94", "standard", "right")}
                </div>
              </div>
            ) : activeZone === "Zone C" ? (
              <div className="flex items-end justify-between w-[358px] pt-[24px] px-4">
                <div className="flex flex-col gap-2">
                  {renderSeat("90", "standard", "left")}
                  {renderSeat("91", "standard", "left")}
                  {renderSeat("92", "standard", "left")}
                  {renderSeat("93", "standard", "left")}
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <div className="pr-8 pb-4">
                    {renderSeat("89", "vertical-down", "bottom")}
                  </div>
                  {renderSeat("88", "standard", "right")}
                  {renderSeat("87", "standard", "right")}
                  {renderSeat("86", "standard", "right")}
                </div>
              </div>
            ) : activeZone === "Zone D" ? (
              <div className="flex items-end justify-between w-[358px] pt-[24px] px-4">
                <div className="flex flex-col gap-2 items-center">
                  <div className="pb-4">
                    {renderSeat("82", "vertical-down", "bottom")}
                  </div>
                  {renderSeat("83", "standard", "left")}
                  {renderSeat("84", "standard", "left")}
                  {renderSeat("85", "standard", "left")}
                </div>
                <div className="flex flex-col gap-2 items-end">
                  {renderSeat("81", "standard", "right")}
                  {renderSeat("80", "standard", "right")}
                  {renderSeat("79", "standard", "right")}
                  {renderSeat("78", "standard", "right")}
                </div>
              </div>
            ) : (
               <div className="flex gap-12">
                 {(() => {
                   const sortedSeats = Object.values(seatsMap).sort((a, b) => {
                        const numA = parseInt(a.seat_name.replace(/\D/g, ''), 10) || 0;
                        const numB = parseInt(b.seat_name.replace(/\D/g, ''), 10) || 0;
                        return numA - numB;
                   });
                   const mid = Math.ceil(sortedSeats.length / 2);
                   const left = sortedSeats.slice(0, mid);
                   const right = sortedSeats.slice(mid);
                   return (
                     <>
                       <div className="flex flex-col gap-6">
                         {left.map(s => (
                             <div key={s.id}>
                                {renderSeat(s.seat_name, "standard", "left")}
                             </div>
                         ))}
                       </div>
                       <div className="flex flex-col gap-6">
                         {right.map(s => (
                             <div key={s.id}>
                                {renderSeat(s.seat_name, "standard", "right")}
                             </div>
                         ))}
                       </div>
                     </>
                   )
                 })()}
               </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background flex gap-4 z-50">
        <Button
          fullWidth
          variant="secondary"
          onClick={onBack}
          icon={<ChevronLeft className="w-5 h-5" />}
        >
          Back
        </Button>
        <Button
          fullWidth
          variant="primary"
          onClick={handleDone}
          disabled={!selectedSeatId || bookingInProgress}
        >
          {bookingInProgress ? (
            <Loader2 className="animate-spin w-5 h-5" />
          ) : (
            "Done"
          )}
        </Button>
      </div>
    </div>
  );
}
