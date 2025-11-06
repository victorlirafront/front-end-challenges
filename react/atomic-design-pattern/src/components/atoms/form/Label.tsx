import { LabelHTMLAttributes } from "react";
import clsx from "clsx";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  requiredMark?: boolean;
};

export function Label({ className, children, requiredMark, ...rest }: LabelProps) {
  return (
    <label
      className={clsx(
        "mb-1 block text-sm font-medium text-neutral-800",
        className
      )}
      {...rest}
    >
      {children}
      {requiredMark ? <span className="ml-0.5 text-red-600">*</span> : null}
    </label>
  );
}


