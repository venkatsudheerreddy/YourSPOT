import React from 'react';
import desktopBg from "figma:asset/de83359ec51e60aaed2091197f99ea3e21be0f9d.png";

interface DesktopLayoutProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
  nextBooking?: any;
  children: React.ReactNode;
}

export function DesktopLayout({ 
  children 
}: DesktopLayoutProps) {
  return (
    <div 
      className="fixed inset-0 w-full h-full flex justify-center items-start overflow-hidden font-primary bg-background bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${desktopBg})` }}
    >
      {/* 
         Main App Container 
         - Max Width 560px
         - Centered
         - Transforms to trap 'fixed' elements inside
      */}
      <div 
        className="w-full max-w-[560px] h-full bg-background shadow-[0_0_200px_rgba(40,20,80,0.2)] relative overflow-hidden flex flex-col"
        style={{ transform: 'translate3d(0, 0, 0)' }} 
      >
         {children}
      </div>
    </div>
  );
}
