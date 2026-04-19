import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  X,
  Clock,
  Sun,
  Sunset,
  ChevronLeft,
} from "lucide-react";
import { Button } from "./Button";
import svgPaths from "../imports/svg-nhr51sy8dy";

interface TimeSelectionScreenProps {
  selectedDate: string; // "May 24, 2025"
  onBack: () => void;
  onClose: () => void;
  onSelectTime: (time: string) => void;
}

interface TimeOption {
  id: string;
  label: string;
  time: string;
  icon: React.ReactNode;
}

export function TimeSelectionScreen({
  selectedDate,
  onBack,
  onClose,
  onSelectTime,
}: TimeSelectionScreenProps) {
  // State for live time check
  const [now, setNow] = useState(new Date());

  // Effect to update time every minute to support "Re-evaluate rules live"
  useEffect(() => {
    // Update immediately on mount to ensure sync? (useState init handles it mostly)
    // Set interval for minute updates
    const timer = setInterval(() => setNow(new Date()), 1000 * 60);
    return () => clearInterval(timer);
  }, []);

  // Parse the date to display "24" and "May, 2025"
  const dateObj = new Date(selectedDate);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("default", {
    month: "long",
  });
  const year = dateObj.getFullYear();
  const monthYear = `${month}, ${year}`;

  // Rule: After 12:00 PM today -> Disable Full Day & Morning
  const selectedDateObj = new Date(selectedDate);
  // Check if selected date is today
  const isToday = selectedDateObj.toDateString() === now.toDateString();
  const isMorningDisabled = isToday && now.getHours() >= 12;

  const [selectedOption, setSelectedOption] = useState<string>(() => {
    // Smart initializer: Check rule immediately
    const initDate = new Date(); // local time
    const sDate = new Date(selectedDate);
    if (sDate.toDateString() === initDate.toDateString() && initDate.getHours() >= 12) {
      return "afternoon";
    }
    return "full";
  });

  // Enforce selection rule live
  useEffect(() => {
    if (isMorningDisabled) {
      if (selectedOption === "full" || selectedOption === "morning") {
        setSelectedOption("afternoon");
      }
    }
  }, [isMorningDisabled, selectedOption]);

  const options: TimeOption[] = [
    {
      id: "full",
      label: "Full day",
      time: "9:00 AM - 6:00 PM",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      id: "morning",
      label: "Morning",
      time: "9:00 AM - 1:00 PM",
      icon: <Sun className="w-5 h-5" />,
    },
    {
      id: "afternoon",
      label: "Afternoon",
      time: "1:00 PM - 6:00 PM",
      icon: <Sunset className="w-5 h-5" />,
    },
  ];

  const handleNext = () => {
    const option = options.find((o) => o.id === selectedOption);
    if (option) {
      onSelectTime(option.time);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background relative">
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
                    <path d={svgPaths.p1cbb9870} fill="#1B1B23" id="Union" />
                </g>
                </svg>
            </div>
            <p className="font-['Poppins',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-center text-nowrap">Reserve seat</p>
            <div className="shrink-0 size-[40px]" data-name="empty" />
            </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Date Strip - Matches Reference Design (Dark) */}
        <div className="bg-[#464a53] w-full px-[16px] py-[24px] flex items-center justify-center gap-[40px]">
         
            <span className="text-primary-foreground/80 label-md-normal">
            {day} {month}, {year}
          </span>
          
        </div>

        {/* Time Options */}
        <div className="px-4 py-6 flex flex-col gap-4">
          {options.map((option) => {
            const isSelected = selectedOption === option.id;
            
            // Determine if this option should be disabled
            let isDisabled = false;
            if (isMorningDisabled) {
              if (option.id === "full" || option.id === "morning") {
                isDisabled = true;
              }
            }

            return (
              <button
                key={option.id}
                onClick={() => !isDisabled && setSelectedOption(option.id)}
                disabled={isDisabled}
                className={`
                   w-full p-5 rounded-[var(--radius)] flex items-center justify-between transition-all border
                   ${
                     isDisabled
                       ? "bg-muted border-transparent text-muted-foreground opacity-50 cursor-not-allowed"
                       : isSelected
                         ? "bg-primary border-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                         : "bg-card border-border text-foreground hover:bg-secondary/30"
                   }
                 `}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`
                     w-10 h-10 rounded-full flex items-center justify-center
                     ${isDisabled ? "bg-muted-foreground/20" : isSelected ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"}
                   `}
                  >
                    {option.id === "full" ? (
                      <div className="relative size-[24px]" data-name="full_day">
                        <div className="absolute h-[20px] left-[8.33%] right-[8.33%] top-[2px]" data-name="Union">
                          <div className="absolute inset-0" style={{ "--fill-0": isSelected ? "#FFFFFF" : "rgba(27, 27, 35, 1)" } as React.CSSProperties}>
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <path d="M10 16C10.2761 16 10.5 16.2239 10.5 16.5V19.5C10.5 19.7761 10.2761 20 10 20C9.72386 20 9.5 19.7761 9.5 19.5V16.5C9.5 16.2239 9.72386 16 10 16ZM5.27539 14.2109C5.47065 14.0157 5.78716 14.0157 5.98242 14.2109C6.17748 14.4062 6.17762 14.7228 5.98242 14.918L3.86133 17.0391C3.66613 17.2343 3.34958 17.2341 3.1543 17.0391C2.95903 16.8438 2.95903 16.5273 3.1543 16.332L5.27539 14.2109ZM14.2109 14.0176C14.4062 13.8223 14.7227 13.8224 14.918 14.0176L17.0391 16.1387C17.2343 16.3339 17.2343 16.6504 17.0391 16.8457C16.8438 17.0409 16.5273 17.041 16.332 16.8457L14.2109 14.7246C14.0157 14.5294 14.0157 14.2128 14.2109 14.0176ZM10 5.5C12.4853 5.5 14.5 7.51472 14.5 10C14.5 12.4853 12.4853 14.5 10 14.5C7.51472 14.5 5.5 12.4853 5.5 10C5.5 7.51472 7.51472 5.5 10 5.5ZM10 6.5C8.067 6.5 6.5 8.067 6.5 10C6.5 11.933 8.067 13.5 10 13.5C11.933 13.5 13.5 11.933 13.5 10C13.5 8.067 11.933 6.5 10 6.5ZM3.5 9.5C3.77614 9.5 4 9.72386 4 10C4 10.2761 3.77614 10.5 3.5 10.5H0.5C0.223858 10.5 5.99378e-08 10.2761 0 10C8.7776e-09 9.72386 0.223858 9.5 0.5 9.5H3.5ZM19.5 9.5C19.7761 9.5 20 9.72386 20 10C20 10.2761 19.7761 10.5 19.5 10.5H16.5C16.2239 10.5 16 10.2761 16 10C16 9.72386 16.2239 9.5 16.5 9.5H19.5ZM2.96094 3.1543C3.1562 2.95907 3.47272 2.95905 3.66797 3.1543L5.78906 5.27539C5.98427 5.47064 5.98427 5.78717 5.78906 5.98242C5.59381 6.17767 5.2773 6.17765 5.08203 5.98242L2.96094 3.86133C2.76568 3.66607 2.76568 3.34956 2.96094 3.1543ZM16.1387 2.96094C16.3339 2.76574 16.6504 2.76588 16.8457 2.96094C17.041 3.1562 17.041 3.47271 16.8457 3.66797L14.7246 5.78906C14.5293 5.98432 14.2128 5.98432 14.0176 5.78906C13.8225 5.59378 13.8224 5.27722 14.0176 5.08203L16.1387 2.96094ZM10 0C10.2761 0 10.5 0.223858 10.5 0.5V3.5C10.5 3.77614 10.2761 4 10 4C9.72386 4 9.5 3.77614 9.5 3.5V0.5C9.5 0.223858 9.72386 0 10 0Z" fill="var(--fill-0, #1B1B23)" id="Union" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ) : option.id === "morning" ? (
                      <div className="relative size-[24px]" data-name="sunrise">
                        <div className="absolute h-[10.5px] left-[8.33%] right-[8.33%] top-[5px]" data-name="Union">
                          <div className="absolute inset-0" style={{ "--fill-0": isSelected ? "#FFFFFF" : "rgba(27, 27, 35, 1)" } as React.CSSProperties}>
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10.5">
                              <path d="M3.5 9.5C3.77614 9.5 4 9.72386 4 10C4 10.2761 3.77614 10.5 3.5 10.5H0.5C0.223858 10.5 5.99378e-08 10.2761 0 10C8.7776e-09 9.72386 0.223858 9.5 0.5 9.5H3.5ZM10 5.5C12.4853 5.5 14.5 7.51472 14.5 10V10.5H5.5V10C5.5 7.51472 7.51472 5.5 10 5.5ZM19.5 9.5C19.7761 9.5 20 9.72386 20 10C20 10.2761 19.7761 10.5 19.5 10.5H16.5C16.2239 10.5 16 10.2761 16 10C16 9.72386 16.2239 9.5 16.5 9.5H19.5ZM10 6.5C8.2368 6.5 6.77879 7.8039 6.53613 9.5H13.4639C13.2212 7.8039 11.7632 6.5 10 6.5ZM2.96094 3.1543C3.1562 2.95907 3.47272 2.95905 3.66797 3.1543L5.78906 5.27539C5.98427 5.47064 5.98427 5.78717 5.78906 5.98242C5.59381 6.17767 5.2773 6.17765 5.08203 5.98242L2.96094 3.86133C2.76568 3.66607 2.76568 3.34956 2.96094 3.1543ZM16.1387 2.96094C16.3339 2.76574 16.6504 2.76588 16.8457 2.96094C17.041 3.1562 17.041 3.47271 16.8457 3.66797L14.7246 5.78906C14.5293 5.98432 14.2128 5.98432 14.0176 5.78906C13.8225 5.59378 13.8224 5.27722 14.0176 5.08203L16.1387 2.96094ZM10 0C10.2761 0 10.5 0.223858 10.5 0.5V3.5C10.5 3.77614 10.2761 4 10 4C9.72386 4 9.5 3.77614 9.5 3.5V0.5C9.5 0.223858 9.72386 0 10 0Z" fill="var(--fill-0, #1B1B23)" id="Union" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ) : option.id === "afternoon" ? (
                      <div className="relative size-[24px]" data-name="sunset">
                        <div className="absolute flex h-[10.5px] items-center justify-center left-[8.33%] right-[8.33%] top-[9px]">
                          <div className="flex-none h-[10.5px] scale-y-[-100%] w-[20px]">
                            <div className="relative size-full" data-name="Union">
                              <div className="absolute inset-0" style={{ "--fill-0": isSelected ? "#FFFFFF" : "rgba(27, 27, 35, 1)" } as React.CSSProperties}>
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10.5">
                                  <path d="M3.5 9.5C3.77614 9.5 4 9.72386 4 10C4 10.2761 3.77614 10.5 3.5 10.5H0.5C0.223858 10.5 5.99378e-08 10.2761 0 10C8.7776e-09 9.72386 0.223858 9.5 0.5 9.5H3.5ZM10 5.5C12.4853 5.5 14.5 7.51472 14.5 10V10.5H5.5V10C5.5 7.51472 7.51472 5.5 10 5.5ZM19.5 9.5C19.7761 9.5 20 9.72386 20 10C20 10.2761 19.7761 10.5 19.5 10.5H16.5C16.2239 10.5 16 10.2761 16 10C16 9.72386 16.2239 9.5 16.5 9.5H19.5ZM10 6.5C8.2368 6.5 6.77879 7.8039 6.53613 9.5H13.4639C13.2212 7.8039 11.7632 6.5 10 6.5ZM2.96094 3.1543C3.1562 2.95907 3.47272 2.95905 3.66797 3.1543L5.78906 5.27539C5.98427 5.47064 5.98427 5.78717 5.78906 5.98242C5.59381 6.17767 5.2773 6.17765 5.08203 5.98242L2.96094 3.86133C2.76568 3.66607 2.76568 3.34956 2.96094 3.1543ZM16.1387 2.96094C16.3339 2.76574 16.6504 2.76588 16.8457 2.96094C17.041 3.1562 17.041 3.47271 16.8457 3.66797L14.7246 5.78906C14.5293 5.98432 14.2128 5.98432 14.0176 5.78906C13.8225 5.59378 13.8224 5.27722 14.0176 5.08203L16.1387 2.96094ZM10 0C10.2761 0 10.5 0.223858 10.5 0.5V3.5C10.5 3.77614 10.2761 4 10 4C9.72386 4 9.5 3.77614 9.5 3.5V0.5C9.5 0.223858 9.72386 0 10 0Z" fill="var(--fill-0, #1B1B23)" id="Union" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      option.icon
                    )}
                  </div>
                  <div className="flex flex-col items-start">
                    <span
                      className={`body-md-heavy ${isSelected ? "text-white" : "text-foreground"}`}
                    >
                      {option.label}
                    </span>
                    <span
                      className={`label-sm-normal ${isSelected ? "text-white/80" : "text-muted-foreground"}`}
                    >
                      {option.time}
                    </span>
                  </div>
                </div>


              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background flex gap-4 border-t border-border/20">
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
          onClick={handleNext}
          icon={<ChevronRight className="w-5 h-5 order-last" />}
        >
          Next
        </Button>
      </div>
    </div>
  );
}