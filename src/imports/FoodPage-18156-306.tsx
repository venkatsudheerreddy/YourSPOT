import svgPaths from "./svg-4j6j5pxnrc";
import imgUntitled12 from "figma:asset/413c2e906aa84a0ef4cc1a0213c143a63c237dce.png";

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
            <g filter="url(#filter0_d_18156_310)" id="Vector 22">
              <path d={svgPaths.p2805e4c0} stroke="var(--stroke-0, #005198)" strokeLinecap="round" />
            </g>
            <g filter="url(#filter1_d_18156_310)" id="Vector 23">
              <path d={svgPaths.p2f55e600} fill="var(--fill-0, #005198)" />
              <path d={svgPaths.p13825dc0} stroke="var(--stroke-0, #005198)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="42.5" id="filter0_d_18156_310" width="31" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0.968627 0 0 0 0.5 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18156_310" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_18156_310" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="42.4283" id="filter1_d_18156_310" width="29.3382" x="10" y="0.0716884">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0.968627 0 0 0 0.5 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18156_310" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_18156_310" mode="normal" result="shape" />
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
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#005198] text-[10px] text-center w-[min-content]">
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
    <div className="absolute bg-[#d4d9b1] h-[844px] left-0 top-0 w-[390px]" data-name="Main container">
      <div className="absolute h-[856px] left-[calc(50%-0.5px)] top-[calc(50%-6px)] translate-x-[-50%] translate-y-[-50%] w-[713px]" data-name="Untitled-1 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgUntitled12} />
      </div>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[195px] not-italic text-[14px] text-center text-white top-[136px] translate-x-[-50%] w-[390px]">No lunch today</p>
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