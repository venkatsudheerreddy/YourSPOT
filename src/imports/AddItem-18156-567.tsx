import svgPaths from "./svg-ck8h0bcbio";

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

function TopAppBar() {
  return (
    <div className="bg-white h-[72px] opacity-90 relative shrink-0 w-full z-[3]" data-name="Top app bar">
      <div aria-hidden="true" className="absolute border-[#ddd] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <Back />
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-center text-nowrap">Add item</p>
          <Empty />
        </div>
      </div>
    </div>
  );
}

function Frame() {
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

function Frame1() {
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

function Frame2() {
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

function Button() {
  return (
    <div className="bg-[#e9eaec] h-[56px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-center text-nowrap">Select image</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Button />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full z-[2]">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
          <Frame4 />
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

function Button1() {
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

function Button2() {
  return (
    <div className="basis-0 bg-[#005198] grow h-[64px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Button">
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
          <Button1 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow isolate items-center max-w-[560px] min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="Main container">
      <TopAppBar />
      <Frame3 />
      <BottomBottoms />
    </div>
  );
}

export default function AddItem() {
  return (
    <div className="bg-[#dbcffc] content-stretch flex flex-col isolate items-center justify-between relative size-full" data-name="Add item">
      <MainContainer />
    </div>
  );
}