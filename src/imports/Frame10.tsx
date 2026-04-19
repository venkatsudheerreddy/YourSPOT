import svgPaths from "./svg-3vibqyvkoj";
import imgImage13 from "figma:asset/899d6b031132ea9dfe87f9e31aa24b5007910889.png";
import imgRectangle1 from "figma:asset/587c2cde7becbdf6dc626dad506f1c552b99ef1e.png";

function Frame() {
  return (
    <div className="bg-[#f8fafd] content-stretch flex flex-col items-center justify-center not-italic opacity-90 overflow-clip px-0 py-[56px] relative shadow-[0px_4px_28px_0px_#cde9c7] shrink-0 text-nowrap w-full whitespace-pre z-[2]">
      <p className="font-['Hexagon_Akkurat:regular',sans-serif] leading-[24px] relative shrink-0 text-[#646e78] text-[16px]">{`Good morning! `}</p>
      <p className="[text-shadow:#111111_8px_6px_0px] font-['LEMON_MILK:Bold',sans-serif] leading-none relative shrink-0 text-[#5bd640] text-[40px] tracking-[-4px] uppercase">Sudheer</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Hexagon_Akkurat:bold',sans-serif] leading-[34px] relative shrink-0 text-[#121623] text-[23px]">12</p>
      <p className="font-['Hexagon_Akkurat:regular',sans-serif] leading-[24px] relative shrink-0 text-[#646e78] text-[16px]">/50</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center not-italic relative shrink-0 text-nowrap whitespace-pre">
      <Frame8 />
      <p className="font-['Hexagon_Akkurat:regular',sans-serif] leading-[18px] relative shrink-0 text-[#646e78] text-[12px]">occupancy</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="font-['Hexagon_Akkurat:bold',sans-serif] leading-[34px] relative shrink-0 text-[#121623] text-[23px]">38</p>
      <p className="font-['Hexagon_Akkurat:regular',sans-serif] leading-[18px] relative shrink-0 text-[#646e78] text-[12px]">available</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <Frame1 />
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-gradient-to-b from-[#ffffff] h-full opacity-20 shrink-0 to-[#ffffff] via-[#000000] via-[50.481%] w-px" />
      </div>
      <Frame2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center justify-center px-0 py-[24px] relative rounded-[12px] shrink-0 w-full">
      <p className="font-['Hexagon_Akkurat:regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#646e78] text-[16px] text-nowrap whitespace-pre">today’s overview</p>
      <Frame9 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#f8fafd] content-stretch flex items-center p-[8px] relative rounded-[999px] shrink-0">
      <div className="relative shrink-0 size-[40px]" data-name="image 13">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage13} />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="font-['Hexagon_Akkurat:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f5f7fa] text-[14px] text-nowrap whitespace-pre">9:00 AM - 6:00 PM</p>
      <div className="relative shrink-0 size-[4px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(245, 247, 250, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, #F5F7FA)" id="Ellipse 1" r="2" />
          </svg>
        </div>
      </div>
      <p className="font-['Hexagon_Akkurat:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f5f7fa] text-[14px] text-nowrap whitespace-pre">Dec 12, 2025</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame15 />
      <p className="font-['Hexagon_Akkurat:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f5f7fa] text-[14px] text-nowrap whitespace-pre">Zone 3</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['LEMON_MILK:Bold',sans-serif] leading-[34px] not-italic relative shrink-0 text-[#f5f7fa] text-[23px] tracking-[-2px] w-[110px]">Seat S12</p>
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Hexagon_Akkurat:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f5f7fa] text-[14px] text-nowrap whitespace-pre">next booking!</p>
      <Frame14 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#222222] relative rounded-[16px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[16px] py-[20px] relative w-full">
          <Frame13 />
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function User() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_44_149)" id="user">
          <path d={svgPaths.p33b19100} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p315b9900} fill="var(--fill-0, black)" id="Vector_2" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_44_149">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#5bd640] relative rounded-[999px] shrink-0 size-[56px]">
      <div className="overflow-clip relative rounded-[inherit] size-[56px]">
        <User />
      </div>
      <div aria-hidden="true" className="absolute border border-[#111111] border-solid inset-[-1px] pointer-events-none rounded-[1000px] shadow-[2px_2px_0px_0px_#111111]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col gap-[24px] grow items-center justify-center min-h-px min-w-px px-0 py-[24px] relative rounded-[16px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[4px_4px_0px_0px_#333333]" />
      <Frame16 />
      <p className="font-['Hexagon_Akkurat:bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#121623] text-[16px] text-nowrap whitespace-pre">Book seat</p>
    </div>
  );
}

function CalendarHeatMap() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="calendar--heat-map">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_44_154)" id="calendar--heat-map">
          <path d={svgPaths.p2ff8a000} fill="var(--fill-0, black)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_44_154">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#5bd640] relative rounded-[999px] shrink-0 size-[56px]">
      <div className="overflow-clip relative rounded-[inherit] size-[56px]">
        <CalendarHeatMap />
      </div>
      <div aria-hidden="true" className="absolute border border-[#111111] border-solid inset-[-1px] pointer-events-none rounded-[1000px] shadow-[2px_2px_0px_0px_#111111]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col gap-[24px] grow items-center justify-center min-h-px min-w-px px-0 py-[24px] relative rounded-[16px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[4px_4px_0px_0px_#333333]" />
      <Frame17 />
      <p className="font-['Hexagon_Akkurat:bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#121623] text-[16px] text-nowrap whitespace-pre">My bookings</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 bg-[#111111] grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center p-[16px] relative size-full">
          <Card />
          <div className="h-px opacity-20 relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle1} />
          </div>
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-center min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="Main content">
      <Frame5 />
      <Frame10 />
    </div>
  );
}

export default function Frame7() {
  return (
    <div className="bg-[#f8fafd] content-stretch flex flex-col isolate items-center justify-between relative size-full">
      <Frame />
      <MainContent />
    </div>
  );
}