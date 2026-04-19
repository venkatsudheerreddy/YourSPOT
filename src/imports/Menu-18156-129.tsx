import svgPaths from "./svg-5y0zya4cb1";

function Add() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Add">
          <path d="M3.75 12H20.25M12 20.25V3.75" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Fab() {
  return (
    <div className="absolute bg-[#9961f7] bottom-[16px] content-stretch flex items-center justify-center p-[8px] right-[16px] rounded-[100px] shadow-[0px_2px_12px_0px_rgba(153,97,247,0.5)] size-[56px] z-[3]" data-name="FAB">
      <Add />
    </div>
  );
}

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
    <div className="bg-white h-[72px] opacity-90 relative shrink-0 w-full z-[2]" data-name="Top app bar">
      <div aria-hidden="true" className="absolute border-[#ddd] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <Back />
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-center text-nowrap">Menu</p>
          <Empty />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 bg-[#9961f7] grow h-full min-h-px min-w-px relative rounded-[999px] shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">Today</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[999px] shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9961f7] text-[14px] text-center w-full">All</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[40px] relative rounded-[999px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11px] items-center p-[2px] relative size-full">
          <Frame3 />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function OverflowMenuVertical() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Overflow Menu Vertical">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Overflow Menu Vertical">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.pd97f480} fill="var(--fill-0, #464A53)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2213b200} fill="var(--fill-0, #464A53)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p33691280} fill="var(--fill-0, #464A53)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[48px] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#464a53] text-[14px] text-nowrap">South thali</p>
          <OverflowMenuVertical />
        </div>
      </div>
    </div>
  );
}

function OverflowMenuVertical1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Overflow Menu Vertical">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Overflow Menu Vertical">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.pd97f480} fill="var(--fill-0, #464A53)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2213b200} fill="var(--fill-0, #464A53)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p33691280} fill="var(--fill-0, #464A53)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white h-[48px] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#464a53] text-[14px] text-nowrap">South thali</p>
          <OverflowMenuVertical1 />
        </div>
      </div>
    </div>
  );
}

function Edit() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Edit">
          <path d={svgPaths.p2b989400} id="Rectangle 3469501" stroke="var(--stroke-0, #464A53)" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[13px] h-[48px] items-center relative shrink-0 w-full">
      <Edit />
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#464a53] text-[14px] text-nowrap">Edit</p>
    </div>
  );
}

function Delete() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Delete">
          <path d={svgPaths.p34a94400} id="Rectangle 3469502" stroke="var(--stroke-0, #464A53)" />
          <line id="Line 63" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" x1="1.5" x2="14.5" y1="5" y2="5" />
          <line id="Line 64" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="2" x1="6" x2="10" y1="2" y2="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[13px] h-[48px] items-center relative shrink-0 w-full">
      <Delete />
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#464a53] text-[14px] text-nowrap">Delete</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[209px] px-[16px] py-[4px] rounded-[16px] shadow-[0px_4px_28px_0px_rgba(138,56,245,0.2)] top-[101px] w-[141px]">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full z-[1]">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <Frame5 />
          <Frame />
          {[...Array(3).keys()].map((_, i) => (
            <Frame1 key={i} />
          ))}
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow isolate items-center max-w-[560px] min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="Main container">
      <Fab />
      <TopAppBar />
      <Frame2 />
    </div>
  );
}

export default function Menu() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-center justify-between relative size-full" data-name="Menu">
      <MainContainer />
    </div>
  );
}