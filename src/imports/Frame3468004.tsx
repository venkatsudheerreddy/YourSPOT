import svgPaths from "./svg-fk1dzqyaqr";
import imgZoshuaColahWq1QAraLg4Unsplash1 from "figma:asset/bae7bc4ab846f6f45c173e91a62a36a39cc2bd12.png";

function Add() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Add">
          <path d="M2.5 8H13.5M8 13.5V2.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Fab() {
  return (
    <div className="absolute bg-white bottom-[16px] content-stretch flex items-center justify-center p-[8px] right-[16px] rounded-[100px] size-[56px] z-[3]" data-name="FAB">
      <Add />
    </div>
  );
}

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
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#698d5a] text-[18px] text-nowrap">Menu</p>
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

function Frame1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 20">
        <g id="Frame 3467999">
          <rect fill="var(--fill-0, white)" height="19.5" rx="9.75" width="35.5" x="0.25" y="0.25" />
          <rect height="19.5" rx="9.75" stroke="var(--stroke-0, #5D5D5D)" strokeWidth="0.5" width="35.5" x="0.25" y="0.25" />
          <circle cx="10" cy="10" fill="var(--fill-0, #5D5D5D)" id="Ellipse 691" r="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white h-[48px] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-nowrap">South thali</p>
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 20">
        <g id="Frame 3468000">
          <rect fill="var(--fill-0, white)" height="19.5" rx="9.75" width="35.5" x="0.25" y="0.25" />
          <rect height="19.5" rx="9.75" stroke="var(--stroke-0, #698D5A)" strokeWidth="0.5" width="35.5" x="0.25" y="0.25" />
          <circle cx="26" cy="10" fill="var(--fill-0, #698D5A)" id="Ellipse 691" r="8" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white h-[48px] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px] text-nowrap">South thali</p>
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full z-[1]">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <Frame />
          {[...Array(3).keys()].map((_, i) => (
            <Frame6 key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div className="basis-0 bg-[#d4d9b1] content-stretch flex flex-col grow isolate items-center max-w-[560px] min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="Main container">
      <Fab />
      <TopAppBar />
      <Frame7 />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute bg-[#dbcffc] content-stretch flex flex-col h-[844px] isolate items-center justify-between left-[195px] overflow-clip top-[171px] w-[390px]" data-name="Menu">
      <MainContainer />
    </div>
  );
}

function Close4() {
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

function Close5() {
  return (
    <div className="bg-[rgba(105,141,90,0.1)] relative rounded-[100px] shrink-0 size-[48px]" data-name="Close">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Close4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(105,141,90,0.2)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Title1() {
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

function Close6() {
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

function Close7() {
  return (
    <div className="bg-[rgba(105,141,90,0.1)] opacity-0 relative rounded-[100px] shrink-0 size-[48px]" data-name="Close">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Close6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(105,141,90,0.2)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function TopAppBar1() {
  return (
    <div className="bg-white relative shrink-0 w-full z-[2]" data-name="Top app bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative w-full">
          <Close5 />
          <Title1 />
          <Close7 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
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

function Frame9() {
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

function Frame10() {
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

function Frame11() {
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

function Frame3() {
  return (
    <div className="h-[48px] relative rounded-[999px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(105, 141, 90) 0%, rgb(105, 141, 90) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white">Add</p>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full z-[1]">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <Frame8 />
          <Frame9 />
          <Frame10 />
          <Frame11 />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function MainContainer1() {
  return (
    <div className="basis-0 bg-[#d4d9b1] content-stretch flex flex-col grow isolate items-center max-w-[560px] min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="Main container">
      <TopAppBar1 />
      <Frame12 />
    </div>
  );
}

function AddItem() {
  return (
    <div className="absolute bg-[#dbcffc] content-stretch flex flex-col h-[844px] isolate items-center justify-between left-[665px] overflow-clip top-[171px] w-[390px]" data-name="Add item">
      <MainContainer1 />
    </div>
  );
}

function Close8() {
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

function Close9() {
  return (
    <div className="bg-[rgba(105,141,90,0.1)] relative rounded-[100px] shrink-0 size-[48px]" data-name="Close">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Close8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(105,141,90,0.2)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Title2() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative rounded-[100px] shrink-0" data-name="Title">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative size-full">
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#698d5a] text-[18px] text-nowrap">Edit item</p>
        </div>
      </div>
    </div>
  );
}

function Close10() {
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

function Close11() {
  return (
    <div className="bg-[rgba(105,141,90,0.1)] opacity-0 relative rounded-[100px] shrink-0 size-[48px]" data-name="Close">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Close10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(105,141,90,0.2)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function TopAppBar2() {
  return (
    <div className="bg-white relative shrink-0 w-full z-[2]" data-name="Top app bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative w-full">
          <Close9 />
          <Title2 />
          <Close11 />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
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

function Frame14() {
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

function Frame15() {
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

function Frame16() {
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

function Frame17() {
  return (
    <div className="h-[48px] relative rounded-[999px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(105, 141, 90) 0%, rgb(105, 141, 90) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white">Save</p>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 w-full z-[1]">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <Frame13 />
          <Frame14 />
          <Frame15 />
          <Frame16 />
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

function MainContainer2() {
  return (
    <div className="basis-0 bg-[#d4d9b1] content-stretch flex flex-col grow isolate items-center max-w-[560px] min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="Main container">
      <TopAppBar2 />
      <Frame18 />
    </div>
  );
}

function EditPage() {
  return (
    <div className="absolute bg-[#dbcffc] content-stretch flex flex-col h-[844px] isolate items-center justify-between left-[665px] overflow-clip top-[1095px] w-[390px]" data-name="Edit page">
      <MainContainer2 />
    </div>
  );
}

function Close12() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_18127_313)" id="Close">
          <path d={svgPaths.pe114a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" />
        </g>
        <defs>
          <clipPath id="clip0_18127_313">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Close13() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[100px] shrink-0 size-[48px]" data-name="Close">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Close12 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Edit() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Edit">
          <path d={svgPaths.p2b989400} id="Rectangle 3469501" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[40px]">
      <Edit />
    </div>
  );
}

function Delete() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Delete">
          <path d={svgPaths.p34a94400} id="Rectangle 3469502" stroke="var(--stroke-0, black)" />
          <line id="Line 63" stroke="var(--stroke-0, black)" strokeLinecap="round" x1="1.5" x2="14.5" y1="5" y2="5" />
          <line id="Line 64" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" x1="6" x2="10" y1="2" y2="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[40px]">
      <Delete />
    </div>
  );
}

function Title3() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[48px] relative rounded-[100px] shrink-0" data-name="Title">
      <div className="content-stretch flex gap-[8px] h-full items-center justify-center overflow-clip px-[4px] py-[8px] relative rounded-[inherit]">
        <Frame19 />
        <Frame4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function TopAppBar3() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex from-[#000000] items-start justify-between left-0 p-[16px] to-[rgba(0,0,0,0)] top-0 w-[390px]" data-name="Top app bar">
      <Close13 />
      <Title3 />
    </div>
  );
}

function FoodTitle() {
  return (
    <div className="content-stretch flex font-['Poppins:SemiBold',sans-serif] items-center justify-between leading-[normal] relative shrink-0 text-[22px] w-full" data-name="Food title">
      <p className="relative shrink-0">South thali</p>
      <p className="relative shrink-0 text-right">₹ 110.00</p>
    </div>
  );
}

function FoodDescription() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex flex-col gap-[16px] h-[506px] items-start left-0 not-italic p-[24px] rounded-tl-[24px] rounded-tr-[24px] text-[#1b1b23] text-nowrap w-[390px]" data-name="Food description">
      <FoodTitle />
      <ol className="block font-['Poppins:Regular',sans-serif] leading-[0] list-decimal relative shrink-0 text-[14px]" start="1">
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Green Salad</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Pulka</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">White Rice</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Palak Rice</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">{`Dosakai `}</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Drumstick Curry</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Cabbage Onion Pakodi</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Tomato Dal</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Gold Finger</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">{`Gongura `}</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Chutney</span>
        </li>
        <li className="ms-[21px]">
          <span className="leading-[normal]">Curd</span>
        </li>
      </ol>
    </div>
  );
}

function MainContainer3() {
  return (
    <div className="absolute bg-[#d4d9b1] content-stretch flex flex-col h-[844px] items-center left-0 top-0 w-[390px]" data-name="Main container">
      <div className="h-[402px] relative shrink-0 w-[393px]" data-name="zoshua-colah-_WQ1qARALg4-unsplash 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[130.9%] left-[-0.05%] max-w-none top-[-15.45%] w-[100.09%]" src={imgZoshuaColahWq1QAraLg4Unsplash1} />
        </div>
      </div>
      <TopAppBar3 />
      <FoodDescription />
    </div>
  );
}

function FoodDetailAdmin() {
  return (
    <div className="absolute bg-[#dbcffc] h-[844px] left-[195px] overflow-clip top-[1095px] w-[390px]" data-name="Food detail - Admin">
      <MainContainer3 />
    </div>
  );
}

function Close14() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_18127_313)" id="Close">
          <path d={svgPaths.pe114a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" />
        </g>
        <defs>
          <clipPath id="clip0_18127_313">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Close15() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[100px] shrink-0 size-[48px]" data-name="Close">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Close14 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function TopAppBar4() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex from-[#000000] items-center left-0 p-[16px] to-[rgba(0,0,0,0)] top-0 w-[390px]" data-name="Top app bar">
      <Close15 />
    </div>
  );
}

function FoodTitle1() {
  return (
    <div className="content-stretch flex font-['Poppins:SemiBold',sans-serif] items-center justify-between leading-[normal] relative shrink-0 text-[22px] w-full" data-name="Food title">
      <p className="relative shrink-0">South thali</p>
      <p className="relative shrink-0 text-right">₹ 110.00</p>
    </div>
  );
}

function FoodDescription1() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex flex-col gap-[16px] h-[506px] items-start left-0 not-italic p-[24px] rounded-tl-[24px] rounded-tr-[24px] text-[#1b1b23] text-nowrap w-[390px]" data-name="Food description">
      <FoodTitle1 />
      <ol className="block font-['Poppins:Regular',sans-serif] leading-[0] list-decimal relative shrink-0 text-[14px]" start="1">
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Green Salad</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Pulka</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">White Rice</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Palak Rice</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">{`Dosakai `}</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Drumstick Curry</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Cabbage Onion Pakodi</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Tomato Dal</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Gold Finger</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">{`Gongura `}</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Chutney</span>
        </li>
        <li className="ms-[21px]">
          <span className="leading-[normal]">Curd</span>
        </li>
      </ol>
    </div>
  );
}

function MainContainer4() {
  return (
    <div className="absolute bg-[#d4d9b1] content-stretch flex flex-col h-[844px] items-center left-0 top-0 w-[390px]" data-name="Main container">
      <div className="h-[402px] relative shrink-0 w-[393px]" data-name="zoshua-colah-_WQ1qARALg4-unsplash 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[130.9%] left-[-0.05%] max-w-none top-[-15.45%] w-[100.09%]" src={imgZoshuaColahWq1QAraLg4Unsplash1} />
        </div>
      </div>
      <TopAppBar4 />
      <FoodDescription1 />
    </div>
  );
}

function FoodDetailUser() {
  return (
    <div className="absolute bg-[#dbcffc] h-[844px] left-[1135px] overflow-clip top-[1095px] w-[390px]" data-name="Food detail - user">
      <MainContainer4 />
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="bg-white relative size-full">
      <Menu />
      <AddItem />
      <EditPage />
      <FoodDetailAdmin />
      <FoodDetailUser />
    </div>
  );
}