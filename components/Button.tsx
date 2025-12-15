import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  href?: string;
  className?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  href, 
  className = '',
  external = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-lg font-display font-semibold transition-all duration-300 rounded-full active:scale-95 shadow-lg hover:shadow-xl";
  
  const variants = {
    primary: "bg-cafe-black text-white hover:bg-cafe-accent",
    secondary: "bg-cafe-accent text-white hover:bg-cafe-black",
    outline: "border-2 border-cafe-black text-cafe-black hover:bg-cafe-black hover:text-white"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};