import imgSouthThali1 from "figma:asset/12edd84d59b3f86df0eed3b688f3618d8a2ddc27.png";

function Image() {
  return (
    <div className="bg-white h-[160px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <div className="absolute h-[160px] left-[calc(50%+0.5px)] top-0 translate-x-[-50%] w-[206px]" data-name="south_thali 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSouthThali1} />
      </div>
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap w-full" data-name="Details">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 text-[#1b1b23]">
        <p className="leading-[normal] text-nowrap">Idly and mysore bajji</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[normal] relative shrink-0 text-[#464a53]">
        <p className="mb-0">Coconut Chutney</p>
        <p className="mb-0">Allam Chutney</p>
        <p>Sambar</p>
      </div>
    </div>
  );
}

export default function Item() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative size-full" data-name="Item 6">
      <Image />
      <Details />
    </div>
  );
}