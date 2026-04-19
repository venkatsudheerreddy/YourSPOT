import svgPaths from "./svg-qscc11zn1k";
import imgImage13 from "figma:asset/899d6b031132ea9dfe87f9e31aa24b5007910889.png";
import imgDivider from "figma:asset/587c2cde7becbdf6dc626dad506f1c552b99ef1e.png";

function Header() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center not-italic opacity-90 overflow-clip px-0 py-[56px] relative shadow-[0px_4px_28px_0px_rgba(138,56,245,0.2)] shrink-0 text-nowrap w-full z-[2]" data-name="Header">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#545864] text-[14px]">{`Good morning! `}</p>
      <p className="font-['Poppins:ExtraBold',sans-serif] leading-none relative shrink-0 text-[#8a38f5] text-[40px] text-shadow-[0px_4px_14px_rgba(138,56,245,0.5)] tracking-[-4px] uppercase">Sudheer</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[#1b1b23] text-[18px]">12</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#545864] text-[10px]">/50</p>
    </div>
  );
}

function Occupancy() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center leading-[normal] not-italic relative shrink-0 text-nowrap" data-name="Occupancy">
      <Frame />
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#545864] text-[12px]">occupancy</p>
    </div>
  );
}

function Available() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center leading-[normal] not-italic relative shrink-0 text-nowrap" data-name="Available">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[#1b1b23] text-[18px]">38</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#545864] text-[12px]">available</p>
    </div>
  );
}

function Seats() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="Seats">
      <Occupancy />
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-gradient-to-b from-[#ffffff] h-full opacity-20 shrink-0 to-[#ffffff] via-[#000000] via-[50.481%] w-px" data-name="Divider" />
      </div>
      <Available />
    </div>
  );
}

function TodaysOverview() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center justify-center px-0 py-[24px] relative shrink-0 w-full" data-name="Today\'s overview">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#545864] text-[14px] text-nowrap">today’s overview</p>
      <Seats />
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-white content-stretch flex items-center p-[8px] relative rounded-[999px] shrink-0" data-name="Icon">
      <div aria-hidden="true" className="absolute border border-[#d3d5da] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="relative shrink-0 size-[40px]" data-name="image 13">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage13} />
      </div>
    </div>
  );
}

function Frame5() {
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
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[12px] text-nowrap">Dec 15, 2025</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[22px] w-[110px]">S-01</p>
      <Frame1 />
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0" data-name="Details">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[12px] text-nowrap">next booking!</p>
      <Frame4 />
    </div>
  );
}

function NextBooking() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Next booking">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-center px-[16px] py-[20px] relative w-full">
          <Icon />
          <Details />
        </div>
      </div>
    </div>
  );
}

function User() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_4001_340)" id="user">
          <path d={svgPaths.p33b19100} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p315b9900} fill="var(--fill-0, white)" id="Vector_2" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_4001_340">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#9961f7] overflow-clip relative rounded-[999px] shadow-[0px_2px_12px_0px_rgba(153,97,247,0.5)] shrink-0 size-[56px]">
      <User />
    </div>
  );
}

function BookSeats() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col gap-[24px] grow items-center justify-center min-h-px min-w-px px-0 py-[24px] relative rounded-[16px] shrink-0" data-name="Book seats">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[4px_4px_0px_0px_rgba(138,56,245,0.4)]" />
      <Frame6 />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-nowrap">Book seat</p>
    </div>
  );
}

function CalendarHeatMap() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="calendar--heat-map">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_4001_347)" id="calendar--heat-map">
          <path d={svgPaths.p2ff8a000} fill="var(--fill-0, white)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_4001_347">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#9961f7] overflow-clip relative rounded-[999px] shadow-[0px_2px_12px_0px_rgba(153,97,247,0.5)] shrink-0 size-[56px]">
      <CalendarHeatMap />
    </div>
  );
}

function MyBookings() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col gap-[24px] grow items-center justify-center min-h-px min-w-px px-0 py-[24px] relative rounded-[16px] shrink-0" data-name="My bookings">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[4px_4px_0px_0px_rgba(138,56,245,0.4)]" />
      <Frame7 />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-nowrap">My bookings</p>
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
    <div className="basis-0 bg-[#ebebeb] grow min-h-px min-w-px relative shrink-0 w-full" data-name="Actions">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center p-[16px] relative size-full">
          <NextBooking />
          <div className="h-px opacity-20 relative shrink-0 w-full" data-name="Divider">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDivider} />
          </div>
          <Cta />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-center min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="Main content">
      <TodaysOverview />
      <Actions />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[844px] isolate items-start left-[93px] max-w-[560px] top-0 w-[390px]" data-name="Main container">
      <Header />
      <MainContent />
    </div>
  );
}

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
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-center text-nowrap">Reserve seat</p>
          <IconButton1 />
        </div>
      </div>
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Chevron Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Chevron Left">
          <path clipRule="evenodd" d={svgPaths.p4191a80} fill="var(--fill-0, #1B1B23)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton2() {
  return (
    <div className="bg-white opacity-90 relative rounded-[999px] shrink-0 size-[40px]" data-name="Icon button">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <ChevronLeft />
        </div>
      </div>
    </div>
  );
}

function ChevronLeft1() {
  return (
    <div className="relative size-[24px]" data-name="Chevron Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Chevron Left">
          <path clipRule="evenodd" d={svgPaths.p4191a80} fill="var(--fill-0, #1B1B23)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton3() {
  return (
    <div className="bg-white opacity-90 relative rounded-[999px] shrink-0 size-[40px]" data-name="Icon button">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <ChevronLeft1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MontheSelector() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Monthe selector">
      <IconButton2 />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap">December</p>
      <IconButton3 />
    </div>
  );
}

function Date() {
  return (
    <div className="bg-[#f7f7f8] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 1">
      <div aria-hidden="true" className="absolute border border-[#d3d5da] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#989da9] text-[14px] text-center text-nowrap">01</p>
    </div>
  );
}

function Date1() {
  return (
    <div className="bg-[#f7f7f8] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 2">
      <div aria-hidden="true" className="absolute border border-[#d3d5da] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#989da9] text-[14px] text-center text-nowrap">02</p>
    </div>
  );
}

function Date2() {
  return (
    <div className="bg-[#f7f7f8] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 3">
      <div aria-hidden="true" className="absolute border border-[#d3d5da] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#989da9] text-[14px] text-center text-nowrap">03</p>
    </div>
  );
}

function Date3() {
  return (
    <div className="bg-[#f7f7f8] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 4">
      <div aria-hidden="true" className="absolute border border-[#d3d5da] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#989da9] text-[14px] text-center text-nowrap">04</p>
    </div>
  );
}

function Date4() {
  return (
    <div className="bg-[#f7f7f8] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 5">
      <div aria-hidden="true" className="absolute border border-[#d3d5da] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#989da9] text-[14px] text-center text-nowrap">05</p>
    </div>
  );
}

function Date5() {
  return (
    <div className="bg-[#f7f7f8] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 6">
      <div aria-hidden="true" className="absolute border border-[#d3d5da] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#989da9] text-[14px] text-center text-nowrap">06</p>
    </div>
  );
}

function Date6() {
  return (
    <div className="bg-[#f7f7f8] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 7">
      <div aria-hidden="true" className="absolute border border-[#d3d5da] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#989da9] text-[14px] text-center text-nowrap">07</p>
    </div>
  );
}

function Date7() {
  return (
    <div className="bg-[#f7f7f8] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 8">
      <div aria-hidden="true" className="absolute border border-[#d3d5da] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#989da9] text-[14px] text-center text-nowrap">08</p>
    </div>
  );
}

function Date8() {
  return (
    <div className="bg-[#f7f7f8] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 9">
      <div aria-hidden="true" className="absolute border border-[#d3d5da] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#989da9] text-[14px] text-center text-nowrap">09</p>
    </div>
  );
}

function Date9() {
  return (
    <div className="bg-[#f7f7f8] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 10">
      <div aria-hidden="true" className="absolute border border-[#d3d5da] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#989da9] text-[14px] text-center text-nowrap">10</p>
    </div>
  );
}

function Date10() {
  return (
    <div className="bg-[#f7f7f8] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 11">
      <div aria-hidden="true" className="absolute border border-[#d3d5da] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#989da9] text-[14px] text-center text-nowrap">11</p>
    </div>
  );
}

function Date11() {
  return (
    <div className="bg-[#f7f7f8] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 12">
      <div aria-hidden="true" className="absolute border border-[#d3d5da] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#989da9] text-[14px] text-center text-nowrap">12</p>
    </div>
  );
}

function Date12() {
  return (
    <div className="bg-[#f7f7f8] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 13">
      <div aria-hidden="true" className="absolute border border-[#d3d5da] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#989da9] text-[14px] text-center text-nowrap">13</p>
    </div>
  );
}

function Date13() {
  return (
    <div className="bg-[#f7f7f8] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 14">
      <div aria-hidden="true" className="absolute border border-[#d3d5da] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#989da9] text-[14px] text-center text-nowrap">14</p>
    </div>
  );
}

function Date14() {
  return (
    <div className="bg-[#9961f7] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shadow-[0px_2px_12px_0px_rgba(153,97,247,0.5)] shrink-0 size-[56px]" data-name="Date 15">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">15</p>
    </div>
  );
}

function Date15() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 16">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">16</p>
    </div>
  );
}

function Date16() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 17">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">17</p>
    </div>
  );
}

function Date17() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 18">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">18</p>
    </div>
  );
}

function Date18() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 19">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">19</p>
    </div>
  );
}

function Date19() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 20">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">20</p>
    </div>
  );
}

function Date20() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 21">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">21</p>
    </div>
  );
}

function Date21() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 22">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">22</p>
    </div>
  );
}

function Date22() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 23">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">23</p>
    </div>
  );
}

function Date23() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 24">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">24</p>
    </div>
  );
}

function Date24() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 25">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">25</p>
    </div>
  );
}

function Date25() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 26">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">26</p>
    </div>
  );
}

function Date26() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 27">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">27</p>
    </div>
  );
}

function Date27() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 28">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">28</p>
    </div>
  );
}

function Date28() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 29">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">29</p>
    </div>
  );
}

function Date29() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 30">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">30</p>
    </div>
  );
}

function Date30() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="Date 31">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">31</p>
    </div>
  );
}

function Dates() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-[344px]" data-name="Dates">
      <Date />
      <Date1 />
      <Date2 />
      <Date3 />
      <Date4 />
      <Date5 />
      <Date6 />
      <Date7 />
      <Date8 />
      <Date9 />
      <Date10 />
      <Date11 />
      <Date12 />
      <Date13 />
      <Date14 />
      <Date15 />
      <Date16 />
      <Date17 />
      <Date18 />
      <Date19 />
      <Date20 />
      <Date21 />
      <Date22 />
      <Date23 />
      <Date24 />
      <Date25 />
      <Date26 />
      <Date27 />
      <Date28 />
      <Date29 />
      <Date30 />
    </div>
  );
}

function Dates1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Dates">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center px-[16px] py-[40px] relative size-full">
          <MontheSelector />
          <Dates />
        </div>
      </div>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Chevron Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron Right">
          <path clipRule="evenodd" d={svgPaths.p256a78f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-[#9961f7] grow h-[64px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">Next</p>
          <ChevronRight />
        </div>
      </div>
    </div>
  );
}

function BottomBottoms() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bottom bottoms">
      <div className="size-full">
        <div className="content-stretch flex items-start p-[16px] relative w-full">
          <Button />
        </div>
      </div>
    </div>
  );
}

function MainContainer1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[844px] items-start left-[523px] max-w-[560px] top-0 w-[390px]" data-name="Main container">
      <TopAppBar />
      <Dates1 />
      <BottomBottoms />
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

function IconButton4() {
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

function Dismiss3() {
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

function IconButton5() {
  return (
    <div className="bg-[#e9eaec] opacity-0 relative rounded-[999px] shrink-0 size-[40px]" data-name="Icon button">
      <div aria-hidden="true" className="absolute border border-[#d3d5da] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_2px_12px_0px_rgba(153,97,247,0.5)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <Dismiss3 />
        </div>
      </div>
    </div>
  );
}

function TopAppBar1() {
  return (
    <div className="bg-white h-[72px] opacity-90 relative shrink-0 w-full" data-name="Top app bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <IconButton4 />
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-center text-nowrap">Reserve seat</p>
          <IconButton5 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white">Dec, 2025</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col h-[51px] items-center justify-center relative shrink-0">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[22px] text-center text-nowrap text-white">15</p>
      <Frame2 />
    </div>
  );
}

function InfoMessage() {
  return (
    <div className="bg-[#464a53] relative shrink-0 w-full" data-name="Info message">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] py-[24px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-white">Date</p>
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function User1() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_4010_729)" id="user">
          <path d={svgPaths.p33b19100} fill="var(--fill-0, #9961F7)" id="Vector" />
          <path d={svgPaths.p315b9900} fill="var(--fill-0, #9961F7)" id="Vector_2" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_4010_729">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white overflow-clip relative rounded-[999px] shrink-0 size-[56px]">
      <User1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 text-nowrap text-white">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[14px]">Morning</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[12px]">9:00 AM - 1:00 PM</p>
    </div>
  );
}

function TimeCards() {
  return (
    <div className="bg-[#9961f7] h-[88px] relative rounded-[16px] shrink-0 w-full" data-name="Time cards">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[16px] relative size-full">
          <Frame10 />
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function User2() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_4001_340)" id="user">
          <path d={svgPaths.p33b19100} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p315b9900} fill="var(--fill-0, white)" id="Vector_2" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_4001_340">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#9961f7] overflow-clip relative rounded-[999px] shadow-[0px_2px_12px_0px_rgba(153,97,247,0.5)] shrink-0 size-[56px]">
      <User2 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 text-nowrap">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[#1b1b23] text-[14px]">Full day</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#545864] text-[12px]">9:00 AM - 6:00 PM</p>
    </div>
  );
}

function TimeCards1() {
  return (
    <div className="bg-white h-[88px] relative rounded-[16px] shrink-0 w-full" data-name="Time cards">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[16px] relative size-full">
          <Frame11 />
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function User3() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_4001_340)" id="user">
          <path d={svgPaths.p33b19100} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p315b9900} fill="var(--fill-0, white)" id="Vector_2" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_4001_340">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#9961f7] overflow-clip relative rounded-[999px] shadow-[0px_2px_12px_0px_rgba(153,97,247,0.5)] shrink-0 size-[56px]">
      <User3 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 text-nowrap">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[#1b1b23] text-[14px]">Afternoon</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#545864] text-[12px]">1:00 PM - 6:00 PM</p>
    </div>
  );
}

function TimeCards2() {
  return (
    <div className="bg-white h-[88px] relative rounded-[16px] shrink-0 w-full" data-name="Time cards">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[16px] relative size-full">
          <Frame12 />
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function TimeSlot() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Time slot">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center px-[16px] py-[40px] relative size-full">
          <TimeCards />
          <TimeCards1 />
          <TimeCards2 />
        </div>
      </div>
    </div>
  );
}

function ChevronRight1() {
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

function Button1() {
  return (
    <div className="basis-0 bg-[#e9eaec] grow h-[64px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <ChevronRight1 />
            </div>
          </div>
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#464a53] text-[18px] text-center text-nowrap">Back</p>
        </div>
      </div>
    </div>
  );
}

function ChevronRight2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Chevron Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron Right">
          <path clipRule="evenodd" d={svgPaths.p256a78f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="basis-0 bg-[#9961f7] grow h-[64px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">Next</p>
          <ChevronRight2 />
        </div>
      </div>
    </div>
  );
}

function BottomBottoms1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bottom bottoms">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
          <Button1 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function MainContainer2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[844px] items-start left-[953px] max-w-[560px] top-0 w-[390px]" data-name="Main container">
      <TopAppBar1 />
      <InfoMessage />
      <TimeSlot />
      <BottomBottoms1 />
    </div>
  );
}

function Dismiss4() {
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

function IconButton6() {
  return (
    <div className="bg-white opacity-90 relative rounded-[999px] shadow-[0px_2px_12px_0px_rgba(153,97,247,0.5)] shrink-0 size-[40px]" data-name="Icon button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <Dismiss4 />
        </div>
      </div>
    </div>
  );
}

function Dismiss5() {
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

function IconButton7() {
  return (
    <div className="bg-[#e9eaec] opacity-0 relative rounded-[999px] shrink-0 size-[40px]" data-name="Icon button">
      <div aria-hidden="true" className="absolute border border-[#d3d5da] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_2px_12px_0px_rgba(153,97,247,0.5)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <Dismiss5 />
        </div>
      </div>
    </div>
  );
}

function TopAppBar2() {
  return (
    <div className="bg-white h-[72px] opacity-90 relative shrink-0 w-full" data-name="Top app bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <IconButton6 />
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-center text-nowrap">Reserve seat</p>
          <IconButton7 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white">Dec, 2025</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col h-[51px] items-center justify-center relative shrink-0">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[22px] text-center text-nowrap text-white">15</p>
      <Frame3 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-white">Date</p>
      <Frame15 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white">9:00 AM - 6:00 PM</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame21 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col h-[51px] items-center justify-center relative shrink-0">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[22px] text-center text-nowrap text-white">Full day</p>
      <Frame22 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-white">Time</p>
      <Frame24 />
    </div>
  );
}

function InfoMessage1() {
  return (
    <div className="bg-[#464a53] relative shrink-0 w-full" data-name="Info message">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[40px] items-center justify-center px-[16px] py-[24px] relative w-full">
          <Frame17 />
          <div className="flex flex-row items-center self-stretch">
            <div className="bg-gradient-to-b from-[rgba(255,255,255,0)] h-full opacity-20 shrink-0 to-[rgba(255,255,255,0)] via-[#ffffff] via-[50.481%] w-px" data-name="Divider" />
          </div>
          <Frame18 />
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
            <g filter="url(#filter0_d_4010_734)" id="Line 12">
              <line stroke="var(--stroke-0, #9961F7)" strokeWidth="2" x1="12" x2="142" y1="11" y2="11" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="26" id="filter0_d_4010_734" width="154" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="6" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0.968627 0 0 0 0.5 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_4010_734" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_4010_734" mode="normal" result="shape" />
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

function Frame23() {
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

function Seat() {
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

function Seat1() {
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

function Seat2() {
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

function Seat7() {
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

function Seat8() {
  return (
    <div className="content-stretch flex items-center pl-[40px] pr-[24px] py-[16px] relative shrink-0" data-name="Seat 8">
      <div className="flex h-[105px] items-center justify-center relative shrink-0 w-[80px]" style={{ "--transform-inner-width": "29.5625", "--transform-inner-height": "16.796875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Seat7 />
        </div>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative shrink-0" data-name="Left">
      <Seat />
      <Seat1 />
      <Seat2 />
      <Seat8 />
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

function Seat3() {
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

function Seat4() {
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

function Seat5() {
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

function Seat6() {
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
      <Seat3 />
      <Seat4 />
      <Seat5 />
      <Seat6 />
    </div>
  );
}

function Frame13() {
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
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function ChevronRight3() {
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

function Button3() {
  return (
    <div className="basis-0 bg-[#e9eaec] grow h-[64px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <ChevronRight3 />
            </div>
          </div>
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#464a53] text-[18px] text-center text-nowrap">Back</p>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="basis-0 bg-[#9961f7] grow h-[64px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">Done</p>
        </div>
      </div>
    </div>
  );
}

function BottomBottoms2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bottom bottoms">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
          <Button3 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function MainContainer3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[844px] items-start left-[1383px] max-w-[560px] top-0 w-[390px]" data-name="Main container">
      <TopAppBar2 />
      <InfoMessage1 />
      <Frame23 />
      <SeatLayout />
      <BottomBottoms2 />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[#dbcffc] relative size-full" data-name="Home page">
      <MainContainer />
      <MainContainer1 />
      <MainContainer2 />
      <MainContainer3 />
    </div>
  );
}