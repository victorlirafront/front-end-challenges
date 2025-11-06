"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes } from "react";
import clsx from "clsx";

type NavLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps & {
    exact?: boolean;
  };

export function NavLink({ href, className, exact = false, children, ...rest }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname?.toString().startsWith(href.toString());

  return (
    <Link
      href={href}
      className={clsx(
        "text-sm transition-colors hover:text-black",
        isActive ? "text-black" : "text-neutral-600",
        className
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}


