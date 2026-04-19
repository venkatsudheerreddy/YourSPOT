function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-nowrap w-full">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[#1b1b23] text-[14px]">108</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#464a53] text-[12px]">Morning: 9:00 AM - 1:00 PM</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center leading-[normal] not-italic relative shrink-0 w-full">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[14px] text-black w-full">You already have a reservation on this date.</p>
      <Frame2 />
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[14px] text-black w-full">If you continue, your existing reservation will be cancelled and replaced with a new one.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-[#e9eaec] grow h-[64px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#464a53] text-[18px] text-center text-nowrap">Cancel</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-[#9961f7] grow h-[64px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">Continue</p>
        </div>
      </div>
    </div>
  );
}

function BottomBottoms() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Bottom bottoms">
      <Button />
      <Button1 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-white relative rounded-[16px] size-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center pb-[16px] pt-[32px] px-[16px] relative size-full">
          <Frame />
          <BottomBottoms />
        </div>
      </div>
    </div>
  );
}