import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Laundly", template: "%s | Laundly" },
  description: "Laundly",
  icons: { icon: "/laundly-mark.webp" },
};

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms and Conditions" },
] as const;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav className="site-row" aria-label="Main navigation">
            <Link href="/" className="brand" aria-label="Laundly home">
              <Image src="/laundly-mark.webp" width={38} height={38} alt="" unoptimized />
              Laundly
            </Link>
            <div className="site-links">
              <Link href="/">Home</Link>
              {legalLinks.map(({ href, label }) => <Link key={href} href={href}>{label}</Link>)}
            </div>
          </nav>
        </header>
        <main className="site-main">{children}</main>
        <footer className="site-footer">
          <div className="site-row">
            <Link href="/" className="footer-brand">Laundly</Link>
            <nav className="site-links" aria-label="Legal">
              {legalLinks.map(({ href, label }) => <Link key={href} href={href}>{label}</Link>)}
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
