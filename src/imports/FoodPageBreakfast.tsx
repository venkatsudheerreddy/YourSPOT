import svgPaths from "./svg-bu8h1ks6m3";
import imgSouthThali1 from "figma:asset/12edd84d59b3f86df0eed3b688f3618d8a2ddc27.png";

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

function Home() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[64px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="home">
      <Home1 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#464a53] text-[10px] text-center w-[min-content]">
        <p className="leading-[normal]">home</p>
      </div>
    </div>
  );
}

function Lunch1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lunch">
      <div className="absolute inset-[-31.25%_-32.66%_-45.83%_-31.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.3382 42.5">
          <g id="lunch">
            <g filter="url(#filter0_d_18193_293)" id="Vector 22">
              <path d={svgPaths.p2805e4c0} stroke="var(--stroke-0, #9961F7)" strokeLinecap="round" />
            </g>
            <g filter="url(#filter1_d_18193_293)" id="Vector 23">
              <path d={svgPaths.p2f55e600} fill="var(--fill-0, #9961F7)" />
              <path d={svgPaths.p13825dc0} stroke="var(--stroke-0, #9961F7)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="42.5" id="filter0_d_18193_293" width="31" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0.968627 0 0 0 0.5 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18193_293" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_18193_293" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="42.4283" id="filter1_d_18193_293" width="29.3382" x="10" y="0.0716884">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0.968627 0 0 0 0.5 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18193_293" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_18193_293" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Lunch() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[64px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="lunch">
      <Lunch1 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#9961f7] text-[10px] text-center w-[min-content]">
        <p className="leading-[normal]">lunch</p>
      </div>
    </div>
  );
}

function Settings1() {
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

function Settings() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[64px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="settings">
      <Settings1 />
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
      <Home />
      <Lunch />
      <Settings />
    </div>
  );
}

function SecondaryTabs() {
  return (
    <div className="basis-0 bg-[#9961f7] grow h-[36px] min-h-px min-w-px relative rounded-[999px] shrink-0" data-name="Secondary tabs">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white">Breakfast</p>
        </div>
      </div>
    </div>
  );
}

function SecondaryTabs1() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative rounded-[999px] shrink-0" data-name="Secondary tabs">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9961f7] text-[12px] text-center w-full">Lunch</p>
        </div>
      </div>
    </div>
  );
}

function SecondaryTabs2() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative rounded-[999px] shrink-0" data-name="Secondary tabs">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9961f7] text-[12px] text-center w-full">Snacks</p>
        </div>
      </div>
    </div>
  );
}

function SecondaryTabs3() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative rounded-[999px] shrink-0" data-name="Secondary tabs">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9961f7] text-[12px] text-center w-full">Bakery</p>
        </div>
      </div>
    </div>
  );
}

function MealType() {
  return (
    <div className="absolute content-stretch flex gap-[11px] h-[40px] items-center left-1/2 p-[2px] rounded-[999px] top-[61px] translate-x-[-50%] w-[358px]" data-name="Meal type">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <SecondaryTabs />
      <SecondaryTabs1 />
      <SecondaryTabs2 />
      <SecondaryTabs3 />
    </div>
  );
}

function MealType1() {
  return (
    <div className="absolute bg-[#f0f4ff] content-stretch flex items-center justify-center left-1/2 px-[2px] py-[4px] top-[109px] translate-x-[-50%] w-[390px]" data-name="Meal type">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-center text-nowrap">12:00 AM - 10: AM</p>
    </div>
  );
}

function Mon() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center justify-center min-h-px min-w-px pb-0 pt-[16px] px-0 relative shrink-0" data-name="Mon">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-nowrap">Mon</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(211, 213, 218, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 1">
            <line id="Line 12" stroke="var(--stroke-0, #D3D5DA)" x2="78" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Tue() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center justify-center min-h-px min-w-px pb-0 pt-[16px] px-0 relative shrink-0" data-name="Tue">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9961f7] text-[14px] text-nowrap">Tue</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-12px_-15.38%_-14px_-15.38%]" style={{ "--stroke-0": "rgba(153, 97, 247, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 102 26">
            <g filter="url(#filter0_d_18193_297)" id="Line 12">
              <line stroke="var(--stroke-0, #9961F7)" strokeWidth="2" x1="12" x2="90" y1="11" y2="11" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="26" id="filter0_d_18193_297" width="102" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="6" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0.968627 0 0 0 0.5 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18193_297" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_18193_297" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Wed() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center justify-center min-h-px min-w-px pb-0 pt-[16px] px-0 relative shrink-0" data-name="Wed">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-nowrap">Wed</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(211, 213, 218, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 1">
            <line id="Line 12" stroke="var(--stroke-0, #D3D5DA)" x2="78" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Thu() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center justify-center min-h-px min-w-px pb-0 pt-[16px] px-0 relative shrink-0" data-name="Thu">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-nowrap">Thu</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(211, 213, 218, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 1">
            <line id="Line 12" stroke="var(--stroke-0, #D3D5DA)" x2="78" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Fri() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center justify-center min-h-px min-w-px pb-0 pt-[16px] px-0 relative shrink-0" data-name="Fri">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-nowrap">Fri</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(211, 213, 218, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 1">
            <line id="Line 12" stroke="var(--stroke-0, #D3D5DA)" x2="78" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Days() {
  return (
    <div className="absolute bg-white content-stretch flex items-start justify-between left-0 shadow-[0px_4px_13px_0px_rgba(0,0,0,0.16)] top-0 w-[390px]" data-name="DAYS">
      <Mon />
      <Tue />
      <Wed />
      <Thu />
      <Fri />
    </div>
  );
}

function Image() {
  return (
    <div className="bg-white h-[160px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <div className="absolute h-[160px] left-[calc(50%+0.5px)] top-0 translate-x-[-50%] w-[206px]" data-name="south_thali 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSouthThali1} />
      </div>
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap w-full" data-name="Details">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 text-[#1b1b23]">
        <p className="leading-[normal] text-nowrap">Idly and mysore bajji</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[normal] relative shrink-0 text-[#464a53]">
        <p className="mb-0">Coconut Chutney</p>
        <p className="mb-0">Allam Chutney</p>
        <p>Sambar</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Item 6">
      <Image />
      <Details />
    </div>
  );
}

function Image1() {
  return (
    <div className="bg-white h-[160px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <div className="absolute h-[160px] left-[calc(50%+0.5px)] top-0 translate-x-[-50%] w-[206px]" data-name="south_thali 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSouthThali1} />
      </div>
    </div>
  );
}

function Details1() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap w-full" data-name="Details">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 text-[#1b1b23]">
        <p className="leading-[normal] text-nowrap">Omelet</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[#464a53]">
        <p className="leading-[normal] text-nowrap">₹ 110.00</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] items-center place-self-stretch relative shrink-0" data-name="Item 5">
      <Image1 />
      <Details1 />
    </div>
  );
}

function Image2() {
  return (
    <div className="bg-white h-[160px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <div className="absolute h-[160px] left-[calc(50%+0.5px)] top-0 translate-x-[-50%] w-[206px]" data-name="south_thali 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSouthThali1} />
      </div>
    </div>
  );
}

function Details2() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap w-full" data-name="Details">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 text-[#1b1b23]">
        <p className="leading-[normal] text-nowrap">South thali</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[#464a53]">
        <p className="leading-[normal] text-nowrap">₹ 110.00</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex flex-col gap-[4px] items-center place-self-stretch relative shrink-0" data-name="Item 4">
      <Image2 />
      <Details2 />
    </div>
  );
}

function Items() {
  return (
    <div className="absolute bg-white gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[fit-content(100%)_fit-content(100%)_minmax(0px,_1fr)] h-[632px] left-0 px-[16px] py-0 top-[175px] w-[390px]" data-name="Items">
      <Item2 />
      <Item1 />
      <Item />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="absolute bg-white h-[844px] left-0 top-0 w-[390px]" data-name="Main container">
      <BottomNavigation />
      <MealType />
      <MealType1 />
      <Days />
      <Items />
    </div>
  );
}

export default function FoodPageBreakfast() {
  return (
    <div className="bg-white relative size-full" data-name="Food page - breakfast">
      <MainContainer />
    </div>
  );
}