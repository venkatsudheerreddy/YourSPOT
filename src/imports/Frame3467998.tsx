import svgPaths from "./svg-fdv0za3iau";

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron_down">
          <path d={svgPaths.p2ccaca80} id="Vector 25" stroke="var(--stroke-0, black)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end px-[24px] relative rounded-[16px] size-full">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#464a53] text-[14px]">Most liked</p>
      <ChevronDown />
    </div>
  );
}