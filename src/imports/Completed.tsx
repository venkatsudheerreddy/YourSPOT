import svgPaths from "./svg-bihbo3rds4";
import imgImage13 from "figma:asset/899d6b031132ea9dfe87f9e31aa24b5007910889.png";

function Bg() {
  return (
    <div className="absolute h-[844px] left-0 top-0 w-[390px]" data-name="BG">
      <div className="absolute inset-[-21.99%_-77.93%_-43.13%_-77.7%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 997 1394">
          <g id="BG">
            <rect fill="#EEEBE5" height="844" transform="translate(303.034 185.621)" width="390" />
            <g filter="url(#filter0_f_4005_1245)" id="Ellipse 702" opacity="0.3">
              <ellipse cx="558.552" cy="488.715" fill="var(--fill-0, #2082E3)" rx="134.483" ry="220.715" />
            </g>
            <g filter="url(#filter1_f_4005_1245)" id="Ellipse 703" opacity="0.3">
              <ellipse cx="498.483" cy="808.906" fill="var(--fill-0, #F433FE)" rx="134.483" ry="220.715" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="977.429" id="filter0_f_4005_1245" width="804.966" x="156.069" y="7.62939e-06">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_4005_1245" stdDeviation="134" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1169.43" id="filter1_f_4005_1245" width="996.966" x="0" y="224.192">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_4005_1245" stdDeviation="182" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[120px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
        <g id="Frame 35">
          <path d={svgPaths.pfd02d00} fill="url(#paint0_linear_4005_1242)" />
          <path d={svgPaths.pa324e00} id="Vector 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4005_1242" x1="60" x2="60" y1="0" y2="120">
            <stop stopColor="#26D692" />
            <stop offset="1" stopColor="#16CD8D" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center leading-[normal] not-italic relative shrink-0 text-foreground text-center text-nowrap">
      <p className="font-[family-name:var(--font-primary)] font-[weight:var(--fw-heavy)] relative shrink-0 text-[22px]">Booking Confirmed!</p>
      <p className="font-[family-name:var(--font-primary)] font-[weight:var(--fw-regular)] relative shrink-0 text-[12px]">Your seat has been successfully reserved.</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-background content-stretch flex items-center p-[8px] relative rounded-[999px] shrink-0" data-name="Icon">
      <div aria-hidden="true" className="absolute border border-input border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="relative shrink-0 size-[40px]" data-name="image 13">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage13} />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="font-[family-name:var(--font-primary)] font-[weight:var(--fw-regular)] leading-[normal] not-italic relative shrink-0 text-foreground text-[12px] text-nowrap">9:00 AM - 6:00 PM</p>
      <div className="relative shrink-0 size-[4px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(27, 27, 35, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, var(--foreground))" id="Ellipse 1" r="2" />
          </svg>
        </div>
      </div>
      <p className="font-[family-name:var(--font-primary)] font-[weight:var(--fw-regular)] leading-[normal] not-italic relative shrink-0 text-foreground text-[12px] text-nowrap">Dec 12, 2025</p>
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
      <p className="font-[family-name:var(--font-primary)] font-[weight:var(--fw-heavy)] leading-[normal] not-italic relative shrink-0 text-foreground text-[22px] w-[110px]">16A</p>
      <Frame />
    </div>
  );
}

function NextBooking() {
  return (
    <div className="bg-background relative rounded-[16px] shrink-0 w-full" data-name="Next booking">
      <div aria-hidden="true" className="absolute border border-input border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-center px-[16px] py-[20px] relative w-full">
          <Icon />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function TimeSlot() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[780px] items-center justify-center p-[40px] relative shrink-0 w-[390px]" data-name="Time slot">
      <Frame3 />
      <Frame4 />
      <NextBooking />
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-primary grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
          <p className="font-[family-name:var(--font-primary)] font-[weight:var(--fw-regular)] leading-[normal] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-primary-foreground">Home</p>
        </div>
      </div>
    </div>
  );
}

function BottomBottoms() {
  return (
    <div className="content-stretch flex h-[64px] items-start relative shrink-0 w-[390px]" data-name="Bottom bottoms">
      <Button />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="absolute content-stretch flex flex-col h-[844px] items-start left-0 top-0 w-[390px]" data-name="Main container">
      <TimeSlot />
      <BottomBottoms />
    </div>
  );
}

export default function Completed() {
  return (
    <div className="bg-[#d3c4fc] relative size-full" data-name="Completed">
      <Bg />
      <MainContainer />
    </div>
  );
}