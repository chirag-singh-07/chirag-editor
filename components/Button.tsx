import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export const Button = ({ className, variant = "primary", children, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "brutalist-button",
        variant === "secondary" && "bg-white text-black hover:bg-primary",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
