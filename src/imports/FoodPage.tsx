import svgPaths from "./svg-oxvc0jminh";
import imgZoshuaColahWq1QAraLg4Unsplash1 from "figma:asset/bae7bc4ab846f6f45c173e91a62a36a39cc2bd12.png";

function Close() {
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

function Close1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[100px] shrink-0 size-[48px]" data-name="Close">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Close />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Title() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.1)] grow h-[48px] min-h-px min-w-px relative rounded-[100px] shrink-0" data-name="Title">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative size-full">
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-white">Today’s menu</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Close2() {
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

function Frame() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] opacity-0 relative rounded-[100px] shrink-0 size-[48px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Close2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function TopAppBar() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex from-[#000000] gap-[16px] items-start left-0 p-[16px] to-[rgba(0,0,0,0)] top-0 w-[390px]" data-name="Top app bar">
      <Close1 />
      <Title />
      <Frame />
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

function MainContainer() {
  return (
    <div className="absolute bg-[#d4d9b1] content-stretch flex flex-col h-[844px] items-center left-0 top-0 w-[390px]" data-name="Main container">
      <div className="h-[402px] relative shrink-0 w-[393px]" data-name="zoshua-colah-_WQ1qARALg4-unsplash 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[130.9%] left-[-0.05%] max-w-none top-[-15.45%] w-[100.09%]" src={imgZoshuaColahWq1QAraLg4Unsplash1} />
        </div>
      </div>
      <TopAppBar />
      <FoodDescription />
    </div>
  );
}

export default function FoodPage() {
  return (
    <div className="bg-[#dbcffc] relative size-full" data-name="Food page">
      <MainContainer />
    </div>
  );
}