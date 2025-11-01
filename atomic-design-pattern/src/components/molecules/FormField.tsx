"use client";

import { ReactNode } from "react";
import { Label } from "@/components/atoms/form/Label";
import { HelperText } from "@/components/atoms/form/HelperText";

type FormFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  description?: string;
  error?: string;
  input: ReactNode;
};

export function FormField({ id, label, required, description, error, input }: FormFieldProps) {
  return (
    <div className="space-y-1">
      <Label htmlFor={id} requiredMark={required}>
        {label}
      </Label>
      {input}
      {error ? (
        <HelperText tone="error">{error}</HelperText>
      ) : description ? (
        <HelperText>{description}</HelperText>
      ) : null}
    </div>
  );
}


