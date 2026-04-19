import React, { useState, useEffect } from "react";
import { X, Loader2 } from "lucide-react";
import { supabase } from "../utils/supabaseClient";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { HomeSVGs } from "./icons/HomeIcons";
import svgPaths from "../imports/svg-nhr51sy8dy";
import exampleImage from 'figma:asset/8462c762fa3e385203348308e4b9edb6a069ca55.png';

interface MyBookingsScreenProps {
  onBack: () => void;
  userId?: string;
  onViewBooking?: (booking: {
    seatId: string;
    seat: string;
    zone: string;
    date: string;
    time: string;
  }) => void;
}

interface Booking {
  id: string; // Reservation ID
  seatId: string; // Seat UUID
  seat: string;
  zone: string;
  date: string;
  rawDate: string; // YYYY-MM-DD for sorting
  timeRange: string;
  rawStartTime: string; // HH:MM:SS for sorting
}

// ------------------------------------------------------------------
// CANCEL CONFIRMATION MODAL (Based on Figma Import)
// ------------------------------------------------------------------
function CancelBookingModal({
  onCancel,
  onConfirm,
}: {
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-[family-name:var(--font-primary)]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[rgba(0,0,0,0.6)]"
        onClick={onCancel}
      />

      {/* Modal Content */}
      <div className="relative bg-card flex flex-col gap-[40px] items-center justify-center pb-[16px] pt-[32px] px-[16px] rounded-[16px] w-[358px] z-10 shadow-lg">
        {/* Title */}
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
          <p className="font-semibold leading-normal not-italic relative shrink-0 text-[22px] text-foreground text-nowrap">
            Cancel booking?
          </p>
        </div>

        {/* Actions */}
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
          {/* No Button */}
          <button
            onClick={onCancel}
            className="basis-0 bg-secondary grow h-[64px] min-h-px min-w-px relative rounded-[16px] shrink-0 flex items-center justify-center active:scale-[0.98] transition-transform"
          >
            <p className="font-normal leading-normal not-italic relative shrink-0 text-secondary-foreground text-[18px] text-center text-nowrap">
              No
            </p>
          </button>

          {/* Yes Button */}
          <button
            onClick={onConfirm}
            className="basis-0 bg-primary grow h-[64px] min-h-px min-w-px relative rounded-[16px] shrink-0 flex items-center justify-center active:scale-[0.98] transition-transform"
          >
            <p className="font-normal leading-normal not-italic relative shrink-0 text-[18px] text-center text-nowrap text-primary-foreground">
              Yes
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------
// MAIN SCREEN
// ------------------------------------------------------------------
export function MyBookingsScreen({
  onBack,
  userId,
  onViewBooking,
}: MyBookingsScreenProps) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState<"latest" | "earliest">("latest");

  // Deletion State
  const [bookingToDelete, setBookingToDelete] = useState<
    string | null
  >(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetchBookings();
  }, [userId, sortOrder]);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const isAscending = sortOrder === "earliest";
      
      // Client-side sort required because start_time is text (e.g. '9:00 AM') 
      // and Supabase JS SDK does not support SQL function ordering (to_timestamp).
      // We sort by date in DB, then refine sort in memory.
      // 3. Auto-Remove Old Booking Cards: Filter for bookings from today onwards.
      const today = new Date();
      const todayStr = today.toLocaleDateString('en-CA'); // YYYY-MM-DD

      let query = supabase
        .from("reservations")
        .select(
          `
          id,
          date,
          start_time,
          end_time,
          seats (
            id,
            seat_name,
            zone
          )
        `,
        )
        .eq("status", "confirmed")
        .gte("date", todayStr) // Filter: date must be greater than or equal to today
        .order("date", { ascending: isAscending });

      if (userId) {
        query = query.eq("user_id", userId);
      }

      const { data, error } = await query;

      if (error) throw error;

      if (data) {
        const formatTime = (t: string) => {
          const [h, m] = t.split(":");
          const hour = parseInt(h);
          const ampm = hour >= 12 ? "PM" : "AM";
          const hour12 = hour % 12 || 12;
          return `${hour12}:${m} ${ampm}`;
        };

        const formattedBookings = data.map((item) => {
          const [year, month, day] = item.date
            .split("-")
            .map(Number);
          const dateObj = new Date(year, month - 1, day);
          const formattedDate = dateObj.toLocaleDateString(
            "en-US",
            {
              month: "short",
              day: "numeric",
              year: "numeric",
            },
          );

          const startTime = item.start_time.includes("M")
            ? item.start_time
            : formatTime(item.start_time);
          const endTime = item.end_time.includes("M")
            ? item.end_time
            : formatTime(item.end_time);

          return {
            id: item.id,
            seatId: (item.seats as any)?.id || "",
            seat: (item.seats as any)?.seat_name || "Unknown",
            zone: (item.seats as any)?.zone || "Zone A",
            date: formattedDate,
            rawDate: item.date,
            timeRange: `${startTime} - ${endTime}`,
            rawStartTime: item.start_time,
          };
        });

        // Parse time helper
        const parseTimeValue = (dateStr: string, timeStr: string) => {
          // timeStr is like "9:00 AM" or "09:00:00"
          // Normalize to 24h for comparison
          let h = 0, m = 0;
          
          if (timeStr.toUpperCase().includes("M")) {
             // 12-hour format
             const [t, modifier] = timeStr.split(" ");
             const [hours, minutes] = t.split(":");
             h = parseInt(hours, 10);
             m = parseInt(minutes, 10);
             if (modifier.toUpperCase() === "PM" && h < 12) h += 12;
             if (modifier.toUpperCase() === "AM" && h === 12) h = 0;
          } else {
             // 24-hour format
             const [hours, minutes] = timeStr.split(":");
             h = parseInt(hours, 10);
             m = parseInt(minutes, 10);
          }
          
          // Return timestamp
          return new Date(dateStr + "T" + h.toString().padStart(2, '0') + ":" + m.toString().padStart(2, '0')).getTime();
        };

        // Filter out past bookings based on current time (for today's bookings)
        const now = new Date().getTime();
        const validBookings = formattedBookings.filter(b => {
             const bookingEndTimestamp = parseTimeValue(b.rawDate, data.find(d => d.id === b.id)?.end_time || "23:59");
             // Keep if end time is in the future
             return bookingEndTimestamp > now;
        });

        validBookings.sort((a, b) => {
           const timeA = parseTimeValue(a.rawDate, a.rawStartTime);
           const timeB = parseTimeValue(b.rawDate, b.rawStartTime);
           return isAscending ? timeA - timeB : timeB - timeA;
        });

        setBookings(validBookings);
      }
    } catch (err) {
      console.error("Error fetching bookings:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelClick = (id: string) => {
    setBookingToDelete(id);
  };

  const confirmCancel = async () => {
    if (!bookingToDelete) return;

    setIsDeleting(true);
    try {
      // 1. Delete reservation (or set to cancelled)
      // Per instructions: "delete the booking record from Supabase OR set its status to cancelled"
      // I'll update status to cancelled to keep history, or delete.
      // Instructions say "delete ... OR set status".
      // If I set status to 'cancelled', the query logic `.eq('status', 'confirmed')` everywhere else handles it naturally.
      // Deleting is cleaner for "freeing up" if we don't need history.
      // Let's Delete for simplicity, as it guarantees no "double booking" ghosts if my query logic is flawed.
      const { error } = await supabase
        .from("reservations")
        .delete()
        .eq("id", bookingToDelete);

      if (error) throw error;

      // 2. Refetch to update UI
      await fetchBookings();
    } catch (err) {
      console.error("Error cancelling booking:", err);
      alert("Failed to cancel booking. Please try again.");
    } finally {
      setIsDeleting(false);
      setBookingToDelete(null);
    }
  };

  return (
    <div className="flex flex-col h-full bg-background font-[family-name:var(--font-primary)] relative">
      {/* Modal Overlay */}
      {bookingToDelete && (
        <CancelBookingModal
          onCancel={() => setBookingToDelete(null)}
          onConfirm={confirmCancel}
        />
      )}

      {/* Top App Bar - White with Shadow */}
      <div className="bg-card h-[72px] opacity-90 relative shrink-0 w-full z-10" data-name="Top app bar">
        <div aria-hidden="true" className="absolute border-border border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
            <div 
                className="relative shrink-0 size-[40px] cursor-pointer" 
                data-name="Back"
                onClick={onBack}
            >
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                <g id="Back">
                    <path d={svgPaths.p2eeae600} fill="var(--foreground)" id="Union" />
                </g>
                </svg>
            </div>
            <p className="font-[family-name:var(--font-primary)] font-semibold leading-[normal] not-italic relative shrink-0 text-foreground text-[18px] text-center text-nowrap">My bookings</p>
            <div className="shrink-0 size-[40px]" data-name="empty" />
            </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-[16px] flex flex-col gap-[8px] items-center bg-background w-full max-w-[560px] mx-auto">
        {loading ? (
          <div className="flex items-center justify-center py-10">
            <Loader2 className="animate-spin w-8 h-8 text-primary" />
          </div>
        ) : bookings.length > 0 ? (
          <>
            <div className="w-full flex justify-end mb-2">
              <Select
                value={sortOrder}
                onValueChange={(val: any) => setSortOrder(val)}
              >
                <SelectTrigger className="w-[180px] bg-card border-border rounded-[16px] text-foreground label-md-normal">
                  <SelectValue placeholder="Sort by date" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border rounded-[12px]">
                  <SelectItem value="latest" className="label-md-normal">
                    Date: Latest first
                  </SelectItem>
                  <SelectItem value="earliest" className="label-md-normal">
                    Date: Earliest first
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {bookings.map((booking) => (
              <div
                key={booking.id}
                onClick={() => {
                  if (onViewBooking) {
                    onViewBooking({
                      seatId: booking.seatId,
                      seat: booking.seat,
                      zone: booking.zone,
                      date: booking.date,
                      time: booking.timeRange,
                    });
                  }
                }}
                className="bg-card rounded-[16px] border border-border w-full p-[16px] flex items-center justify-center relative cursor-pointer active:scale-[0.99] transition-transform"
              >
                <div className="flex items-center gap-[16px] w-full py-[4px]">
                  {/* Icon */}
                  <div className="w-[32px] h-[32px] rounded-full bg-card border border-border flex items-center justify-center relative shrink-0">
                    <img src={exampleImage} alt="Seat" className="w-[24px] h-[24px] object-contain" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col items-start gap-[4px]">
                    <div className="flex items-center gap-[8px]">
                      <span className="text-foreground title-small-heavy whitespace-nowrap">
                        {booking.seat}
                      </span>
                      <div className="w-[4px] h-[4px] rounded-full bg-foreground" />
                      <span className="text-foreground label-md-normal whitespace-nowrap">
                        {booking.zone}
                      </span>
                    </div>
                    <div className="flex items-center gap-[4px]">
                      <span className="text-foreground label-md-normal whitespace-nowrap">
                        {booking.timeRange},
                      </span>
                
                      <span className="text-foreground label-md-normal whitespace-nowrap">
                        {booking.date}
                      </span>
                    </div>
                  </div>

                  {/* Cancel Button (X) */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCancelClick(booking.id);
                    }}
                    className="w-[40px] h-[40px] rounded-full bg-card/90  flex items-center justify-center shrink-0 border border-transparent hover:border-border active:scale-95 transition-all"
                  >
                    <X className="w-5 h-5 text-foreground" />
                  </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          // Empty State
          <div className="bg-secondary rounded-[16px] p-[24px] text-center w-full mt-4">
            <p className="text-muted-foreground text-[14px] font-normal">
              You have no upcoming bookings.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
