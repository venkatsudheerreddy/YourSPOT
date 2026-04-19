import svgPaths from "./svg-xanpk4pl5j";

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
    <div className="bg-white h-[72px] opacity-90 relative shrink-0 w-full" data-name="Top app bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <IconButton />
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-center text-nowrap">Reserve seat</p>
          <IconButton1 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white">May, 2025</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col h-[51px] items-center justify-center relative shrink-0">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[22px] text-center text-nowrap text-white">24</p>
      <Frame />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-white">Date</p>
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white">9:00 AM - 6:00 PM</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col h-[51px] items-center justify-center relative shrink-0">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[22px] text-center text-nowrap text-white">Full day</p>
      <Frame1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-white">Time</p>
      <Frame5 />
    </div>
  );
}

function NextBooking() {
  return (
    <div className="bg-[#464a53] relative shrink-0 w-full" data-name="Next booking">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[40px] items-center justify-center px-[16px] py-[24px] relative w-full">
          <Frame7 />
          <div className="flex flex-row items-center self-stretch">
            <div className="bg-gradient-to-b from-[rgba(255,255,255,0)] h-full opacity-20 shrink-0 to-[rgba(255,255,255,0)] via-[#ffffff] via-[50.481%] w-px" data-name="Divider" />
          </div>
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center justify-center min-h-px min-w-px pb-0 pt-[16px] px-0 relative shrink-0" data-name="Tabs">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9961f7] text-[14px] text-nowrap">Zone A</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-12px_-9.23%_-14px_-9.23%]" style={{ "--stroke-0": "rgba(153, 97, 247, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 26">
            <g filter="url(#filter0_d_4007_382)" id="Line 12">
              <line stroke="var(--stroke-0, #9961F7)" strokeWidth="2" x1="12" x2="142" y1="11" y2="11" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="26" id="filter0_d_4007_382" width="154" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="6" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0.968627 0 0 0 0.5 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_4007_382" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_4007_382" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Tabs1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center justify-center min-h-px min-w-px pb-0 pt-[16px] px-0 relative shrink-0" data-name="Tabs">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-nowrap">Zone B</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(211, 213, 218, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 1">
            <line id="Line 12" stroke="var(--stroke-0, #D3D5DA)" x2="130" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Tabs2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center justify-center min-h-px min-w-px pb-0 pt-[16px] px-0 relative shrink-0" data-name="Tabs">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-nowrap">Zone C</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(211, 213, 218, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 1">
            <line id="Line 12" stroke="var(--stroke-0, #D3D5DA)" x2="130" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[8px] pt-0 px-0 relative shrink-0 w-full">
      <Tabs />
      <Tabs1 />
      <Tabs2 />
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

function Seat1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Seat 1">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">S-01</p>
      <div className="bg-white h-[80px] relative rounded-[4px] shrink-0 w-[40px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Chair />
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

function Seat2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Seat 2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">S-02</p>
      <div className="bg-white h-[80px] relative rounded-[4px] shrink-0 w-[40px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Chair1 />
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

function Seat3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Seat 3">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">S-03</p>
      <div className="bg-white h-[80px] relative rounded-[4px] shrink-0 w-[40px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Chair2 />
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

function Seat8() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative" data-name="Seat 8">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Chair3 />
        </div>
      </div>
      <div className="bg-white h-[80px] relative rounded-[4px] shrink-0 w-[40px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="flex h-[35px] items-center justify-center relative shrink-0 w-[21px]" style={{ "--transform-inner-width": "29.5625", "--transform-inner-height": "16.796875" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative text-[#1b1b23] text-[14px] text-center text-nowrap">S-08</p>
        </div>
      </div>
    </div>
  );
}

function Seat9() {
  return (
    <div className="content-stretch flex items-center pl-[40px] pr-[24px] py-[16px] relative shrink-0" data-name="Seat 8">
      <div className="flex h-[105px] items-center justify-center relative shrink-0 w-[80px]" style={{ "--transform-inner-width": "29.5625", "--transform-inner-height": "16.796875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Seat8 />
        </div>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative shrink-0" data-name="Left">
      <Seat1 />
      <Seat2 />
      <Seat3 />
      <Seat9 />
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

function Seat4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Seat 4">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Chair4 />
        </div>
      </div>
      <div className="bg-white h-[80px] relative rounded-[4px] shrink-0 w-[40px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">S-04</p>
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

function Seat5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Seat 5">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Chair5 />
        </div>
      </div>
      <div className="bg-white h-[80px] relative rounded-[4px] shrink-0 w-[40px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">S-05</p>
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

function Seat6() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Seat 6">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Chair6 />
        </div>
      </div>
      <div className="bg-white h-[80px] relative rounded-[4px] shrink-0 w-[40px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">S-06</p>
    </div>
  );
}

function Chair7() {
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

function Seat7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Seat 7">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Chair7 />
        </div>
      </div>
      <div className="bg-white h-[80px] relative rounded-[4px] shrink-0 w-[40px]" data-name="Desk">
        <div aria-hidden="true" className="absolute border border-[#464a53] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">S-07</p>
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative shrink-0" data-name="Right">
      <Seat4 />
      <Seat5 />
      <Seat6 />
      <Seat7 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex h-full items-start justify-between relative shrink-0 w-[358px]">
      <Left />
      <Right />
    </div>
  );
}

function SeatLayout() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Seat layout">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center p-[16px] relative size-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative size-[16px]" data-name="Chevron Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron Right">
          <path clipRule="evenodd" d={svgPaths.p256a78f0} fill="var(--fill-0, #464A53)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-[#e9eaec] grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <ChevronRight />
            </div>
          </div>
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#464a53] text-[18px] text-center text-nowrap">Back</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-[#9961f7] grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">Done</p>
        </div>
      </div>
    </div>
  );
}

function BottomBottoms() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Bottom bottoms">
      <Button />
      <Button1 />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Main container">
      <TopAppBar />
      <NextBooking />
      <Frame9 />
      <SeatLayout />
      <BottomBottoms />
    </div>
  );
}

export default function Seat() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative size-full" data-name="Seat">
      <MainContainer />
    </div>
  );
}