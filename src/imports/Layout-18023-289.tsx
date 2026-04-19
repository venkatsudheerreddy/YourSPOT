import svgPaths from "./svg-43gcx335jq";
import imgImage22 from "figma:asset/08e3519aa599f61c6d080dbbe55705dff8c49f69.png";

function Dismiss() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Dismiss">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Dismiss">
          <path clipRule="evenodd" d={svgPaths.pa84bcf0} fill="var(--fill-0, #1B1B23)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="bg-white opacity-90 relative rounded-[999px] shadow-[0px_2px_12px_0px_rgba(153,97,247,0.5)] shrink-0 size-[40px]" data-name="Icon button">
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
          <path clipRule="evenodd" d={svgPaths.pa84bcf0} fill="var(--fill-0, #1B1B23)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="bg-[#e9eaec] opacity-0 relative rounded-[999px] shrink-0 size-[40px]" data-name="Icon button">
      <div aria-hidden="true" className="absolute border border-[#d3d5da] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_2px_12px_0px_rgba(153,97,247,0.5)]" />
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
    <div className="bg-white h-[72px] opacity-90 relative shadow-[0px_4px_28px_0px_rgba(138,56,245,0.2)] shrink-0 w-full z-[2]" data-name="Top app bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <IconButton />
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-center text-nowrap">Layout</p>
          <IconButton1 />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="Content">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-0 relative size-full">
          <div className="aspect-[1476/748] relative shrink-0 w-full" data-name="image 22">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage22} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow isolate items-start max-w-[560px] min-h-px min-w-px relative shrink-0 w-full" data-name="Main container">
      <TopAppBar />
      <Content />
    </div>
  );
}

export default function Layout() {
  return (
    <div className="bg-[#dbcffc] content-stretch flex flex-col items-center justify-center relative size-full" data-name="Layout">
      <MainContainer />
    </div>
  );
}