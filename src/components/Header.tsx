import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface HeaderProps {
  title: string;
  onBack: () => void;
}

export function Header({ title, onBack }: HeaderProps) {
  return (
    <header className="bg-card border-b border-border px-4 sm:px-6 py-4 flex items-center gap-4 shadow-[var(--elevation-sm)]">
      <button
        onClick={onBack}
        className="p-2 -ml-2 hover:bg-muted rounded-[var(--radius-md)] transition-colors active:scale-95"
      >
        <ArrowLeft className="w-6 h-6 text-foreground" />
      </button>
      <h1 
        className="text-foreground title-medium-heavy" 
      >
        {title}
      </h1>
    </header>
  );
}