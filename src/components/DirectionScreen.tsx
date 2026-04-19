import React, { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { DirectionMap } from "./DirectionMap";
import { supabase } from "../utils/supabaseClient";
import svgPaths from "../imports/svg-nhr51sy8dy";
import svgPathsCard from "../imports/svg-zepdjav610";
import svgPathsNew from "../imports/svg-oakktxlu5y";
import exampleImage from 'figma:asset/8462c762fa3e385203348308e4b9edb6a069ca55.png';

interface DirectionScreenProps {
  booking: {
    seatId: string;
    zone: string;
    date: string;
    time: string;
  };
  onClose: () => void;
}

// ------------------------------------------------------------------
// UI COMPONENTS (Header, Card)
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
    <div className="bg-[rgba(255,255,255,0.05)] flex items-center justify-center p-[0.8px] rounded-full size-[40px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-full" />
      <div className="flex items-center justify-center relative shrink-0 size-[38.4px]">
        <div 
            className="w-full h-full flex items-center justify-center"
            style={{
                transform: `rotate(-${renderAngle}deg)`,
                transition: "transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
        >
             <div className="relative shrink-0 size-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="Icon">
                  <path d="M12 2L16 12H8L12 2Z" fill="var(--destructive)" id="Vector" />
                  <path d="M12 22L8 12H16L12 22Z" fill="var(--secondary)" id="Vector_2" />
                  <path d={svgPathsNew.p3d728000} fill="var(--primary-foreground)" id="Vector_3" />
                </g>
              </svg>
            </div>
        </div>
      </div>
    </div>
  );
}

function ChairIcon() {
  return (
    <div className="relative shrink-0 size-[44px]">
      <svg className="block size-full" fill="none" viewBox="0 0 44 44">
        <path d="M15.5 3.75694C15.5 2.58307 15.5 1.99613 15.7387 1.5524C15.9244 1.20733 16.2073 0.924391 16.5524 0.738733C16.9961 0.5 17.5831 0.5 18.7569 0.5H24.2431C25.4169 0.5 26.0039 0.5 26.4476 0.738733C26.7927 0.924391 27.0756 1.20733 27.2613 1.5524C27.5 1.99613 27.5 2.58307 27.5 3.75694C27.5 4.27896 27.5 4.53996 27.3248 4.93053C27.2249 5.15325 26.9054 5.55564 26.7112 5.70346C26.3705 5.96269 26.2017 6.00199 25.8642 6.0806C24.9176 6.30103 23.5073 6.5 21.5 6.5C19.4927 6.5 18.0824 6.30103 17.1358 6.0806C16.7983 6.00199 16.6295 5.96269 16.2888 5.70346C16.0946 5.55564 15.7751 5.15325 15.6752 4.93053C15.5 4.53996 15.5 4.27896 15.5 3.75694Z" fill="#BD96FF" />
        <path d="M15.8774 8.37242C15.684 7.32098 16.3118 6.27786 17.357 6.05329C18.5971 5.78686 20.2277 5.5 21.5 5.5C22.7723 5.5 24.4029 5.78686 25.643 6.05329C26.6882 6.27786 27.316 7.32098 27.1226 8.37242C26.7787 10.2427 26.346 13.1048 26.5 15C26.6352 16.6642 27.2283 18.7706 27.7338 20.3271C28.1097 21.4845 27.4395 22.7446 26.2423 22.9628C24.8056 23.2245 22.9493 23.5 21.5 23.5C20.0507 23.5 18.1944 23.2245 16.7577 22.9628C15.5605 22.7446 14.8903 21.4845 15.2662 20.3271C15.7717 18.7706 16.3648 16.6642 16.5 15C16.654 13.1048 16.2213 10.2427 15.8774 8.37242Z" fill="var(--primary)" />
        <line x1="14" x2="14" y1="17.5" y2="25.5" stroke="#392A54" />
        <line x1="29" x2="29" y1="17.5" y2="25.5" stroke="#392A54" />
        <path d="M29.5 17.5H31C31.8284 17.5 32.5 18.1716 32.5 19V19C32.5 19.8284 31.8284 20.5 31 20.5H29.5V17.5Z" fill="#7241C5" />
        <path d="M14.5 17.5H13C12.1716 17.5 11.5 18.1716 11.5 19V19C11.5 19.8284 12.1716 20.5 13 20.5H14.5V17.5Z" fill="#7241C5" />
        <path d="M27.2639 23.5H21.5H15.7361C14.9785 23.5 14.286 23.928 13.9472 24.6056L13.7794 24.9412C13.5975 25.3051 13.5268 25.7219 13.7138 26.0832C14.2291 27.0788 15.9433 29 21.5 29C27.0567 29 28.7709 27.0788 29.2862 26.0832C29.4732 25.7219 29.4025 25.3051 29.2206 24.9412L29.0528 24.6056C28.714 23.928 28.0215 23.5 27.2639 23.5Z" fill="#7241C5" />
        <path d="M27.4678 23.5H21.5H15.5322C14.8996 23.5 14.3213 23.8574 14.0384 24.4233C13.7169 25.0663 13.9576 25.6634 14.6715 25.7481C15.7299 25.8737 17.7311 26 21.5 26C25.2689 26 27.2701 25.8737 28.3285 25.7481C29.0424 25.6634 29.2831 25.0663 28.9616 24.4233C28.6787 23.8574 28.1004 23.5 27.4678 23.5Z" fill="#BD96FF" />
        <line x1="21.5" x2="21.5" y1="28.5" y2="41.5" stroke="#392A54" />
        <rect fill="#7241C5" height="5" rx="1" width="4" x="19.5" y="30.5" />
        <path d="M13.5 41V37.5C13.5 36.3954 14.3954 35.5 15.5 35.5H26.5C27.6046 35.5 28.5 36.3954 28.5 37.5V41" stroke="#392A54" />
        <circle cx="13.5" cy="41.5" fill="#7241C5" r="2" />
        <circle cx="28.5" cy="41.5" fill="#7241C5" r="2" />
        <circle cx="21.5" cy="41.5" fill="#7241C5" r="2" />
      </svg>
    </div>
  );
}

// ------------------------------------------------------------------
// SCREEN COMPONENT
// ------------------------------------------------------------------

export function DirectionScreen({ booking, onClose }: DirectionScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // Check Admin Role
  useEffect(() => {
    const checkRole = async () => {
       const { data: { session } } = await supabase.auth.getSession();
       if (session?.user) {
          const { data: profile } = await supabase
            .from("profiles")
            .select("role")
            .eq("id", session.user.id)
            .single();
          setIsAdmin(profile?.role === "admin");
       }
    };
    checkRole();
  }, []);

  // --- GESTURE & TRANSITION STATE ---
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
  
  // Gesture Refs
  const pointers = useRef<Map<number, { x: number; y: number }>>(new Map());
  const lastCenter = useRef<{ x: number; y: number } | null>(null);
  const lastDist = useRef<number | null>(null);

  // --- INITIALIZATION ---
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

    const mapRect = containerRef.current?.getBoundingClientRect();
    const offsetX = mapRect ? mapRect.left : 0;
    const offsetY = mapRect ? mapRect.top : 0;

    setTransform(prev => {
        let { x, y, scale } = prev;
        
        // 1. Pan
        if (prevCenter) {
            const dx = currCenter.x - prevCenter.x;
            const dy = currCenter.y - prevCenter.y;
            x += dx;
            y += dy;
        }
        
        // 2. Zoom (Pinch)
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

  return (
    <div className="absolute inset-0 z-50 bg-secondary flex flex-col overflow-hidden w-full h-full">
      {/* HEADER & OVERLAY */}
      <div className="absolute top-0 left-0 right-0 z-50 pointer-events-none">
        {/* Top App Bar */}
        <div className="bg-card h-[72px] opacity-90 relative shrink-0 w-full pointer-events-auto" data-name="Top app bar">
          <div aria-hidden="true" className="absolute border-border border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
              <div 
                className="relative shrink-0 size-[40px] cursor-pointer" 
                data-name="Back"
                onClick={onClose}
              >
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                  <g id="Back">
                    <path d={svgPaths.p2eeae600} fill="var(--foreground)" id="Union" />
                  </g>
                </svg>
              </div>
              <p className="font-[family-name:var(--font-primary)] font-semibold leading-[normal] not-italic relative shrink-0 text-foreground text-[18px] text-center text-nowrap">Direction</p>
              <div className="shrink-0 size-[40px]" data-name="empty" />
            </div>
          </div>
        </div>
        
        {/* Booking Summary Card */}
        <div className="pointer-events-auto">
           <div className="bg-secondary-foreground relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] w-full" data-name="Container">
              <div className="flex flex-row items-center w-full">
                <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative w-full">
                  {/* Left Side Details */}
                  <div className="relative shrink-0 flex items-center gap-[16px]">
                    {/* Chair Icon */}
                    <div className="bg-card relative rounded-[100px] shrink-0 size-[40px]" data-name="Container">
                      <div aria-hidden="true" className="absolute border-input border-[0.519px] border-solid inset-0 pointer-events-none rounded-[100px]" />
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.519px] pt-[5.714px] px-[5.714px] relative size-full">
                        <div className="content-stretch flex flex-col h-[28.571px] items-start relative shrink-0 w-full">
                          <div className="h-[28.571px] overflow-clip relative shrink-0 w-full flex items-center justify-center">
                            <img src={exampleImage} className="h-full w-auto object-contain" alt="Seat" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Text Details */}
                    <div className="relative shrink-0 flex flex-col gap-[4px] items-start">
                      <div className="relative shrink-0 flex gap-[8px] items-center">
                        <p className="font-[family-name:var(--font-primary)] font-semibold leading-[21.6px] not-italic text-[18px] text-nowrap text-primary-foreground">{booking.seatId}</p>
                        <div className="bg-primary-foreground rounded-[100px] shrink-0 size-[4px]" />
                        <p className="font-[family-name:var(--font-primary)] font-light leading-[19.6px] not-italic relative shrink-0 text-[14px] text-nowrap text-primary-foreground">{booking.zone}</p>
                      </div>
                      <div className="relative shrink-0 flex gap-[8px] items-center">
                        <p className="font-[family-name:var(--font-primary)] font-light leading-[19.6px] not-italic relative shrink-0 text-[14px] text-nowrap text-primary-foreground">{booking.time}</p>
                        <div className="bg-primary-foreground rounded-[100px] shrink-0 size-[4px]" />
                        <p className="font-[family-name:var(--font-primary)] font-light leading-[19.6px] not-italic relative shrink-0 text-[14px] text-nowrap text-primary-foreground">{booking.date}</p>
                      </div>
                    </div>
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
              </div>
           </div>
        </div>

      {/* CANVAS CONTAINER */}
      <div 
        ref={containerRef}
        className="flex-1 w-full h-full relative overflow-hidden bg-secondary touch-none cursor-move"
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
          <DirectionMap 
             targetZone={booking.zone}
             targetSeatId={booking.seatId}
             isAdmin={isAdmin}
          />
        </div>
      </div>
    </div>
  );
}
