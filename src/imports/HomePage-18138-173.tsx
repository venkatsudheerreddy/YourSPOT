import svgPaths from "./svg-c48c0daaqf";

function Header() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center not-italic opacity-90 overflow-clip px-0 py-[40px] relative shrink-0 text-nowrap text-white w-full" data-name="Header">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] opacity-80 relative shrink-0 text-[12px]">{`Good morning! `}</p>
      <p className="font-['Poppins:ExtraBold',sans-serif] leading-none relative shrink-0 text-[40px] text-shadow-[0px_4px_14px_rgba(255,255,255,0.2)] tracking-[-4px] uppercase">Sudheer</p>
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[14px]">You have options today</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[18px]">12</p>
      <p className="font-['Poppins:Regular',sans-serif] opacity-80 relative shrink-0 text-[10px]">/50</p>
    </div>
  );
}

function Occupancy() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center leading-[normal] not-italic relative shrink-0 text-nowrap text-white" data-name="Occupancy">
      <Frame />
      <p className="font-['Poppins:Regular',sans-serif] opacity-80 relative shrink-0 text-[12px]">occupancy</p>
    </div>
  );
}

function Available() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center leading-[normal] not-italic relative shrink-0 text-nowrap text-white" data-name="Available">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[18px]">38</p>
      <p className="font-['Poppins:Regular',sans-serif] opacity-80 relative shrink-0 text-[12px]">available</p>
    </div>
  );
}

function Layout() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Layout">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Layout">
          <g id="Vector">
            <path d={svgPaths.p1eac000} stroke="var(--stroke-0, white)" strokeLinejoin="round" />
            <path d={svgPaths.p325be000} stroke="var(--stroke-0, white)" strokeLinejoin="round" />
            <path d={svgPaths.p17868e00} stroke="var(--stroke-0, white)" strokeLinejoin="round" />
            <path d={svgPaths.p1ccdb000} stroke="var(--stroke-0, white)" strokeLinejoin="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Available1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Available">
      <Layout />
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic opacity-80 relative shrink-0 text-[12px] text-nowrap text-white">layout</p>
    </div>
  );
}

function Seats() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Seats">
      <Occupancy />
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-gradient-to-b from-[rgba(255,255,255,0)] h-full opacity-20 shrink-0 to-[rgba(255,255,255,0)] via-[#ffffff] via-[48.558%] w-px" data-name="Divider" />
      </div>
      <Available />
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-gradient-to-b from-[rgba(255,255,255,0)] h-full opacity-20 shrink-0 to-[rgba(255,255,255,0)] via-[#ffffff] via-[48.558%] w-px" data-name="Divider" />
      </div>
      <Available1 />
    </div>
  );
}

function TodaysOverview() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-0 py-[24px] relative shrink-0 w-full" data-name="Today\'s overview">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic opacity-80 relative shrink-0 text-[14px] text-nowrap text-white">today’s overview</p>
      <Seats />
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

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-nowrap">108</p>
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

function Frame3() {
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

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame6 />
      <Frame1 />
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0" data-name="Details">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[12px] text-nowrap">next booking!</p>
      <Frame2 />
    </div>
  );
}

function NextBooking() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Next booking">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_0px_150px_0px_rgba(29,10,97,0.2)]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-center px-[16px] py-[20px] relative w-full">
          <Icon />
          <Details />
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-px opacity-20 relative shrink-0 w-[390px]" data-name="Divider">
      <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0)] via-[#000000] via-[47.596%]" data-name="Divider" />
    </div>
  );
}

function User() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_18138_206)" id="user">
          <path d={svgPaths.p33b19100} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p315b9900} fill="var(--fill-0, white)" id="Vector_2" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_18138_206">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#9961f7] overflow-clip relative rounded-[999px] shadow-[0px_2px_12px_0px_rgba(153,97,247,0.5)] shrink-0 size-[56px]">
      <User />
    </div>
  );
}

function BookSeats() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col gap-[24px] grow items-center justify-center min-h-px min-w-px px-0 py-[24px] relative rounded-[24px] shrink-0" data-name="Book seats">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[4px_4px_0px_0px_rgba(138,56,245,0.4)]" />
      <Frame4 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-nowrap">Book seat</p>
    </div>
  );
}

function CalendarHeatMap() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="calendar--heat-map">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_18138_186)" id="calendar--heat-map">
          <path d={svgPaths.p2ff8a000} fill="var(--fill-0, white)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_18138_186">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#9961f7] overflow-clip relative rounded-[999px] shadow-[0px_2px_12px_0px_rgba(153,97,247,0.5)] shrink-0 size-[56px]">
      <CalendarHeatMap />
    </div>
  );
}

function MyBookings() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col gap-[24px] grow items-center justify-center min-h-px min-w-px px-0 py-[24px] relative rounded-[24px] shrink-0" data-name="My bookings">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[4px_4px_0px_0px_rgba(138,56,245,0.4)]" />
      <Frame5 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-nowrap">My bookings</p>
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="CTA">
      <BookSeats />
      <MyBookings />
    </div>
  );
}

function Actions() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Actions">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center px-[16px] py-[24px] relative size-full">
          <NextBooking />
          <Divider />
          <Cta />
          <div className="h-[20px] relative shrink-0 w-[24px]" data-name="Subtract">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 20">
                <path d={svgPaths.p581a000} fill="var(--fill-0, #464A53)" id="Subtract" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#9961f7] h-[844px] items-start left-0 to-[#622ac2] top-0 w-[390px]">
      <Header />
      <div className="h-px relative shrink-0 w-[390px]" data-name="Divider">
        <div className="absolute bg-gradient-to-r from-[rgba(255,255,255,0)] inset-0 opacity-40 to-[rgba(255,255,255,0)] via-[#ffffff] via-[47.596%]" data-name="Divider" />
      </div>
      <div className="h-px opacity-20 relative shrink-0 w-[390px]" data-name="Divider">
        <div className="absolute bg-gradient-to-r from-[rgba(255,255,255,0)] inset-0 to-[rgba(255,255,255,0)] via-[#ffffff] via-[47.596%]" data-name="Divider" />
      </div>
      <TodaysOverview />
      <Actions />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="absolute bg-white h-[844px] left-0 top-0 w-[390px]" data-name="Main container">
      <Frame7 />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[#dbcffc] relative size-full" data-name="Home page">
      <MainContainer />
    </div>
  );
}