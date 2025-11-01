import ContactForm from "@/components/organisms/ContactForm";

export const metadata = {
  title: "Contato | Next App",
};

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Contato</h1>
        <p className="mt-1 text-sm text-neutral-600">Envie uma mensagem e retornaremos em breve.</p>
      </div>
      <ContactForm />
    </div>
  );
}


