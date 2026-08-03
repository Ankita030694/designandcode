"use client";

import React, { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import "./SpecularButton.css";

export interface SpecularButtonProps {
  children?: ReactNode;
  href?: string;
  target?: string;
  radius?: number;
  textColor?: string;
  onClick?: React.MouseEventHandler<any>;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  baseColor?: string;
  intensity?: number;
  shineSize?: number;
  shineFade?: number;
  thickness?: number;
  speed?: number;
  followMouse?: boolean;
  proximity?: number;
  autoAnimate?: boolean;
  tint?: string;
  tintOpacity?: number;
  blur?: number;
  lineColor?: string;
}

const SpecularButton = ({
  children = "Get Started",
  href,
  target,
  radius = 28,
  textColor = "#ffffff",
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: SpecularButtonProps) => {
  const styleObj = {
    "--sb-radius": `${radius}px`,
    "--sb-text-color": textColor,
  } as CSSProperties;

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        onClick={onClick}
        className={`specular-button ${className}`}
        style={styleObj}
      >
        <span className="specular-button__label">{children}</span>
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`specular-button ${className}`}
      style={styleObj}
    >
      <span className="specular-button__label">{children}</span>
    </button>
  );
};

export default SpecularButton;
