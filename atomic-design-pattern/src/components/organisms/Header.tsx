"use client";

import Link from "next/link";
import { NavLink } from "@/components/atoms/navigation/NavLink";
import { Button } from "@/components/atoms/actions/Button";

const NAV_ITEMS = [
  { href: "/", label: "Início", exact: true },
  { href: "/about", label: "Sobre" },
  { href: "/contact", label: "Contato" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded bg-black text-white text-center leading-8 font-bold">N</span>
          <span className="text-lg font-semibold tracking-tight">Next App</span>
        </Link>

        <nav className="hidden gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} href={item.href} exact={item.exact}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="md:hidden">
          <Button variant="secondary" size="sm" aria-label="Abrir menu">
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
}


