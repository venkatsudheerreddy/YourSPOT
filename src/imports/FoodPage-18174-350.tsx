import svgPaths from "./svg-hdkibrwb38";
import imgZoshuaColahWq1QAraLg4Unsplash1 from "figma:asset/bae7bc4ab846f6f45c173e91a62a36a39cc2bd12.png";

function Carousal() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="carousal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="carousal">
          <path d={svgPaths.p38b6dd80} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center opacity-0 p-[8px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Carousal />
    </div>
  );
}

function Thumbnail() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="thumbnail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="thumbnail">
          <path d={svgPaths.p79a9700} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center p-[8px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Thumbnail />
    </div>
  );
}

function Title() {
  return (
    <div className="absolute backdrop-blur-[2px] backdrop-filter bg-[rgba(0,0,0,0.3)] content-stretch flex h-[56px] items-center justify-between left-0 overflow-clip px-[24px] py-[8px] top-0 w-[390px]" data-name="Title">
      <Frame />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-white">Lunch</p>
      <Frame1 />
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

function Home() {
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

function Home1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[64px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="home">
      <Home />
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
            <g filter="url(#filter0_d_18174_530)" id="Vector 22">
              <path d={svgPaths.p2805e4c0} stroke="var(--stroke-0, #9961F7)" strokeLinecap="round" />
            </g>
            <g filter="url(#filter1_d_18174_530)" id="Vector 23">
              <path d={svgPaths.p2f55e600} fill="var(--fill-0, #9961F7)" />
              <path d={svgPaths.p13825dc0} stroke="var(--stroke-0, #9961F7)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="42.5" id="filter0_d_18174_530" width="31" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0.968627 0 0 0 0.5 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18174_530" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_18174_530" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="42.4283" id="filter1_d_18174_530" width="29.3382" x="10" y="0.0716884">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0.968627 0 0 0 0.5 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18174_530" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_18174_530" mode="normal" result="shape" />
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
      <Home1 />
      <Lunch1 />
      <Settings1 />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="absolute bg-[#d4d9b1] content-stretch flex flex-col h-[844px] items-center left-0 top-0 w-[390px]" data-name="Main container">
      <div className="h-[402px] relative shrink-0 w-[393px]" data-name="zoshua-colah-_WQ1qARALg4-unsplash 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[130.9%] left-[-0.05%] max-w-none top-[-15.45%] w-[100.09%]" src={imgZoshuaColahWq1QAraLg4Unsplash1} />
        </div>
      </div>
      <Title />
      <FoodDescription />
      <PaginationDots />
      <BottomNavigation />
    </div>
  );
}

export default function FoodPage() {
  return (
    <div className="bg-[#dbcffc] relative size-full" data-name="Food page">
      <MainContainer />
    </div>
  );
}