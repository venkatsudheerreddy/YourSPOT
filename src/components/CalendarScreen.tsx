import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "./Button";
import { supabase } from "../utils/supabaseClient";
import svgPaths from "../imports/svg-nhr51sy8dy";

interface CalendarScreenProps {
  onBack: () => void;
  onClose: () => void;
  onSelectDate: (date: string) => void;
  isAdmin?: boolean;
  selectedDate?: string;
}

const holidays2026 = [
  "2026-01-01", // New Year
  "2026-01-15", // Sankranti
  "2026-01-26", // Republic Day
  "2026-03-19", // Ugadi / Gudi Padava / Cheti Chand
  "2026-05-01", // May Day / Buddha Purnima
  "2026-05-27", // Bakrid
  "2026-06-02", // Telangana Formation Day
  "2026-10-02", // Gandhi Jayanthi
  "2026-10-20", // Vijaya Dasami
  "2026-12-25", // Christmas Day
];

export function CalendarScreen({
  onBack,
  onClose,
  onSelectDate,
  isAdmin,
  selectedDate: initialSelectedDate,
}: CalendarScreenProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [currentDate, setCurrentDate] = useState(() => {
    if (initialSelectedDate) {
      const d = new Date(initialSelectedDate);
      if (!isNaN(d.getTime())) {
        d.setDate(1);
        return d;
      }
    }
    const d = new Date();
    d.setDate(1); 
    return d;
  });

  const [selectedDate, setSelectedDate] = useState<Date | null>(() => {
    if (initialSelectedDate) {
      const d = new Date(initialSelectedDate);
      if (!isNaN(d.getTime())) {
         d.setHours(0,0,0,0);
         return d;
      }
    }
    return null;
  });
  const [bookedDates, setBookedDates] = useState<{ 
    date: string; 
    id: string; 
    seat_name?: string; 
    start_time?: string; 
    end_time?: string; 
  }[]>([]);
  const [conflictModalOpen, setConflictModalOpen] = useState(false);
  const [pendingDate, setPendingDate] = useState<Date | null>(null);

  // Fetch user's booked dates
  const fetchBookings = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data } = await supabase
      .from('reservations')
      .select(`
        id, 
        date, 
        start_time, 
        end_time,
        seats (
          seat_name
        )
      `)
      .eq('user_id', user.id)
      .eq('status', 'confirmed');

    if (data) {
      setBookedDates(data.map(d => ({ 
        date: d.date, 
        id: d.id,
        start_time: d.start_time,
        end_time: d.end_time,
        seat_name: (d.seats as any)?.seat_name || 'Unknown'
      })));
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [currentDate]); // Refresh when month changes or on mount

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const isPrevMonthDisabled = () => {
    const todayMonthDate = new Date(today.getFullYear(), today.getMonth(), 1);
    return currentDate <= todayMonthDate;
  };

  const handlePrevMonth = () => {
    if (isPrevMonthDisabled()) return;
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const getDayStatus = (day: number) => {
    const dateToCheck = new Date(currentYear, currentMonth, day);
    // Reset hours to compare dates properly (just in case)
    dateToCheck.setHours(0, 0, 0, 0);

    const year = dateToCheck.getFullYear();
    const month = String(dateToCheck.getMonth() + 1).padStart(2, '0');
    const dayStr = String(dateToCheck.getDate()).padStart(2, '0');
    const isoDate = `${year}-${month}-${dayStr}`;

    // 1. Check if past date
    if (dateToCheck < today) return "disabled";

    // 2. Check holidays
    if (holidays2026.includes(isoDate)) return "disabled";

    // 3. Check weekends (Sat=6, Sun=0)
    const dayOfWeek = dateToCheck.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) return "disabled";

    // 4. Rule: After 4:00 PM (16:00), disable date selection for today
    const now = new Date();
    const isToday = dateToCheck.toDateString() === now.toDateString(); // Compare dates ignoring time
    if (isToday && now.getHours() >= 16) {
      return "disabled";
    }

    // Check if date is already booked by user
    if (selectedDate && 
        selectedDate.getDate() === day && 
        selectedDate.getMonth() === currentMonth && 
        selectedDate.getFullYear() === currentYear) {
      return "selected";
    }

    if (bookedDates.some(b => b.date === isoDate)) {
      return "booked";
    }
    return "available";
  };

  const handleDayClick = (day: number) => {
    const status = getDayStatus(day);
    if (status === "disabled") return;
    
    const clickedDate = new Date(currentYear, currentMonth, day);

    if (status === "booked" && !isAdmin) {
      setPendingDate(clickedDate);
      setConflictModalOpen(true);
      return;
    }
    
    setSelectedDate(clickedDate);
  };

  const handleConfirmConflict = async () => {
    if (!pendingDate) return;

    const year = pendingDate.getFullYear();
    const month = String(pendingDate.getMonth() + 1).padStart(2, '0');
    const dayStr = String(pendingDate.getDate()).padStart(2, '0');
    const isoDate = `${year}-${month}-${dayStr}`;

    const booking = bookedDates.find(b => b.date === isoDate);
    if (booking) {
      // Cancel existing reservation
      const { error } = await supabase
        .from('reservations')
        .delete()
        .eq('id', booking.id);
      
      if (error) {
        console.error("Error deleting reservation:", error);
        // Optionally show error toast
        return;
      }
      
      // Refresh bookings and select the date
      await fetchBookings();
      setSelectedDate(pendingDate);
    }
    
    setConflictModalOpen(false);
    setPendingDate(null);
  };

  const handleNext = () => {
    if (selectedDate) {
      const formattedDate = selectedDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
      onSelectDate(formattedDate);
    }
  };
  
  // Sort and format booked dates for display
  const formattedBookedDates = bookedDates
    .map(b => b.date)
    .sort() // ISO strings sort correctly
    .filter(dateStr => {
      // Filter out past dates if desired, or keep all. Prompt example implies future/recent.
      // Let's keep future dates + today
      return new Date(dateStr) >= today;
    })
    .map(dateStr => {
      const [y, m, d] = dateStr.split('-');
      const dateObj = new Date(parseInt(y), parseInt(m) - 1, parseInt(d));
      return dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }); // "24 Dec"
    })
    .join(', ');

  // Helper to get conflicting booking details
  const conflictingBooking = pendingDate ? bookedDates.find(b => {
    const year = pendingDate.getFullYear();
    const month = String(pendingDate.getMonth() + 1).padStart(2, '0');
    const dayStr = String(pendingDate.getDate()).padStart(2, '0');
    const isoDate = `${year}-${month}-${dayStr}`;
    return b.date === isoDate;
  }) : null;

  const getBookingTimeDisplay = (booking: typeof bookedDates[0] | undefined | null) => {
    if (!booking || !booking.start_time || !booking.end_time) return "";
    
    const formatTime = (t: string) => {
        if (t.toUpperCase().includes("M")) return t;
        const [h, m] = t.split(":");
        const hour = parseInt(h);
        const ampm = hour >= 12 ? "PM" : "AM";
        const hour12 = hour % 12 || 12;
        return `${hour12}:${m} ${ampm}`;
    };

    const start = formatTime(booking.start_time);
    const end = formatTime(booking.end_time);
    
    const startHour = parseInt(booking.start_time.split(':')[0]);
    let period = "Morning";
    if (startHour >= 12 && startHour < 17) period = "Afternoon";
    else if (startHour >= 17) period = "Evening";

    return `${period}: ${start} - ${end}`;
  };

  // 7-Column Grid Calculation
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  // We want Mon=0, ..., Sun=6
  // getDay() returns Sun=0, Mon=1, ..., Sat=6
  // So: Mon(1)->0, Tue(2)->1, ..., Sat(6)->5, Sun(0)->6
  const paddingDays = (firstDayOfMonth + 6) % 7;
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="flex flex-col h-screen bg-background relative">
      {/* Header - Added Shadow */}
      <div className="bg-card h-[72px] opacity-90 relative shrink-0 w-full z-10" data-name="Top app bar">
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
                    <path d={svgPaths.p1cbb9870} fill="var(--foreground)" id="Union" />
                </g>
                </svg>
            </div>
            <p className="font-[family-name:var(--font-primary)] font-semibold leading-[normal] not-italic relative shrink-0 text-foreground text-[18px] text-center text-nowrap">Reserve seat</p>
            <div className="shrink-0 size-[40px]" data-name="empty" />
            </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="flex flex-col items-center px-4 pt-6 pb-8 gap-6">
          
          {/* Month Selector */}
          <div className="flex items-center justify-between w-full">
             <button 
               onClick={handlePrevMonth}
               disabled={isPrevMonthDisabled()}
               className={`w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground transition-opacity ${
                 isPrevMonthDisabled() ? "opacity-30 cursor-not-allowed" : "hover:bg-secondary"
               }`}
             >
               <ChevronLeft className="w-6 h-6" />
             </button>
             
             <span className="label-md-heavy text-foreground">
               {monthNames[currentMonth]}
             </span>
             
             <button 
               onClick={handleNextMonth}
               className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
             >
               <ChevronRight className="w-6 h-6" />
             </button>
          </div>

          {/* Date Grid */}
          <div className="w-full">
            {/* Weekday Headers */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {weekDays.map(day => (
                <div key={day} className="text-center text-[12px] font-medium text-muted-foreground">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-2">
              {/* Empty slots for start of month */}
              {Array.from({ length: paddingDays }).map((_, i) => (
                <div key={`empty-${i}`} className="w-full aspect-square" />
              ))}

              {days.map((day) => {
                const status = getDayStatus(day);
                
                let classes = "bg-card text-foreground border border-border hover:border-primary/50";
                if (status === "selected") {
                  classes = "bg-primary text-primary-foreground shadow-[var(--shadow-glow)] border-primary";
                } else if (status === "disabled") {
                  classes = "bg-muted text-muted-foreground border-border opacity-30 cursor-not-allowed";
                }
                
                return (
                  <button
                    key={day}
                    onClick={() => handleDayClick(day)}
                    disabled={status === "disabled"}
                    className={`
                      w-full aspect-square rounded-[var(--radius)] flex items-center justify-center text-[14px] font-semibold transition-all
                      ${classes}
                    `}
                  >
                    {day.toString().padStart(2, '0')}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Conflict Modal */}
      {conflictModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center font-[family-name:var(--font-primary)]">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-[rgba(0,0,0,0.6)]"
            onClick={() => setConflictModalOpen(false)}
          />
          
          {/* Modal Content - Based on Figma Import */}
          <div className="bg-card relative rounded-[16px] w-[358px] shadow-lg flex flex-col items-center justify-center overflow-hidden">
            <div className="bg-card content-stretch flex flex-col gap-[40px] items-center justify-center pb-[16px] pt-[32px] px-[16px] relative rounded-[16px] size-full">
              
              {/* Main Content */}
              <div className="content-stretch flex flex-col gap-[16px] items-center justify-center leading-[normal] not-italic relative shrink-0 w-full">
                <p className="font-[family-name:var(--font-primary)] font-semibold relative shrink-0 text-[14px] text-foreground text-center w-full whitespace-pre-wrap">
                  You already have a reservation on this date.
                </p>
                
                {/* Seat Info Box */}
                <div className="bg-secondary content-stretch flex flex-col items-center justify-center px-0 py-[16px] relative rounded-[16px] shrink-0 w-full whitespace-pre">
                  <p className="font-[family-name:var(--font-primary)] font-semibold relative shrink-0 text-foreground text-[14px]">
                    {conflictingBooking?.seat_name || "Unknown"}
                  </p>
                  <p className="font-[family-name:var(--font-primary)] font-normal relative shrink-0 text-muted-foreground text-[12px]">
                    {getBookingTimeDisplay(conflictingBooking)}
                  </p>
                </div>

                <p className="font-[family-name:var(--font-primary)] font-normal relative shrink-0 text-[14px] text-foreground text-center w-full whitespace-pre-wrap">
                  If you continue, your existing reservation will be cancelled and replaced with a new one.
                </p>
              </div>

              {/* Buttons */}
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Bottom bottoms">
                {/* Cancel Button */}
                <div 
                  onClick={() => setConflictModalOpen(false)}
                  className="bg-secondary flex-[1_0_0] h-[64px] min-h-px min-w-px relative rounded-[16px] cursor-pointer active:scale-[0.98] transition-transform" 
                  data-name="Button"
                >
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
                      <p className="font-[family-name:var(--font-primary)] font-normal leading-[normal] not-italic relative shrink-0 text-secondary-foreground text-[18px] text-center whitespace-pre">
                        Cancel
                      </p>
                    </div>
                  </div>
                </div>

                {/* Continue Button */}
                <div 
                  onClick={handleConfirmConflict}
                  className="bg-primary flex-[1_0_0] h-[64px] min-h-px min-w-px relative rounded-[16px] cursor-pointer active:scale-[0.98] transition-transform" 
                  data-name="Button"
                >
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
                      <p className="font-[family-name:var(--font-primary)] font-normal leading-[normal] not-italic relative shrink-0 text-[18px] text-center text-primary-foreground whitespace-pre">
                        Continue
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background">
        <Button 
          fullWidth
          variant="primary"
          onClick={handleNext}
          disabled={!selectedDate}
          icon={selectedDate ? <ChevronRight className="w-5 h-5 order-last" /> : undefined}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
