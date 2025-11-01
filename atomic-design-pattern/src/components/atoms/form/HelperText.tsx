import { HTMLAttributes } from "react";
import clsx from "clsx";

type HelperTextProps = HTMLAttributes<HTMLParagraphElement> & {
  tone?: "muted" | "error" | "success";
};

export function HelperText({ className, children, tone = "muted", ...rest }: HelperTextProps) {
  const toneClass =
    tone === "error"
      ? "text-red-600"
      : tone === "success"
      ? "text-green-600"
      : "text-neutral-500";
  return (
    <p className={clsx("mt-1 text-xs", toneClass, className)} {...rest}>
      {children}
    </p>
  );
}


