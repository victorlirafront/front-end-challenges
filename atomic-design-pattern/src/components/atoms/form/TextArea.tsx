import { forwardRef, TextareaHTMLAttributes } from "react";
import clsx from "clsx";

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  hasError?: boolean;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, hasError, rows = 4, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
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

TextArea.displayName = "TextArea";


