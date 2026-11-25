import type { Metadata } from "next";
import { LegalPageLayout } from "../../components/LegalPageLayout";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return <LegalPageLayout active="privacy" />;
}
