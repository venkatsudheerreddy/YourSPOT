import React from "react";
import svgPaths from "../imports/svg-j2h31idjtl";
import imgSeat from "figma:asset/06a2dbc140d3345ec3be709f68f7f30332113bf9.png";

interface BookingConfirmationScreenProps {
  seatId: string;
  seatName: string;
  zone: string;
  date: string;
  time: string;
  onHome: () => void;
  onViewBooking?: (booking: {
    seatId: string;
    seat: string;
    zone: string;
    date: string;
    time: string;
  }) => void;
}

function Illustration() {
  return (
    <div className="h-[208px] relative shrink-0 w-[211px]" data-name="Illustration">
      <div className="absolute inset-[-45.67%_-51.66%_-66.35%_-53.08%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 432 441">
          <g id="Illustration">
            <g filter="url(#filter0_d_18265_108)" id="Ellipse 695">
              <path d={svgPaths.p15771e00} fill="var(--fill-0, #1CC97B)" />
            </g>
            <path d={svgPaths.p2598c180} id="Ellipse 696" stroke="var(--stroke-0, #1CC97B)" strokeWidth="0.5" />
            <circle cx="212" cy="199" fill="var(--fill-0, white)" fillOpacity="0.2" id="Ellipse 697" r="41.5" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p1d94a080} id="Vector 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="441" id="filter0_d_18265_108" width="432" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="20" />
              <feGaussianBlur stdDeviation="62" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.109804 0 0 0 0 0.788235 0 0 0 0 0.482353 0 0 0 0.7 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18265_108" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_18265_108" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Chair() {
  return (
    <div className="absolute left-1/2 size-[46px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="chair">
      <div className="absolute aspect-[1030/1449] bottom-[6.25%] left-1/2 top-[6.25%] translate-x-[-50%]" data-name="seat">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[106.9%] left-[-24.95%] max-w-none top-[-2.55%] w-[150.39%]" src={imgSeat} />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-card relative rounded-[999px] shrink-0 size-[60px]" data-name="Icon">
      <div aria-hidden="true" className="absolute border border-input border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Chair />
    </div>
  );
}

export function BookingConfirmationScreen({ 
  seatName, 
  zone, 
  date, 
  time, 
  onHome 
}: BookingConfirmationScreenProps) {
  
  // Format Date for display
  const displayDate = date ? new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }) : "Dec 12, 2025";

  return (
    <div className="bg-background content-stretch flex flex-col items-center justify-center relative w-full h-full font-[family-name:var(--font-primary)]" data-name="Completed">
      
      <div className="content-stretch flex flex-col h-full w-full items-start relative shrink-0" data-name="Main container">
        
        {/* Content Area */}
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-center justify-center w-full px-[40px] relative" data-name="Content">
          
          <Illustration />
          
          <div className="content-stretch flex flex-col items-center justify-center leading-[normal] not-italic relative shrink-0 text-center" data-name="Content">
            <p className="font-semibold relative shrink-0 text-[20px] text-foreground tracking-[-0.8px] uppercase">Booking Confirmed!</p>
            <p className="font-normal relative shrink-0 text-muted-foreground text-[12px] mt-1">Your seat has been successfully reserved.</p>
          </div>

          <div className="bg-card/20 h-[100px] relative rounded-[24px] shrink-0 w-full max-w-[390px]" data-name="Booking card">
            <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[24px] shadow-[var(--shadow-card)]" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[24px] items-center justify-center px-[16px] py-[20px] relative size-full">
                <Icon />
                
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  {/* Seat Info */}
                  <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
                    <p className="font-semibold leading-[normal] not-italic relative shrink-0 text-foreground text-[22px] whitespace-pre">{seatName || "108"}</p>
                    <div className="relative shrink-0 size-[4px]">
                      <div className="absolute inset-0" style={{ "--fill-0": "rgba(27, 27, 35, 1)" } as React.CSSProperties}>
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                          <circle cx="2" cy="2" fill="var(--foreground)" id="Ellipse 1" r="2" />
                        </svg>
                      </div>
                    </div>
                    <p className="font-normal leading-[normal] not-italic relative shrink-0 text-foreground text-[12px] whitespace-pre">{zone || "Zone A"}</p>
                  </div>

                  {/* Time & Date */}
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                     <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
                      <p className="font-normal leading-[normal] not-italic relative shrink-0 text-foreground text-[12px] whitespace-pre">{time || "9:00 AM - 6:00 PM"}</p>
                      <div className="relative shrink-0 size-[4px]">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(27, 27, 35, 1)" } as React.CSSProperties}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                            <circle cx="2" cy="2" fill="var(--foreground)" id="Ellipse 1" r="2" />
                          </svg>
                        </div>
                      </div>
                      <p className="font-normal leading-[normal] not-italic relative shrink-0 text-foreground text-[12px] whitespace-pre">{displayDate}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Area */}
        <div className="content-stretch flex h-[96px] items-start p-[16px] relative shrink-0 w-full" data-name="Bottom bottoms">
          <button 
            onClick={onHome}
            className="bg-primary flex-[1_0_0] h-[64px] min-h-px min-w-px relative rounded-[16px] active:scale-[0.98] transition-transform" 
            data-name="Button"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
                <p className="font-normal leading-[normal] not-italic relative shrink-0 text-[18px] text-center text-primary-foreground whitespace-pre">Home</p>
              </div>
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}
