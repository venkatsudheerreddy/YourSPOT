import imgSeat from "figma:asset/06a2dbc140d3345ec3be709f68f7f30332113bf9.png";

export default function Chair() {
  return (
    <div className="relative size-[64px]" data-name="chair">
      <div className="absolute aspect-[1030/1449] bottom-[6.25%] left-1/2 top-[6.25%] translate-x-[-50%]" data-name="seat">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[106.9%] left-[-24.95%] max-w-none top-[-2.55%] w-[150.39%]" src={imgSeat} />
        </div>
      </div>
    </div>
  );
}