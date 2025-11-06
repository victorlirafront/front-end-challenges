import { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

const base =
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-black text-white hover:bg-black/90 focus-visible:ring-black ring-offset-white",
  secondary:
    "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus-visible:ring-neutral-400 ring-offset-white",
  ghost:
    "bg-transparent text-neutral-800 hover:bg-neutral-100 focus-visible:ring-neutral-300 ring-offset-white",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";


