import Link from "next/link";

export const legalPages = [
  { slug: "terms", label: "Terms and Conditions", href: "/terms" },
  { slug: "privacy", label: "Privacy Policy", href: "/privacy" },
  { slug: "cookies", label: "Cookies", href: "/cookies" },
] as const;

export function LegalPageLayout({ active }: { active: (typeof legalPages)[number]["slug"] }) {
  const page = legalPages.find(({ slug }) => slug === active)!;
  return (
    <article className="legal-page">
      <header>
        <p className="legal-kicker">Legal</p>
        <h1>{page.label}</h1>
      </header>
      <footer>
        <nav aria-label="Legal pages" className="site-links">
          {legalPages.map(({ slug, label, href }) => (
            <Link key={slug} href={href} aria-current={slug === active ? "page" : undefined}>{label}</Link>
          ))}
        </nav>
      </footer>
    </article>
  );
}
