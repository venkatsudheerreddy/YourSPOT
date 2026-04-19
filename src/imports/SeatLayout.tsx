import svgPaths from "./svg-9fdyjmll5y";

function Frame() {
  return (
    <div className="h-[32px] leading-[normal] not-italic relative shrink-0 text-center text-nowrap w-[36px]">
      <p className="absolute font-['Poppins:Regular',sans-serif] left-[18px] text-[#464a53] text-[12px] top-0 translate-x-[-50%]">11BWS</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] left-[24.5px] text-[#1b1b23] text-[14px] top-[13px] translate-x-[-50%]">16A</p>
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
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Seats">
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
    <div className="h-[32px] leading-[normal] not-italic relative shrink-0 text-center text-nowrap w-[36px]">
      <p className="absolute font-['Poppins:Regular',sans-serif] left-[18.5px] text-[#464a53] text-[12px] top-0 translate-x-[-50%]">12CWS</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] left-[24px] text-[#1b1b23] text-[14px] top-[13px] translate-x-[-50%]">17B</p>
    </div>
  );
}

function Chair1() {
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

function Seats1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Seats">
      <Frame1 />
      <div className="bg-white h-[80px] relative rounded-[4px] shrink-0 w-[40px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Chair1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[32px] leading-[normal] not-italic relative shrink-0 text-center text-nowrap w-[36px]">
      <p className="absolute font-['Poppins:Regular',sans-serif] left-[18.5px] text-[#464a53] text-[12px] top-0 translate-x-[-50%]">13DWS</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] left-[24.5px] text-[#1b1b23] text-[14px] top-[13px] translate-x-[-50%]">18C</p>
    </div>
  );
}

function Chair2() {
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

function Seats2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Seats">
      <Frame2 />
      <div className="bg-white h-[80px] relative rounded-[4px] shrink-0 w-[40px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Chair2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative shrink-0 w-[136px]">
      <Seats />
      <Seats1 />
      <Seats2 />
    </div>
  );
}

function Chair3() {
  return (
    <div className="relative size-[32px]" data-name="Chair">
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

function Frame8() {
  return (
    <div className="h-[32px] leading-[normal] not-italic relative shrink-0 text-center text-nowrap w-[36px]">
      <p className="absolute font-['Poppins:Regular',sans-serif] left-[18px] text-[#464a53] text-[12px] top-0 translate-x-[-50%]">11BWS</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] left-[12.5px] text-[#1b1b23] text-[14px] top-[13px] translate-x-[-50%]">16A</p>
    </div>
  );
}

function Seats3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Seats">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Chair3 />
        </div>
      </div>
      <div className="bg-white h-[80px] relative rounded-[4px] shrink-0 w-[40px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Frame8 />
    </div>
  );
}

function Chair4() {
  return (
    <div className="relative size-[32px]" data-name="Chair">
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

function Frame9() {
  return (
    <div className="h-[32px] leading-[normal] not-italic relative shrink-0 text-center text-nowrap w-[36px]">
      <p className="absolute font-['Poppins:Regular',sans-serif] left-[18.5px] text-[#464a53] text-[12px] top-0 translate-x-[-50%]">12CWS</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] left-[12px] text-[#1b1b23] text-[14px] top-[13px] translate-x-[-50%]">17B</p>
    </div>
  );
}

function Seats4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Seats">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Chair4 />
        </div>
      </div>
      <div className="bg-white h-[80px] relative rounded-[4px] shrink-0 w-[40px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Frame9 />
    </div>
  );
}

function Chair5() {
  return (
    <div className="relative size-[32px]" data-name="Chair">
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

function Frame10() {
  return (
    <div className="h-[32px] leading-[normal] not-italic relative shrink-0 text-center text-nowrap w-[36px]">
      <p className="absolute font-['Poppins:Regular',sans-serif] left-[18.5px] text-[#464a53] text-[12px] top-0 translate-x-[-50%]">13DWS</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] left-[12.5px] text-[#1b1b23] text-[14px] top-[13px] translate-x-[-50%]">18C</p>
    </div>
  );
}

function Seats5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Seats">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Chair5 />
        </div>
      </div>
      <div className="bg-white h-[80px] relative rounded-[4px] shrink-0 w-[40px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Frame10 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative shrink-0 w-[136px]">
      <Seats3 />
      <Seats4 />
      <Seats5 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Chair6() {
  return (
    <div className="relative size-[32px]" data-name="Chair">
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

function Frame11() {
  return (
    <div className="h-[32px] leading-[normal] not-italic relative text-center text-nowrap w-[36px]">
      <p className="absolute font-['Poppins:Regular',sans-serif] left-[18px] text-[#464a53] text-[12px] top-0 translate-x-[-50%]">11BWS</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] left-[18.5px] text-[#1b1b23] text-[14px] top-[13px] translate-x-[-50%]">16A</p>
    </div>
  );
}

function Seats6() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative" data-name="Seats">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Chair6 />
        </div>
      </div>
      <div className="bg-white h-[80px] relative rounded-[4px] shrink-0 w-[40px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="flex h-[36px] items-center justify-center relative shrink-0 w-[32px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[96px] py-0 relative w-full">
          <div className="flex h-[116px] items-center justify-center relative shrink-0 w-[80px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[270deg]">
              <Seats6 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[40px] grow items-start max-w-[400px] min-h-px min-w-px relative shrink-0">
      <Frame5 />
      <Frame7 />
    </div>
  );
}

function SeatLayout() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Seat layout">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[16px] py-[40px] relative size-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

export default function SeatLayout1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative size-full" data-name="Seat layout">
      <SeatLayout />
    </div>
  );
}