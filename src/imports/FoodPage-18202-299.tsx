import svgPaths from "./svg-w8ijuetsri";
import imgUntitled12 from "figma:asset/413c2e906aa84a0ef4cc1a0213c143a63c237dce.png";
import imgUc1 from "figma:asset/67509c3cbc0fdfa65b4cafa8f16939e0c8f95bbd.png";

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
    <div className="absolute bg-gradient-to-b content-stretch flex from-black items-start left-0 p-[16px] to-[rgba(0,0,0,0)] top-0 w-[390px]" data-name="Top app bar">
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
            <g filter="url(#filter0_d_18202_303)" id="Vector 22">
              <path d={svgPaths.p2805e4c0} stroke="var(--stroke-0, #9961F7)" strokeLinecap="round" />
            </g>
            <g filter="url(#filter1_d_18202_303)" id="Vector 23">
              <path d={svgPaths.p2f55e600} fill="var(--fill-0, #9961F7)" />
              <path d={svgPaths.p13825dc0} stroke="var(--stroke-0, #9961F7)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="42.5" id="filter0_d_18202_303" width="31" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0.968627 0 0 0 0.5 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18202_303" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_18202_303" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="42.4283" id="filter1_d_18202_303" width="29.3382" x="10" y="0.0716884">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0.968627 0 0 0 0.5 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18202_303" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_18202_303" mode="normal" result="shape" />
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

function MainContainer() {
  return (
    <div className="absolute bg-[#d4d9b1] content-stretch flex flex-col h-[844px] items-center left-0 top-0 w-[390px]" data-name="Main container">
      <div className="h-[856px] relative shrink-0 w-[713px]" data-name="Untitled-1 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgUntitled12} />
      </div>
      <TopAppBar />
      <FoodDescription />
      <PaginationDots />
      <BottomNavigation />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#9961f7] bottom-[39.83px] content-stretch flex gap-[8px] h-[48px] items-center justify-center left-[24px] px-[8px] py-[16px] rounded-[16px] w-[312px]" data-name="Button">
      <p className="basis-0 font-['Poppins:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-center text-white">It’s okay, let me see what’s cooking inside</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 bg-[#1c2232] grow h-[477.667px] min-h-px min-w-px overflow-clip relative rounded-[24px] shrink-0">
      <div className="absolute h-[572px] left-1/2 top-[calc(50%-40px)] translate-x-[-50%] translate-y-[-50%] w-[476px]" data-name="UC 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgUc1} />
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[16px] text-center text-nowrap text-white top-[51.83px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal]">This page is under construction</p>
      </div>
      <Button />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] content-stretch flex h-[780px] items-center justify-center left-0 px-[16px] py-[8px] top-0 w-[392px]">
      <Frame />
    </div>
  );
}

export default function FoodPage() {
  return (
    <div className="bg-[#dbcffc] relative size-full" data-name="Food page">
      <MainContainer />
      <Frame1 />
    </div>
  );
}
