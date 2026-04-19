import svgPaths from "./svg-cw1tqyy106";
import imgZoshuaColahWq1QAraLg4Unsplash1 from "figma:asset/bae7bc4ab846f6f45c173e91a62a36a39cc2bd12.png";
import imgSouthThali1 from "figma:asset/12edd84d59b3f86df0eed3b688f3618d8a2ddc27.png";
import imgLike1 from "figma:asset/091b3ab0fe6ed83458d5130c7e2e35be4f245a76.png";

function Star() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Star 2">
          <path d={svgPaths.p2e273900} fill="var(--fill-0, #545864)" id="Star 2_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Star />
      <div className="css-g0mm18 flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#464a53] text-[16px] text-center">
        <p className="css-ew64yg leading-[normal]">4.0</p>
      </div>
    </div>
  );
}

function FoodTitle() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Food title">
      <p className="css-ew64yg font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[22px]">South thali</p>
      <Frame7 />
    </div>
  );
}

function FoodTitle1() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[normal] not-italic relative shrink-0 text-right w-full" data-name="Food title">
      <p className="css-ew64yg font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[#464a53] text-[16px]">₹ 110.00</p>
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#9961f7] text-[14px]">Comments: 1000</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <FoodTitle />
      <FoodTitle1 />
    </div>
  );
}

function FoodDescription() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex flex-col gap-[16px] h-[474px] items-start left-0 p-[24px] rounded-tl-[24px] rounded-tr-[24px] w-[390px]" data-name="Food description">
      <Frame10 />
      <ol className="block css-g0mm18 css-y54urs font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#1b1b23] text-[14px]" start="1">
        <li className="css-4hzbpn mb-0 ms-[21px]">
          <span className="leading-[normal]">Green Salad</span>
        </li>
        <li className="css-4hzbpn mb-0 ms-[21px]">
          <span className="leading-[normal]">Pulka</span>
        </li>
        <li className="css-4hzbpn mb-0 ms-[21px]">
          <span className="leading-[normal]">White Rice</span>
        </li>
        <li className="css-4hzbpn mb-0 ms-[21px]">
          <span className="leading-[normal]">Palak Rice</span>
        </li>
        <li className="css-4hzbpn mb-0 ms-[21px]">
          <span className="leading-[normal]">{`Dosakai `}</span>
        </li>
        <li className="css-4hzbpn mb-0 ms-[21px]">
          <span className="leading-[normal]">Drumstick Curry</span>
        </li>
        <li className="css-4hzbpn mb-0 ms-[21px]">
          <span className="leading-[normal]">Cabbage Onion Pakodi</span>
        </li>
        <li className="css-4hzbpn mb-0 ms-[21px]">
          <span className="leading-[normal]">Tomato Dal</span>
        </li>
        <li className="css-4hzbpn mb-0 ms-[21px]">
          <span className="leading-[normal]">Gold Finger</span>
        </li>
        <li className="css-4hzbpn mb-0 ms-[21px]">
          <span className="leading-[normal]">{`Gongura `}</span>
        </li>
        <li className="css-4hzbpn mb-0 ms-[21px]">
          <span className="leading-[normal]">Chutney</span>
        </li>
        <li className="css-4hzbpn ms-[21px]">
          <span className="leading-[normal]">Curd</span>
        </li>
      </ol>
    </div>
  );
}

function TitleClose() {
  return (
    <div className="absolute bottom-[80px] left-1/2 size-[40px] translate-x-[-50%]" data-name="title_close">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(27, 27, 35, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <g id="title close">
            <rect fill="var(--fill-0, #1B1B23)" height="40" rx="20" width="40" />
            <path d={svgPaths.p1cbb9870} fill="var(--fill-0, white)" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Home1() {
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

function Home() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[64px] items-center justify-center min-h-px min-w-px relative" data-name="home">
      <Home1 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#464a53] text-[10px] text-center w-[min-content]">
        <p className="css-4hzbpn leading-[normal]">home</p>
      </div>
    </div>
  );
}

function Lunch1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lunch">
      <div className="absolute inset-[-31.25%_-32.66%_-45.83%_-31.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.3382 42.5">
          <g id="lunch">
            <g filter="url(#filter0_d_18271_745)" id="Vector 22">
              <path d={svgPaths.p2805e4c0} stroke="var(--stroke-0, #9961F7)" strokeLinecap="round" />
            </g>
            <g filter="url(#filter1_d_18271_745)" id="Vector 23">
              <path d={svgPaths.p2f55e600} fill="var(--fill-0, #9961F7)" />
              <path d={svgPaths.p13825dc0} stroke="var(--stroke-0, #9961F7)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="42.5" id="filter0_d_18271_745" width="31" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0.968627 0 0 0 0.5 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18271_745" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_18271_745" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="42.4283" id="filter1_d_18271_745" width="29.3382" x="10" y="0.0716884">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0.968627 0 0 0 0.5 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18271_745" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_18271_745" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Lunch() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[64px] items-center justify-center min-h-px min-w-px relative" data-name="lunch">
      <Lunch1 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#9961f7] text-[10px] text-center w-[min-content]">
        <p className="css-4hzbpn leading-[normal]">lunch</p>
      </div>
    </div>
  );
}

function Settings1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="settings">
          <path d={svgPaths.p10f7cf00} fill="var(--fill-0, #464A53)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Settings() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[64px] items-center justify-center min-h-px min-w-px relative" data-name="settings">
      <Settings1 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#464a53] text-[10px] text-center w-[min-content]">
        <p className="css-4hzbpn leading-[normal]">settings</p>
      </div>
    </div>
  );
}

function BottomNavigation() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex items-center justify-center left-0 w-[390px]" data-name="Bottom navigation">
      <div aria-hidden="true" className="absolute border-[#ddd] border-solid border-t inset-0 pointer-events-none" />
      <Home />
      <Lunch />
      <Settings />
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
      <FoodDescription />
      <TitleClose />
      <BottomNavigation />
    </div>
  );
}

function FoodPageLuchDetail() {
  return (
    <div className="absolute bg-[#dbcffc] h-[844px] left-[618px] overflow-clip top-[139px] w-[390px]" data-name="Food page - luch detail">
      <MainContainer />
    </div>
  );
}

function Image() {
  return (
    <div className="bg-white h-[160px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <div className="absolute h-[160px] left-[calc(50%+0.5px)] top-0 translate-x-[-50%] w-[206px]" data-name="south_thali 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSouthThali1} />
      </div>
    </div>
  );
}

function Star1() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Star 2">
          <path d={svgPaths.p8633d00} fill="var(--fill-0, #9961F7)" id="Star 2_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Star1 />
      <div className="css-g0mm18 flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#464a53] text-[12px] text-center">
        <p className="css-ew64yg leading-[normal]">4.0</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="css-g0mm18 flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b23] text-[12px] text-center">
        <p className="css-ew64yg leading-[normal]">North thali</p>
      </div>
      <Frame9 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="css-g0mm18 flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#464a53] text-[12px] text-center">
        <p className="css-ew64yg leading-[normal]">₹ 120.00</p>
      </div>
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Details">
      <Frame8 />
      <Frame6 />
    </div>
  );
}

function Item2() {
  return (
    <div className="col-[1] content-stretch css-vsca90 flex flex-col gap-[4px] h-[200px] items-center relative row-[1] shrink-0" data-name="Item 9">
      <Image />
      <Details />
    </div>
  );
}

function Image1() {
  return (
    <div className="bg-white h-[160px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <div className="absolute h-[160px] left-[calc(50%+0.5px)] top-0 translate-x-[-50%] w-[206px]" data-name="south_thali 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSouthThali1} />
      </div>
    </div>
  );
}

function Star2({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="absolute inset-[15.97%_17.27%_21.07%_17.27%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.16326 8.81355">
          <path d={svgPaths.p1ac0c500} fill="var(--fill-0, #9961F7)" id="Star 2" />
        </svg>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Star2 />
      <div className="css-g0mm18 flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#464a53] text-[12px] text-center">
        <p className="css-ew64yg leading-[normal]">4.5</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="css-g0mm18 flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b23] text-[12px] text-center">
        <p className="css-ew64yg leading-[normal]">South thali</p>
      </div>
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="css-g0mm18 flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#464a53] text-[12px] text-center">
        <p className="css-ew64yg leading-[normal]">₹ 110.00</p>
      </div>
    </div>
  );
}

function Details1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Details">
      <Frame11 />
      <Frame13 />
    </div>
  );
}

function Item() {
  return (
    <div className="col-[2] content-stretch css-vsca90 flex flex-col gap-[4px] items-center relative row-[1] self-stretch shrink-0" data-name="Item 7">
      <Image1 />
      <Details1 />
    </div>
  );
}

function Image2() {
  return (
    <div className="bg-white h-[160px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <div className="absolute h-[160px] left-[calc(50%+0.5px)] top-0 translate-x-[-50%] w-[206px]" data-name="south_thali 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSouthThali1} />
      </div>
    </div>
  );
}

function Star3() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Star 2">
          <path d={svgPaths.p8633d00} fill="var(--fill-0, #9961F7)" id="Star 2_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Star3 />
      <div className="css-g0mm18 flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#464a53] text-[12px] text-center">
        <p className="css-ew64yg leading-[normal]">4.6</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="css-g0mm18 flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b23] text-[12px] text-center">
        <p className="css-ew64yg leading-[normal]">East thali</p>
      </div>
      <Frame15 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="css-g0mm18 flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#464a53] text-[12px] text-center">
        <p className="css-ew64yg leading-[normal]">₹ 125.00</p>
      </div>
    </div>
  );
}

function Details2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Details">
      <Frame14 />
      <Frame16 />
    </div>
  );
}

function Item4() {
  return (
    <div className="col-[1] content-stretch css-vsca90 flex flex-col gap-[4px] items-center relative row-[2] self-stretch shrink-0" data-name="Item 11">
      <Image2 />
      <Details2 />
    </div>
  );
}

function Image3() {
  return (
    <div className="bg-white h-[160px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <div className="absolute h-[160px] left-[calc(50%+0.5px)] top-0 translate-x-[-50%] w-[206px]" data-name="south_thali 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSouthThali1} />
      </div>
    </div>
  );
}

function Star4() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Star 2">
          <path d={svgPaths.p8633d00} fill="var(--fill-0, #9961F7)" id="Star 2_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Star4 />
      <div className="css-g0mm18 flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#464a53] text-[12px] text-center">
        <p className="css-ew64yg leading-[normal]">4.5</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="css-g0mm18 flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b23] text-[12px] text-center">
        <p className="css-ew64yg leading-[normal]">South thali</p>
      </div>
      <Frame19 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="css-g0mm18 flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#464a53] text-[12px] text-center">
        <p className="css-ew64yg leading-[normal]">₹ 110.00</p>
      </div>
    </div>
  );
}

function Details3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Details">
      <Frame18 />
      <Frame20 />
    </div>
  );
}

function Item1() {
  return (
    <div className="col-[2] content-stretch css-vsca90 flex flex-col gap-[4px] items-center relative row-[2] self-stretch shrink-0" data-name="Item 8">
      <Image3 />
      <Details3 />
    </div>
  );
}

function Image4() {
  return (
    <div className="bg-white h-[160px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <div className="absolute h-[160px] left-[calc(50%+0.5px)] top-0 translate-x-[-50%] w-[206px]" data-name="south_thali 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSouthThali1} />
      </div>
    </div>
  );
}

function Star5() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Star 2">
          <path d={svgPaths.p8633d00} fill="var(--fill-0, #9961F7)" id="Star 2_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Star5 />
      <div className="css-g0mm18 flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#464a53] text-[12px] text-center">
        <p className="css-ew64yg leading-[normal]">4.2</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="css-g0mm18 flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b23] text-[12px] text-center">
        <p className="css-ew64yg leading-[normal]">Veg thali</p>
      </div>
      <Frame22 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="css-g0mm18 flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#464a53] text-[12px] text-center">
        <p className="css-ew64yg leading-[normal]">₹ 100.00</p>
      </div>
    </div>
  );
}

function Details4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Details">
      <Frame21 />
      <Frame23 />
    </div>
  );
}

function Item5() {
  return (
    <div className="col-[1] content-stretch css-vsca90 flex flex-col gap-[4px] h-[200px] items-center relative row-[3] shrink-0" data-name="Item 12">
      <Image4 />
      <Details4 />
    </div>
  );
}

function Image5() {
  return (
    <div className="bg-white h-[160px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <div className="absolute h-[160px] left-[calc(50%+0.5px)] top-0 translate-x-[-50%] w-[206px]" data-name="south_thali 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSouthThali1} />
      </div>
    </div>
  );
}

function Star6() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Star 2">
          <path d={svgPaths.p8633d00} fill="var(--fill-0, #9961F7)" id="Star 2_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Star6 />
      <div className="css-g0mm18 flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#464a53] text-[12px] text-center">
        <p className="css-ew64yg leading-[normal]">4.3</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="css-g0mm18 flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b23] text-[12px] text-center">
        <p className="css-ew64yg leading-[normal]">West thali</p>
      </div>
      <Frame25 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="css-g0mm18 flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#464a53] text-[12px] text-center">
        <p className="css-ew64yg leading-[normal]">₹ 115.00</p>
      </div>
    </div>
  );
}

function Details5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Details">
      <Frame24 />
      <Frame26 />
    </div>
  );
}

function Item3() {
  return (
    <div className="col-[2] content-stretch css-vsca90 flex flex-col gap-[4px] items-center relative row-[3] self-stretch shrink-0" data-name="Item 10">
      <Image5 />
      <Details5 />
    </div>
  );
}

function Items() {
  return (
    <div className="absolute bg-white gap-[16px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[___fit-content(100%)_minmax(0,_1fr)_fit-content(100%)] h-[632px] left-1/2 px-[16px] py-0 top-[117px] translate-x-[-50%] w-[390px]" data-name="Items">
      <Item2 />
      <Item />
      <Item4 />
      <Item1 />
      <Item5 />
      <Item3 />
    </div>
  );
}

function Home3() {
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

function Home2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[64px] items-center justify-center min-h-px min-w-px relative" data-name="home">
      <Home3 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#464a53] text-[10px] text-center w-[min-content]">
        <p className="css-4hzbpn leading-[normal]">home</p>
      </div>
    </div>
  );
}

function Lunch3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lunch">
      <div className="absolute inset-[-31.25%_-32.66%_-45.83%_-31.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.3382 42.5">
          <g id="lunch">
            <g filter="url(#filter0_d_18271_745)" id="Vector 22">
              <path d={svgPaths.p2805e4c0} stroke="var(--stroke-0, #9961F7)" strokeLinecap="round" />
            </g>
            <g filter="url(#filter1_d_18271_745)" id="Vector 23">
              <path d={svgPaths.p2f55e600} fill="var(--fill-0, #9961F7)" />
              <path d={svgPaths.p13825dc0} stroke="var(--stroke-0, #9961F7)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="42.5" id="filter0_d_18271_745" width="31" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0.968627 0 0 0 0.5 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18271_745" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_18271_745" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="42.4283" id="filter1_d_18271_745" width="29.3382" x="10" y="0.0716884">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0.968627 0 0 0 0.5 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18271_745" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_18271_745" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Lunch2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[64px] items-center justify-center min-h-px min-w-px relative" data-name="lunch">
      <Lunch3 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#9961f7] text-[10px] text-center w-[min-content]">
        <p className="css-4hzbpn leading-[normal]">lunch</p>
      </div>
    </div>
  );
}

function Settings3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="settings">
          <path d={svgPaths.p10f7cf00} fill="var(--fill-0, #464A53)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Settings2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[64px] items-center justify-center min-h-px min-w-px relative" data-name="settings">
      <Settings3 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#464a53] text-[10px] text-center w-[min-content]">
        <p className="css-4hzbpn leading-[normal]">settings</p>
      </div>
    </div>
  );
}

function BottomNavigation1() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex items-center justify-center left-0 w-[390px]" data-name="Bottom navigation">
      <div aria-hidden="true" className="absolute border-[#ddd] border-solid border-t inset-0 pointer-events-none" />
      <Home2 />
      <Lunch2 />
      <Settings2 />
    </div>
  );
}

function SecondaryTabs() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px px-0 py-[8px] relative rounded-[999px]" data-name="Secondary tabs">
      <p className="css-4hzbpn font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9961f7] text-[12px] text-center w-full">Breakfast</p>
    </div>
  );
}

function SecondaryTabs1() {
  return (
    <div className="bg-[#9961f7] content-stretch flex flex-[1_0_0] h-[36px] items-center justify-center min-h-px min-w-px px-0 py-[8px] relative rounded-[999px]" data-name="Secondary tabs">
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white">Lunch</p>
    </div>
  );
}

function SecondaryTabs2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px px-0 py-[8px] relative rounded-[999px]" data-name="Secondary tabs">
      <p className="css-4hzbpn font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9961f7] text-[12px] text-center w-full">Snacks</p>
    </div>
  );
}

function SecondaryTabs3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px px-0 py-[8px] relative rounded-[999px]" data-name="Secondary tabs">
      <p className="css-4hzbpn font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9961f7] text-[12px] text-center w-full">Bakery</p>
    </div>
  );
}

function MealType() {
  return (
    <div className="absolute content-stretch flex gap-[11px] h-[40px] items-center left-1/2 p-[2px] rounded-[999px] top-[61px] translate-x-[-50%] w-[358px]" data-name="Meal type">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <SecondaryTabs />
      <SecondaryTabs1 />
      <SecondaryTabs2 />
      <SecondaryTabs3 />
    </div>
  );
}

function Mon() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-center min-h-px min-w-px pb-0 pt-[16px] px-0 relative" data-name="Mon">
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px]">Mon</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(211, 213, 218, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 1">
            <line id="Line 12" stroke="var(--stroke-0, #D3D5DA)" x2="78" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Tue() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-center min-h-px min-w-px pb-0 pt-[16px] px-0 relative" data-name="Tue">
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9961f7] text-[14px]">Tue</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-12px_-15.38%_-14px_-15.38%]" style={{ "--stroke-0": "rgba(153, 97, 247, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 102 26">
            <g filter="url(#filter0_d_18271_736)" id="Line 12">
              <line stroke="var(--stroke-0, #9961F7)" strokeWidth="2" x1="12" x2="90" y1="11" y2="11" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="26" id="filter0_d_18271_736" width="102" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="6" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0.968627 0 0 0 0.5 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18271_736" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_18271_736" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Wed() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-center min-h-px min-w-px pb-0 pt-[16px] px-0 relative" data-name="Wed">
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px]">Wed</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(211, 213, 218, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 1">
            <line id="Line 12" stroke="var(--stroke-0, #D3D5DA)" x2="78" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Thu() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-center min-h-px min-w-px pb-0 pt-[16px] px-0 relative" data-name="Thu">
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px]">Thu</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(211, 213, 218, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 1">
            <line id="Line 12" stroke="var(--stroke-0, #D3D5DA)" x2="78" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Fri() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-center min-h-px min-w-px pb-0 pt-[16px] px-0 relative" data-name="Fri">
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px]">Fri</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(211, 213, 218, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 1">
            <line id="Line 12" stroke="var(--stroke-0, #D3D5DA)" x2="78" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Days() {
  return (
    <div className="absolute bg-white content-stretch flex items-start justify-between left-0 shadow-[0px_4px_13px_0px_rgba(0,0,0,0.16)] top-0 w-[390px]" data-name="DAYS">
      <Mon />
      <Tue />
      <Wed />
      <Thu />
      <Fri />
    </div>
  );
}

function MainContainer1() {
  return (
    <div className="absolute bg-white h-[844px] left-0 top-0 w-[390px]" data-name="Main container">
      <Items />
      <BottomNavigation1 />
      <MealType />
      <Days />
    </div>
  );
}

function FoodPageLunch() {
  return (
    <div className="absolute bg-white h-[844px] left-[148px] overflow-clip top-[139px] w-[390px]" data-name="Food page - lunch">
      <MainContainer1 />
    </div>
  );
}

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

function Back1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Back" opacity="0">
          <path d={svgPaths.p193ae280} fill="var(--fill-0, #1B1B23)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function TopAppBar() {
  return (
    <div className="bg-white h-[72px] opacity-90 relative shrink-0 w-full" data-name="Top app bar">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b border-solid inset-0 pointer-events-none shadow-[0px_4px_13px_0px_rgba(0,0,0,0.16)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <Back />
          <p className="css-ew64yg font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-center">Comments</p>
          <Back1 />
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="css-ew64yg font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#545864] text-[12px]">Tom cruise</p>
      <div className="relative shrink-0 size-[4px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(84, 88, 100, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, #545864)" id="Ellipse 698" r="2" />
          </svg>
        </div>
      </div>
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#545864] text-[12px]">Jan 15, 2025</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame29 />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Overflow Menu Vertical">
        <div className="absolute inset-[18.75%_43.75%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(70, 74, 83, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 15">
              <g id="Vector">
                <path clipRule="evenodd" d={svgPaths.p34e3b500} fill="var(--fill-0, #464A53)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p152c0500} fill="var(--fill-0, #464A53)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p148e3100} fill="var(--fill-0, #464A53)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[40px]">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="relative shrink-0 size-[16px]" data-name="like 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLike1} />
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame31 />
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#545864] text-[12px]">4000</p>
    </div>
  );
}

function Frame27({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Frame28 />
      <div className="font-['Poppins:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#464a53] text-[14px] w-[min-content]">
        <p className="css-4hzbpn mb-0">Alright, let’s cut to the chase and design this clean, scalable, and future-proof. No hacks, no rework later.</p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn">You’re implementing comments + ratings on food items. This is a classic relational problem. The right DB model now will save you pain when SPOT scales.</p>
      </div>
      <Frame30 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 358 0.5">
            <line id="Line 79" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="8 4" strokeWidth="0.5" x2="358" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="css-ew64yg font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#545864] text-[12px]">Tom cruise</p>
      <div className="relative shrink-0 size-[4px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(84, 88, 100, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, #545864)" id="Ellipse 698" r="2" />
          </svg>
        </div>
      </div>
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#545864] text-[12px]">Jan 15, 2025</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame34 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[40px]">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="relative shrink-0 size-[16px]" data-name="like 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLike1} />
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame36 />
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#545864] text-[12px]">4000</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full">
      <Frame33 />
      <div className="font-['Poppins:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#464a53] text-[14px] w-[min-content]">
        <p className="css-4hzbpn mb-0">Alright, let’s cut to the chase and design this clean, scalable, and future-proof. No hacks, no rework later.</p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn">You’re implementing comments + ratings on food items. This is a classic relational problem. The right DB model now will save you pain when SPOT scales.</p>
      </div>
      <Frame35 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 358 0.5">
            <line id="Line 79" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="8 4" strokeWidth="0.5" x2="358" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="h-[708px] relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <Frame27 />
        <Frame32 />
      </div>
    </div>
  );
}

function MainContainer2() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start max-w-[560px] min-h-px min-w-px relative w-full" data-name="Main container">
      <TopAppBar />
      <Content />
    </div>
  );
}

function Comments() {
  return (
    <div className="absolute bg-[#dbcffc] content-stretch flex flex-col h-[844px] items-center justify-center left-[1088px] overflow-clip top-[139px] w-[390px]" data-name="Comments">
      <MainContainer2 />
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

function Back3() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Back">
          <path d={svgPaths.p193ae280} fill="var(--fill-0, #1B1B23)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function TopAppBar1() {
  return (
    <div className="bg-white h-[72px] opacity-90 relative shrink-0 w-full" data-name="Top app bar">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b border-solid inset-0 pointer-events-none shadow-[0px_4px_13px_0px_rgba(0,0,0,0.16)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <Back2 />
          <p className="css-ew64yg font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-center">Comments</p>
          <Back3 />
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="css-ew64yg font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#545864] text-[12px]">Tom cruise</p>
      <div className="relative shrink-0 size-[4px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(84, 88, 100, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, #545864)" id="Ellipse 698" r="2" />
          </svg>
        </div>
      </div>
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#545864] text-[12px]">Jan 15, 2025</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame39 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[40px]">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="relative shrink-0 size-[16px]" data-name="like 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLike1} />
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame41 />
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#545864] text-[12px]">4000</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full">
      <Frame38 />
      <div className="font-['Poppins:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#464a53] text-[14px] w-[min-content]">
        <p className="css-4hzbpn mb-0">Alright, let’s cut to the chase and design this clean, scalable, and future-proof. No hacks, no rework later.</p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn">You’re implementing comments + ratings on food items. This is a classic relational problem. The right DB model now will save you pain when SPOT scales.</p>
      </div>
      <Frame40 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 358 0.5">
            <line id="Line 79" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="8 4" strokeWidth="0.5" x2="358" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="css-ew64yg font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#545864] text-[12px]">Tom cruise</p>
      <div className="relative shrink-0 size-[4px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(84, 88, 100, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, #545864)" id="Ellipse 698" r="2" />
          </svg>
        </div>
      </div>
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#545864] text-[12px]">Jan 15, 2025</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame44 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[40px]">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="relative shrink-0 size-[16px]" data-name="like 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLike1} />
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame46 />
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#545864] text-[12px]">4000</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full">
      <Frame43 />
      <div className="font-['Poppins:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#464a53] text-[14px] w-[min-content]">
        <p className="css-4hzbpn mb-0">Alright, let’s cut to the chase and design this clean, scalable, and future-proof. No hacks, no rework later.</p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn">You’re implementing comments + ratings on food items. This is a classic relational problem. The right DB model now will save you pain when SPOT scales.</p>
      </div>
      <Frame45 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 358 0.5">
            <line id="Line 79" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="8 4" strokeWidth="0.5" x2="358" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="h-[708px] relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <Frame37 />
        <Frame42 />
      </div>
    </div>
  );
}

function MainContainer3() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start max-w-[560px] min-h-px min-w-px relative w-full" data-name="Main container">
      <TopAppBar1 />
      <Content1 />
    </div>
  );
}

function Comments1() {
  return (
    <div className="absolute bg-[#dbcffc] content-stretch flex flex-col h-[844px] items-center justify-center left-[2028px] overflow-clip top-[139px] w-[390px]" data-name="Comments">
      <MainContainer3 />
    </div>
  );
}

function Back4() {
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

function Back5() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Back" opacity="0">
          <path d={svgPaths.p193ae280} fill="var(--fill-0, #1B1B23)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function TopAppBar2() {
  return (
    <div className="bg-white h-[72px] opacity-90 relative shrink-0 w-full" data-name="Top app bar">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b border-solid inset-0 pointer-events-none shadow-[0px_4px_13px_0px_rgba(0,0,0,0.16)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <Back4 />
          <p className="css-ew64yg font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-center">Comments</p>
          <Back5 />
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="css-ew64yg font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#545864] text-[12px]">Tom cruise</p>
      <div className="relative shrink-0 size-[4px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(84, 88, 100, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, #545864)" id="Ellipse 698" r="2" />
          </svg>
        </div>
      </div>
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#545864] text-[12px]">Jan 15, 2025</p>
    </div>
  );
}

function OverflowMenuVertical() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Overflow Menu Vertical">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_18271_720)" id="Overflow Menu Vertical">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p6c72600} fill="var(--fill-0, #464A53)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2caf7000} fill="var(--fill-0, #464A53)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3966fe80} fill="var(--fill-0, #464A53)" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_18271_720">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame49 />
      <OverflowMenuVertical />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[40px]">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="relative shrink-0 size-[16px]" data-name="like 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLike1} />
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame51 />
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#545864] text-[12px]">4000</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full">
      <Frame48 />
      <div className="font-['Poppins:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#464a53] text-[14px] w-[min-content]">
        <p className="css-4hzbpn mb-0">Alright, let’s cut to the chase and design this clean, scalable, and future-proof. No hacks, no rework later.</p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn">You’re implementing comments + ratings on food items. This is a classic relational problem. The right DB model now will save you pain when SPOT scales.</p>
      </div>
      <Frame50 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 358 0.5">
            <line id="Line 79" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="8 4" strokeWidth="0.5" x2="358" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="css-ew64yg font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#545864] text-[12px]">Tom cruise</p>
      <div className="relative shrink-0 size-[4px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(84, 88, 100, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, #545864)" id="Ellipse 698" r="2" />
          </svg>
        </div>
      </div>
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#545864] text-[12px]">Jan 15, 2025</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame54 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[40px]">
      <div aria-hidden="true" className="absolute border border-[#d3c4fc] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="relative shrink-0 size-[16px]" data-name="like 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLike1} />
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame56 />
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#545864] text-[12px]">4000</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full">
      <Frame53 />
      <div className="font-['Poppins:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#464a53] text-[14px] w-[min-content]">
        <p className="css-4hzbpn mb-0">Alright, let’s cut to the chase and design this clean, scalable, and future-proof. No hacks, no rework later.</p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn">You’re implementing comments + ratings on food items. This is a classic relational problem. The right DB model now will save you pain when SPOT scales.</p>
      </div>
      <Frame55 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 358 0.5">
            <line id="Line 79" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="8 4" strokeWidth="0.5" x2="358" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="h-[708px] relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <Frame47 />
        <Frame52 />
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

function Frame3() {
  return (
    <div className="content-stretch flex gap-[13px] h-[48px] items-center relative shrink-0 w-full">
      <Edit />
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#464a53] text-[14px]">Edit</p>
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

function Frame4() {
  return (
    <div className="content-stretch flex gap-[13px] h-[48px] items-center relative shrink-0 w-full">
      <Delete />
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#464a53] text-[14px]">Delete</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[225px] px-[16px] py-[4px] rounded-[16px] shadow-[0px_4px_28px_0px_rgba(138,56,245,0.2)] top-[108px] w-[141px]">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function MainContainer4() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start max-w-[560px] min-h-px min-w-px relative w-full" data-name="Main container">
      <TopAppBar2 />
      <Content2 />
      <Frame5 />
    </div>
  );
}

function Comments2() {
  return (
    <div className="absolute bg-[#dbcffc] content-stretch flex flex-col h-[844px] items-center justify-center left-[1558px] overflow-clip top-[139px] w-[390px]" data-name="Comments">
      <MainContainer4 />
    </div>
  );
}

function Back6() {
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

function TopAppBar3() {
  return (
    <div className="bg-white h-[72px] opacity-90 relative shrink-0 w-full z-[3]" data-name="Top app bar">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
          <Back6 />
          <p className="css-ew64yg font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[18px] text-center">Add comment</p>
          <Empty />
        </div>
      </div>
    </div>
  );
}

function Star7() {
  return (
    <div className="relative shrink-0 size-[48px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Star 2">
          <path d={svgPaths.p316c9880} fill="var(--fill-0, #9961F7)" id="Star 2_2" />
        </g>
      </svg>
    </div>
  );
}

function Star8() {
  return (
    <div className="relative shrink-0 size-[48px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Star 2">
          <path d={svgPaths.p316c9880} fill="var(--fill-0, #9961F7)" id="Star 2_2" />
        </g>
      </svg>
    </div>
  );
}

function Star9() {
  return (
    <div className="relative shrink-0 size-[48px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Star 2">
          <path d={svgPaths.p316c9880} fill="var(--fill-0, #9961F7)" id="Star 2_2" />
        </g>
      </svg>
    </div>
  );
}

function Star10() {
  return (
    <div className="relative shrink-0 size-[48px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Star 5">
          <path d={svgPaths.p316c9880} fill="var(--fill-0, #989DA9)" id="Star 2" />
        </g>
      </svg>
    </div>
  );
}

function Star11() {
  return (
    <div className="relative shrink-0 size-[48px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Star 5">
          <path d={svgPaths.p316c9880} fill="var(--fill-0, #989DA9)" id="Star 2" />
        </g>
      </svg>
    </div>
  );
}

function Frame57() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">
          <Star7 />
          <Star8 />
          <Star9 />
          <Star10 />
          <Star11 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[152px] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d3d5da] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex items-start p-[16px] relative size-full">
        <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[14px]">Comment</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative w-full">
      <Frame57 />
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full z-[2]">
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Frame2 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#9961f7] flex-[1_0_0] h-[64px] min-h-px min-w-px relative rounded-[16px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
          <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-center text-white">Done</p>
        </div>
      </div>
    </div>
  );
}

function BottomBottoms() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Bottom bottoms">
      <div className="content-stretch flex items-start p-[16px] relative w-full">
        <Button />
      </div>
    </div>
  );
}

function MainContainer5() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col isolate items-center max-w-[560px] min-h-px min-w-px relative w-full z-[1]" data-name="Main container">
      <TopAppBar3 />
      <Frame1 />
      <BottomBottoms />
    </div>
  );
}

function AddItem() {
  return (
    <div className="absolute bg-[#dbcffc] content-stretch flex flex-col h-[844px] isolate items-center justify-between left-[2498px] overflow-clip top-[139px] w-[390px]" data-name="Add item">
      <MainContainer5 />
    </div>
  );
}

export default function Frame17() {
  return (
    <div className="bg-[#a7a7a7] relative size-full">
      <FoodPageLuchDetail />
      <FoodPageLunch />
      <Comments />
      <Comments1 />
      <Comments2 />
      <AddItem />
    </div>
  );
}