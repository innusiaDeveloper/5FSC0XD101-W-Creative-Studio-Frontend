import React from "react";

interface ButtonProps {
  text: string;
  color?: string;
  size?: string;
}

const Button: React.FC<ButtonProps> = ({ text, color, size }) => {
  return <button className={`btn ${color} ${size}`}>{text}</button>;
};

export default Button;
