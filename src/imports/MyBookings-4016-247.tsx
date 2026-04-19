import svgPaths from "./svg-nd7t6kez02";

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
    <div className="bg-white h-[72px] opacity-90 relative shadow-[0px_4px_28px_0px_rgba(138,56,245,0.2)] shrink-0 w-full" data-name="Top app bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <IconButton />
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-center text-nowrap">My bookings</p>
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
          <path d={svgPaths.p9b7e600} fill="var(--fill-0, #9961F7)" id="Rectangle 9" />
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
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-nowrap">S-01</p>
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

function Frame1() {
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
      <Frame1 />
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Details">
      <Frame3 />
      <Frame />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Left">
      <Icon />
      <Details />
    </div>
  );
}

function Dismiss2() {
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

function IconButton2() {
  return (
    <div className="bg-white opacity-90 relative rounded-[999px] shadow-[0px_2px_12px_0px_rgba(153,97,247,0.5)] shrink-0 size-[40px]" data-name="Icon button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <Dismiss2 />
        </div>
      </div>
    </div>
  );
}

function NextBooking() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Next booking">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative w-full">
          <Left />
          <IconButton2 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
          <NextBooking />
        </div>
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow items-start max-w-[560px] min-h-px min-w-px relative shrink-0 w-full" data-name="Main container">
      <TopAppBar />
      <Frame2 />
    </div>
  );
}

export default function MyBookings() {
  return (
    <div className="bg-[#dbcffc] content-stretch flex flex-col items-center justify-center relative size-full" data-name="My bookings">
      <MainContainer />
    </div>
  );
}