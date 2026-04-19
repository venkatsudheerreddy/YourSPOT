import React, { useState, useEffect } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { supabase } from "../utils/supabaseClient";
import { projectId } from "../utils/supabase/info";
import { greetingsData } from "../data/greetings";
import svgPaths from "../imports/svg-fndyfiw26t";
import exampleImage from 'figma:asset/8462c762fa3e385203348308e4b9edb6a069ca55.png';

import { AdminReservationCard } from "./AdminReservationCard";

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
  userName?: string;
  onLogout?: () => void;
  userId?: string;
  onViewBooking?: (booking: {
    id?: string;
    seatId: string;
    seat: string;
    zone: string;
    date: string;
    time: string;
  }) => void;
  isAdmin?: boolean;
}

interface NextBooking {
  id: string; // Reservation ID
  seatId: string; // Seat ID
  seat: string;
  date: string;
  timeRange: string;
  zone: string;
  status: 'upcoming' | 'ongoing';
}

// --- Icons Components from Design ---

function LayoutIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Layout">
          <g id="Vector">
            <path d={svgPaths.p1eac000} stroke="white" strokeLinejoin="round" />
            <path d={svgPaths.p325be000} stroke="white" strokeLinejoin="round" />
            <path d={svgPaths.p17868e00} stroke="white" strokeLinejoin="round" />
            <path d={svgPaths.p1ccdb000} stroke="white" strokeLinejoin="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ChairIcon() {
  return (
    <div className="relative shrink-0 size-[44px]">
      <img src={exampleImage} alt="Chair" className="block size-full object-contain" />
    </div>
  );
}

function UserIcon() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_18138_206)" id="user">
          <path d={svgPaths.p33b19100} fill="white" id="Vector" />
          <path d={svgPaths.p315b9900} fill="white" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_18138_206">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CalendarIcon() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_18138_186)" id="calendar--heat-map">
          <path d={svgPaths.p2ff8a000} fill="white" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_18138_186">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function HomeScreen({ onNavigate, userName, userId, onViewBooking, isAdmin }: HomeScreenProps) {
  const [occupancy, setOccupancy] = useState(0);
  const [totalSeats, setTotalSeats] = useState(0);
  const [nextBooking, setNextBooking] = useState<NextBooking | null>(null);
  const [loading, setLoading] = useState(true);
  const [greetingLine2, setGreetingLine2] = useState<string>("");
  const [greeting, setGreeting] = useState("Good morning");
  const [adminReservation, setAdminReservation] = useState<any>(null);
  
  // const CHECK_IN_ENABLED = false; // Removed

  useEffect(() => {
    // Time-based greeting logic
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) {
        setGreeting("Good morning");
      } else if (hour >= 12 && hour < 17) {
        setGreeting("Good afternoon");
      } else {
        setGreeting("Good evening");
      }
    };
    
    updateGreeting();
    // Update every minute to stay accurate
    const interval = setInterval(updateGreeting, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetchDashboardData();

    const channel = supabase
      .channel("dashboard_changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "reservations" },
        fetchDashboardData,
      )
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "seats" },
        fetchDashboardData,
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [userId, isAdmin]);

  // Greeting Logic Effect
  useEffect(() => {
    if (loading) return;

    const getBookingState = () => {
        const now = new Date();
        let state = 'no_booking';

        if (nextBooking) {
            const bDate = new Date(nextBooking.date);
            
            if (!isNaN(bDate.getTime())) {
                const isToday = bDate.getDate() === now.getDate() && 
                                bDate.getMonth() === now.getMonth() && 
                                bDate.getFullYear() === now.getFullYear();
                
                const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                const bDateMidnight = new Date(bDate.getFullYear(), bDate.getMonth(), bDate.getDate());
                const isFutureDate = bDateMidnight > todayMidnight;

                if (isToday) {
                    const [startTimeStr, endTimeStr] = nextBooking.timeRange.split(" - ");
                    
                    const parseTime = (tStr: string) => {
                        const [t, period] = tStr.split(" ");
                        let [h, m] = t.split(":").map(Number);
                        if (period === "PM" && h !== 12) h += 12;
                        if (period === "AM" && h === 12) h = 0;
                        const d = new Date(now);
                        d.setHours(h, m, 0, 0);
                        return d;
                    };

                    const startTime = parseTime(startTimeStr);
                    const endTime = parseTime(endTimeStr);
                    
                    if (now > endTime) {
                        state = 'booking_completed';
                    } else if (now < startTime) {
                        state = 'booking_upcoming';
                    } else {
                        state = 'booking_today';
                    }
                } else if (isFutureDate) {
                    state = 'no_booking';
                }
            }
        }
        return state;
    };

    const selectGreeting = (bookingState: string) => {
        const now = new Date();
        const hour = now.getHours();
        const isNight = hour >= 22 || hour < 5;
        const dayOfWeek = now.getDay(); 
        const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

        if (bookingState === 'booking_today') return pick(greetingsData.booking_today);
        if (bookingState === 'booking_upcoming') return pick(greetingsData.booking_upcoming);
        if (bookingState === 'no_booking') return pick(greetingsData.no_booking);
        
        if (dayOfWeek === 1) return pick(greetingsData.day_context.monday);
        if (dayOfWeek === 5) return pick(greetingsData.day_context.friday);
        if (dayOfWeek === 0 || dayOfWeek === 6) return pick(greetingsData.day_context.weekend);
        
        if (greetingsData.day_context.normal_day && greetingsData.day_context.normal_day.length > 0) {
             return pick(greetingsData.day_context.normal_day);
        }

        if (isNight) {
            return pick(greetingsData.night);
        }

        return pick(greetingsData.fallback);
    };

    try {
        const currentBookingState = getBookingState();
        const todayStr = new Date().toLocaleDateString("en-CA");
        const stored = localStorage.getItem('daily_greeting_v1');
        let shouldUseStored = false;

        if (stored) {
            try {
                const { date, line2, bookingState } = JSON.parse(stored);
                if (date === todayStr && bookingState === currentBookingState && line2) {
                    setGreetingLine2(line2);
                    shouldUseStored = true;
                }
            } catch (e) {
                console.error("Error parsing stored greeting", e);
            }
        }

        if (!shouldUseStored) {
            const newLine2 = selectGreeting(currentBookingState);
            setGreetingLine2(newLine2);
            localStorage.setItem('daily_greeting_v1', JSON.stringify({ 
                date: todayStr, 
                line2: newLine2, 
                bookingState: currentBookingState 
            }));
        }
    } catch (e) {
        console.error("Error generating greeting", e);
        setGreetingLine2("Welcome back.");
    }

  }, [loading, nextBooking]);

  const fetchDashboardData = async () => {
    try {
      const today = new Date().toLocaleDateString("en-CA");

      // 1. Get Total Seats
      let seatsQuery = supabase
        .from("seats")
        .select("*", { count: "exact" })
        .limit(1);
      
      if (!isAdmin) {
        seatsQuery = seatsQuery.eq("is_blocked", false);
      }

      const { count: seatsCount, error: seatsError } = await seatsQuery;
      if (seatsError) throw seatsError;
      setTotalSeats(seatsCount || 0);

      // 2. Get Today's Occupancy
      // Occupancy counts both PENDING and CONFIRMED reservations as "occupied" seats
      const { data: reservations, error: occupancyError } =
        await supabase
          .from("reservations")
          .select("seat_id")
          .eq("date", today)
          .in("status", ["pending", "confirmed"]);

      if (occupancyError) throw occupancyError;

      let validReservationsCount = 0;

      if (isAdmin) {
        validReservationsCount = reservations?.length || 0;
      } else {
        if (reservations && reservations.length > 0) {
            const seatIds = reservations.map(r => r.seat_id);
            const { data: unblockedSeats } = await supabase
                .from("seats")
                .select("id")
                .in("id", seatIds)
                .eq("is_blocked", false);
            
            validReservationsCount = unblockedSeats?.length || 0;
        }
      }

      setOccupancy(validReservationsCount);

      // 3. Get Next Booking
      let nextBookingQuery = supabase
        .from("reservations")
        .select(`
          id,
          date,
          start_time,
          end_time,
          status,
          user_id,
          seats (
            id,
            seat_name,
            zone
          )
        `)
        .gte("date", today)
        // .eq("status", "confirmed") // Removed strict status check here to allow custom logic, but standard flow expects confirmed
        .order("date", { ascending: true })
        .order("start_time", { ascending: true }); // Removed limit for now to filter in JS if needed

      if (userId) {
        nextBookingQuery = nextBookingQuery.eq("user_id", userId);
      }

      const { data: nextBookingDataList, error: nextBookingError } = await nextBookingQuery;
      if (nextBookingError) throw nextBookingError;

      // Filter for Admin Card Data (Today + Pending/Confirmed)
      let foundAdminRes = null;
      if (isAdmin && nextBookingDataList) {
          foundAdminRes = nextBookingDataList.find(r => r.date === today);
          
          if (foundAdminRes) {
              setAdminReservation({
                  id: foundAdminRes.id,
                  seat_id: (foundAdminRes.seats as any)?.id,
                  seat_name: (foundAdminRes.seats as any)?.seat_name || "Unknown Seat",
                  office_name: "Headquarters", // Hardcoded for now
                  status: "confirmed" // Placeholder, actual check-in logic is handled in AdminReservationCard
              });
          } else {
              setAdminReservation(null);
          }
      } else {
          setAdminReservation(null);
      }

      // Standard Next Booking Logic (Only Confirmed)
      let validBooking = null;
      let bookingStatus: 'upcoming' | 'ongoing' = 'upcoming';

      if (nextBookingDataList && nextBookingDataList.length > 0) {
        const now = new Date();
        const parseDateTime = (dateStr: string, timeStr: string): Date => {
             const [y, m, d] = dateStr.split('-').map(Number);
             
             // Normalize Time String (e.g., "09:00:00" or "09:00" or "9:00 PM")
             let h = 0, min = 0;
             const upperTime = timeStr.trim().toUpperCase();
             
             if (upperTime.includes('M')) { // AM/PM
                 const [t, p] = upperTime.split(' ');
                 const [hh, mm] = t.split(':');
                 h = parseInt(hh, 10);
                 min = parseInt(mm, 10);
                 if (p === 'PM' && h < 12) h += 12;
                 if (p === 'AM' && h === 12) h = 0;
             } else { // 24h
                 const [hh, mm] = upperTime.split(':');
                 h = parseInt(hh, 10);
                 min = parseInt(mm, 10);
             }
             return new Date(y, m - 1, d, h, min, 0);
        };

        for (const booking of nextBookingDataList) {
            // Standard flow only shows CONFIRMED bookings
            if (booking.status !== 'confirmed') continue;

            const startDateTime = parseDateTime(booking.date, booking.start_time);
            const endDateTime = parseDateTime(booking.date, booking.end_time);

            // Valid if it ends in the future (Current or Upcoming)
            if (now < endDateTime) {
                validBooking = booking;
                if (now >= startDateTime) {
                    bookingStatus = 'ongoing';
                } else {
                    bookingStatus = 'upcoming';
                }
                break; // Found the most relevant one
            }
        }
      }

      if (validBooking) {
        const [year, month, day] = validBooking.date.split("-").map(Number);
        const dateObj = new Date(year, month - 1, day);
        
        const formattedDate = dateObj.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });

        const formatTime = (t: string) => {
          // Ensure consistent time formatting
          const [h, m] = t.split(":");
          const hour = parseInt(h);
          const ampm = hour >= 12 ? "PM" : "AM";
          const hour12 = hour % 12 || 12;
          return `${hour12}:${m} ${ampm}`;
        };

        const startTime = validBooking.start_time.includes("M") ? validBooking.start_time : formatTime(validBooking.start_time);
        const endTime = validBooking.end_time.includes("M") ? validBooking.end_time : formatTime(validBooking.end_time);

        setNextBooking({
          id: validBooking.id,
          seatId: (validBooking.seats as any)?.id || "",
          seat: (validBooking.seats as any)?.seat_name || "Unknown",
          zone: (validBooking.seats as any)?.zone || "Zone A",
          date: formattedDate,
          timeRange: `${startTime} - ${endTime}`,
          status: bookingStatus,
        });
      } else {
        setNextBooking(null);
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const available = Math.max(0, totalSeats - occupancy);

  return (
    <div className="flex flex-col h-full w-full bg-gradient-to-b from-primary to-primary/80 font-[family-name:var(--font-primary)]">
      
      {/* Top Gradient Section */}
      <div className="pt-[40px] px-[16px] pb-[24px] flex flex-col items-center shrink-0 w-full">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-primary-foreground mb-6 w-full text-center">
            <p className="font-[family-name:var(--font-primary)] font-normal opacity-80 text-[12px] mb-1">
                {greeting}
            </p>
            <p className="font-[family-name:var(--font-primary)] font-extrabold text-[40px] leading-none text-shadow-[0px_4px_14px_rgba(255,255,255,0.2)] tracking-[-4px] uppercase mb-2">
                {userName || "Guest"}
            </p>
            <p className="body-sm-normal">
                {greetingLine2 || "You have options today"}
            </p>
        </div>

        {/* Divider */}
        <div className="bg-gradient-to-r from-[rgba(255,255,255,0)] h-px opacity-40 shrink-0 to-[rgba(255,255,255,0)] via-[#ffffff] via-[47.596%] w-full mb-6" />

        {/* Today's Overview */}
        <div className="flex flex-col items-center w-full gap-4">
            <p className="font-[family-name:var(--font-primary)] font-normal opacity-80 text-[14px] text-primary-foreground">
                today’s overview
            </p>
            
            <div className="flex items-center gap-[32px] text-primary-foreground">
                {/* Occupancy */}
                <div className="flex flex-col items-center">
                    <div className="flex items-baseline">
                        <span className="font-[family-name:var(--font-primary)] font-semibold text-[18px]">
                            {loading ? "-" : occupancy}
                        </span>
                        <span className="font-[family-name:var(--font-primary)] font-normal opacity-80 text-[10px]">
                            /{loading ? "-" : totalSeats}
                        </span>
                    </div>
                    <p className="font-[family-name:var(--font-primary)] font-normal opacity-80 text-[12px]">
                        occupancy
                    </p>
                </div>

                {/* Vertical Divider */}
                <div className="bg-gradient-to-b from-[rgba(255,255,255,0)] h-[40px] opacity-20 shrink-0 to-[rgba(255,255,255,0)] via-[#ffffff] via-[48.558%] w-px" />

                {/* Available */}
                <div className="flex flex-col items-center">
                     <span className="font-[family-name:var(--font-primary)] font-semibold text-[18px]">
                        {loading ? "-" : available}
                    </span>
                    <p className="font-[family-name:var(--font-primary)] font-normal opacity-80 text-[12px]">
                        available
                    </p>
                </div>

                {/* Vertical Divider */}
                <div className="bg-gradient-to-b from-[rgba(255,255,255,0)] h-[40px] opacity-20 shrink-0 to-[rgba(255,255,255,0)] via-[#ffffff] via-[48.558%] w-px" />

                {/* Layout */}
                <div 
                    onClick={() => onNavigate("layout")}
                    className="flex flex-col items-center cursor-pointer active:scale-95 transition-transform"
                >
                    <LayoutIcon />
                    <p className="font-[family-name:var(--font-primary)] font-normal opacity-80 text-[12px] mt-1">
                        layout
                    </p>
                </div>
            </div>
        </div>
      </div>

      {/* Bottom White Section */}
      <div className="flex-1 bg-card rounded-t-[24px] w-full flex flex-col items-center px-[16px] py-[24px] gap-[24px] overflow-y-auto">
        
        {/* Admin Reservation Card */}
        {isAdmin && adminReservation && (
          <AdminReservationCard 
            reservation={adminReservation} 
            onCheckInSuccess={() => {
                fetchDashboardData();
            }}
          />
        )}

        {/* Next Booking Card (Only show if NOT showing Admin Card or if Admin Card is distinct?) 
            Prompt says "Show Admin Reservation Card" if record found. 
            If Admin Card is shown, usually it replaces the "Next Booking" if it's the same slot.
            To be safe, let's keep Next Booking logic as is, but maybe users will see two cards if they have a confirmed booking.
            Actually, if status is 'confirmed', the Admin Card says "Checked In".
            The Next Booking card is a standard view. 
            Let's allow both for now, as Admin Card is a special context.
        */}
        {!adminReservation && nextBooking ? (
             <div className="bg-card rounded-[24px] w-full relative shrink-0 shadow-[0px_0px_150px_0px_rgba(29,10,97,0.2)] border border-primary/50">
                <div 
                    onClick={() => onViewBooking && onViewBooking({
                        id: nextBooking.id,
                        seatId: nextBooking.seatId,
                        seat: nextBooking.seat,
                        zone: nextBooking.zone,
                        date: nextBooking.date,
                        time: nextBooking.timeRange
                    })}
                    className="flex items-center gap-[24px] px-[16px] py-[20px] cursor-pointer"
                >
                    {/* Icon */}
                    <div className="bg-card p-[8px] rounded-full border border-border shrink-0">
                         <ChairIcon />
                    </div>

                    {/* Details */}
                    <div className="flex flex-col items-start gap-[4px]">
                         <p className="font-[family-name:var(--font-primary)] font-normal text-foreground text-[12px] mb-2">
                            {nextBooking.status === 'ongoing' ? 'current booking!' : 'next booking!'}
                         </p>
                         
                         <div className="flex items-center gap-[8px]">
                             <span className="font-[family-name:var(--font-primary)] font-semibold text-foreground text-[18px] leading-none">
                                 {nextBooking.seat}
                             </span>
                             <div className="w-[4px] h-[4px] rounded-full bg-foreground" />
                             <span className="font-[family-name:var(--font-primary)] font-normal text-foreground text-[12px] leading-none">
                                 {nextBooking.zone}
                             </span>
                         </div>

                         <div className="flex items-center gap-[8px]">
                             <span className="font-[family-name:var(--font-primary)] font-normal text-foreground text-[12px] leading-none">
                                 {nextBooking.timeRange}
                             </span>
                             <div className="w-[4px] h-[4px] rounded-full bg-foreground" />
                             <span className="font-[family-name:var(--font-primary)] font-normal text-foreground text-[12px] leading-none">
                                 {nextBooking.date}
                             </span>
                         </div>
                    </div>
                </div>
             </div>
        ) : !adminReservation && (
            // Empty State
             <div className="bg-card rounded-[24px] w-full relative shrink-0 shadow-[0px_0px_150px_0px_rgba(29,10,97,0.2)] border border-border p-[24px] flex flex-col items-center justify-center min-h-[120px]">
                 {loading ? (
                    <Loader2 className="w-6 h-6 animate-spin text-primary" />
                 ) : (
                    <>
                        <p className="font-[family-name:var(--font-primary)] font-semibold text-foreground text-[14px]">
                            No upcoming bookings
                        </p>
                        <p className="font-[family-name:var(--font-primary)] font-normal text-muted-foreground text-[12px]">
                            Book a seat to see it here
                        </p>
                    </>
                 )}
             </div>
        )}

        {/* Divider */}
        <div className="bg-gradient-to-r from-[rgba(0,0,0,0)] h-px opacity-20 shrink-0 to-[rgba(0,0,0,0)] via-[#000000] via-[47.596%] w-full" />

        {/* Action Cards */}
        <div className="flex gap-[16px] w-full">
            {/* Book Seat */}
            <div 
                onClick={() => onNavigate("calendar")}
                className="flex-1 bg-card rounded-[24px] border border-primary shadow-[var(--shadow-hard)] flex flex-col items-center justify-center py-[24px] gap-[24px] cursor-pointer active:translate-y-1 active:shadow-none transition-all"
            >
                <div className="bg-primary w-[56px] h-[56px] rounded-full shadow-[var(--shadow-glow)] flex items-center justify-center relative overflow-hidden">
                     <UserIcon />
                </div>
                <p className="font-[family-name:var(--font-primary)] font-normal text-foreground text-[14px]">
                    Book seat
                </p>
            </div>

            {/* My Bookings */}
            <div 
                onClick={() => onNavigate("bookings")}
                className="flex-1 bg-card rounded-[24px] border border-primary shadow-[var(--shadow-hard)] flex flex-col items-center justify-center py-[24px] gap-[24px] cursor-pointer active:translate-y-1 active:shadow-none transition-all"
            >
                <div className="bg-primary w-[56px] h-[56px] rounded-full shadow-[var(--shadow-glow)] flex items-center justify-center relative overflow-hidden">
                     <CalendarIcon />
                </div>
                <p className="font-[family-name:var(--font-primary)] font-normal text-foreground text-[14px]">
                    My bookings
                </p>
            </div>
        </div>

      </div>
    </div>
  );
}
