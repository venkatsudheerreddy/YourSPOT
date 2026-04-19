import svgPaths from "./svg-xwsocy69mz";

function Dismiss() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Dismiss">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Dismiss">
          <path clipRule="evenodd" d={svgPaths.pa84bcf0} fill="var(--fill-0, #1B1B23)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="bg-white opacity-90 relative rounded-[999px] shadow-[0px_2px_12px_0px_rgba(153,97,247,0.5)] shrink-0 size-[40px]" data-name="Icon button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <Dismiss />
        </div>
      </div>
    </div>
  );
}

function Dismiss1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Dismiss">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Dismiss">
          <path clipRule="evenodd" d={svgPaths.pa84bcf0} fill="var(--fill-0, #1B1B23)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="bg-[#e9eaec] opacity-0 relative rounded-[999px] shrink-0 size-[40px]" data-name="Icon button">
      <div aria-hidden="true" className="absolute border border-[#d3d5da] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_2px_12px_0px_rgba(153,97,247,0.5)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <Dismiss1 />
        </div>
      </div>
    </div>
  );
}

function TopAppBar() {
  return (
    <div className="bg-white h-[72px] opacity-90 relative shadow-[0px_4px_28px_0px_rgba(138,56,245,0.2)] shrink-0 w-full z-[2]" data-name="Top app bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <IconButton />
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-center text-nowrap">Direction</p>
          <IconButton1 />
        </div>
      </div>
    </div>
  );
}

function Chair() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Chair">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Chair">
          <path d={svgPaths.p321afc00} fill="var(--fill-0, #BD96FF)" id="Rectangle 8" />
          <path d={svgPaths.p9b7e600} fill="var(--fill-0, #005198)" id="Rectangle 9" />
          <line id="Line 13" stroke="var(--stroke-0, #392A54)" x1="14" x2="14" y1="17.5" y2="25.5" />
          <line id="Line 14" stroke="var(--stroke-0, #392A54)" x1="29" x2="29" y1="17.5" y2="25.5" />
          <path d={svgPaths.pcd61f00} fill="var(--fill-0, #7241C5)" id="Rectangle 10" />
          <path d={svgPaths.p1da36500} fill="var(--fill-0, #7241C5)" id="Rectangle 13" />
          <path d={svgPaths.p39518e00} fill="var(--fill-0, #7241C5)" id="Vector 2" />
          <path d={svgPaths.p2c44200} fill="var(--fill-0, #BD96FF)" id="Vector 4" />
          <line id="Line 15" stroke="var(--stroke-0, #392A54)" x1="21.5" x2="21.5" y1="28.5" y2="41.5" />
          <rect fill="var(--fill-0, #7241C5)" height="5" id="Rectangle 12" rx="1" width="4" x="19.5" y="30.5" />
          <path d={svgPaths.p85af6c0} id="Vector 3" stroke="var(--stroke-0, #392A54)" />
          <circle cx="13.5" cy="41.5" fill="var(--fill-0, #7241C5)" id="Ellipse 4" r="2" />
          <circle cx="28.5" cy="41.5" fill="var(--fill-0, #7241C5)" id="Ellipse 5" r="2" />
          <circle cx="21.5" cy="41.5" fill="var(--fill-0, #7241C5)" id="Ellipse 6" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-white content-stretch flex items-center p-[8px] relative rounded-[999px] shrink-0" data-name="Icon">
      <div aria-hidden="true" className="absolute border border-[#d3d5da] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Chair />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-nowrap">101</p>
      <div className="relative shrink-0 size-[4px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(27, 27, 35, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, #1B1B23)" id="Ellipse 1" r="2" />
          </svg>
        </div>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[12px] text-nowrap">Zone A</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[12px] text-nowrap">9:00 AM - 6:00 PM</p>
      <div className="relative shrink-0 size-[4px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(27, 27, 35, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, #1B1B23)" id="Ellipse 1" r="2" />
          </svg>
        </div>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[12px] text-nowrap">Dec 12, 2025</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame3 />
      <Frame />
    </div>
  );
}

function NextBooking() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Next booking">
      <div aria-hidden="true" className="absolute border-[#d3c4fc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[16px] py-[8px] relative w-full">
          <Icon />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[20px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#464a53] text-[10px] text-center w-full">105</p>
    </div>
  );
}

function BookSeat() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-[9px] mt-[12px] relative" data-name="Book seat">
      <div className="bg-[#d3d5da] rounded-[4px] shrink-0 size-[24px]" data-name="Seat" />
      <Frame5 />
    </div>
  );
}

function Desk4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Desk 105">
      <BookSeat />
      <div className="[grid-area:1_/_1] h-[48px] ml-0 mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-2.08%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 50">
            <path d="M25 1H1V49H25" id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[20px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#464a53] text-[10px] text-center w-full">106</p>
    </div>
  );
}

function BookSeat1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-[9px] mt-[12px] relative" data-name="Book seat">
      <div className="bg-[#d3d5da] rounded-[4px] shrink-0 size-[24px]" data-name="Seat" />
      <Frame6 />
    </div>
  );
}

function Desk5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Desk 106">
      <BookSeat1 />
      <div className="[grid-area:1_/_1] h-[48px] ml-0 mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-2.08%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 50">
            <path d="M25 1H1V49H25" id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[20px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#464a53] text-[10px] text-center w-full">107</p>
    </div>
  );
}

function BookSeat2() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-[9px] mt-[12px] relative" data-name="Book seat">
      <div className="bg-[#d3d5da] rounded-[4px] shrink-0 size-[24px]" data-name="Seat" />
      <Frame7 />
    </div>
  );
}

function Desk6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Desk 107">
      <BookSeat2 />
      <div className="[grid-area:1_/_1] h-[48px] ml-0 mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-2.08%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 50">
            <path d="M25 1H1V49H25" id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[20px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#464a53] text-[10px] text-center w-full">108</p>
    </div>
  );
}

function BookSeat3() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-[9px] mt-[12px] relative" data-name="Book seat">
      <div className="bg-[#d3d5da] rounded-[4px] shrink-0 size-[24px]" data-name="Seat" />
      <Frame9 />
    </div>
  );
}

function Desk7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Desk 108">
      <BookSeat3 />
      <div className="[grid-area:1_/_1] h-[48px] ml-0 mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-2.08%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 50">
            <path d="M25 1H1V49H25" id="Desk" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BayLeft() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] overflow-clip relative shrink-0" data-name="Bay left">
      <Desk4 />
      <Desk5 />
      <Desk6 />
      <Desk7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[20px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#464a53] text-[10px] w-full">104</p>
    </div>
  );
}

function BookSeat4() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-[13px] relative" data-name="Book seat">
      <Frame8 />
      <div className="bg-[#d3d5da] rounded-[4px] shrink-0 size-[24px]" data-name="Seat" />
    </div>
  );
}

function Desk3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Desk 104">
      <div className="[grid-area:1_/_1] h-[48px] ml-[28px] mt-0 relative w-[24px]">
        <div className="absolute inset-[-2.08%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 50">
            <path d="M1 1H25V49H1" id="Vector 6" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <BookSeat4 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[20px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#464a53] text-[10px] w-full">103</p>
    </div>
  );
}

function BookSeat5() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-[13px] relative" data-name="Book seat">
      <Frame10 />
      <div className="bg-[#d3d5da] rounded-[4px] shrink-0 size-[24px]" data-name="Seat" />
    </div>
  );
}

function Desk2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Desk 103">
      <div className="[grid-area:1_/_1] h-[48px] ml-[28px] mt-0 relative w-[24px]">
        <div className="absolute inset-[-2.08%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 50">
            <path d="M1 1H25V49H1" id="Vector 6" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <BookSeat5 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[20px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#464a53] text-[10px] w-full">102</p>
    </div>
  );
}

function BookSeat6() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-[13px] relative" data-name="Book seat">
      <Frame11 />
      <div className="bg-[#d3d5da] rounded-[4px] shrink-0 size-[24px]" data-name="Seat" />
    </div>
  );
}

function Desk1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Desk 102">
      <div className="[grid-area:1_/_1] h-[48px] ml-[28px] mt-0 relative w-[24px]">
        <div className="absolute inset-[-2.08%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 50">
            <path d="M1 1H25V49H1" id="Vector 6" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <BookSeat6 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[20px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#464a53] text-[10px] w-full">101</p>
    </div>
  );
}

function BookSeat7() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-[13px] relative" data-name="Book seat">
      <Frame12 />
      <div className="bg-[#d3d5da] rounded-[4px] shrink-0 size-[24px]" data-name="Seat" />
    </div>
  );
}

function Desk() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Desk 101">
      <div className="[grid-area:1_/_1] h-[48px] ml-[28px] mt-0 relative w-[24px]">
        <div className="absolute inset-[-2.08%_-4.17%]" style={{ "--stroke-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 50">
            <path d="M1 1H25V49H1" id="Vector 6" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <BookSeat7 />
    </div>
  );
}

function BayRight() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] overflow-clip relative shrink-0" data-name="Bay right">
      <Desk3 />
      <Desk2 />
      <Desk1 />
      <Desk />
    </div>
  );
}

function ZoneB() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center justify-between ml-0 mt-[72px] relative w-[168px]" data-name="Zone B">
      <BayLeft />
      <BayRight />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-0 ml-0 mt-[320px] relative w-[168px]" data-name="Corridor">
        <div className="absolute inset-[-26px_-7.14%_-14px_-7.14%]" style={{ "--stroke-0": "rgba(153, 97, 247, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192 40">
            <g filter="url(#filter0_d_18016_367)" id="Corridor">
              <line stroke="var(--stroke-0, #005198)" strokeLinecap="round" strokeWidth="16" x1="20" x2="172" y1="18" y2="18" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="40" id="filter0_d_18016_367" width="192" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="6" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0.968627 0 0 0 0.5 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18016_367" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_18016_367" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <ZoneB />
      <div className="[grid-area:1_/_1] h-[218px] ml-[58.5px] mt-[95.5px] relative w-[26.5px]" data-name="Path">
        <div className="absolute inset-[-0.69%_-5.66%]" style={{ "--stroke-0": "rgba(0, 81, 152, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.5 221">
            <path d={svgPaths.p1219cd00} id="Path" stroke="var(--stroke-0, #005198)" strokeLinecap="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <p className="[grid-area:1_/_1] font-['Poppins:SemiBold',sans-serif] leading-[normal] ml-[69px] mt-[53px] not-italic relative text-[10px] text-black text-nowrap">Zone A</p>
      <p className="[grid-area:1_/_1] font-['Poppins:SemiBold',sans-serif] leading-[normal] ml-[69px] mt-0 not-italic relative text-[14px] text-black text-nowrap">EAST</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center px-0 py-[24px] relative shrink-0">
      <Group />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="Content">
      <NextBooking />
      <Frame4 />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow isolate items-start max-w-[560px] min-h-px min-w-px relative shrink-0 w-full" data-name="Main container">
      <TopAppBar />
      <Content />
    </div>
  );
}

export default function Direction() {
  return (
    <div className="bg-[#dbcffc] content-stretch flex flex-col items-center justify-center relative size-full" data-name="Direction">
      <MainContainer />
    </div>
  );
}