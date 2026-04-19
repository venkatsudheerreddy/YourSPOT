import React from "react";
import svgPaths from "../imports/svg-fc7abldd6m";

interface BottomNavigationProps {
  activeTab: "home" | "lunch" | "settings";
  onNavigate: (tab: "home" | "lunch" | "settings") => void;
}

export function BottomNavigation({ activeTab, onNavigate }: BottomNavigationProps) {
  const getIconColor = (isActive: boolean) => (isActive ? "#005198" : "#464A53");

  const transitionClass = "transition-all duration-[160ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]";

  return (
    <div className="bg-white h-[64px] border-t border-[#ddd] flex items-center justify-center w-full z-50 shrink-0">
      {/* Home Tab */}
      <div
        className={`flex-1 flex flex-col items-center justify-center h-full cursor-pointer active:scale-95 ${transitionClass}`}
        onClick={() => onNavigate("home")}
      >
        <div className={`w-[20px] h-[20px] flex items-center justify-center mb-1 ${transitionClass} ${activeTab === "home" ? "scale-100" : "scale-95"}`}>
          {activeTab === "home" ? (
            // Active Home Icon (Purple Filled)
            <div className={`relative size-full ${transitionClass} opacity-100`}>
                <div className="absolute inset-[-34.36%_-45.83%_-57.92%_-45.83%]">
                    <svg className="block size-full" fill="none" viewBox="0 0 38.333 38.4561" preserveAspectRatio="none">
                        <g filter="url(#filter0_d_home_active)">
                            <path d={svgPaths.pb97e632} fill="#005198" />
                        </g>
                        <defs>
                            <filter id="filter0_d_home_active" x="0" y="0" width="38.333" height="38.4561" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="2" />
                                <feGaussianBlur stdDeviation="6" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.3176 0 0 0 0 0.596 0 0 0 0.5 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
          ) : (
            // Inactive Home Icon (Neutral)
            <svg className="block w-full h-full" fill="none" viewBox="0 0 20 20" preserveAspectRatio="none">
              <path d={svgPaths.p2a54f400} fill="#464A53" />
            </svg>
          )}
        </div>
        <p
          className={`text-[10px] font-['Poppins',sans-serif] leading-none ${transitionClass} ${
            activeTab === "home" ? "text-[#005198] translate-y-0 opacity-100" : "text-[#464A53] translate-y-[2px] opacity-70"
          }`}
        >
          home
        </p>
      </div>

      {/* Lunch Tab */}
      <div
        className={`flex-1 flex flex-col items-center justify-center h-full cursor-pointer active:scale-95 ${transitionClass}`}
        onClick={() => onNavigate("lunch")}
      >
        <div className={`w-[24px] h-[24px] flex items-center justify-center mb-1 ${transitionClass} ${activeTab === "lunch" ? "scale-100" : "scale-95"}`}>
          {activeTab === "lunch" ? (
            // Active Lunch Icon (Purple)
            <div className={`relative size-full ${transitionClass} opacity-100`}>
                <div className="absolute inset-[-31.25%_-32.66%_-45.83%_-31.25%]">
                    <svg className="block size-full" fill="none" viewBox="0 0 39.3382 42.5" preserveAspectRatio="none">
                        <g filter="url(#filter0_d_lunch_active)">
                            <path d={svgPaths.p2805e4c0} stroke="#005198" strokeLinecap="round" />
                        </g>
                        <g filter="url(#filter1_d_lunch_active)">
                            <path d={svgPaths.p2f55e600} fill="#005198" />
                            <path d={svgPaths.p13825dc0} stroke="#005198" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <filter id="filter0_d_lunch_active" x="0" y="0" width="31" height="42.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="2" />
                                <feGaussianBlur stdDeviation="6" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.3176 0 0 0 0 0.596 0 0 0 0.5 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                            </filter>
                            <filter id="filter1_d_lunch_active" x="10" y="0.0716884" width="29.3382" height="42.4283" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="2" />
                                <feGaussianBlur stdDeviation="6" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.3176 0 0 0 0 0.596 0 0 0 0.5 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
          ) : (
            // Inactive Lunch Icon (Neutral)
            <svg className="block w-[15.34px] h-[18.5px]" fill="none" viewBox="0 0 15.3379 18.5" preserveAspectRatio="none">
              <path d={svgPaths.p16747e80} fill="#464A53" />
            </svg>
          )}
        </div>
        <p
          className={`text-[10px] font-['Poppins',sans-serif] leading-none ${transitionClass} ${
            activeTab === "lunch" ? "text-[#005198] translate-y-0 opacity-100" : "text-[#464A53] translate-y-[2px] opacity-70"
          }`}
        >
          cafeteria
        </p>
      </div>

      {/* Settings Tab */}
      <div
        className={`flex-1 flex flex-col items-center justify-center h-full cursor-pointer active:scale-95 ${transitionClass}`}
        onClick={() => onNavigate("settings")}
      >
        <div className={`w-[24px] h-[24px] flex items-center justify-center mb-1 ${transitionClass} ${activeTab === "settings" ? "scale-100" : "scale-95"}`}>
          {activeTab === "settings" ? (
            // Active Settings Icon (Purple)
            <div className={`relative size-full ${transitionClass} opacity-100`}>
                <div className="absolute inset-[-34.22%_-39.58%_-50.88%_-39.58%]">
                    <svg className="block size-full" fill="none" viewBox="0 0 43 44.4238" preserveAspectRatio="none">
                        <g filter="url(#filter0_d_settings_active)">
                            <path d={svgPaths.p8db100} fill="#005198" />
                        </g>
                        <defs>
                            <filter id="filter0_d_settings_active" x="0" y="0" width="43" height="44.4238" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="2" />
                                <feGaussianBlur stdDeviation="6" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.3176 0 0 0 0 0.596 0 0 0 0.5 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
          ) : (
            // Inactive Settings Icon (Neutral)
            <svg className="block w-[19px] h-[20.42px]" fill="none" viewBox="0 0 19 20.4238" preserveAspectRatio="none">
              <path d={svgPaths.p1adf5700} fill="#464A53" />
            </svg>
          )}
        </div>
        <p
          className={`text-[10px] font-['Poppins',sans-serif] leading-none ${transitionClass} ${
            activeTab === "settings" ? "text-[#005198] translate-y-0 opacity-100" : "text-[#464A53] translate-y-[2px] opacity-70"
          }`}
        >
          settings
        </p>
      </div>
    </div>
  );
}
