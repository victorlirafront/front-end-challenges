import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, hasError, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          "block w-full rounded-md border bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 shadow-sm",
          "focus:outline-none focus:ring-2 focus:ring-black/60",
          hasError ? "border-red-500" : "border-neutral-300",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";


