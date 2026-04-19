import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-card text-card-foreground rounded-[var(--radius-xl)] p-6 shadow-[var(--elevation-sm)] border border-border ${className}`}>
      {children}
    </div>
  );
}