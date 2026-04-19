import React from "react";
import imgUc1 from "figma:asset/67509c3cbc0fdfa65b4cafa8f16939e0c8f95bbd.png";

function Button({ onClick }: { onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="absolute bg-primary bottom-[39.83px] content-stretch flex gap-[8px] h-[48px] items-center justify-center left-[24px] px-[8px] py-[16px] rounded-[16px] w-[312px] cursor-pointer active:scale-95 transition-transform" 
      data-name="Button"
    >
      <p className="basis-0 label-sm-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-center text-primary-foreground">
        It’s okay, let me see what’s cooking inside
      </p>
    </div>
  );
}

function Frame({ onProceed }: { onProceed: () => void }) {
  return (
    <div className="basis-0 bg-[#1c2232] grow h-[477.667px] min-h-px min-w-px overflow-clip relative rounded-[24px] shrink-0 max-w-[358px]">
      <div className="absolute h-[572px] left-1/2 top-[calc(50%-40px)] translate-x-[-50%] translate-y-[-50%] w-[476px]" data-name="UC 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgUc1} />
      </div>
      <div className="absolute flex flex-col font-primary justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[16px] text-center text-nowrap text-white top-[51.83px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal]">This page is under construction</p>
      </div>
      <Button onClick={onProceed} />
    </div>
  );
}

export function UnderConstructionOverlay({ onProceed }: { onProceed: () => void }) {
  return (
    <div className="absolute inset-0 z-50 bg-[rgba(0,0,0,0.4)] backdrop-blur-sm content-stretch flex items-center justify-center px-[16px]">
      <Frame onProceed={onProceed} />
    </div>
  );
}
