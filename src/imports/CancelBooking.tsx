import imgImage20 from "figma:asset/4ad27594459c8dfed9ca1849ebbd0828e525288d.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <p className="font-[family-name:var(--font-primary)] font-[weight:var(--fw-heavy)] leading-[normal] not-italic relative shrink-0 text-[22px] text-foreground text-nowrap">Cancel booking?</p>
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-secondary grow h-[64px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
          <p className="font-[family-name:var(--font-primary)] font-[weight:var(--fw-regular)] leading-[normal] not-italic relative shrink-0 text-secondary-foreground text-[18px] text-center text-nowrap">No</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-primary grow h-[64px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
          <p className="font-[family-name:var(--font-primary)] font-[weight:var(--fw-regular)] leading-[normal] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-primary-foreground">Yes</p>
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

function Frame1() {
  return (
    <div className="absolute bg-card content-stretch flex flex-col gap-[40px] items-center justify-center left-1/2 pb-[16px] pt-[32px] px-[16px] rounded-[16px] top-[307px] translate-x-[-50%] w-[358px]">
      <Frame />
      <BottomBottoms />
    </div>
  );
}

export default function CancelBooking() {
  return (
    <div className="bg-[#dbcffc] relative size-full" data-name="Cancel booking">
      <div className="absolute h-[844px] left-0 top-0 w-[390px]" data-name="image 20">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage20} />
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.6)] h-[844px] left-0 top-0 w-[390px]" data-name="image 21" />
      <Frame1 />
    </div>
  );
}