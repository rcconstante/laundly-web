import type { Metadata } from "next";
import { LegalPageLayout } from "../../components/LegalPageLayout";

export const metadata: Metadata = { title: "Cookies" };

export default function CookiesPage() {
  return <LegalPageLayout active="cookies" />;
}
