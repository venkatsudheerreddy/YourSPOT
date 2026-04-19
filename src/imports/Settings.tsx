import svgPaths from "./svg-p0rbguvjlb";

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Chevron Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_18009_838)" id="Chevron Left">
          <path clipRule="evenodd" d={svgPaths.p35bc7d80} fill="var(--fill-0, #1B1B23)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_18009_838">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="bg-white opacity-90 relative rounded-[999px] shadow-[0px_2px_12px_0px_rgba(153,97,247,0.5)] shrink-0 size-[40px]" data-name="Icon button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <ChevronLeft />
        </div>
      </div>
    </div>
  );
}

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

function IconButton1() {
  return (
    <div className="bg-[#e9eaec] opacity-0 relative rounded-[999px] shrink-0 size-[40px]" data-name="Icon button">
      <div aria-hidden="true" className="absolute border border-[#d3d5da] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_2px_12px_0px_rgba(153,97,247,0.5)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <Dismiss />
        </div>
      </div>
    </div>
  );
}

function TopAppBar() {
  return (
    <div className="bg-white h-[72px] opacity-90 relative shadow-[0px_4px_28px_0px_rgba(138,56,245,0.2)] shrink-0 w-full" data-name="Top app bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <IconButton />
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-center text-nowrap">Settings</p>
          <IconButton1 />
        </div>
      </div>
    </div>
  );
}

function ChangeName() {
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

function ChangeName1() {
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
          <Logout />
          <DeleteAccount />
        </div>
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow items-start max-w-[560px] min-h-px min-w-px relative shrink-0 w-full" data-name="Main container">
      <TopAppBar />
      <Content />
    </div>
  );
}

export default function Settings() {
  return (
    <div className="bg-[#dbcffc] content-stretch flex flex-col items-center justify-center relative size-full" data-name="Settings">
      <MainContainer />
    </div>
  );
}