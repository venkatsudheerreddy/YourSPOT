import svgPaths from "./svg-oakktxlu5y";

function HB() {
  return <div className="absolute h-[825.6px] left-0 top-0 w-[1166.4px]" data-name="hB" />;
}

function App() {
  return <div className="absolute h-[825.6px] left-0 top-0 w-[560px]" data-name="App" />;
}

function Container() {
  return (
    <div className="absolute bg-white h-[825.6px] left-[303.2px] overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[560px]" data-name="Container">
      <App />
    </div>
  );
}

function DesktopLayout() {
  return (
    <div className="absolute bg-[#dbcffc] h-[825.6px] left-0 overflow-clip top-0 w-[1166.4px]" data-name="DesktopLayout">
      <Container />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[9.298px] left-[42.62px] top-[77.41px] w-[21.361px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#1b1b23] text-[16px] text-nowrap top-[0.31px]">Zone A</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[9.298px] left-[116.23px] top-[77.41px] w-[20.911px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#1b1b23] text-[16px] text-nowrap top-[0.31px]">Zone B</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[9.298px] left-[178.21px] top-[77.41px] w-[21.686px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#1b1b23] text-[16px] text-nowrap top-[0.31px]">Zone C</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[9.298px] left-[244.07px] top-[77.41px] w-[21.371px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#1b1b23] text-[16px] text-nowrap top-[0.31px]">Zone D</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[9.298px] left-[148.19px] top-[53.39px] w-[15.09px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#1b1b23] text-[16px] text-nowrap top-[0.31px]">EAST</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4344">
            <path d={svgPaths.p2f004a80} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774715" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[-0.39px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[5.579px] items-start relative w-full" data-name="Paragraph">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-center text-nowrap text-white">Sudheer</p>
    </div>
  );
}

function SeatBox() {
  return (
    <div className="absolute bg-[#f97316] content-stretch flex flex-col h-[24.795px] items-start left-0 pb-0 pl-[3.218px] pr-[3.601px] pt-[3.969px] rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2">
      <div className="flex h-[5.579px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "37.8125", "--transform-inner-height": "11.1875" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] w-full">
          <Paragraph5 />
        </div>
      </div>
    </div>
  );
}

function SeatNumber() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[14.63px] top-[9.61px] w-[6.388px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">106</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[24.795px] left-[1.55px] top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatBox />
      <SeatNumber />
    </div>
  );
}

function DeskLeft() {
  return (
    <div className="absolute h-[28.669px] left-0 top-0 w-[24.02px]" data-name="DeskLeft2">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4344">
            <path d={svgPaths.p2f004a80} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774715" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[-0.39px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[5.579px] items-start relative w-full" data-name="Paragraph">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-center text-nowrap text-white">Sudheer</p>
    </div>
  );
}

function SeatBox1() {
  return (
    <div className="absolute bg-[#f97316] content-stretch flex flex-col h-[24.795px] items-start left-0 pb-0 pl-[3.218px] pr-[3.601px] pt-[3.969px] rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2">
      <div className="flex h-[5.579px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "37.8125", "--transform-inner-height": "11.1875" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] w-full">
          <Paragraph6 />
        </div>
      </div>
    </div>
  );
}

function SeatNumber1() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[14.8px] top-[9.61px] w-[6.029px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">107</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[24.795px] left-[1.55px] top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatBox1 />
      <SeatNumber1 />
    </div>
  );
}

function DeskLeft1() {
  return (
    <div className="absolute h-[28.669px] left-0 top-[28.67px] w-[24.02px]" data-name="DeskLeft2">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4344">
            <path d={svgPaths.p2f004a80} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774715" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[-0.39px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function SeatBox2() {
  return <div className="absolute bg-[#d3d5da] h-[24.795px] left-0 rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2" />;
}

function SeatNumber2() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[14.62px] top-[9.61px] w-[6.397px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">108</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[24.795px] left-[1.55px] top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatBox2 />
      <SeatNumber2 />
    </div>
  );
}

function DeskLeft2() {
  return (
    <div className="absolute h-[28.669px] left-0 top-[57.34px] w-[24.02px]" data-name="DeskLeft2">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[86.007px] left-0 top-[28.67px] w-[24.02px]" data-name="Container">
      <DeskLeft />
      <DeskLeft1 />
      <DeskLeft2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4344">
            <path d={svgPaths.p2464c100} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774715" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[14.33px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function SeatNumber3() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[1.45px] top-[9.61px] w-[6.402px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">105</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[5.579px] items-start relative w-full" data-name="Paragraph">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-center text-nowrap text-white">Hhhh</p>
    </div>
  );
}

function SeatBox3() {
  return (
    <div className="absolute bg-[#9961f7] content-stretch flex flex-col h-[24.795px] items-start left-[10.07px] pb-0 pl-[3.218px] pr-[3.601px] pt-[6.971px] rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2">
      <div className="flex h-[5.579px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "23.90625", "--transform-inner-height": "11.1875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full">
          <Paragraph7 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[24.795px] left-0 top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatNumber3 />
      <SeatBox3 />
    </div>
  );
}

function DeskRight() {
  return (
    <div className="absolute h-[28.669px] left-0 top-0 w-[24.02px]" data-name="DeskRight2">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4344">
            <path d={svgPaths.p2464c100} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774715" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[14.33px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function SeatNumber4() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[1.41px] top-[9.61px] w-[6.47px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">104</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex h-[5.579px] items-start relative w-full" data-name="Paragraph">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-center text-nowrap text-white">Sudheer</p>
    </div>
  );
}

function SeatBox4() {
  return (
    <div className="absolute bg-[#f97316] content-stretch flex flex-col h-[24.795px] items-start left-[10.07px] pb-0 pl-[3.218px] pr-[3.601px] pt-[3.969px] rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2">
      <div className="flex h-[5.579px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "37.8125", "--transform-inner-height": "11.1875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full">
          <Paragraph8 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[24.795px] left-0 top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatNumber4 />
      <SeatBox4 />
    </div>
  );
}

function DeskRight1() {
  return (
    <div className="absolute h-[28.669px] left-0 top-[28.67px] w-[24.02px]" data-name="DeskRight2">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4344">
            <path d={svgPaths.p2464c100} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774715" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[14.33px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function SeatNumber5() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[1.54px] top-[9.61px] w-[6.228px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">103</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex h-[5.579px] items-start relative w-full" data-name="Paragraph">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-center text-nowrap text-white">Sudheer</p>
    </div>
  );
}

function SeatBox5() {
  return (
    <div className="absolute bg-[#f97316] content-stretch flex flex-col h-[24.795px] items-start left-[10.07px] pb-0 pl-[3.218px] pr-[3.601px] pt-[3.969px] rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2">
      <div className="flex h-[5.579px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "37.8125", "--transform-inner-height": "11.1875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full">
          <Paragraph9 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[24.795px] left-0 top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatNumber5 />
      <SeatBox5 />
    </div>
  );
}

function DeskRight2() {
  return (
    <div className="absolute h-[28.669px] left-0 top-[57.34px] w-[24.02px]" data-name="DeskRight2">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4344">
            <path d={svgPaths.p2464c100} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774715" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[14.33px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon6 />
    </div>
  );
}

function SeatNumber6() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[1.58px] top-[9.61px] w-[6.131px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">102</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex h-[5.579px] items-start relative w-full" data-name="Paragraph">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-center text-nowrap text-white">1121</p>
    </div>
  );
}

function SeatBox6() {
  return (
    <div className="absolute bg-[#9961f7] content-stretch flex flex-col h-[24.795px] items-start left-[10.07px] pb-0 pl-[3.216px] pr-[3.603px] pt-[9.046px] rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2">
      <div className="flex h-[5.579px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "21.5", "--transform-inner-height": "11.1875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full">
          <Paragraph10 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[24.795px] left-0 top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatNumber6 />
      <SeatBox6 />
    </div>
  );
}

function DeskRight3() {
  return (
    <div className="absolute h-[28.669px] left-0 top-[86.01px] w-[24.02px]" data-name="DeskRight2">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[114.676px] left-[39.52px] top-0 w-[24.02px]" data-name="Container">
      <DeskRight />
      <DeskRight1 />
      <DeskRight2 />
      <DeskRight3 />
    </div>
  );
}

function ZoneGroup() {
  return (
    <div className="absolute h-[114.676px] left-0 top-0 w-[63.537px]" data-name="ZoneGroup">
      <Container7 />
      <Container16 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4343">
            <path d={svgPaths.p35d04300} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774711" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[-0.39px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function SeatBox7() {
  return <div className="absolute bg-[#d3d5da] h-[24.795px] left-0 rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2" />;
}

function SeatNumber7() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[15.36px] top-[9.61px] w-[4.92px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">98</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[24.795px] left-[1.55px] top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatBox7 />
      <SeatNumber7 />
    </div>
  );
}

function DeskLeft3() {
  return (
    <div className="absolute h-[28.669px] left-0 top-0 w-[24.02px]" data-name="DeskLeft2">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4343">
            <path d={svgPaths.p35d04300} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774711" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[-0.39px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon8 />
    </div>
  );
}

function SeatBox8() {
  return <div className="absolute bg-[#d3d5da] h-[24.795px] left-0 rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2" />;
}

function SeatNumber8() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[15.4px] top-[9.61px] w-[4.852px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">99</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[24.795px] left-[1.55px] top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatBox8 />
      <SeatNumber8 />
    </div>
  );
}

function DeskLeft4() {
  return (
    <div className="absolute h-[28.669px] left-0 top-[28.67px] w-[24.02px]" data-name="DeskLeft2">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4343">
            <path d={svgPaths.p35d04300} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774711" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[-0.39px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon9 />
    </div>
  );
}

function SeatBox9() {
  return <div className="absolute bg-[#d3d5da] h-[24.795px] left-0 rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2" />;
}

function SeatNumber9() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[14.62px] top-[9.61px] w-[6.412px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">100</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[24.795px] left-[1.55px] top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatBox9 />
      <SeatNumber9 />
    </div>
  );
}

function DeskLeft5() {
  return (
    <div className="absolute h-[28.669px] left-0 top-[57.34px] w-[24.02px]" data-name="DeskLeft2">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4343">
            <path d={svgPaths.p35d04300} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774711" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[-0.39px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon10 />
    </div>
  );
}

function SeatBox10() {
  return <div className="absolute bg-[#d3d5da] h-[24.795px] left-0 rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2" />;
}

function SeatNumber10() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[15.17px] top-[9.61px] w-[5.308px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">101</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[24.795px] left-[1.55px] top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatBox10 />
      <SeatNumber10 />
    </div>
  );
}

function DeskLeft6() {
  return (
    <div className="absolute h-[28.669px] left-0 top-[86.01px] w-[24.02px]" data-name="DeskLeft2">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[114.676px] left-0 top-0 w-[24.02px]" data-name="Container">
      <DeskLeft3 />
      <DeskLeft4 />
      <DeskLeft5 />
      <DeskLeft6 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4343">
            <path d={svgPaths.p1c5ba100} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774711" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[14.33px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon11 />
    </div>
  );
}

function SeatNumber11() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[2.37px] top-[9.61px] w-[4.552px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">97</p>
    </div>
  );
}

function SeatBox11() {
  return <div className="absolute bg-[#d3d5da] h-[24.795px] left-[10.07px] rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2" />;
}

function Container27() {
  return (
    <div className="absolute h-[24.795px] left-0 top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatNumber11 />
      <SeatBox11 />
    </div>
  );
}

function DeskRight4() {
  return (
    <div className="absolute h-[28.669px] left-0 top-0 w-[24.02px]" data-name="DeskRight2">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4343">
            <path d={svgPaths.p1c5ba100} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774711" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[14.33px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon12 />
    </div>
  );
}

function SeatNumber12() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[2.19px] top-[9.61px] w-[4.906px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">96</p>
    </div>
  );
}

function SeatBox12() {
  return <div className="absolute bg-[#d3d5da] h-[24.795px] left-[10.07px] rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2" />;
}

function Container29() {
  return (
    <div className="absolute h-[24.795px] left-0 top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatNumber12 />
      <SeatBox12 />
    </div>
  );
}

function DeskRight5() {
  return (
    <div className="absolute h-[28.669px] left-0 top-[28.67px] w-[24.02px]" data-name="DeskRight2">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4343">
            <path d={svgPaths.p1c5ba100} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774711" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[14.33px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon13 />
    </div>
  );
}

function SeatNumber13() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[2.19px] top-[9.61px] w-[4.92px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">95</p>
    </div>
  );
}

function SeatBox13() {
  return <div className="absolute bg-[#d3d5da] h-[24.795px] left-[10.07px] rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2" />;
}

function Container31() {
  return (
    <div className="absolute h-[24.795px] left-0 top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatNumber13 />
      <SeatBox13 />
    </div>
  );
}

function DeskRight6() {
  return (
    <div className="absolute h-[28.669px] left-0 top-[57.34px] w-[24.02px]" data-name="DeskRight2">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4343">
            <path d={svgPaths.p1c5ba100} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774711" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[14.33px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon14 />
    </div>
  );
}

function SeatNumber14() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[2.16px] top-[9.61px] w-[4.988px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">94</p>
    </div>
  );
}

function SeatBox14() {
  return <div className="absolute bg-[#d3d5da] h-[24.795px] left-[10.07px] rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2" />;
}

function Container33() {
  return (
    <div className="absolute h-[24.795px] left-0 top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatNumber14 />
      <SeatBox14 />
    </div>
  );
}

function DeskRight7() {
  return (
    <div className="absolute h-[28.669px] left-0 top-[86.01px] w-[24.02px]" data-name="DeskRight2">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[114.676px] left-[39.52px] top-0 w-[24.02px]" data-name="Container">
      <DeskRight4 />
      <DeskRight5 />
      <DeskRight6 />
      <DeskRight7 />
    </div>
  );
}

function ZoneGroup1() {
  return (
    <div className="absolute h-[114.676px] left-[64.31px] top-0 w-[63.537px]" data-name="ZoneGroup">
      <Container25 />
      <Container34 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4344">
            <path d={svgPaths.p2f004a80} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774715" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[-0.39px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon15 />
    </div>
  );
}

function SeatBox15() {
  return <div className="absolute bg-[#d3d5da] h-[24.795px] left-0 rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2" />;
}

function SeatNumber15() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[15.36px] top-[9.61px] w-[4.93px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">90</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[24.795px] left-[1.55px] top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatBox15 />
      <SeatNumber15 />
    </div>
  );
}

function DeskLeft7() {
  return (
    <div className="absolute h-[28.669px] left-0 top-0 w-[24.02px]" data-name="DeskLeft2">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4344">
            <path d={svgPaths.p2f004a80} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774715" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[-0.39px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon16 />
    </div>
  );
}

function SeatBox16() {
  return <div className="absolute bg-[#d3d5da] h-[24.795px] left-0 rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2" />;
}

function SeatNumber16() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[15.9px] top-[9.61px] w-[3.831px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">91</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[24.795px] left-[1.55px] top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatBox16 />
      <SeatNumber16 />
    </div>
  );
}

function DeskLeft8() {
  return (
    <div className="absolute h-[28.669px] left-0 top-[28.67px] w-[24.02px]" data-name="DeskLeft2">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4344">
            <path d={svgPaths.p2f004a80} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774715" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[-0.39px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon17 />
    </div>
  );
}

function SeatBox17() {
  return <div className="absolute bg-[#d3d5da] h-[24.795px] left-0 rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2" />;
}

function SeatNumber17() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[15.5px] top-[9.61px] w-[4.649px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">92</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[24.795px] left-[1.55px] top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatBox17 />
      <SeatNumber17 />
    </div>
  );
}

function DeskLeft9() {
  return (
    <div className="absolute h-[28.669px] left-0 top-[57.34px] w-[24.02px]" data-name="DeskLeft2">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4344">
            <path d={svgPaths.p2f004a80} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774715" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[-0.39px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon18 />
    </div>
  );
}

function SeatBox18() {
  return <div className="absolute bg-[#d3d5da] h-[24.795px] left-0 rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2" />;
}

function SeatNumber18() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[15.45px] top-[9.61px] w-[4.746px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">93</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[24.795px] left-[1.55px] top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatBox18 />
      <SeatNumber18 />
    </div>
  );
}

function DeskLeft10() {
  return (
    <div className="absolute h-[28.669px] left-0 top-[86.01px] w-[24.02px]" data-name="DeskLeft2">
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[114.676px] left-0 top-0 w-[24.02px]" data-name="Container">
      <DeskLeft7 />
      <DeskLeft8 />
      <DeskLeft9 />
      <DeskLeft10 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4344">
            <path d={svgPaths.p2464c100} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774715" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[14.33px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon19 />
    </div>
  );
}

function SeatNumber19() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[2.19px] top-[9.61px] w-[4.92px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">89</p>
    </div>
  );
}

function SeatBox19() {
  return <div className="absolute bg-[#d3d5da] h-[24.795px] left-[10.07px] rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2" />;
}

function Container45() {
  return (
    <div className="absolute h-[24.795px] left-0 top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatNumber19 />
      <SeatBox19 />
    </div>
  );
}

function DeskRight8() {
  return (
    <div className="absolute h-[28.669px] left-0 top-0 w-[24.02px]" data-name="DeskRight2">
      <Container44 />
      <Container45 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4344">
            <path d={svgPaths.p2464c100} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774715" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[14.33px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon20 />
    </div>
  );
}

function SeatNumber20() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[2.16px] top-[9.61px] w-[4.983px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">88</p>
    </div>
  );
}

function SeatBox20() {
  return <div className="absolute bg-[#d3d5da] h-[24.795px] left-[10.07px] rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2" />;
}

function Container47() {
  return (
    <div className="absolute h-[24.795px] left-0 top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatNumber20 />
      <SeatBox20 />
    </div>
  );
}

function DeskRight9() {
  return (
    <div className="absolute h-[28.669px] left-0 top-[28.67px] w-[24.02px]" data-name="DeskRight2">
      <Container46 />
      <Container47 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4344">
            <path d={svgPaths.p2464c100} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774715" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[14.33px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon21 />
    </div>
  );
}

function SeatNumber21() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[2.34px] top-[9.61px] w-[4.615px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">87</p>
    </div>
  );
}

function SeatBox21() {
  return <div className="absolute bg-[#d3d5da] h-[24.795px] left-[10.07px] rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2" />;
}

function Container49() {
  return (
    <div className="absolute h-[24.795px] left-0 top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatNumber21 />
      <SeatBox21 />
    </div>
  );
}

function DeskRight10() {
  return (
    <div className="absolute h-[28.669px] left-0 top-[57.34px] w-[24.02px]" data-name="DeskRight2">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4344">
            <path d={svgPaths.p2464c100} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774715" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[14.33px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon22 />
    </div>
  );
}

function SeatNumber22() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[2.16px] top-[9.61px] w-[4.973px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">86</p>
    </div>
  );
}

function SeatBox22() {
  return <div className="absolute bg-[#d3d5da] h-[24.795px] left-[10.07px] rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2" />;
}

function Container51() {
  return (
    <div className="absolute h-[24.795px] left-0 top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatNumber22 />
      <SeatBox22 />
    </div>
  );
}

function DeskRight11() {
  return (
    <div className="absolute h-[28.669px] left-0 top-[86.01px] w-[24.02px]" data-name="DeskRight2">
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[114.676px] left-[39.52px] top-0 w-[24.02px]" data-name="Container">
      <DeskRight8 />
      <DeskRight9 />
      <DeskRight10 />
      <DeskRight11 />
    </div>
  );
}

function ZoneGroup2() {
  return (
    <div className="absolute h-[114.676px] left-[128.62px] top-0 w-[63.537px]" data-name="ZoneGroup">
      <Container43 />
      <Container52 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4344">
            <path d={svgPaths.p2f004a80} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774715" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[-0.39px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon23 />
    </div>
  );
}

function SeatBox23() {
  return <div className="absolute bg-[#d3d5da] h-[24.795px] left-0 rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2" />;
}

function SeatNumber23() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[15.46px] top-[9.61px] w-[4.717px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">82</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[24.795px] left-[1.55px] top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatBox23 />
      <SeatNumber23 />
    </div>
  );
}

function DeskLeft11() {
  return (
    <div className="absolute h-[28.669px] left-0 top-0 w-[24.02px]" data-name="DeskLeft2">
      <Container53 />
      <Container54 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4344">
            <path d={svgPaths.p2f004a80} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774715" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[-0.39px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon24 />
    </div>
  );
}

function SeatBox24() {
  return <div className="absolute bg-[#d3d5da] h-[24.795px] left-0 rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2" />;
}

function SeatNumber24() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[15.41px] top-[9.61px] w-[4.814px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">83</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[24.795px] left-[1.55px] top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatBox24 />
      <SeatNumber24 />
    </div>
  );
}

function DeskLeft12() {
  return (
    <div className="absolute h-[28.669px] left-0 top-[28.67px] w-[24.02px]" data-name="DeskLeft2">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4344">
            <path d={svgPaths.p2f004a80} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774715" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[-0.39px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon25 />
    </div>
  );
}

function SeatBox25() {
  return <div className="absolute bg-[#d3d5da] h-[24.795px] left-0 rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2" />;
}

function SeatNumber25() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[15.29px] top-[9.61px] w-[5.056px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">84</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[24.795px] left-[1.55px] top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatBox25 />
      <SeatNumber25 />
    </div>
  );
}

function DeskLeft13() {
  return (
    <div className="absolute h-[28.669px] left-0 top-[57.34px] w-[24.02px]" data-name="DeskLeft2">
      <Container57 />
      <Container58 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4344">
            <path d={svgPaths.p2f004a80} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774715" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[-0.39px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon26 />
    </div>
  );
}

function SeatBox26() {
  return <div className="absolute bg-[#d3d5da] h-[24.795px] left-0 rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2" />;
}

function SeatNumber26() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[15.33px] top-[9.61px] w-[4.988px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">85</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute h-[24.795px] left-[1.55px] top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatBox26 />
      <SeatNumber26 />
    </div>
  );
}

function DeskLeft14() {
  return (
    <div className="absolute h-[28.669px] left-0 top-[86.01px] w-[24.02px]" data-name="DeskLeft2">
      <Container59 />
      <Container60 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute h-[114.676px] left-0 top-0 w-[24.02px]" data-name="Container">
      <DeskLeft11 />
      <DeskLeft12 />
      <DeskLeft13 />
      <DeskLeft14 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4344">
            <path d={svgPaths.p2464c100} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774715" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[14.33px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon27 />
    </div>
  );
}

function SeatNumber27() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[2.7px] top-[9.61px] w-[3.894px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">81</p>
    </div>
  );
}

function SeatBox27() {
  return <div className="absolute bg-[#d3d5da] h-[24.795px] left-[10.07px] rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2" />;
}

function Container63() {
  return (
    <div className="absolute h-[24.795px] left-0 top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatNumber27 />
      <SeatBox27 />
    </div>
  );
}

function DeskRight12() {
  return (
    <div className="absolute h-[28.669px] left-0 top-0 w-[24.02px]" data-name="DeskRight2">
      <Container62 />
      <Container63 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4344">
            <path d={svgPaths.p2464c100} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774715" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[14.33px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon28 />
    </div>
  );
}

function SeatNumber28() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[2.15px] top-[9.61px] w-[4.998px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">80</p>
    </div>
  );
}

function SeatBox28() {
  return <div className="absolute bg-[#d3d5da] h-[24.795px] left-[10.07px] rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2" />;
}

function Container65() {
  return (
    <div className="absolute h-[24.795px] left-0 top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatNumber28 />
      <SeatBox28 />
    </div>
  );
}

function DeskRight13() {
  return (
    <div className="absolute h-[28.669px] left-0 top-[28.67px] w-[24.02px]" data-name="DeskRight2">
      <Container64 />
      <Container65 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4344">
            <path d={svgPaths.p2464c100} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774715" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[14.33px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon29 />
    </div>
  );
}

function SeatNumber29() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[2.37px] top-[9.61px] w-[4.552px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">79</p>
    </div>
  );
}

function SeatBox29() {
  return <div className="absolute bg-[#d3d5da] h-[24.795px] left-[10.07px] rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2" />;
}

function Container67() {
  return (
    <div className="absolute h-[24.795px] left-0 top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatNumber29 />
      <SeatBox29 />
    </div>
  );
}

function DeskRight14() {
  return (
    <div className="absolute h-[28.669px] left-0 top-[57.34px] w-[24.02px]" data-name="DeskRight2">
      <Container66 />
      <Container67 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="h-[29.434px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.32%_3.85%]" data-name="Vector">
        <div className="absolute inset-[-1.35%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0728 29.4344">
            <path d={svgPaths.p2464c100} id="Vector" stroke="var(--stroke-0, #464A53)" strokeLinecap="round" strokeWidth="0.774715" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.434px] items-start left-[14.33px] top-[-0.38px] w-[10.073px]" data-name="Container">
      <Icon30 />
    </div>
  );
}

function SeatNumber30() {
  return (
    <div className="absolute content-stretch flex h-[5.579px] items-start left-[2.34px] top-[9.61px] w-[4.615px]" data-name="SeatNumber2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-center text-nowrap">78</p>
    </div>
  );
}

function SeatBox30() {
  return <div className="absolute bg-[#d3d5da] h-[24.795px] left-[10.07px] rounded-[4px] top-0 w-[12.397px]" data-name="SeatBox2" />;
}

function Container69() {
  return (
    <div className="absolute h-[24.795px] left-0 top-[1.94px] w-[22.47px]" data-name="Container">
      <SeatNumber30 />
      <SeatBox30 />
    </div>
  );
}

function DeskRight15() {
  return (
    <div className="absolute h-[28.669px] left-0 top-[86.01px] w-[24.02px]" data-name="DeskRight2">
      <Container68 />
      <Container69 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute h-[114.676px] left-[39.52px] top-0 w-[24.02px]" data-name="Container">
      <DeskRight12 />
      <DeskRight13 />
      <DeskRight14 />
      <DeskRight15 />
    </div>
  );
}

function ZoneGroup3() {
  return (
    <div className="absolute h-[114.676px] left-[192.94px] top-0 w-[63.537px]" data-name="ZoneGroup">
      <Container61 />
      <Container70 />
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute h-[114.676px] left-[26.93px] top-[94.45px] w-[256.472px]" data-name="Container">
      <ZoneGroup />
      <ZoneGroup1 />
      <ZoneGroup2 />
      <ZoneGroup3 />
    </div>
  );
}

function Container72() {
  return <div className="absolute bg-[#d3d5da] left-0 rounded-[4px] size-[6.199px] top-[0.46px]" data-name="Container" />;
}

function Paragraph11() {
  return (
    <div className="absolute h-[7.129px] left-[7.75px] top-0 w-[23.173px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#464a53] text-[12px] text-nowrap top-[0.31px]">Available</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute h-[7.129px] left-0 top-0 w-[30.921px]" data-name="Container">
      <Container72 />
      <Paragraph11 />
    </div>
  );
}

function Container74() {
  return <div className="absolute bg-[#9961f7] left-0 rounded-[4px] size-[6.199px] top-[0.46px]" data-name="Container" />;
}

function Paragraph12() {
  return (
    <div className="absolute h-[7.129px] left-[7.75px] top-0 w-[23.115px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#464a53] text-[12px] text-nowrap top-[0.31px]">Occupied</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute h-[7.129px] left-[46.42px] top-0 w-[30.863px]" data-name="Container">
      <Container74 />
      <Paragraph12 />
    </div>
  );
}

function Container76() {
  return <div className="absolute bg-[#f97316] left-0 rounded-[4px] size-[6.199px] top-[0.46px]" data-name="Container" />;
}

function Paragraph13() {
  return (
    <div className="absolute h-[7.129px] left-[7.75px] top-0 w-[43.309px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#464a53] text-[12px] text-nowrap top-[0.31px]">My karmabhoomi</p>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute h-[7.129px] left-[92.78px] top-0 w-[51.057px]" data-name="Container">
      <Container76 />
      <Paragraph13 />
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute h-[7.129px] left-[83.05px] top-[245.55px] w-[143.835px]" data-name="Container">
      <Container73 />
      <Container75 />
      <Container77 />
    </div>
  );
}

function OfficeMap() {
  return (
    <div className="bg-white h-[319.854px] relative shrink-0 w-full" data-name="OfficeMap">
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
      <Paragraph4 />
      <Container71 />
      <Container78 />
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute bg-[#f4f4f5] content-stretch flex flex-col h-[825.6px] items-start left-0 overflow-clip pb-0 pl-[102.422px] pr-[147.642px] pt-[244.333px] top-0 w-[560px]" data-name="Container">
      <OfficeMap />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[28px] relative shrink-0 w-[11.788px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Poppins:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#1b1b23] text-[20px] text-center text-nowrap">+</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white relative rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.013px] py-0 relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[11.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Poppins:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#1b1b23] text-[20px] text-center text-nowrap">-</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.012px] py-0 relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[88px] items-start left-[504px] top-[705.6px] w-[40px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[10.163px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[0.8px]">6</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16.8px] opacity-70 relative shrink-0 w-[19.113px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Poppins:Light',sans-serif] leading-[16.8px] left-0 not-italic text-[12px] text-white top-0 w-[20px]">/ 31</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[24px] relative shrink-0 w-[33.275px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text2 />
        <Text3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16.8px] opacity-80 relative shrink-0 w-[71.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Poppins:Light',sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[12px] text-nowrap text-white">Occupancy:</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[44.8px] relative shrink-0 w-[71.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container81 />
        <Text4 />
      </div>
    </div>
  );
}

function Container83() {
  return <div className="bg-[rgba(255,255,255,0.2)] h-[32px] shrink-0 w-px" data-name="Container" />;
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function LayoutScreen() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-[37.325px]" data-name="LayoutScreen">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Poppins:Light',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">3 Jan</p>
      </div>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.1)] grow h-[37.2px] min-h-px min-w-px relative rounded-[2.68435e+07px] shrink-0" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pl-[16.8px] pr-[0.8px] py-[0.8px] relative size-full">
          <Icon31 />
          <LayoutScreen />
        </div>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[44.8px] relative shrink-0 w-[215.613px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Container82 />
        <Container83 />
        <SlotClone />
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute content-stretch flex h-[19.6px] items-start left-[36.47px] top-0 w-[7.05px]" data-name="Container">
      <p className="font-['Poppins:Light',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[14px] text-nowrap text-white">E</p>
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M12 2L16 12H8L12 2Z" fill="var(--fill-0, #EF4444)" id="Vector" />
          <path d="M12 22L8 12H16L12 22Z" fill="var(--fill-0, #E9EAEC)" id="Vector_2" />
          <path d={svgPaths.p3d728000} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Container86() {
  return (
    <div className="relative size-[38.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon32 />
      </div>
    </div>
  );
}

function Compass() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center left-[20px] p-[0.8px] rounded-[2.68435e+07px] size-[40px] top-[23.6px]" data-name="Compass3">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <div className="flex items-center justify-center relative shrink-0 size-[38.4px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Container86 />
        </div>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[63.6px] relative shrink-0 w-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container85 />
        <Compass />
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute bg-[#464a53] content-stretch flex h-[95.6px] items-center justify-between left-0 px-[24px] py-0 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[72px] w-[560px]" data-name="Container">
      <Container84 />
      <Container87 />
    </div>
  );
}

function Container89() {
  return <div className="absolute left-[504px] size-[40px] top-[16px]" data-name="Container" />;
}

function Back() {
  return (
    <div className="absolute contents inset-[33.13%_18.13%]" data-name="Back">
      <div className="absolute inset-[33.13%_18.13%]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.4999 13.4999">
          <path d={svgPaths.p25c00e70} fill="var(--fill-0, #1B1B23)" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function Icon33() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Back />
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] size-[40px] top-[16px]" data-name="Container">
      <Icon33 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[27.2px] left-[249.14px] top-[22.4px] w-[61.725px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[31px] not-italic text-[#1b1b23] text-[18px] text-center text-nowrap top-[0.8px] translate-x-[-50%]">Layout</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute h-[72px] left-0 top-0 w-[560px]" data-name="Container">
      <Container89 />
      <Container90 />
      <Paragraph14 />
    </div>
  );
}

function Container92() {
  return <div className="absolute border-[#ddd] border-[0px_0px_0.8px] border-solid h-[72px] left-0 top-0 w-[560px]" data-name="Container" />;
}

function Container93() {
  return (
    <div className="absolute bg-white h-[72px] left-0 opacity-90 top-0 w-[560px]" data-name="Container">
      <Container91 />
      <Container92 />
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute h-[167.6px] left-0 top-0 w-[560px]" data-name="Container">
      <Container88 />
      <Container93 />
    </div>
  );
}

function LayoutScreen1() {
  return (
    <div className="absolute bg-[#f4f4f5] h-[825.6px] left-[303.2px] overflow-clip top-0 w-[560px]" data-name="LayoutScreen">
      <Container79 />
      <Container80 />
      <Container94 />
    </div>
  );
}

export default function Spot() {
  return (
    <div className="bg-white relative size-full" data-name="SPOT">
      <HB />
      <DesktopLayout />
      <LayoutScreen1 />
    </div>
  );
}