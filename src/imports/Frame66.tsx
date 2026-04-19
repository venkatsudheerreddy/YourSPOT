import svgPaths from "./svg-jpxtj1h1bx";

function SeatNumber() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">106</p>
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

function Seat() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Seat 2">
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
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">107</p>
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

function Seat1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Seat 3">
      <SeatNumber1 />
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Chair1 />
    </div>
  );
}

function SeatNumber2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">108</p>
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

function Seat7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Seat 9">
      <SeatNumber2 />
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Chair2 />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative shrink-0" data-name="Left">
      <Seat />
      <Seat1 />
      <Seat7 />
    </div>
  );
}

function Chair3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Chair">
      <div className="absolute inset-[-1.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
          <g id="Chair">
            <path d={svgPaths.p38d125c0} fill="var(--fill-0, white)" id="Rectangle 3" stroke="var(--stroke-0, #464A53)" />
            <line id="Line 1" stroke="var(--stroke-0, #464A53)" x1="0.5" x2="32.5" y1="8" y2="8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SeatNumber3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center w-full">105</p>
    </div>
  );
}

function Seats() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0" data-name="Seats">
      <Chair3 />
      <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-[64px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <SeatNumber3 />
    </div>
  );
}

function Seat6() {
  return (
    <div className="content-stretch flex items-center pb-[16px] pl-0 pr-[32px] pt-0 relative shrink-0" data-name="Seat 8">
      <Seats />
    </div>
  );
}

function Chair4() {
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

function SeatNumber4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">104</p>
    </div>
  );
}

function Seat3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0 w-full" data-name="Seat 5">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Chair4 />
        </div>
      </div>
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <SeatNumber4 />
    </div>
  );
}

function Chair5() {
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

function SeatNumber5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">103</p>
    </div>
  );
}

function Seat4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0 w-full" data-name="Seat 6">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Chair5 />
        </div>
      </div>
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <SeatNumber5 />
    </div>
  );
}

function Chair6() {
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

function SeatNumber6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">102</p>
    </div>
  );
}

function Seat5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0 w-full" data-name="Seat 7">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Chair6 />
        </div>
      </div>
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <SeatNumber6 />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end p-[8px] relative shrink-0" data-name="Right">
      <Seat6 />
      <Seat3 />
      <Seat4 />
      <Seat5 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-[358px]">
      <Left />
      <Right />
    </div>
  );
}

function SeatLayout() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Seat layout">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center p-[16px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function SeatLayout1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Seat layout">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[16px] py-[40px] relative size-full">
          <SeatLayout />
        </div>
      </div>
    </div>
  );
}

function ZoneA() {
  return (
    <div className="absolute bg-white h-[844px] left-[197px] top-[293px] w-[390px]" data-name="Zone A">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <SeatLayout1 />
      </div>
      <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SeatNumber7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">98</p>
    </div>
  );
}

function Chair7() {
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

function Seat2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Seat 2">
      <SeatNumber7 />
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Chair7 />
    </div>
  );
}

function SeatNumber8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">99</p>
    </div>
  );
}

function Chair8() {
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

function Seat8() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Seat 10">
      <SeatNumber8 />
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Chair8 />
    </div>
  );
}

function SeatNumber9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">100</p>
    </div>
  );
}

function Chair9() {
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

function Seat9() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Seat 3">
      <SeatNumber9 />
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Chair9 />
    </div>
  );
}

function SeatNumber10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">101</p>
    </div>
  );
}

function Chair10() {
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

function Seat10() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Seat 9">
      <SeatNumber10 />
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Chair10 />
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative shrink-0" data-name="Left">
      <Seat2 />
      <Seat8 />
      <Seat9 />
      <Seat10 />
    </div>
  );
}

function Chair11() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Chair">
      <div className="absolute inset-[-1.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
          <g id="Chair">
            <path d={svgPaths.p38d125c0} fill="var(--fill-0, white)" id="Rectangle 3" stroke="var(--stroke-0, #464A53)" />
            <line id="Line 1" stroke="var(--stroke-0, #464A53)" x1="0.5" x2="32.5" y1="8" y2="8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SeatNumber11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center w-full">97</p>
    </div>
  );
}

function Seats1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0" data-name="Seats">
      <Chair11 />
      <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-[64px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <SeatNumber11 />
    </div>
  );
}

function Seat11() {
  return (
    <div className="content-stretch flex items-center pb-[16px] pl-0 pr-[32px] pt-0 relative shrink-0" data-name="Seat 8">
      <Seats1 />
    </div>
  );
}

function Chair12() {
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

function SeatNumber12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">96</p>
    </div>
  );
}

function Seat12() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0 w-full" data-name="Seat 5">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Chair12 />
        </div>
      </div>
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <SeatNumber12 />
    </div>
  );
}

function Chair13() {
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

function SeatNumber13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">95</p>
    </div>
  );
}

function Seat13() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0 w-full" data-name="Seat 6">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Chair13 />
        </div>
      </div>
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <SeatNumber13 />
    </div>
  );
}

function Chair14() {
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

function SeatNumber14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">94</p>
    </div>
  );
}

function Seat14() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0 w-full" data-name="Seat 7">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Chair14 />
        </div>
      </div>
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <SeatNumber14 />
    </div>
  );
}

function Right1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end p-[8px] relative shrink-0" data-name="Right">
      <Seat11 />
      <Seat12 />
      <Seat13 />
      <Seat14 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-[358px]">
      <Left1 />
      <Right1 />
    </div>
  );
}

function SeatLayout2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Seat layout">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center p-[16px] relative size-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function SeatLayout3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Seat layout">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[16px] py-[40px] relative size-full">
          <SeatLayout2 />
        </div>
      </div>
    </div>
  );
}

function ZoneB() {
  return (
    <div className="absolute bg-white h-[844px] left-[627px] top-[293px] w-[390px]" data-name="Zone B">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <SeatLayout3 />
      </div>
      <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SeatNumber15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">90</p>
    </div>
  );
}

function Chair15() {
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

function Seat15() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Seat 2">
      <SeatNumber15 />
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Chair15 />
    </div>
  );
}

function SeatNumber16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">91</p>
    </div>
  );
}

function Chair16() {
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

function Seat16() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Seat 10">
      <SeatNumber16 />
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Chair16 />
    </div>
  );
}

function SeatNumber17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">92</p>
    </div>
  );
}

function Chair17() {
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

function Seat17() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Seat 3">
      <SeatNumber17 />
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Chair17 />
    </div>
  );
}

function SeatNumber18() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">93</p>
    </div>
  );
}

function Chair18() {
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

function Seat18() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Seat 9">
      <SeatNumber18 />
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Chair18 />
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative shrink-0" data-name="Left">
      <Seat15 />
      <Seat16 />
      <Seat17 />
      <Seat18 />
    </div>
  );
}

function Chair19() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Chair">
      <div className="absolute inset-[-1.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
          <g id="Chair">
            <path d={svgPaths.p38d125c0} fill="var(--fill-0, white)" id="Rectangle 3" stroke="var(--stroke-0, #464A53)" />
            <line id="Line 1" stroke="var(--stroke-0, #464A53)" x1="0.5" x2="32.5" y1="8" y2="8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SeatNumber19() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center w-full">89</p>
    </div>
  );
}

function Seats2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0" data-name="Seats">
      <Chair19 />
      <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-[64px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <SeatNumber19 />
    </div>
  );
}

function Seat19() {
  return (
    <div className="content-stretch flex items-center pb-[16px] pl-0 pr-[32px] pt-0 relative shrink-0" data-name="Seat 8">
      <Seats2 />
    </div>
  );
}

function Chair20() {
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

function SeatNumber20() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">88</p>
    </div>
  );
}

function Seat20() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0 w-full" data-name="Seat 5">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Chair20 />
        </div>
      </div>
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <SeatNumber20 />
    </div>
  );
}

function Chair21() {
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

function SeatNumber21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">87</p>
    </div>
  );
}

function Seat21() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0 w-full" data-name="Seat 6">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Chair21 />
        </div>
      </div>
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <SeatNumber21 />
    </div>
  );
}

function Chair22() {
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

function SeatNumber22() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">86</p>
    </div>
  );
}

function Seat22() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0 w-full" data-name="Seat 7">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Chair22 />
        </div>
      </div>
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <SeatNumber22 />
    </div>
  );
}

function Right2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end p-[8px] relative shrink-0" data-name="Right">
      <Seat19 />
      <Seat20 />
      <Seat21 />
      <Seat22 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-[358px]">
      <Left2 />
      <Right2 />
    </div>
  );
}

function SeatLayout4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Seat layout">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center p-[16px] relative size-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function SeatLayout5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Seat layout">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[16px] py-[40px] relative size-full">
          <SeatLayout4 />
        </div>
      </div>
    </div>
  );
}

function ZoneC() {
  return (
    <div className="absolute bg-white h-[844px] left-[1057px] top-[293px] w-[390px]" data-name="Zone C">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <SeatLayout5 />
      </div>
      <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Chair23() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Chair">
      <div className="absolute inset-[-1.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
          <g id="Chair">
            <path d={svgPaths.p38d125c0} fill="var(--fill-0, white)" id="Rectangle 3" stroke="var(--stroke-0, #464A53)" />
            <line id="Line 1" stroke="var(--stroke-0, #464A53)" x1="0.5" x2="32.5" y1="8" y2="8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SeatNumber23() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center w-full">82</p>
    </div>
  );
}

function Seat23() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 w-full" data-name="Seat 2">
      <Chair23 />
      <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-[64px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <SeatNumber23 />
    </div>
  );
}

function SeatNumber24() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">83</p>
    </div>
  );
}

function Chair24() {
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

function Seat24() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Seat 10">
      <SeatNumber24 />
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Chair24 />
    </div>
  );
}

function SeatNumber25() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">84</p>
    </div>
  );
}

function Chair25() {
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

function Seat25() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Seat 3">
      <SeatNumber25 />
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Chair25 />
    </div>
  );
}

function SeatNumber26() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">85</p>
    </div>
  );
}

function Chair26() {
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

function Seat26() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Seat 9">
      <SeatNumber26 />
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Chair26 />
    </div>
  );
}

function Left3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative shrink-0" data-name="Left">
      <Seat23 />
      <Seat24 />
      <Seat25 />
      <Seat26 />
    </div>
  );
}

function Chair27() {
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

function SeatNumber27() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">81</p>
    </div>
  );
}

function Seats3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Seats">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Chair27 />
        </div>
      </div>
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <SeatNumber27 />
    </div>
  );
}

function Chair28() {
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

function SeatNumber28() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">80</p>
    </div>
  );
}

function Seat27() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0 w-full" data-name="Seat 5">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Chair28 />
        </div>
      </div>
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <SeatNumber28 />
    </div>
  );
}

function Chair29() {
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

function SeatNumber29() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">79</p>
    </div>
  );
}

function Seat28() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0 w-full" data-name="Seat 6">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Chair29 />
        </div>
      </div>
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <SeatNumber29 />
    </div>
  );
}

function Chair30() {
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

function SeatNumber30() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[40px]" data-name="Seat number">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">78</p>
    </div>
  );
}

function Seat29() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0 w-full" data-name="Seat 7">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Chair30 />
        </div>
      </div>
      <div className="bg-white h-[64px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <SeatNumber30 />
    </div>
  );
}

function Right3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end p-[8px] relative shrink-0" data-name="Right">
      <Seats3 />
      <Seat27 />
      <Seat28 />
      <Seat29 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-[358px]">
      <Left3 />
      <Right3 />
    </div>
  );
}

function SeatLayout6() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Seat layout">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center p-[16px] relative size-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function SeatLayout7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Seat layout">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[16px] py-[40px] relative size-full">
          <SeatLayout6 />
        </div>
      </div>
    </div>
  );
}

function ZoneD() {
  return (
    <div className="absolute bg-white h-[844px] left-[1487px] top-[293px] w-[390px]" data-name="Zone D">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <SeatLayout7 />
      </div>
      <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex font-['Poppins:SemiBold',sans-serif] items-center justify-between leading-[normal] left-[197px] not-italic px-[152px] py-[8px] text-[#1b1b23] text-[22px] text-center text-nowrap top-[244px] w-[1680px]">
      <p className="relative shrink-0">Zone A</p>
      <p className="relative shrink-0">Zone B</p>
      <p className="relative shrink-0">ZoneC</p>
      <p className="relative shrink-0">Zone D</p>
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="bg-white relative size-full">
      <ZoneA />
      <ZoneB />
      <ZoneC />
      <ZoneD />
      <Frame4 />
    </div>
  );
}