import svgPaths from "./svg-37zvgxe2tc";
import imgScreenshot202512241857261 from "figma:asset/af700183e94412f95f72c748041227a37301793c.png";

function Logo() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-[121px] top-[243px] w-[120px]" data-name="Logo">
      <div className="h-[38px] relative shrink-0 w-[120px]" data-name="SPOT">
        <div className="absolute inset-[-10.53%_-6.67%_-21.05%_-4%]" style={{ "--fill-0": "rgba(255, 255, 255, 1)", "--stroke-0": "rgba(153, 97, 247, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132.801 50">
            <g filter="url(#filter0_d_18086_114)" id="SPOT">
              <path d={svgPaths.p2f832a00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3c584900} fill="var(--fill-0, white)" />
              <path d={svgPaths.p129edc80} fill="var(--fill-0, white)" />
              <path d={svgPaths.pdb21800} fill="var(--fill-0, white)" />
              <path d={svgPaths.p4a50080} stroke="var(--stroke-0, #9961F7)" strokeWidth="4" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="50" id="filter0_d_18086_114" width="132.801" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="4" dy="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0.968627 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18086_114" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_18086_114" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="font-['LEMON_MILK:Medium',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#1b1b23] text-[10px] text-center w-[min-content]">pick a spot. show up.</p>
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="Main content">
      <div className="absolute h-[362px] left-[19.5px] top-[277.06px] w-[351px]" data-name="Screenshot 2025-12-24 185726 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot202512241857261} />
      </div>
      <div className="absolute bg-white h-[52px] left-[112px] top-[299px] w-[148px]" />
      <Logo />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow isolate items-center justify-center max-w-[560px] min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="Main container">
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