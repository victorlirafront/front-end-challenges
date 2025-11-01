"use client";

import { useState } from "react";
import { FormField } from "@/components/molecules/FormField";
import { Input } from "@/components/atoms/form/Input";
import { TextArea } from "@/components/atoms/form/TextArea";
import { Button } from "@/components/atoms/actions/Button";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function validate(values: FormState) {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) nextErrors.name = "Informe seu nome";
    if (!values.email.trim()) nextErrors.email = "Informe seu e-mail";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = "E-mail inválido";
    if (!values.message.trim()) nextErrors.message = "Escreva sua mensagem";
    return nextErrors;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto w-full max-w-xl space-y-4">
      <FormField
        id="name"
        label="Nome"
        required
        error={errors.name}
        input={
          <Input
            id="name"
            name="name"
            placeholder="Seu nome"
            autoComplete="name"
            hasError={Boolean(errors.name)}
            value={form.name}
            onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
          />
        }
      />

      <FormField
        id="email"
        label="E-mail"
        required
        error={errors.email}
        input={
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="voce@exemplo.com"
            autoComplete="email"
            hasError={Boolean(errors.email)}
            value={form.email}
            onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
          />
        }
      />

      <FormField
        id="message"
        label="Mensagem"
        required
        error={errors.message}
        input={
          <TextArea
            id="message"
            name="message"
            placeholder="Como podemos ajudar?"
            hasError={Boolean(errors.message)}
            value={form.message}
            onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
          />
        }
      />

      <div className="pt-2">
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Enviando..." : status === "success" ? "Enviado!" : "Enviar"}
        </Button>
      </div>
    </form>
  );
}


