import svgPaths from "./svg-4ro4uwdvfh";

function Frame() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#545864] text-[12px] text-nowrap">Developed with</p>
      <div className="h-[10px] relative shrink-0 w-[12px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 10">
          <path d={svgPaths.p3bb4b500} fill="url(#paint0_linear_18098_158)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_18098_158" x1="6" x2="6" y1="-4.38287e-08" y2="10">
              <stop stopColor="#FF4674" />
              <stop offset="1" stopColor="#D7123C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#545864] text-[12px] text-nowrap">by AirPro team</p>
    </div>
  );
}

export default function Content() {
  return (
    <div className="relative size-full" data-name="Content">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}