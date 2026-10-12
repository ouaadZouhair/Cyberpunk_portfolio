"use client";
import { useRef, type MouseEventHandler } from "react";
import Link from "next/link";
import ScrambleHover, { type ScrambleHandle } from "./ScrambleHover";

type AnimatedBtnProps = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  textColor?: string;
  submit?: boolean;
  type?: "button" | "submit";
  href?: string;
};

const AnimatedBtn = ({ text, onClick, className = "", textColor = "", submit = false, type, href }: AnimatedBtnProps) => {
  const scrambleRef = useRef<ScrambleHandle>(null);
  const label = <ScrambleHover ref={scrambleRef} className={textColor}>{text}</ScrambleHover>;

  if (href) {
    return (
      <Link href={href} className={className} onMouseEnter={() => scrambleRef.current?.scramble()}>
        {label}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => scrambleRef.current?.scramble()}
      className={`${className}`}
      type={type ?? (submit ? "submit" : "button")}
    >
      {label}
    </button>
  );
};

export default AnimatedBtn;
