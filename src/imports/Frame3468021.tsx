import svgPaths from "./svg-oj9gpkkq0i";

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

function Frame() {
  return (
    <div className="h-[48px] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#464a53] text-[14px] text-nowrap">South thali</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white h-[48px] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#464a53] text-[14px] text-nowrap">South thali</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full z-[1]">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <Frame />
          {[...Array(3).keys()].map((_, i) => (
            <Frame1 key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow isolate items-center max-w-[560px] min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="Main container">
      <Fab />
      <TopAppBar />
      <Frame2 />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[844px] isolate items-center justify-between left-[575px] overflow-clip top-[105px] w-[390px]" data-name="Menu">
      <MainContainer />
    </div>
  );
}

function Back1() {
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

function Empty1() {
  return <div className="shrink-0 size-[40px]" data-name="empty" />;
}

function TopAppBar1() {
  return (
    <div className="bg-white h-[72px] opacity-90 relative shrink-0 w-full z-[3]" data-name="Top app bar">
      <div aria-hidden="true" className="absolute border-[#ddd] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <Back1 />
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-center text-nowrap">Add item</p>
          <Empty1 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[48px] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d3d5da] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-nowrap">Name</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[48px] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d3d5da] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-nowrap">Price</p>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[48px] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d3d5da] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-nowrap">Image</p>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[152px] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d3d5da] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full">
        <div className="content-stretch flex items-start p-[16px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-nowrap">Description</p>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame3 />
      <Frame4 />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full z-[2]">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative size-[16px]" data-name="Chevron Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron Right">
          <path clipRule="evenodd" d={svgPaths.p256a78f0} fill="var(--fill-0, #464A53)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-[#e9eaec] grow h-[64px] min-h-px min-w-px opacity-0 relative rounded-[16px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <ChevronRight />
            </div>
          </div>
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#464a53] text-[18px] text-center text-nowrap">Back</p>
        </div>
      </div>
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Chevron Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron Right">
          <path clipRule="evenodd" d={svgPaths.p256a78f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-[#9961f7] grow h-[64px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">Next</p>
          <ChevronRight1 />
        </div>
      </div>
    </div>
  );
}

function BottomBottoms() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Bottom bottoms">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
          <Button />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function MainContainer1() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow isolate items-center max-w-[560px] min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="Main container">
      <TopAppBar1 />
      <Frame15 />
      <BottomBottoms />
    </div>
  );
}

function AddItem() {
  return (
    <div className="absolute bg-[#dbcffc] content-stretch flex flex-col h-[844px] isolate items-center justify-between left-[1005px] overflow-clip top-[105px] w-[390px]" data-name="Add item">
      <MainContainer1 />
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
    <div className="bg-white h-[72px] opacity-90 relative shrink-0 w-full z-[3]" data-name="Top app bar">
      <div aria-hidden="true" className="absolute border-[#ddd] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <Back2 />
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-center text-nowrap">Add item</p>
          <Empty2 />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white border border-[#9961f7] border-solid ml-0 mt-0 rounded-[8px] size-[24px]" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="h-[56px] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-0 relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-nowrap">Monday</p>
          <Group1 />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white border border-[#9961f7] border-solid ml-0 mt-0 rounded-[8px] size-[24px]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[56px] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-0 relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-nowrap">Tuesday</p>
          <Group2 />
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white border border-[#9961f7] border-solid ml-0 mt-0 rounded-[8px] size-[24px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[56px] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-0 relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-nowrap">Wednesday</p>
          <Group3 />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group 3467999">
          <rect fill="var(--fill-0, #9961F7)" height="23" id="Rectangle 3469503" rx="7.5" stroke="var(--stroke-0, #9961F7)" width="23" x="0.5" y="0.5" />
          <path d={svgPaths.p34e6b000} id="Vector 20" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[56px] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-0 relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-nowrap">Thursday</p>
          <Group />
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group 3467999">
          <rect fill="var(--fill-0, #9961F7)" height="23" id="Rectangle 3469503" rx="7.5" stroke="var(--stroke-0, #9961F7)" width="23" x="0.5" y="0.5" />
          <path d={svgPaths.p34e6b000} id="Vector 20" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[56px] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-0 relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-nowrap">Friday</p>
          <Group4 />
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group 3467999">
          <rect fill="var(--fill-0, #9961F7)" height="23" id="Rectangle 3469503" rx="7.5" stroke="var(--stroke-0, #9961F7)" width="23" x="0.5" y="0.5" />
          <path d={svgPaths.p34e6b000} id="Vector 20" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[56px] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-0 relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-nowrap">Saturday</p>
          <Group5 />
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group 3467999">
          <rect fill="var(--fill-0, #9961F7)" height="23" id="Rectangle 3469503" rx="7.5" stroke="var(--stroke-0, #9961F7)" width="23" x="0.5" y="0.5" />
          <path d={svgPaths.p34e6b000} id="Vector 20" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[56px] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-0 relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-nowrap">Sunday</p>
          <Group6 />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame16 />
      <div className="bg-gradient-to-r from-[rgba(0,0,0,0)] h-px opacity-20 shrink-0 to-[rgba(0,0,0,0)] via-[#000000] via-[47.596%] w-full" data-name="Divider" />
      <Frame5 />
      <div className="bg-gradient-to-r from-[rgba(0,0,0,0)] h-px opacity-20 shrink-0 to-[rgba(0,0,0,0)] via-[#000000] via-[47.596%] w-full" data-name="Divider" />
      <Frame6 />
      <div className="bg-gradient-to-r from-[rgba(0,0,0,0)] h-px opacity-20 shrink-0 to-[rgba(0,0,0,0)] via-[#000000] via-[47.596%] w-full" data-name="Divider" />
      <Frame7 />
      <div className="bg-gradient-to-r from-[rgba(0,0,0,0)] h-px opacity-20 shrink-0 to-[rgba(0,0,0,0)] via-[#000000] via-[47.596%] w-full" data-name="Divider" />
      <Frame8 />
      <div className="bg-gradient-to-r from-[rgba(0,0,0,0)] h-px opacity-20 shrink-0 to-[rgba(0,0,0,0)] via-[#000000] via-[47.596%] w-full" data-name="Divider" />
      <Frame9 />
      <div className="bg-gradient-to-r from-[rgba(0,0,0,0)] h-px opacity-20 shrink-0 to-[rgba(0,0,0,0)] via-[#000000] via-[47.596%] w-full" data-name="Divider" />
      <Frame10 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full z-[2]">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function ChevronRight2() {
  return (
    <div className="relative size-[16px]" data-name="Chevron Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron Right">
          <path clipRule="evenodd" d={svgPaths.p256a78f0} fill="var(--fill-0, #464A53)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="basis-0 bg-[#e9eaec] grow h-[64px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <ChevronRight2 />
            </div>
          </div>
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#464a53] text-[18px] text-center text-nowrap">Back</p>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="basis-0 bg-[#9961f7] grow h-[64px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">Done</p>
        </div>
      </div>
    </div>
  );
}

function BottomBottoms1() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Bottom bottoms">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
          <Button2 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function MainContainer2() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow isolate items-center max-w-[560px] min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="Main container">
      <TopAppBar2 />
      <Frame17 />
      <BottomBottoms1 />
    </div>
  );
}

function AddItem1() {
  return (
    <div className="absolute bg-[#dbcffc] content-stretch flex flex-col h-[844px] isolate items-center justify-between left-[1435px] overflow-clip top-[105px] w-[390px]" data-name="Add item">
      <MainContainer2 />
    </div>
  );
}

function Empty3() {
  return <div className="shrink-0 size-[40px]" data-name="empty" />;
}

function ChangeName() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Change name">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[12px] text-nowrap">Menu</p>
        </div>
      </div>
    </div>
  );
}

function ChangeName1() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Change name">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[12px] text-nowrap">Change name</p>
        </div>
      </div>
    </div>
  );
}

function ChangeName2() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Change name">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[12px] text-nowrap">Change password</p>
        </div>
      </div>
    </div>
  );
}

function Logout() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Logout">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[12px] text-nowrap">Logout</p>
        </div>
      </div>
    </div>
  );
}

function DeleteAccount() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Delete account">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[12px] text-nowrap">Delete account</p>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
          <ChangeName />
          <ChangeName1 />
          <ChangeName2 />
          <Logout />
          <DeleteAccount />
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="home">
          <path d={svgPaths.p2a54f400} fill="var(--fill-0, #464A53)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Home1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[64px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="home">
      <Home />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#464a53] text-[10px] text-center w-[min-content]">
        <p className="leading-[normal]">home</p>
      </div>
    </div>
  );
}

function Lunch() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lunch">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lunch">
          <path d={svgPaths.p36371640} fill="var(--fill-0, #464A53)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Lunch1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[64px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="lunch">
      <Lunch />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#464a53] text-[10px] text-center w-[min-content]">
        <p className="leading-[normal]">lunch</p>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="settings">
      <div className="absolute inset-[-34.22%_-39.58%_-50.88%_-39.58%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 44.4238">
          <g id="settings">
            <g filter="url(#filter0_d_18145_385)" id="Subtract">
              <path d={svgPaths.p8db100} fill="var(--fill-0, #9961F7)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44.4238" id="filter0_d_18145_385" width="43" x="4.76837e-07" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0.968627 0 0 0 0.5 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18145_385" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_18145_385" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Settings1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[64px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="settings">
      <Settings />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#9961f7] text-[10px] text-center w-[min-content]">
        <p className="leading-[normal]">settings</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-0 top-[780px] w-[390px]">
      <div aria-hidden="true" className="absolute border-[#ddd] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Home1 />
      <Lunch1 />
      <Settings1 />
    </div>
  );
}

function MainContainer3() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow items-start max-w-[560px] min-h-px min-w-px relative shrink-0 w-full" data-name="Main container">
      <div className="bg-white h-[72px] opacity-90 relative shrink-0 w-full" data-name="Top app bar">
        <div aria-hidden="true" className="absolute border-[#ddd] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[40px]" data-name="Back">
              <div className="h-[13.5px] relative shrink-0 w-[25.5px]" data-name="Union">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.4999 13.4999">
                  <path d={svgPaths.p36260140} fill="var(--fill-0, black)" id="Union" />
                </svg>
              </div>
            </div>
            <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-center text-nowrap">Settings</p>
            <Empty3 />
          </div>
        </div>
      </div>
      <Content />
      <Frame18 />
    </div>
  );
}

function Settings2() {
  return (
    <div className="absolute bg-[#dbcffc] content-stretch flex flex-col h-[844px] items-center justify-center left-[145px] overflow-clip top-[105px] w-[390px]" data-name="Settings">
      <MainContainer3 />
    </div>
  );
}

export default function Frame19() {
  return (
    <div className="bg-[#dcdcdc] relative size-full">
      <Menu />
      <AddItem />
      <AddItem1 />
      <Settings2 />
    </div>
  );
}