import svgPaths from "./svg-agf4ifveay";

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">106</p>
    </div>
  );
}

function BookSeat() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-[4px] mt-[5px] relative" data-name="Book seat 2">
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
      <Frame />
    </div>
  );
}

function Desk2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Desk 110">
      <BookSeat />
      <div className="[grid-area:1_/_1] h-[74px] ml-0 mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3850f100} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">107</p>
    </div>
  );
}

function BookSeat1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-[4px] mt-[5px] relative" data-name="Book seat 2">
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
      <Frame1 />
    </div>
  );
}

function Desk() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Desk 108">
      <BookSeat1 />
      <div className="[grid-area:1_/_1] h-[74px] ml-0 mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3850f100} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">108</p>
    </div>
  );
}

function BookSeat2() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-[4px] mt-[5px] relative" data-name="Book seat 2">
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
      <Frame2 />
    </div>
  );
}

function Desk1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Desk 109">
      <BookSeat2 />
      <div className="[grid-area:1_/_1] h-[74px] ml-0 mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3850f100} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0">
      <Desk2 />
      <Desk />
      <Desk1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">105</p>
    </div>
  );
}

function BookSeat3() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-0 mt-[5px] relative" data-name="Book seat 2">
      <Frame3 />
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <BookSeat3 />
      <div className="[grid-area:1_/_1] h-[74px] ml-[38px] mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3ebc1a00} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">104</p>
    </div>
  );
}

function BookSeat4() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-0 mt-[5px] relative" data-name="Book seat 2">
      <Frame4 />
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <BookSeat4 />
      <div className="[grid-area:1_/_1] h-[74px] ml-[38px] mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3ebc1a00} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">103</p>
    </div>
  );
}

function BookSeat5() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-0 mt-[5px] relative" data-name="Book seat 2">
      <Frame6 />
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <BookSeat5 />
      <div className="[grid-area:1_/_1] h-[74px] ml-[38px] mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3ebc1a00} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">102</p>
    </div>
  );
}

function BookSeat6() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-0 mt-[5px] relative" data-name="Book seat 2">
      <Frame8 />
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <BookSeat6 />
      <div className="[grid-area:1_/_1] h-[74px] ml-[38px] mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3ebc1a00} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0">
      <Group />
      <Group1 />
      <Group2 />
      <Group3 />
    </div>
  );
}

function ZoneA() {
  return (
    <div className="content-stretch flex gap-[40px] items-end relative shrink-0" data-name="Zone A">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">98</p>
    </div>
  );
}

function BookSeat7() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-[4px] mt-[5px] relative" data-name="Book seat 2">
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
      <Frame9 />
    </div>
  );
}

function Desk3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Desk 107">
      <BookSeat7 />
      <div className="[grid-area:1_/_1] h-[74px] ml-0 mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3850f100} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">99</p>
    </div>
  );
}

function BookSeat8() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-[4px] mt-[5px] relative" data-name="Book seat 2">
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
      <Frame13 />
    </div>
  );
}

function Desk4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Desk 110">
      <BookSeat8 />
      <div className="[grid-area:1_/_1] h-[74px] ml-0 mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3850f100} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">100</p>
    </div>
  );
}

function BookSeat9() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-[4px] mt-[5px] relative" data-name="Book seat 2">
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
      <Frame14 />
    </div>
  );
}

function Desk5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Desk 108">
      <BookSeat9 />
      <div className="[grid-area:1_/_1] h-[74px] ml-0 mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3850f100} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">101</p>
    </div>
  );
}

function BookSeat10() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-[4px] mt-[5px] relative" data-name="Book seat 2">
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
      <Frame15 />
    </div>
  );
}

function Desk6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Desk 109">
      <BookSeat10 />
      <div className="[grid-area:1_/_1] h-[74px] ml-0 mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3850f100} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0">
      <Desk3 />
      <Desk4 />
      <Desk5 />
      <Desk6 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">97</p>
    </div>
  );
}

function BookSeat11() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-0 mt-[5px] relative" data-name="Book seat 2">
      <Frame17 />
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <BookSeat11 />
      <div className="[grid-area:1_/_1] h-[74px] ml-[38px] mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3ebc1a00} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">96</p>
    </div>
  );
}

function BookSeat12() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-0 mt-[5px] relative" data-name="Book seat 2">
      <Frame18 />
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <BookSeat12 />
      <div className="[grid-area:1_/_1] h-[74px] ml-[38px] mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3ebc1a00} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">95</p>
    </div>
  );
}

function Frame7() {
  return <div className="bg-[#005198] h-[64px] rounded-[4px] shrink-0 w-[32px]" />;
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame19 />
      <Frame7 />
    </div>
  );
}

function BookSeat13() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-end ml-0 mt-[5px] relative" data-name="Book seat 2">
      <Frame5 />
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <BookSeat13 />
      <div className="[grid-area:1_/_1] h-[74px] ml-[38px] mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3ebc1a00} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">94</p>
    </div>
  );
}

function BookSeat14() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-0 mt-[5px] relative" data-name="Book seat 2">
      <Frame20 />
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <BookSeat14 />
      <div className="[grid-area:1_/_1] h-[74px] ml-[38px] mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3ebc1a00} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0">
      <Group4 />
      <Group5 />
      <Group6 />
      <Group7 />
    </div>
  );
}

function ZoneA1() {
  return (
    <div className="content-stretch flex gap-[40px] items-end relative shrink-0" data-name="Zone A">
      <Frame16 />
      <Frame21 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">90</p>
    </div>
  );
}

function BookSeat15() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-[4px] mt-[5px] relative" data-name="Book seat 2">
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
      <Frame22 />
    </div>
  );
}

function Desk7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Desk 107">
      <BookSeat15 />
      <div className="[grid-area:1_/_1] h-[74px] ml-0 mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3850f100} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">91</p>
    </div>
  );
}

function BookSeat16() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-[4px] mt-[5px] relative" data-name="Book seat 2">
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
      <Frame23 />
    </div>
  );
}

function Desk8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Desk 110">
      <BookSeat16 />
      <div className="[grid-area:1_/_1] h-[74px] ml-0 mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3850f100} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">92</p>
    </div>
  );
}

function BookSeat17() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-[4px] mt-[5px] relative" data-name="Book seat 2">
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
      <Frame24 />
    </div>
  );
}

function Desk9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Desk 108">
      <BookSeat17 />
      <div className="[grid-area:1_/_1] h-[74px] ml-0 mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3850f100} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">93</p>
    </div>
  );
}

function BookSeat18() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-[4px] mt-[5px] relative" data-name="Book seat 2">
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
      <Frame25 />
    </div>
  );
}

function Desk10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Desk 109">
      <BookSeat18 />
      <div className="[grid-area:1_/_1] h-[74px] ml-0 mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3850f100} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0">
      <Desk7 />
      <Desk8 />
      <Desk9 />
      <Desk10 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">89</p>
    </div>
  );
}

function BookSeat19() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-0 mt-[5px] relative" data-name="Book seat 2">
      <Frame27 />
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <BookSeat19 />
      <div className="[grid-area:1_/_1] h-[74px] ml-[38px] mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3ebc1a00} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">88</p>
    </div>
  );
}

function BookSeat20() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-0 mt-[5px] relative" data-name="Book seat 2">
      <Frame28 />
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <BookSeat20 />
      <div className="[grid-area:1_/_1] h-[74px] ml-[38px] mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3ebc1a00} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">87</p>
    </div>
  );
}

function BookSeat21() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-0 mt-[5px] relative" data-name="Book seat 2">
      <Frame29 />
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
    </div>
  );
}

function Group10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <BookSeat21 />
      <div className="[grid-area:1_/_1] h-[74px] ml-[38px] mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3ebc1a00} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">86</p>
    </div>
  );
}

function BookSeat22() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-0 mt-[5px] relative" data-name="Book seat 2">
      <Frame30 />
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <BookSeat22 />
      <div className="[grid-area:1_/_1] h-[74px] ml-[38px] mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3ebc1a00} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0">
      <Group8 />
      <Group9 />
      <Group10 />
      <Group11 />
    </div>
  );
}

function ZoneA2() {
  return (
    <div className="content-stretch flex gap-[40px] items-end relative shrink-0" data-name="Zone A">
      <Frame26 />
      <Frame31 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">82</p>
    </div>
  );
}

function BookSeat23() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-[4px] mt-[5px] relative" data-name="Book seat 2">
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
      <Frame32 />
    </div>
  );
}

function Desk11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Desk 107">
      <BookSeat23 />
      <div className="[grid-area:1_/_1] h-[74px] ml-0 mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3850f100} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">83</p>
    </div>
  );
}

function BookSeat24() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-[4px] mt-[5px] relative" data-name="Book seat 2">
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
      <Frame33 />
    </div>
  );
}

function Desk12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Desk 110">
      <BookSeat24 />
      <div className="[grid-area:1_/_1] h-[74px] ml-0 mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3850f100} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">84</p>
    </div>
  );
}

function BookSeat25() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-[4px] mt-[5px] relative" data-name="Book seat 2">
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
      <Frame34 />
    </div>
  );
}

function Desk13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Desk 108">
      <BookSeat25 />
      <div className="[grid-area:1_/_1] h-[74px] ml-0 mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3850f100} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">85</p>
    </div>
  );
}

function BookSeat26() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-[4px] mt-[5px] relative" data-name="Book seat 2">
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
      <Frame35 />
    </div>
  );
}

function Desk14() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Desk 109">
      <BookSeat26 />
      <div className="[grid-area:1_/_1] h-[74px] ml-0 mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3850f100} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0">
      <Desk11 />
      <Desk12 />
      <Desk13 />
      <Desk14 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">81</p>
    </div>
  );
}

function BookSeat27() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-0 mt-[5px] relative" data-name="Book seat 2">
      <Frame37 />
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
    </div>
  );
}

function Group12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <BookSeat27 />
      <div className="[grid-area:1_/_1] h-[74px] ml-[38px] mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3ebc1a00} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">80</p>
    </div>
  );
}

function BookSeat28() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-0 mt-[5px] relative" data-name="Book seat 2">
      <Frame38 />
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
    </div>
  );
}

function Group13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <BookSeat28 />
      <div className="[grid-area:1_/_1] h-[74px] ml-[38px] mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3ebc1a00} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">79</p>
    </div>
  );
}

function BookSeat29() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-0 mt-[5px] relative" data-name="Book seat 2">
      <Frame39 />
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
    </div>
  );
}

function Group14() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <BookSeat29 />
      <div className="[grid-area:1_/_1] h-[74px] ml-[38px] mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3ebc1a00} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[24px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">78</p>
    </div>
  );
}

function BookSeat30() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[2px] items-center ml-0 mt-[5px] relative" data-name="Book seat 2">
      <Frame40 />
      <div className="bg-[#d3d5da] h-[64px] rounded-[4px] shrink-0 w-[32px]" data-name="Seat" />
    </div>
  );
}

function Group15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <BookSeat30 />
      <div className="[grid-area:1_/_1] h-[74px] ml-[38px] mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-1.35%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 76">
            <path d={svgPaths.p3ebc1a00} id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0">
      <Group12 />
      <Group13 />
      <Group14 />
      <Group15 />
    </div>
  );
}

function ZoneA3() {
  return (
    <div className="content-stretch flex gap-[40px] items-end relative shrink-0" data-name="Zone A">
      <Frame36 />
      <Frame41 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-center left-[calc(50%+0.5px)] top-[131px] translate-x-[-50%]">
      <ZoneA />
      <ZoneA1 />
      <ZoneA2 />
      <ZoneA3 />
    </div>
  );
}

export default function DirectionLayoout() {
  return (
    <div className="bg-white relative size-full" data-name="Direction layoout">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[210px] not-italic text-[10px] text-black text-nowrap top-[87px]">{`Zone  A`}</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[375px] not-italic text-[10px] text-black text-nowrap top-[87px]">Zone B</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[537px] not-italic text-[10px] text-black text-nowrap top-[87px]">Zone C</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[700px] not-italic text-[10px] text-black text-nowrap top-[87px]">Zone D</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[calc(50%-17.5px)] not-italic text-[14px] text-black text-nowrap top-[25px]">EAST</p>
      <Frame12 />
      <div className="absolute h-0 left-[calc(50%+0.5px)] top-[491.5px] translate-x-[-50%] w-[672px]" data-name="Corridor">
        <div className="absolute inset-[-16px_0_0_0]" style={{ "--stroke-0": "rgba(0, 81, 152, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 672 16">
            <line id="Corridor" stroke="var(--stroke-0, #005198)" strokeWidth="16" x2="672" y1="8" y2="8" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[169px] left-[390px] top-[316px] w-[24px]" data-name="Path">
        <div className="absolute inset-[-0.89%_-6.25%]" style={{ "--stroke-0": "rgba(0, 81, 152, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 172">
            <path d={svgPaths.p3fba0100} id="Path" stroke="var(--stroke-0, #005198)" strokeLinecap="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
    </div>
  );
}