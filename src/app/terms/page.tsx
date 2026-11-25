import type { Metadata } from "next";
import { LegalPageLayout } from "../../components/LegalPageLayout";

export const metadata: Metadata = { title: "Terms and Conditions" };

export default function TermsPage() {
  return <LegalPageLayout active="terms" />;
}
