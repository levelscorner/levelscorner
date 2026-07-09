"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/projects", label: "Projects", num: "01" },
  { href: "/about", label: "About", num: "02" },
  { href: "/blog", label: "Writing", num: "03" },
  { href: "/contact", label: "Contact", num: "04" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md nav-header"
      style={{
        borderBottom: "1px solid var(--border)",
        backgroundColor: "var(--nav-bg)",
      }}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="brand-lockup transition-opacity hover:opacity-80"
          style={{ color: "var(--text)" }}
        >
          <span className="brand-mark">lc</span>
          <span className="brand-wordmark">levelscorner</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="nav-chip"
                style={{
                  color: isActive ? "var(--text)" : "var(--muted)",
                  backgroundColor: isActive ? "var(--surface)" : "transparent",
                  borderColor: isActive ? "var(--accent)" : "transparent",
                }}
              >
                <span className="nav-chip-num">{link.num}</span>
                <span>{link.label}</span>
              </Link>
            );
          })}
          <div className="ml-3">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <div className="overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="nav-chip"
                    style={{
                      color: isActive ? "var(--text)" : "var(--muted)",
                      backgroundColor: isActive ? "var(--surface)" : "transparent",
                      borderColor: isActive ? "var(--accent)" : "transparent",
                    }}
                  >
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
