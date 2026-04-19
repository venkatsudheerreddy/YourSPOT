import svgPaths from "./svg-96t2ac6eba";

function SeatNumber() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">100</p>
    </div>
  );
}

function Chair() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Chair">
      <div className="absolute inset-[-1.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
          <g id="Chair">
            <path d={svgPaths.p2afc9b80} fill="var(--fill-0, white)" id="Rectangle 3" stroke="var(--stroke-0, #464A53)" />
            <line id="Line 1" stroke="var(--stroke-0, #464A53)" x1="25" x2="25" y1="0.5" y2="32.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Seats() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[24px] top-[48px] w-[120px]" data-name="Seats">
      <SeatNumber />
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Chair />
    </div>
  );
}

function SeatNumber1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">100</p>
    </div>
  );
}

function Chair1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Chair">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Chair">
          <path d={svgPaths.p31178100} fill="var(--fill-0, #9961F7)" id="Rectangle 7" />
          <line id="Line 3" stroke="var(--stroke-0, #D3D5DA)" x1="24.5" x2="24.5" y2="32" />
        </g>
      </svg>
    </div>
  );
}

function Seats1() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[24px] top-[136px] w-[120px]" data-name="Seats">
      <SeatNumber1 />
      <div className="bg-[#9961f7] h-[64px] rounded-[4px] shadow-[0px_2px_12px_0px_rgba(153,97,247,0.5)] shrink-0 w-[32px]" data-name="Desk" />
      <Chair1 />
    </div>
  );
}

function SeatNumber2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">100</p>
    </div>
  );
}

function Chair2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Chair">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Chair">
          <path d={svgPaths.p31178100} fill="var(--fill-0, #D7D8DB)" id="Rectangle 6" />
          <line id="Line 2" stroke="var(--stroke-0, #D3D5DA)" x1="24.5" x2="24.5" y2="32" />
        </g>
      </svg>
    </div>
  );
}

function Seats2() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[24px] top-[224px] w-[120px]" data-name="Seats">
      <SeatNumber2 />
      <div className="bg-[#d7d8db] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Desk" />
      <Chair2 />
    </div>
  );
}

function SeatNumber3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <div className="flex h-[24px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "23.359375", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] w-full">
          <p className="font-['Poppins:SemiBold',sans-serif] h-[40px] leading-[normal] not-italic relative text-[#1b1b23] text-[14px] text-center w-full">100</p>
        </div>
      </div>
    </div>
  );
}

function Chair3() {
  return (
    <div className="relative size-[32px]" data-name="Chair">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Chair">
          <path d={svgPaths.p31178100} fill="var(--fill-0, #D7D8DB)" id="Rectangle 6" />
          <line id="Line 2" stroke="var(--stroke-0, #D3D5DA)" x1="24.5" x2="24.5" y2="32" />
        </g>
      </svg>
    </div>
  );
}

function Seats3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative" data-name="Seats">
      <SeatNumber3 />
      <div className="bg-[#d7d8db] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Desk" />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Chair3 />
        </div>
      </div>
    </div>
  );
}

function Chair4() {
  return (
    <div className="relative size-[32px]" data-name="Chair">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Chair">
          <path d={svgPaths.pd15cf00} fill="var(--fill-0, #D7D8DB)" id="Rectangle 6" />
          <line id="Line 2" stroke="var(--stroke-0, #D3D5DA)" x1="8.5" x2="8.5" y2="32" />
        </g>
      </svg>
    </div>
  );
}

function SeatNumber4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">100</p>
    </div>
  );
}

function Seats4() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[211px] top-[425px]" data-name="Seats">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Chair4 />
        </div>
      </div>
      <div className="bg-[#d7d8db] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Desk" />
      <SeatNumber4 />
    </div>
  );
}

export default function SeatStatus() {
  return (
    <div className="bg-white relative size-full" data-name="Seat status">
      <Seats />
      <Seats1 />
      <Seats2 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[14px] text-black text-nowrap top-[78px]">Empty</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[14px] text-black text-nowrap top-[166px]">Selected</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[14px] text-black text-nowrap top-[254px]">Occupied - left</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[40px] not-italic text-[14px] text-black text-nowrap top-[382px]">Occupied - down</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[215px] not-italic text-[14px] text-black text-nowrap top-[382px]">Occupied - right</p>
      <div className="absolute flex h-[42px] items-center justify-center left-[85.5px] top-[235px] translate-x-[-50%] w-[15px]" style={{ "--transform-inner-width": "37.8125", "--transform-inner-height": "11" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative text-[10px] text-black text-center text-nowrap">Sudheer</p>
        </div>
      </div>
      <div className="absolute flex h-[116px] items-center justify-center left-[64px] top-[409px] w-[64px]" style={{ "--transform-inner-width": "23.359375", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Seats3 />
        </div>
      </div>
      <Seats4 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[96px] not-italic text-[10px] text-black text-center text-nowrap top-[457px] translate-x-[-50%]">Sudheer</p>
      <div className="absolute flex h-[42px] items-center justify-center left-[264.5px] top-[437px] translate-x-[-50%] w-[15px]" style={{ "--transform-inner-width": "37.8125", "--transform-inner-height": "11" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative text-[10px] text-black text-center text-nowrap">Sudheer</p>
        </div>
      </div>
    </div>
  );
}