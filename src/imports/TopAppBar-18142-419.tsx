import svgPaths from "./svg-5rl43cv6f3";

function Back() {
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

function Empty() {
  return <div className="shrink-0 size-[40px]" data-name="empty" />;
}

export default function TopAppBar() {
  return (
    <div className="bg-white opacity-90 relative size-full" data-name="Top app bar">
      <div aria-hidden="true" className="absolute border-[#ddd] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <Back />
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-center text-nowrap">Reserve seat</p>
          <Empty />
        </div>
      </div>
    </div>
  );
}