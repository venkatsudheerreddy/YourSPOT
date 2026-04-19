import React, { useMemo } from "react";
import svgPaths from "../imports/svg-agf4ifveay";

interface DirectionMapProps {
  targetZone: string;
  targetSeatId: string;
  isAdmin?: boolean;
}

// ------------------------------------------------------------------
// HELPERS & CONSTANTS
// ------------------------------------------------------------------

const CONTAINER_WIDTH = 800;
const CENTER_X = CONTAINER_WIDTH / 2;

const ZONE_WIDTH = 164;
const ZONE_GAP = 2;
const ROW_HEIGHT = 74;

// Total Width of the Zones cluster
// 4 Zones * 164 + 3 Gaps * 2 = 656 + 6 = 662
const ZONES_TOTAL_WIDTH = 662;
const ZONES_START_X = CENTER_X - (ZONES_TOTAL_WIDTH / 2); // 69px

const ZONE_X_OFFSETS: Record<string, number> = {
  "A": ZONES_START_X,
  "B": ZONES_START_X + ZONE_WIDTH + ZONE_GAP,
  "C": ZONES_START_X + (ZONE_WIDTH + ZONE_GAP) * 2,
  "D": ZONES_START_X + (ZONE_WIDTH + ZONE_GAP) * 3,
};

const CORRIDOR_Y = 483.5;
const ZONES_TOP_Y = 131;

// ------------------------------------------------------------------
// SUB-COMPONENTS
// ------------------------------------------------------------------

function SeatNumber({ text, isTarget }: { text: string; isTarget: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[24px]">
      <p className="font-[family-name:var(--font-primary)] font-semibold leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">
        {text}
      </p>
    </div>
  );
}

function SeatBox({ isTarget }: { isTarget: boolean }) {
  return (
    <div 
      className={`${isTarget ? "bg-primary" : "bg-[#d3d5da]"} h-[64px] rounded-[4px] shrink-0 w-[32px] transition-colors duration-300`} 
    />
  );
}

function DeskLeft({ 
  seatId, 
  isTarget 
}: { 
  seatId: string; 
  isTarget: boolean;
}) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      {/* Content: Box + Text */}
      <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-[4px] mt-[5px] relative z-10">
        <SeatBox isTarget={isTarget} />
        <SeatNumber text={seatId} isTarget={isTarget} />
      </div>

      {/* Desk SVG */}
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
  isTarget 
}: { 
  seatId: string; 
  isTarget: boolean;
}) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      {/* Content: Text + Box */}
      <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-0 mt-[5px] relative z-10">
        <SeatNumber text={seatId} isTarget={isTarget} />
        <SeatBox isTarget={isTarget} />
      </div>

      {/* Desk SVG */}
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

function Zone({
  leftSeats,
  rightSeats,
  targetSeatId
}: {
  leftSeats: string[];
  rightSeats: string[];
  targetSeatId: string;
}) {
  return (
    <div className="content-stretch flex gap-[40px] items-end relative shrink-0">
      {/* Left Column */}
      <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0">
        {leftSeats.map(id => (
          <DeskLeft key={id} seatId={id} isTarget={id === targetSeatId} />
        ))}
      </div>

      {/* Right Column */}
      <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0">
        {rightSeats.map(id => (
          <DeskRight key={id} seatId={id} isTarget={id === targetSeatId} />
        ))}
      </div>
    </div>
  );
}

function DynamicPath({ 
  targetZone, 
  targetSeatId,
  seatsByZone
}: { 
  targetZone: string; 
  targetSeatId: string; 
  seatsByZone: Record<string, { left: string[]; right: string[] }>;
}) {
  const zoneSeats = seatsByZone[targetZone];
  if (!zoneSeats) return null;

  let side: "left" | "right" = "left";
  let rowIndex = zoneSeats.left.indexOf(targetSeatId);
  
  if (rowIndex === -1) {
    rowIndex = zoneSeats.right.indexOf(targetSeatId);
    side = "right";
  }

  if (rowIndex === -1) return null;

  // Calculate Geometry
  const zoneStartX = ZONE_X_OFFSETS[targetZone];
  
  // Gap Center
  // LeftColWidth = 62. Gap = 40. Half Gap = 20.
  // Center = 62 + 20 = 82.
  const verticalLineX = zoneStartX + 82;

  // Seat Target Y
  // Account for items-end alignment:
  // If a column has fewer than 4 items, it is pushed down.
  const maxRows = 4;
  const colRows = zoneSeats[side].length;
  const topOffset = (maxRows - colRows) * ROW_HEIGHT;
  
  // Center of the seat box is 37px from the top of the Desk row
  const seatCenterY = ZONES_TOP_Y + topOffset + (rowIndex * ROW_HEIGHT) + 37;

  // Target X connection
  // Path curve should stop before the seat number text to leave a gap.
  // Left Side: Curve ends at (verticalLineX - radius). 
  // Left Col End (Text Right Edge) is at verticalLineX - 20 (half gap).
  // We want a gap. With Radius 15, EndX = verticalLineX - 15.
  // Text Edge = verticalLineX - 20.
  // Gap = 5px.
  
  // Right Side: Curve ends at (verticalLineX + radius).
  // Text Edge = verticalLineX + 20.
  // Gap = 5px.
  
  const radius = 15;
  const direction = side === "left" ? -1 : 1;
  const targetX = verticalLineX + (direction * radius);

  const d = `
    M ${verticalLineX} ${CORRIDOR_Y}
    L ${verticalLineX} ${seatCenterY + radius}
    Q ${verticalLineX} ${seatCenterY} ${targetX} ${seatCenterY}
  `;

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <svg className="block size-full overflow-visible">
        <path 
          d={d} 
          stroke="var(--primary)" 
          strokeWidth="3" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
    </div>
  );
}

// ------------------------------------------------------------------
// MAIN COMPONENT
// ------------------------------------------------------------------

export function DirectionMap({ targetZone, targetSeatId, isAdmin }: DirectionMapProps) {
  const seatsByZone = useMemo(() => ({
    "A": { left: ["106", "107", "108"], right: ["105", "104", "103", "102"] },
    "B": { left: ["98", "99", "100", "101"], right: ["97", "96", "95", "94"] },
    "C": { left: ["90", "91", "92", "93"], right: ["89", "88", "87", "86"] },
    "D": { left: ["82", "83", "84", "85"], right: ["81", "80", "79", "78"] },
  }), []);

  const safeZone = targetZone.replace("Zone ", "").trim();
  
  // Calculate Zoom & Pan to center the WHOLE layout (Zone A to Zone D)
  // Content Width = 662px. Container Width = 800px.
  // We use scale 1.15 to fit the full 662px width into 800px with ~20px padding on sides.
  // (662 * 1.15 = 761.3px)
  const scale = 1.15;
  
  // The layout content is already centered around X=400 in the coordinate system
  // See: ZONES_START_X = CENTER_X - (ZONES_TOTAL_WIDTH / 2) where CENTER_X = 400
  const mapCenterX = 400; 
  const mapCenterY = 290; // Center vertically around the middle of the drawn content
  
  const tx = 400 - (mapCenterX * scale);
  const ty = 320 - (mapCenterY * scale);

  return (
    <div className="bg-white relative w-[800px] h-[600px] mx-auto overflow-hidden select-none" data-name="Direction layout">
      
      <div 
        className="w-full h-full absolute inset-0 origin-top-left transition-transform duration-500"
        style={{ transform: `translate(${tx}px, ${ty}px) scale(${scale})` }}
      >
        {/* Labels */}
        <p className="absolute body-md-heavy left-[120px]  top-[87px]">Zone A</p>
        <p className="absolute body-md-heavy left-[300px]  top-[87px]">Zone B</p>
        <p className="absolute body-md-heavy left-[460px]  top-[87px]">Zone C</p>
        <p className="absolute body-md-heavy left-[630px]  top-[87px]">Zone D</p>
        <p className="absolute body-md-heavy left-[calc(50%-17.5px)] top-[25px]">EAST</p>

        {/* Zones Container */}
        <div className="absolute content-stretch flex gap-[2px] items-center left-[50%] top-[131px] translate-x-[-50%]">
          {Object.keys(seatsByZone).map(z => (
            <Zone 
              key={z} 
              leftSeats={seatsByZone[z as keyof typeof seatsByZone].left}
              rightSeats={seatsByZone[z as keyof typeof seatsByZone].right}
              targetSeatId={targetSeatId}
            />
          ))}
        </div>

        {/* Dynamic Path Overlay */}
        <DynamicPath 
            targetZone={safeZone}
            targetSeatId={targetSeatId}
            seatsByZone={seatsByZone}
        />

        {/* Corridor Line */}
        <div className="absolute h-0 left-[50%] top-[491.5px] translate-x-[-50%] w-[672px]" data-name="Corridor">
          <div className="absolute inset-[-16px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 672 16">
              <line stroke="var(--primary)" strokeWidth="16" x2="672" y1="8" y2="8" />
            </svg>
          </div>
        </div>
      </div>

    </div>
  );
}
