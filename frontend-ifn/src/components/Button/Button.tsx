import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "accent" | "tertiary" | "four";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = "",
  variant = "primary",
  type = "button",
  ...rest
}) => {
  const buttonClass = `button ${variant} ${className}`.trim();

  return (
    <button className={buttonClass} onClick={onClick} type={type} {...rest}>
      {children}
    </button>
  );
};

export default Button;
