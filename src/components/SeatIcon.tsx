import React from "react";
import svgPaths from "../imports/svg-ce519y80xc";

export type SeatStatus = "available" | "selected" | "booked";

interface SeatIconProps {
  id: string;
  label: string;
  status: SeatStatus;
  occupantName?: string;
  zone?: string;
  orientation?: "left" | "right" | "bottom";
  onSelect: (id: string) => void;
}

export function SeatIcon({
  id,
  label,
  status,
  occupantName,
  zone,
  orientation = "left",
  onSelect,
}: SeatIconProps) {
  const handleClick = () => {
    if (status !== "booked") {
      onSelect(id);
    }
  };

  const isSelected = status === "selected";
  const isBooked = status === "booked";
  const isAvailable = status === "available";

  // Layout configuration based on orientation
  const isRight = orientation === "right";
  const isBottom = orientation === "bottom";

  const containerClasses = isBottom
    ? "flex flex-col items-center gap-[6px] w-fit"
    : isRight
      ? "flex items-center gap-[6px] w-full justify-end"
      : "flex items-center gap-[6px] w-full"; // left

  // Text Frame
  const TextFrame = () => (
    <div
      className={`relative text-right shrink-0 ${isBottom ? "h-[36px] w-[50px]" : "h-[32px] w-[50px]"}`}
    >
      <p className="absolute left-1/2 -translate-x-1/2 top-0 text-[#464a53] label-sm-normal whitespace-nowrap">
        {zone || "Seat"}
      </p>
      <p className="absolute left-1/2 -translate-x-1/2 top-[13px] text-[#1b1b23] body-sm-heavy whitespace-nowrap">
        {label}
      </p>
    </div>
  );

  // Desk
  const Desk = () => (
    <div
      className={`relative shrink-0 transition-colors duration-200 rounded-[4px] ${
        isBottom ? "w-[80px] h-[40px]" : "h-[80px] w-[40px]"
      } ${
        isSelected
          ? "bg-primary shadow-[0px_2px_12px_0px_rgba(2,132,199,0.5)]"
          : isBooked
            ? "bg-[#d7d8db]"
            : "bg-white border border-[#464a53]"
      }`}
    />
  );

  // Chair
  const Chair = () => (
    <div
      className={`relative shrink-0 size-[32px] ${
        isRight ? "scale-x-[-1]" : isBottom ? "rotate-90" : ""
      }`}
    >
      <svg
        className="block size-full"
        fill="none"
        viewBox="0 0 33 33"
      >
        {isAvailable ? (
          <g>
            <path
              d={svgPaths.p2afc9b80}
              fill="white"
              stroke="#464A53"
            />
            <line
              stroke="#464A53"
              x1="25"
              x2="25"
              y1="0.5"
              y2="32.5"
            />
          </g>
        ) : (
          <g>
            <path
              d={svgPaths.p31178100}
              fill={isSelected ? "var(--color-primary)" : "#D7D8DB"}
            />
            <line
              stroke="#D3D5DA"
              x1="24.5"
              x2="24.5"
              y2="32"
            />
          </g>
        )}
      </svg>
    </div>
  );

  return (
    <div
      onClick={handleClick}
      className={`${containerClasses} cursor-pointer select-none transition-opacity ${
        isAvailable ? "hover:opacity-80" : ""
      }`}
    >
      {/* Order changes based on orientation */}
      {isRight ? (
        <>
          <Chair />
          <Desk />
          <TextFrame />
        </>
      ) : isBottom ? (
        <>
          <TextFrame />
          <Desk />
          <Chair />
        </>
      ) : (
        <>
          <TextFrame />
          <Desk />
          <Chair />
        </>
      )}
    </div>
  );
}