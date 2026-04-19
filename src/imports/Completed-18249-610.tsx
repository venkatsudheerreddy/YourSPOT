import svgPaths from "./svg-gjvrd6vr9q";
import imgNnn1 from "figma:asset/54ccb960149d00b84cc9ce8b4abd437c4c650a60.png";
import imgEllipse693 from "figma:asset/096007f00dc18516c2ae52eb7185e68991a5ae83.png";

function Frame3() {
  return (
    <div className="absolute left-[135px] size-[120px] top-[211px]">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(52, 182, 110, 1)", "--stroke-0": "rgba(52, 182, 110, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
          <g id="Frame 35">
            <path d={svgPaths.p20c56a00} fill="var(--fill-0, #34B66E)" fillOpacity="0.2" />
            <path d={svgPaths.p20c56a00} stroke="var(--stroke-0, #34B66E)" strokeWidth="0.5" />
            <path d={svgPaths.p228479be} id="Vector 1" stroke="var(--stroke-0, #34B66E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-background relative rounded-[999px] shrink-0 size-[60px]" data-name="Icon">
      <div aria-hidden="true" className="absolute border border-input border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="absolute h-[57px] left-1/2 top-[calc(50%+2px)] translate-x-[-50%] translate-y-[-50%] w-[74px]" data-name="nnn 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[155.85%] left-0 max-w-none top-[-0.73%] w-full" src={imgNnn1} />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="font-[family-name:var(--font-primary)] font-[weight:var(--fw-heavy)] leading-[normal] not-italic relative shrink-0 text-foreground text-[22px] whitespace-pre">108</p>
      <div className="relative shrink-0 size-[4px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(27, 27, 35, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, var(--foreground))" id="Ellipse 1" r="2" />
          </svg>
        </div>
      </div>
      <p className="font-[family-name:var(--font-primary)] font-[weight:var(--fw-regular)] leading-[normal] not-italic relative shrink-0 text-foreground text-[12px] whitespace-pre">Zone A</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="font-[family-name:var(--font-primary)] font-[weight:var(--fw-regular)] leading-[normal] not-italic relative shrink-0 text-foreground text-[12px] whitespace-pre">9:00 AM - 6:00 PM</p>
      <div className="relative shrink-0 size-[4px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(27, 27, 35, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, var(--foreground))" id="Ellipse 1" r="2" />
          </svg>
        </div>
      </div>
      <p className="font-[family-name:var(--font-primary)] font-[weight:var(--fw-regular)] leading-[normal] not-italic relative shrink-0 text-foreground text-[12px] whitespace-pre">Dec 12, 2025</p>
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
      <Frame5 />
      <Frame />
    </div>
  );
}

function NextBooking() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex gap-[24px] h-[100px] items-center justify-center left-[40px] px-[16px] py-[20px] rounded-[24px] top-[437px] w-[310px]" data-name="Next booking">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[24px] shadow-[0px_16px_44px_0px_rgba(19,25,103,0.15)]" />
      <Icon />
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center leading-[normal] left-[70px] not-italic text-foreground top-[363px] whitespace-pre">
      <p className="font-[family-name:var(--font-primary)] font-[weight:var(--fw-heavy)] relative shrink-0 text-[16px]">Booking Confirmed!</p>
      <p className="font-[family-name:var(--font-primary)] font-[weight:var(--fw-regular)] relative shrink-0 text-[12px]">Your seat has been successfully reserved.</p>
    </div>
  );
}

function TimeSlot() {
  return (
    <div className="absolute h-[748px] left-0 top-0 w-[390px]" data-name="Time slot">
      <div className="absolute h-[448px] left-[54px] opacity-[0.34] top-[163px] w-[307px]">
        <div className="absolute inset-[-20.94%_-30.55%]">
          <img alt="" className="block max-w-none size-full" height="635.6" src={imgEllipse693} width="494.6" />
        </div>
      </div>
      <Frame3 />
      <NextBooking />
      <Frame4 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-primary flex-[1_0_0] h-[64px] min-h-px min-w-px relative rounded-[16px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
          <p className="font-[family-name:var(--font-primary)] font-[weight:var(--fw-regular)] leading-[normal] not-italic relative shrink-0 text-[18px] text-center text-primary-foreground whitespace-pre">Home</p>
        </div>
      </div>
    </div>
  );
}

function BottomBottoms() {
  return (
    <div className="absolute content-stretch flex h-[96px] items-start left-0 p-[16px] top-[748px] w-[390px]" data-name="Bottom bottoms">
      <Button />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="h-[844px] relative shrink-0 w-full" data-name="Main container">
      <TimeSlot />
      <BottomBottoms />
    </div>
  );
}

export default function Completed() {
  return (
    <div className="bg-background content-stretch flex flex-col items-center justify-center relative size-full" data-name="Completed">
      <MainContainer />
    </div>
  );
}