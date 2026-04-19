import svgPaths from "./svg-nhr51sy8dy";

function Back() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Back">
          <path d={svgPaths.p2eeae600} fill="var(--fill-0, black)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Empty() {
  return <div className="shrink-0 size-[40px]" data-name="empty" />;
}

function TopAppBar() {
  return (
    <div className="bg-white h-[72px] opacity-90 relative shrink-0 w-full" data-name="Top app bar">
      <div aria-hidden="true" className="absolute border-[#ddd] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <Back />
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-center text-nowrap">Direction</p>
          <Empty />
        </div>
      </div>
    </div>
  );
}

function Back1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Back">
          <path d={svgPaths.p2eeae600} fill="var(--fill-0, black)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Empty1() {
  return <div className="shrink-0 size-[40px]" data-name="empty" />;
}

function TopAppBar1() {
  return (
    <div className="bg-white h-[72px] opacity-90 relative shrink-0 w-full" data-name="Top app bar">
      <div aria-hidden="true" className="absolute border-[#ddd] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <Back1 />
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-center text-nowrap">Layout</p>
          <Empty1 />
        </div>
      </div>
    </div>
  );
}

function Back2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Back">
          <path d={svgPaths.p1cbb9870} fill="var(--fill-0, #1B1B23)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Empty2() {
  return <div className="shrink-0 size-[40px]" data-name="empty" />;
}

function TopAppBar2() {
  return (
    <div className="bg-white h-[72px] opacity-90 relative shrink-0 w-full" data-name="Top app bar">
      <div aria-hidden="true" className="absolute border-[#ddd] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <Back2 />
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-center text-nowrap">Reserve seat</p>
          <Empty2 />
        </div>
      </div>
    </div>
  );
}

function Back3() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Back">
          <path d={svgPaths.p2eeae600} fill="var(--fill-0, black)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Empty3() {
  return <div className="shrink-0 size-[40px]" data-name="empty" />;
}

function TopAppBar3() {
  return (
    <div className="bg-white h-[72px] opacity-90 relative shrink-0 w-full" data-name="Top app bar">
      <div aria-hidden="true" className="absolute border-[#ddd] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <Back3 />
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-center text-nowrap">My bookings</p>
          <Empty3 />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative size-full">
      <TopAppBar />
      <TopAppBar1 />
      <TopAppBar2 />
      <TopAppBar3 />
    </div>
  );
}