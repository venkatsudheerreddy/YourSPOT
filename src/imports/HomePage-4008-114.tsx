import svgPaths from "./svg-9tz3i2ha0x";
import imgImage13 from "figma:asset/899d6b031132ea9dfe87f9e31aa24b5007910889.png";
import imgDivider from "figma:asset/6c41ab0632868a05b0e3b1afb2c77e5468da5a82.png";

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
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[22px] w-[110px]">16A</p>
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

function Frame4() {
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
      <Frame4 />
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

function Frame5() {
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
      <Frame5 />
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
    <div className="basis-0 bg-white content-stretch flex flex-col grow isolate items-start max-w-[560px] min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="Main container">
      <Header />
      <MainContent />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[#dbcffc] content-stretch flex flex-col isolate items-center justify-between relative size-full" data-name="Home page">
      <MainContainer />
    </div>
  );
}