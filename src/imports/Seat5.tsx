import svgPaths from "./svg-xseu80vi9p";

function Chair() {
  return (
    <div className="relative size-[32px]" data-name="Chair">
      <div className="absolute inset-[-1.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
          <g id="Chair">
            <path d={svgPaths.p23cbdd00} fill="var(--fill-0, white)" id="Rectangle 3" stroke="var(--stroke-0, #464A53)" />
            <line id="Line 1" stroke="var(--stroke-0, #464A53)" x1="9" x2="9" y1="0.5" y2="32.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SeatNumber() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center leading-[normal] not-italic relative shrink-0 text-center text-nowrap w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[#1b1b23] text-[14px]">96</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#464a53] text-[12px]">4K</p>
    </div>
  );
}

export default function Seat() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-end relative size-full" data-name="Seat 5">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Chair />
        </div>
      </div>
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <SeatNumber />
    </div>
  );
}