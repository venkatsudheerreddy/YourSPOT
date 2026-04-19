import svgPaths from "./svg-d3296z9uiw";

export default function FullDay() {
  return (
    <div className="bg-white relative size-[24px]" data-name="full_day">
      <div className="absolute bottom-[8.33%] left-[2px] top-[8.33%] w-[20px]" data-name="Union">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(27, 27, 35, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2f02f080} fill="var(--fill-0, #1B1B23)" id="Union" />
          </svg>
        </div>
      </div>
    </div>
  );
}