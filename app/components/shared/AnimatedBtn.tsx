"use client";
import { useRef, type MouseEventHandler, type ReactNode } from "react";
import Link from "next/link";
import ScrambleHover, { type ScrambleHandle } from "./ScrambleHover";
import LinkStatus from "./LinkStatus";

type AnimatedBtnProps = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  textColor?: string;
  submit?: boolean;
  type?: "button" | "submit";
  href?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

const AnimatedBtn = ({ text, onClick, className = "", textColor = "", submit = false, type, href, startIcon, endIcon }: AnimatedBtnProps) => {
  const scrambleRef = useRef<ScrambleHandle>(null);
  const label = <ScrambleHover ref={scrambleRef} className={textColor}>{text}</ScrambleHover>;

  if (href) {
    return (
      <Link href={href} prefetch={true} className={className} onMouseEnter={() => scrambleRef.current?.scramble()}>
        {startIcon}
        {label}
        {endIcon}
        <LinkStatus />
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
      {startIcon}
      {label}
      {endIcon}
    </button>
  );
};

export default AnimatedBtn;
