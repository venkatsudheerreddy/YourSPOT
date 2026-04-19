import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outlined' | 'text';
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string; // Allow custom overrides if absolutely necessary, but usage should be minimal
}

export function Button({ 
  children, 
  onClick, 
  variant = 'primary',
  fullWidth,
  disabled,
  icon,
  className = ''
}: ButtonProps) {
  // Global button constraints
  const baseClasses = `
    inline-flex items-center justify-center gap-[8px] px-6
    h-[64px] rounded-[var(--radius)] transition-all body-md-heavy
    disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;
  
  const variants = {
    primary: `
      bg-primary text-primary-foreground
      hover:opacity-90 active:scale-95
      shadow-[var(--shadow-glow)]
    `,
    secondary: `
      bg-secondary text-secondary-foreground
      hover:opacity-80 active:scale-95
      shadow-none
    `,
    outlined: `
      bg-transparent text-foreground border-2 border-border
      hover:bg-muted active:scale-95
    `,
    text: `
      bg-transparent text-primary
      hover:bg-muted active:scale-95
    `
  };
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}
