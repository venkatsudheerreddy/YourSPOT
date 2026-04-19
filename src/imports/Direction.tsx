import svgPaths from "./svg-0kv2mw21cn";

function Dismiss() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Dismiss">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Dismiss">
          <path clipRule="evenodd" d={svgPaths.pa84bcf0} fill="var(--fill-0, var(--foreground))" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="bg-card opacity-90 relative rounded-[999px] shadow-[var(--shadow-glow)] shrink-0 size-[40px]" data-name="Icon button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <Dismiss />
        </div>
      </div>
    </div>
  );
}

function Dismiss1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Dismiss">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Dismiss">
          <path clipRule="evenodd" d={svgPaths.pa84bcf0} fill="var(--fill-0, var(--foreground))" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="bg-secondary opacity-0 relative rounded-[999px] shrink-0 size-[40px]" data-name="Icon button">
      <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[999px] shadow-[var(--shadow-glow)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <Dismiss1 />
        </div>
      </div>
    </div>
  );
}

function TopAppBar() {
  return (
    <div className="bg-card h-[72px] opacity-90 relative shadow-[var(--shadow-card)] shrink-0 w-full z-[2]" data-name="Top app bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <IconButton />
          <p className="font-[family-name:var(--font-primary)] font-[weight:var(--fw-heavy)] leading-[normal] not-italic relative shrink-0 text-foreground text-[18px] text-center text-nowrap">Direction</p>
          <IconButton1 />
        </div>
      </div>
    </div>
  );
}

function Chair() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Chair">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Chair">
          <path d={svgPaths.p321afc00} fill="var(--fill-0, #BD96FF)" id="Rectangle 8" />
          <path d={svgPaths.p9b7e600} fill="var(--fill-0, var(--primary))" id="Rectangle 9" />
          <line id="Line 13" stroke="var(--stroke-0, #392A54)" x1="14" x2="14" y1="17.5" y2="25.5" />
          <line id="Line 14" stroke="var(--stroke-0, #392A54)" x1="29" x2="29" y1="17.5" y2="25.5" />
          <path d={svgPaths.pcd61f00} fill="var(--fill-0, #7241C5)" id="Rectangle 10" />
          <path d={svgPaths.p1da36500} fill="var(--fill-0, #7241C5)" id="Rectangle 13" />
          <path d={svgPaths.p39518e00} fill="var(--fill-0, #7241C5)" id="Vector 2" />
          <path d={svgPaths.p2c44200} fill="var(--fill-0, #BD96FF)" id="Vector 4" />
          <line id="Line 15" stroke="var(--stroke-0, #392A54)" x1="21.5" x2="21.5" y1="28.5" y2="41.5" />
          <rect fill="var(--fill-0, #7241C5)" height="5" id="Rectangle 12" rx="1" width="4" x="19.5" y="30.5" />
          <path d={svgPaths.p85af6c0} id="Vector 3" stroke="var(--stroke-0, #392A54)" />
          <circle cx="13.5" cy="41.5" fill="var(--fill-0, #7241C5)" id="Ellipse 4" r="2" />
          <circle cx="28.5" cy="41.5" fill="var(--fill-0, #7241C5)" id="Ellipse 5" r="2" />
          <circle cx="21.5" cy="41.5" fill="var(--fill-0, #7241C5)" id="Ellipse 6" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-background content-stretch flex items-center p-[8px] relative rounded-[999px] shrink-0" data-name="Icon">
      <div aria-hidden="true" className="absolute border border-input border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Chair />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="font-[family-name:var(--font-primary)] font-[weight:var(--fw-heavy)] leading-[normal] not-italic relative shrink-0 text-foreground text-[18px] text-nowrap">101</p>
      <div className="relative shrink-0 size-[4px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(27, 27, 35, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, var(--foreground))" id="Ellipse 1" r="2" />
          </svg>
        </div>
      </div>
      <p className="font-[family-name:var(--font-primary)] font-[weight:var(--fw-regular)] leading-[normal] not-italic relative shrink-0 text-foreground text-[12px] text-nowrap">Zone B</p>
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
      <Frame3 />
      <Frame />
    </div>
  );
}

function NextBooking() {
  return (
    <div className="bg-card relative shrink-0 w-full" data-name="Next booking">
      <div aria-hidden="true" className="absolute border-input border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[16px] py-[8px] relative w-full">
          <Icon />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function BookSeat() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[4px] items-center ml-[10px] mt-[12px] relative" data-name="Book seat">
      <div className="bg-secondary rounded-[4px] shrink-0 size-[24px]" data-name="Seat" />
      <p className="font-[family-name:var(--font-primary)] font-[weight:var(--fw-heavy)] leading-[normal] not-italic relative shrink-0 text-muted-foreground text-[10px] text-center text-nowrap">101</p>
    </div>
  );
}

function Desk() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Desk 1">
      <BookSeat />
      <div className="[grid-area:1_/_1] h-[48px] ml-0 mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-2.08%_-4.17%]" style={{ "--stroke-0": "var(--muted-foreground)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 50">
            <path d="M25 1H1V49H25" id="Desk" stroke="var(--stroke-0, var(--muted-foreground))" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BookSeat1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[4px] items-center ml-[10px] mt-[12px] relative" data-name="Book seat">
      <div className="bg-secondary rounded-[4px] shrink-0 size-[24px]" data-name="Seat" />
      <p className="font-[family-name:var(--font-primary)] font-[weight:var(--fw-heavy)] leading-[normal] not-italic relative shrink-0 text-muted-foreground text-[10px] text-center text-nowrap">101</p>
    </div>
  );
}

function Desk1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Desk 2">
      <BookSeat1 />
      <div className="[grid-area:1_/_1] h-[48px] ml-0 mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-2.08%_-4.17%]" style={{ "--stroke-0": "var(--muted-foreground)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 50">
            <path d="M25 1H1V49H25" id="Desk" stroke="var(--stroke-0, var(--muted-foreground))" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BookSeat2() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[4px] items-center ml-[10px] mt-[12px] relative" data-name="Book seat">
      <div className="bg-secondary rounded-[4px] shrink-0 size-[24px]" data-name="Seat" />
      <p className="font-[family-name:var(--font-primary)] font-[weight:var(--fw-heavy)] leading-[normal] not-italic relative shrink-0 text-muted-foreground text-[10px] text-center text-nowrap">101</p>
    </div>
  );
}

function Desk2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Desk 3">
      <BookSeat2 />
      <div className="[grid-area:1_/_1] h-[48px] ml-0 mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-2.08%_-4.17%]" style={{ "--stroke-0": "var(--muted-foreground)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 50">
            <path d="M25 1H1V49H25" id="Desk" stroke="var(--stroke-0, var(--muted-foreground))" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BookSeat3() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[4px] items-center ml-[10px] mt-[12px] relative" data-name="Book seat">
      <div className="bg-secondary rounded-[4px] shrink-0 size-[24px]" data-name="Seat" />
      <p className="font-[family-name:var(--font-primary)] font-[weight:var(--fw-heavy)] leading-[normal] not-italic relative shrink-0 text-muted-foreground text-[10px] text-center text-nowrap">101</p>
    </div>
  );
}

function Desk3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Desk 4">
      <BookSeat3 />
      <div className="[grid-area:1_/_1] h-[48px] ml-0 mt-0 relative w-[24px]" data-name="Desk">
        <div className="absolute inset-[-2.08%_-4.17%]" style={{ "--stroke-0": "var(--muted-foreground)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 50">
            <path d="M25 1H1V49H25" id="Desk" stroke="var(--stroke-0, var(--muted-foreground))" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-0 mt-[72px] overflow-clip relative">
      <Desk />
      <Desk1 />
      <Desk2 />
      <Desk3 />
    </div>
  );
}

function BookSeat4() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[4px] items-center ml-0 mt-[13px] relative" data-name="Book seat">
      <p className="font-[family-name:var(--font-primary)] font-[weight:var(--fw-heavy)] leading-[normal] not-italic relative shrink-0 text-muted-foreground text-[10px] text-nowrap">101</p>
      <div className="bg-secondary rounded-[4px] shrink-0 size-[24px]" data-name="Seat" />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[48px] ml-[28px] mt-0 relative w-[24px]">
        <div className="absolute inset-[-2.08%_-4.17%]" style={{ "--stroke-0": "var(--muted-foreground)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 50">
            <path d="M1 1H25V49H1" id="Vector 6" stroke="var(--stroke-0, var(--muted-foreground))" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <BookSeat4 />
    </div>
  );
}

function BookSeat5() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[4px] items-center ml-0 mt-[13px] relative" data-name="Book seat">
      <p className="font-[family-name:var(--font-primary)] font-[weight:var(--fw-heavy)] leading-[normal] not-italic relative shrink-0 text-muted-foreground text-[10px] text-nowrap">101</p>
      <div className="bg-primary rounded-[4px] shadow-[var(--shadow-glow)] shrink-0 size-[24px]" data-name="Seat" />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[48px] ml-[28px] mt-0 relative w-[24px]">
        <div className="absolute inset-[-2.08%_-4.17%]" style={{ "--stroke-0": "var(--muted-foreground)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 50">
            <path d="M1 1H25V49H1" id="Vector 6" stroke="var(--stroke-0, var(--muted-foreground))" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <BookSeat5 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[116px] mt-[72px] overflow-clip relative">
      <Group />
      <Group1 />
      <Group />
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-0 ml-0 mt-[320px] relative w-[168px]" data-name="Corridor">
        <div className="absolute inset-[-26px_-7.14%_-14px_-7.14%]" style={{ "--stroke-0": "rgba(153, 97, 247, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192 40">
            <g filter="url(#filter0_d_18013_627)" id="Corridor">
              <line stroke="var(--stroke-0, var(--primary))" strokeLinecap="round" strokeWidth="16" x1="20" x2="172" y1="18" y2="18" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="40" id="filter0_d_18013_627" width="192" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="6" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0.968627 0 0 0 0.5 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18013_627" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_18013_627" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame4 />
      <Frame5 />
      <div className="[grid-area:1_/_1] h-[169px] ml-[85px] mt-[144.5px] relative w-[25.5px]" data-name="Path">
        <div className="absolute inset-[-6.8%_-52.94%_-9.17%_-52.94%]" style={{ "--stroke-0": "rgba(153, 97, 247, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.5 196">
            <g filter="url(#filter0_d_18013_625)" id="Path">
              <path d={svgPaths.p1f3f7500} stroke="var(--stroke-0, var(--primary))" strokeLinecap="round" strokeWidth="3" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="196" id="filter0_d_18013_625" width="52.5" x="-1.19209e-07" y="-1.19209e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="6" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0.968627 0 0 0 0.5 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18013_625" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_18013_625" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="[grid-area:1_/_1] font-[family-name:var(--font-primary)] font-[weight:var(--fw-heavy)] leading-[normal] ml-[69px] mt-[53px] not-italic relative text-[10px] text-foreground text-nowrap">Zone B</p>
      <p className="[grid-area:1_/_1] font-[family-name:var(--font-primary)] font-[weight:var(--fw-heavy)] leading-[normal] ml-[69px] mt-0 not-italic relative text-[14px] text-foreground text-nowrap">EAST</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center px-0 py-[24px] relative shrink-0">
      <Group2 />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="Content">
      <NextBooking />
      <Frame6 />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="basis-0 bg-card content-stretch flex flex-col grow isolate items-start max-w-[560px] min-h-px min-w-px relative shrink-0 w-full" data-name="Main container">
      <TopAppBar />
      <Content />
    </div>
  );
}

export default function Direction() {
  return (
    <div className="bg-background content-stretch flex flex-col items-center justify-center relative size-full" data-name="Direction">
      <MainContainer />
    </div>
  );
}