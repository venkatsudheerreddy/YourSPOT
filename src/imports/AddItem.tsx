import svgPaths from "./svg-njuziywqoi";

function Close() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_18131_188)" id="Close">
          <path d={svgPaths.pe114a00} id="Vector" stroke="var(--stroke-0, #698D5A)" strokeLinecap="round" />
        </g>
        <defs>
          <clipPath id="clip0_18131_188">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Close1() {
  return (
    <div className="bg-[rgba(105,141,90,0.1)] relative rounded-[100px] shrink-0 size-[48px]" data-name="Close">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Close />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(105,141,90,0.2)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Title() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative rounded-[100px] shrink-0" data-name="Title">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative size-full">
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#698d5a] text-[18px] text-nowrap">Add item</p>
        </div>
      </div>
    </div>
  );
}

function Close2() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_18131_188)" id="Close">
          <path d={svgPaths.pe114a00} id="Vector" stroke="var(--stroke-0, #698D5A)" strokeLinecap="round" />
        </g>
        <defs>
          <clipPath id="clip0_18131_188">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Close3() {
  return (
    <div className="bg-[rgba(105,141,90,0.1)] opacity-0 relative rounded-[100px] shrink-0 size-[48px]" data-name="Close">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Close2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(105,141,90,0.2)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function TopAppBar() {
  return (
    <div className="bg-white relative shrink-0 w-full z-[2]" data-name="Top app bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative w-full">
          <Close1 />
          <Title />
          <Close3 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white h-[48px] relative rounded-[16px] shrink-0 w-full">
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
    <div className="bg-white h-[48px] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-nowrap">Price</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white h-[48px] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-nowrap">Image</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white h-[152px] relative rounded-[16px] shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex items-start p-[16px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-nowrap">Description</p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame />
      <Frame1 />
      <Frame3 />
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px opacity-0 relative rounded-[999px] shrink-0" style={{ backgroundImage: "linear-gradient(90deg, rgb(105, 141, 90) 0%, rgb(105, 141, 90) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white">Next</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative rounded-[999px] shrink-0" style={{ backgroundImage: "linear-gradient(90deg, rgb(105, 141, 90) 0%, rgb(105, 141, 90) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white">Next</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full z-[1]">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
          <Frame8 />
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div className="basis-0 bg-[#d4d9b1] content-stretch flex flex-col grow isolate items-center max-w-[560px] min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="Main container">
      <TopAppBar />
      <Frame7 />
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