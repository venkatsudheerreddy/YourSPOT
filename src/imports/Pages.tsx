import svgPaths from "./svg-fc7abldd6m";
import imgZoshuaColahWq1QAraLg4Unsplash1 from "figma:asset/bae7bc4ab846f6f45c173e91a62a36a39cc2bd12.png";

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

function Home() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="home">
      <div className="absolute inset-[-34.36%_-45.83%_-57.92%_-45.83%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.333 38.4561">
          <g id="home">
            <g filter="url(#filter0_d_18140_447)" id="Subtract">
              <path d={svgPaths.pb97e632} fill="var(--fill-0, #9961F7)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38.4561" id="filter0_d_18140_447" width="38.333" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0.968627 0 0 0 0.5 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18140_447" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_18140_447" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div className="absolute bg-white h-[844px] left-0 top-0 w-[390px]" data-name="Main container">
      <Frame7 />
      <div className="absolute bg-white bottom-0 content-stretch flex items-center justify-center left-0 w-[390px]" data-name="Bottom navigation">
        <div aria-hidden="true" className="absolute border-[#ddd] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
        <div className="basis-0 content-stretch flex flex-col grow h-[64px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="home">
          <Home />
          <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#9961f7] text-[10px] text-center w-[min-content]">
            <p className="leading-[normal]">home</p>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col grow h-[64px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="lunch">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="lunch">
            <div className="absolute inset-[10.42%_17.34%_12.5%_18.75%]" data-name="Union">
              <div className="absolute inset-0" style={{ "--fill-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3379 18.5">
                  <path d={svgPaths.p16747e80} fill="var(--fill-0, #464A53)" id="Union" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#464a53] text-[10px] text-center w-[min-content]">
            <p className="leading-[normal]">lunch</p>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col grow h-[64px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="settings">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="settings">
            <div className="absolute bottom-[7.45%] left-[2.5px] top-[7.45%] w-[19px]" data-name="Union">
              <div className="absolute inset-0" style={{ "--fill-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20.4238">
                  <path d={svgPaths.p1adf5700} fill="var(--fill-0, #464A53)" id="Union" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#464a53] text-[10px] text-center w-[min-content]">
            <p className="leading-[normal]">settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="absolute bg-[#dbcffc] h-[844px] left-[90px] overflow-clip top-[75px] w-[390px]" data-name="Home page">
      <MainContainer />
    </div>
  );
}

function Title() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative rounded-[100px] shrink-0" data-name="Title">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative size-full">
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-white">Today’s lunch</p>
        </div>
      </div>
    </div>
  );
}

function TopAppBar() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex from-[#000000] items-start left-0 p-[16px] to-[rgba(0,0,0,0)] top-0 w-[390px]" data-name="Top app bar">
      <Title />
    </div>
  );
}

function FoodTitle() {
  return (
    <div className="content-stretch flex font-['Poppins:SemiBold',sans-serif] items-center justify-between leading-[normal] relative shrink-0 text-[22px] w-full" data-name="Food title">
      <p className="relative shrink-0">South thali</p>
      <p className="relative shrink-0 text-right">₹ 110.00</p>
    </div>
  );
}

function FoodDescription() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex flex-col gap-[16px] h-[474px] items-start left-0 not-italic p-[24px] rounded-tl-[24px] rounded-tr-[24px] text-[#1b1b23] text-nowrap w-[390px]" data-name="Food description">
      <FoodTitle />
      <ol className="block font-['Poppins:Regular',sans-serif] leading-[0] list-decimal relative shrink-0 text-[14px]" start="1">
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Green Salad</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Pulka</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">White Rice</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Palak Rice</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">{`Dosakai `}</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Drumstick Curry</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Cabbage Onion Pakodi</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Tomato Dal</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Gold Finger</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">{`Gongura `}</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Chutney</span>
        </li>
        <li className="ms-[21px]">
          <span className="leading-[normal]">Curd</span>
        </li>
      </ol>
    </div>
  );
}

function PaginationDots() {
  return (
    <div className="absolute bottom-[80px] h-[22px] left-1/2 translate-x-[-50%] w-[62px]" data-name="Pagination Dots">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 22">
        <g id="Pagination Dots">
          <circle cx="11" cy="11" fill="var(--fill-0, #E8DEF7)" id="Item 1" r="3" />
          <circle cx="21" cy="11" fill="var(--fill-0, #9961F7)" id="Item 2" r="3" />
          <circle cx="31" cy="11" fill="var(--fill-0, #E8DEF7)" id="Item 3" r="3" />
          <circle cx="41" cy="11" fill="var(--fill-0, #E8DEF7)" id="Item 4" r="3" />
          <circle cx="51" cy="11" fill="var(--fill-0, #E8DEF7)" id="Item 5" r="3" />
        </g>
      </svg>
    </div>
  );
}

function Home1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="home">
          <path d={svgPaths.p2a54f400} fill="var(--fill-0, #464A53)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Home2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[64px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="home">
      <Home1 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#464a53] text-[10px] text-center w-[min-content]">
        <p className="leading-[normal]">home</p>
      </div>
    </div>
  );
}

function Lunch() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lunch">
      <div className="absolute inset-[-31.25%_-32.66%_-45.83%_-31.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.3382 42.5">
          <g id="lunch">
            <g filter="url(#filter0_d_18140_435)" id="Vector 22">
              <path d={svgPaths.p2805e4c0} stroke="var(--stroke-0, #9961F7)" strokeLinecap="round" />
            </g>
            <g filter="url(#filter1_d_18140_435)" id="Vector 23">
              <path d={svgPaths.p2f55e600} fill="var(--fill-0, #9961F7)" />
              <path d={svgPaths.p13825dc0} stroke="var(--stroke-0, #9961F7)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="42.5" id="filter0_d_18140_435" width="31" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0.968627 0 0 0 0.5 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18140_435" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_18140_435" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="42.4283" id="filter1_d_18140_435" width="29.3382" x="10" y="0.0716884">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0.968627 0 0 0 0.5 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18140_435" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_18140_435" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Lunch1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[64px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="lunch">
      <Lunch />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#9961f7] text-[10px] text-center w-[min-content]">
        <p className="leading-[normal]">lunch</p>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="settings">
          <path d={svgPaths.p10f7cf00} fill="var(--fill-0, #464A53)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Settings1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[64px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="settings">
      <Settings />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#464a53] text-[10px] text-center w-[min-content]">
        <p className="leading-[normal]">settings</p>
      </div>
    </div>
  );
}

function BottomNavigation() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex items-center justify-center left-0 w-[390px]" data-name="Bottom navigation">
      <div aria-hidden="true" className="absolute border-[#ddd] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Home2 />
      <Lunch1 />
      <Settings1 />
    </div>
  );
}

function MainContainer1() {
  return (
    <div className="absolute bg-[#d4d9b1] content-stretch flex flex-col h-[844px] items-center left-0 top-0 w-[390px]" data-name="Main container">
      <div className="h-[402px] relative shrink-0 w-[393px]" data-name="zoshua-colah-_WQ1qARALg4-unsplash 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[130.9%] left-[-0.05%] max-w-none top-[-15.45%] w-[100.09%]" src={imgZoshuaColahWq1QAraLg4Unsplash1} />
        </div>
      </div>
      <TopAppBar />
      <FoodDescription />
      <PaginationDots />
      <BottomNavigation />
    </div>
  );
}

function FoodPage() {
  return (
    <div className="absolute bg-[#dbcffc] h-[844px] left-[520px] overflow-clip top-[75px] w-[390px]" data-name="Food page">
      <MainContainer1 />
    </div>
  );
}

function ChangeName() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Change name">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[12px] text-nowrap">Menu</p>
        </div>
      </div>
    </div>
  );
}

function ChangeName1() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Change name">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[12px] text-nowrap">Change name</p>
        </div>
      </div>
    </div>
  );
}

function ChangeName2() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Change name">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[12px] text-nowrap">Change password</p>
        </div>
      </div>
    </div>
  );
}

function Logout() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Logout">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[12px] text-nowrap">Logout</p>
        </div>
      </div>
    </div>
  );
}

function DeleteAccount() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Delete account">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[12px] text-nowrap">Delete account</p>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
          <ChangeName />
          <ChangeName1 />
          <ChangeName2 />
          <Logout />
          <DeleteAccount />
        </div>
      </div>
    </div>
  );
}

function Home3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="home">
          <path d={svgPaths.p2a54f400} fill="var(--fill-0, #464A53)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Home4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[64px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="home">
      <Home3 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#464a53] text-[10px] text-center w-[min-content]">
        <p className="leading-[normal]">home</p>
      </div>
    </div>
  );
}

function Lunch2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lunch">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lunch">
          <path d={svgPaths.p36371640} fill="var(--fill-0, #464A53)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Lunch3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[64px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="lunch">
      <Lunch2 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#464a53] text-[10px] text-center w-[min-content]">
        <p className="leading-[normal]">lunch</p>
      </div>
    </div>
  );
}

function Settings2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="settings">
      <div className="absolute inset-[-34.22%_-39.58%_-50.88%_-39.58%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 44.4238">
          <g id="settings">
            <g filter="url(#filter0_d_18140_430)" id="Subtract">
              <path d={svgPaths.p8db100} fill="var(--fill-0, #9961F7)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44.4238" id="filter0_d_18140_430" width="43" x="4.76837e-07" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0.968627 0 0 0 0.5 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18140_430" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_18140_430" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Settings3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[64px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="settings">
      <Settings2 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#9961f7] text-[10px] text-center w-[min-content]">
        <p className="leading-[normal]">settings</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative shrink-0 w-[390px]">
      <div aria-hidden="true" className="absolute border-[#ddd] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Home4 />
      <Lunch3 />
      <Settings3 />
    </div>
  );
}

function MainContainer2() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow items-start max-w-[560px] min-h-px min-w-px relative shrink-0 w-full" data-name="Main container">
      <div className="bg-white h-[72px] opacity-90 relative shrink-0 w-full" data-name="Top app bar">
        <div aria-hidden="true" className="absolute border-[#ddd] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
            <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-center text-nowrap">Settings</p>
          </div>
        </div>
      </div>
      <Content />
      <Frame8 />
    </div>
  );
}

function Settings4() {
  return (
    <div className="absolute bg-[#dbcffc] content-stretch flex flex-col h-[844px] items-center justify-center left-[950px] overflow-clip top-[75px] w-[390px]" data-name="Settings">
      <MainContainer2 />
    </div>
  );
}

export default function Pages() {
  return (
    <div className="bg-[#e8e8e8] relative size-full" data-name="pages">
      <HomePage />
      <FoodPage />
      <Settings4 />
    </div>
  );
}