import svgPaths from "./svg-ce519y80xc";

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center leading-[normal] not-italic relative shrink-0 text-nowrap w-[36px]">
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#464a53] text-[12px] text-center">11BWS</p>
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[#1b1b23] text-[14px]">16</p>
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
    <div className="absolute content-stretch flex gap-[6px] h-[80px] items-center left-[24px] top-[48px] w-[120px]" data-name="Seats">
      <Frame />
      <div className="bg-white h-[80px] relative rounded-[4px] shrink-0 w-[40px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Chair />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center leading-[normal] not-italic relative shrink-0 text-nowrap w-[36px]">
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#464a53] text-[12px] text-center">11BWS</p>
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[#1b1b23] text-[14px]">16</p>
    </div>
  );
}

function Chair1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Chair">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Chair">
          <path d={svgPaths.p31178100} fill="var(--fill-0, #0284C7)" id="Rectangle 7" />
          <line id="Line 3" stroke="var(--stroke-0, #D3D5DA)" x1="24.5" x2="24.5" y2="32" />
        </g>
      </svg>
    </div>
  );
}

function Seats1() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[80px] items-center left-[24px] top-[136px] w-[120px]" data-name="Seats">
      <Frame1 />
      <div className="bg-[#0284c7] h-[80px] rounded-[4px] shadow-[0px_2px_12px_0px_rgba(2,132,199,0.5)] shrink-0 w-[40px]" data-name="Desk" />
      <Chair1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center leading-[normal] not-italic relative shrink-0 text-nowrap w-[36px]">
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#464a53] text-[12px] text-center">11BWS</p>
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[#1b1b23] text-[14px]">16</p>
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
    <div className="absolute content-stretch flex gap-[6px] h-[80px] items-center left-[24px] top-[224px] w-[120px]" data-name="Seats">
      <Frame2 />
      <div className="bg-[#d7d8db] h-[80px] rounded-[4px] shrink-0 w-[40px]" data-name="Desk" />
      <Chair2 />
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
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[14px] text-black text-nowrap top-[254px]">Occupied</p>
    </div>
  );
}