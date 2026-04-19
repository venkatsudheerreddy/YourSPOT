import svgPaths from "./svg-0ni18gzcjx";

export default function Logo() {
  return (
    <div className="relative size-full" data-name="Logo">
      <div className="absolute inset-[-12.08%_-7.65%_-24.15%_-4.59%]" style={{ "--fill-0": "rgba(255, 255, 255, 1)", "--stroke-0": "rgba(153, 97, 247, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117.437 45.125">
          <g filter="url(#filter0_d_18087_14)" id="Logo">
            <path d={svgPaths.p253bac00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2d1e7500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p124bd100} fill="var(--fill-0, white)" />
            <path d={svgPaths.p22262c0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2396e800} stroke="var(--stroke-0, #9961F7)" strokeWidth="4" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="45.125" id="filter0_d_18087_14" width="117.437" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="4" dy="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0.968627 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18087_14" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_18087_14" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}