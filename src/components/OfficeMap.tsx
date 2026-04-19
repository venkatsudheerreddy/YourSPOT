import React from "react";
import svgPaths from "../imports/svg-x5efzq49mb";

interface SeatStatus {
  status: "available" | "occupied";
  occupantName?: string;
  isMySeat?: boolean;
}

interface OfficeMapProps {
  seatStatuses?: Record<string, SeatStatus>;
  isAdmin?: boolean;
  onClose?: () => void;
}

// ------------------------------------------------------------------
// MAP SUB-COMPONENTS
// ------------------------------------------------------------------

function SeatBox({
  status,
  name,
  isAdmin,
  rotationClass,
  isMySeat
}: {
  status: "available" | "occupied";
  name?: string;
  isAdmin?: boolean;
  rotationClass: string;
  isMySeat?: boolean;
}) {
  const isOccupied = status === "occupied";
  let bgClass = "bg-[#d3d5da]";
  if (isMySeat) bgClass = "bg-[#f97316]";
  else if (isOccupied) bgClass = "bg-[#005198]";
  
  return (
    <div className={`${bgClass} h-[64px] relative rounded-[4px] shrink-0 w-[32px]`}>
      {(isOccupied || isMySeat) && isAdmin && name && (
        <div className={`absolute flex h-[42px] items-center justify-center left-[calc(50%-0.5px)] top-[calc(50%-21px)] translate-x-[-50%] w-[15px]`}>
          <div className={`flex-none ${rotationClass}`}>
            <p className="font-[family-name:var(--font-primary)] leading-[normal] not-italic relative text-[10px] text-center text-nowrap text-white">
              {name.split(" ")[0].substring(0, 8)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function SeatNumber({ text }: { text: string }) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[24px]">
      <p className="font-[family-name:var(--font-primary)] font-semibold leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">
        {text}
      </p>
    </div>
  );
}

function DeskLeft({
  seatId,
  status,
  occupantName,
  isAdmin,
  isMySeat
}: {
  seatId: string;
  status: "available" | "occupied";
  occupantName?: string;
  isAdmin?: boolean;
  isMySeat?: boolean;
}) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-[4px] mt-[5px] relative z-10">
        <SeatBox 
            status={status} 
            name={occupantName} 
            isAdmin={isAdmin} 
            rotationClass="rotate-[90deg]" 
            isMySeat={isMySeat}
        />
        <SeatNumber text={seatId} />
      </div>
      <div className="[grid-area:1_/_1] h-[74px] ml-0 mt-0 relative w-[24px] z-0">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3850f100} stroke="#464A53" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DeskRight({
  seatId,
  status,
  occupantName,
  isAdmin,
  isMySeat
}: {
  seatId: string;
  status: "available" | "occupied";
  occupantName?: string;
  isAdmin?: boolean;
  isMySeat?: boolean;
}) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-0 mt-[5px] relative z-10">
        <SeatNumber text={seatId} />
        <SeatBox 
            status={status} 
            name={occupantName} 
            isAdmin={isAdmin} 
            rotationClass="rotate-[270deg]" 
            isMySeat={isMySeat}
        />
      </div>
      <div className="[grid-area:1_/_1] h-[74px] ml-[38px] mt-0 relative w-[24px] z-0">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3ebc1a00} stroke="#464A53" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ZoneGroup({
  leftSeats,
  rightSeats,
  data,
  isAdmin
}: {
  leftSeats: string[];
  rightSeats: string[];
  data: Record<string, SeatStatus>;
  isAdmin?: boolean;
}) {
  return (
    <div className="content-stretch flex gap-[40px] items-end relative shrink-0">
      <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0">
        {leftSeats.map(id => (
          <DeskLeft 
            key={id} 
            seatId={id} 
            status={data[id]?.status || "available"} 
            occupantName={data[id]?.occupantName}
            isAdmin={isAdmin}
            isMySeat={data[id]?.isMySeat}
          />
        ))}
      </div>
      <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0">
        {rightSeats.map(id => (
          <DeskRight 
            key={id} 
            seatId={id} 
            status={data[id]?.status || "available"} 
            occupantName={data[id]?.occupantName}
            isAdmin={isAdmin}
            isMySeat={data[id]?.isMySeat}
          />
        ))}
      </div>
    </div>
  );
}

// ------------------------------------------------------------------
// MAIN COMPONENT
// ------------------------------------------------------------------

export function OfficeMap({ seatStatuses = {}, isAdmin, onClose }: OfficeMapProps) {
  // Use props directly
  const finalStatuses = seatStatuses;

  return (
    <div className="bg-[#ffffff] flex flex-col items-center justify-center min-h-screen w-full font-[family-name:var(--font-primary)]">
       {/* Inner Map Container (Fixed width 800px to preserve layout) */}
       <div className="relative w-[800px] h-[600px] min-w-[800px]">
         
         {/* Labels */}
         <p className="absolute body-md-heavy left-[110px] top-[87px]">Zone A</p>
         <p className="absolute body-md-heavy left-[300px] top-[87px]">Zone B</p>
         <p className="absolute body-md-heavy left-[460px] top-[87px]">Zone C</p>
         <p className="absolute body-md-heavy left-[630px] top-[87px]">Zone D</p>
         
         <p className="absolute body-md-heavy left-[calc(50%-17.5px)] top-[25px]">EAST</p>

         {/* Zones Container */}
         <div className="absolute content-stretch flex gap-[2px] items-center left-[calc(50%+0.5px)] top-[131px] translate-x-[-50%]">
           {/* Zone A */}
           <ZoneGroup 
               leftSeats={["106", "107", "108"]}
               rightSeats={["105", "104", "103", "102"]}
               data={finalStatuses}
               isAdmin={isAdmin}
           />
           {/* Zone B */}
           <ZoneGroup 
               leftSeats={["98", "99", "100", "101"]}
               rightSeats={["97", "96", "95", "94"]}
               data={finalStatuses}
               isAdmin={isAdmin}
           />
           {/* Zone C */}
           <ZoneGroup 
               leftSeats={["90", "91", "92", "93"]}
               rightSeats={["89", "88", "87", "86"]}
               data={finalStatuses}
               isAdmin={isAdmin}
           />
           {/* Zone D */}
           <ZoneGroup 
               leftSeats={["82", "83", "84", "85"]}
               rightSeats={["81", "80", "79", "78"]}
               data={finalStatuses}
               isAdmin={isAdmin}
           />
         </div>

         {/* Legend */}
         <div className="absolute content-stretch flex gap-[40px] items-center left-1/2 top-[521px] translate-x-[-50%]">
           <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
             <div className="bg-[#d3d5da] rounded-[4px] shrink-0 size-[16px]" />
             <p className="font-[family-name:var(--font-primary)] leading-[normal] not-italic relative shrink-0 text-[#464a53] text-[12px] text-nowrap">Available</p>
           </div>
           <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
             <div className="bg-[#005198] rounded-[4px] shrink-0 size-[16px]" />
             <p className="font-[family-name:var(--font-primary)] leading-[normal] not-italic relative shrink-0 text-[#464a53] text-[12px] text-nowrap">Occupied</p>
           </div>
           <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
             <div className="bg-[#f97316] rounded-[4px] shrink-0 size-[16px]" />
             <p className="font-[family-name:var(--font-primary)] leading-[normal] not-italic relative shrink-0 text-[#464a53] text-[12px] text-nowrap">My karmabhoomi</p>
           </div>
         </div>

       </div>
    </div>
  );
}
