import svgPaths from "./svg-mcvj28k4k";

function Icon() {
  return (
    <div className="h-[208px] relative shrink-0 w-[211px]" data-name="Icon">
      <div className="absolute inset-[-45.67%_-51.66%_-66.35%_-53.08%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 432 441">
          <g id="Icon">
            <g filter="url(#filter0_d_18264_179)" id="Ellipse 695">
              <path d={svgPaths.p15771e00} fill="var(--fill-0, #1CC97B)" />
            </g>
            <path d={svgPaths.p2598c180} id="Ellipse 696" stroke="var(--stroke-0, #1CC97B)" strokeWidth="0.5" />
            <path d={svgPaths.p2f4218c0} fill="var(--fill-0, white)" id="Union" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="441" id="filter0_d_18264_179" width="432" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="20" />
              <feGaussianBlur stdDeviation="62" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.109804 0 0 0 0 0.788235 0 0 0 0 0.482353 0 0 0 0.7 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18264_179" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_18264_179" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[0] relative shrink-0 whitespace-nowrap">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[#464a53] text-[12px]">
        <p className="leading-[normal] whitespace-pre">We’ve sent a confirmation link to</p>
      </div>
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 text-[#1b1b23] text-[14px]">
        <p className="leading-[normal] whitespace-pre">venkat.conc@gmail.com</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center not-italic relative shrink-0 text-center w-full" data-name="Content">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[20px] text-black tracking-[-0.8px] uppercase whitespace-pre">Check your mail</p>
      <Frame />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-w-full relative shrink-0 text-[#464a53] text-[0px] w-[min-content]">
        <p className="leading-[normal] text-[12px] whitespace-pre-wrap">
          <span>{`Please check your inbox. If you don’t see the email, also check your `}</span>
          <span className="font-['Poppins:SemiBold',sans-serif] not-italic">Spam or Promotions</span>
          <span>{` folder to confirm your email.`}</span>
        </p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[53px] items-center min-h-px min-w-px px-[15px] py-[102px] relative w-[390px]" data-name="Content">
      <Icon />
      <Content1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#9961f7] flex-[1_0_0] h-[64px] min-h-px min-w-px relative rounded-[16px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-pre">Back to login</p>
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

export default function CheckYourMail() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative size-full" data-name="Check your mail">
      <MainContainer />
    </div>
  );
}