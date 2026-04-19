import svgPaths from "./svg-j2h31idjtl";
import imgSeat from "figma:asset/06a2dbc140d3345ec3be709f68f7f30332113bf9.png";

function Illustration() {
  return (
    <div className="h-[208px] relative shrink-0 w-[211px]" data-name="Illustration">
      <div className="absolute inset-[-45.67%_-51.66%_-66.35%_-53.08%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 432 441">
          <g id="Illustration">
            <g filter="url(#filter0_d_18265_108)" id="Ellipse 695">
              <path d={svgPaths.p15771e00} fill="var(--fill-0, #1CC97B)" />
            </g>
            <path d={svgPaths.p2598c180} id="Ellipse 696" stroke="var(--stroke-0, #1CC97B)" strokeWidth="0.5" />
            <circle cx="212" cy="199" fill="var(--fill-0, white)" fillOpacity="0.2" id="Ellipse 697" r="41.5" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p1d94a080} id="Vector 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="441" id="filter0_d_18265_108" width="432" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="20" />
              <feGaussianBlur stdDeviation="62" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.109804 0 0 0 0 0.788235 0 0 0 0 0.482353 0 0 0 0.7 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18265_108" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_18265_108" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center leading-[normal] not-italic relative shrink-0 whitespace-pre" data-name="Content">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[20px] text-black tracking-[-0.8px] uppercase">Booking Confirmed!</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#464a53] text-[12px]">Your seat has been successfully reserved.</p>
    </div>
  );
}

function Chair() {
  return (
    <div className="absolute left-1/2 size-[46px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="chair">
      <div className="absolute aspect-[1030/1449] bottom-[6.25%] left-1/2 top-[6.25%] translate-x-[-50%]" data-name="seat">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[106.9%] left-[-24.95%] max-w-none top-[-2.55%] w-[150.39%]" src={imgSeat} />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[60px]" data-name="Icon">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Chair />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[22px] whitespace-pre">108</p>
      <div className="relative shrink-0 size-[4px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(27, 27, 35, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, #1B1B23)" id="Ellipse 1" r="2" />
          </svg>
        </div>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[12px] whitespace-pre">Zone A</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[12px] whitespace-pre">9:00 AM - 6:00 PM</p>
      <div className="relative shrink-0 size-[4px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(27, 27, 35, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, #1B1B23)" id="Ellipse 1" r="2" />
          </svg>
        </div>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[12px] whitespace-pre">Dec 12, 2025</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame3 />
      <Frame />
    </div>
  );
}

function BookingCard() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[100px] relative rounded-[24px] shrink-0 w-full" data-name="Booking card">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_16px_44px_0px_rgba(19,25,103,0.15)]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-center px-[16px] py-[20px] relative size-full">
          <Icon />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-center min-h-px min-w-px px-[40px] py-[102px] relative w-[390px]" data-name="Content">
      <Illustration />
      <Content1 />
      <BookingCard />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#9961f7] flex-[1_0_0] h-[64px] min-h-px min-w-px relative rounded-[16px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-pre">Home</p>
        </div>
      </div>
    </div>
  );
}

function BottomBottoms() {
  return (
    <div className="content-stretch flex h-[96px] items-start p-[16px] relative shrink-0 w-[390px]" data-name="Bottom bottoms">
      <Button />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="content-stretch flex flex-col h-[844px] items-start relative shrink-0 w-full" data-name="Main container">
      <Content />
      <BottomBottoms />
    </div>
  );
}

export default function Completed() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative size-full" data-name="Completed">
      <MainContainer />
    </div>
  );
}