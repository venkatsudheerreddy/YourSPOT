import React from 'react';

interface DivisionTabsProps {
  divisions: string[];
  activeTab: string;
  onTabChange: (division: string) => void;
  seatCounts?: Record<string, { available: number }>;
}

export function DivisionTabs({ divisions, activeTab, onTabChange, seatCounts }: DivisionTabsProps) {
  return (
    <div className="bg-white border-b border-gray-200 overflow-x-auto">
      <div className="flex min-w-max">
        {divisions.map((division) => {
          const isActive = activeTab === division;
          const counts = seatCounts?.[division];
          
          return (
            <button
              key={division}
              onClick={() => onTabChange(division)}
              className={`flex-1 min-w-[100px] px-4 py-3 relative transition-colors ${
                isActive
                  ? 'text-primary border-b-2 border-primary bg-primary/5'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="label-md-heavy">{division}</span>
                {counts && (
                  <div className="flex gap-2 label-sm-normal">
                    <span className={isActive ? 'text-emerald-600' : 'text-emerald-600'}>
                      {counts.available} free
                    </span>
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}