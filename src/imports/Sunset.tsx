import svgPaths from "./svg-cngs5tzlcf";

export default function Sunset() {
  return (
    <div className="relative size-[24px]" data-name="sunset">
      <div className="absolute flex h-[10.5px] items-center justify-center left-[8.33%] right-[8.33%] top-[9px]">
        <div className="flex-none h-[10.5px] scale-y-[-100%] w-[20px]">
          <div className="relative size-full" data-name="Union">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(27, 27, 35, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10.5">
                <path d={svgPaths.p3c8ac500} fill="var(--fill-0, #1B1B23)" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}