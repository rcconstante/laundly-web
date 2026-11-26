import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "@fontsource-variable/inter";
import "lenis/dist/lenis.css";
import { legalPages } from "../components/LegalPageLayout";
import { SmoothScroll } from "../components/SmoothScroll";
import "./globals.css";

const brandName = "LabaPilot";

export const metadata: Metadata = {
  title: { default: brandName, template: "%s | " + brandName },
  description: "Laundry management software for orders, machines, and branches.",
  icons: { icon: "/laundly-mark.webp" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <header className="site-header">
          <nav className="nav-pill" aria-label="Main navigation">
            <Link href="/" className="brand" aria-label={brandName + " home"}>
              <Image src="/laundly-mark.webp" width={30} height={30} alt="" unoptimized />
              {brandName}
            </Link>
            <div className="site-links">
              <Link href="/">Home</Link>
              {legalPages.map(({ href, label }) => <Link key={href} href={href}>{label}</Link>)}
            </div>
          </nav>
        </header>
        <main className="site-main">{children}</main>
        <footer className="site-footer">
          <div className="site-row">
            <Link href="/" className="footer-brand">{brandName}</Link>
            <nav className="site-links" aria-label="Legal">
              {legalPages.map(({ href, label }) => <Link key={href} href={href}>{label}</Link>)}
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
