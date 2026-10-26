import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/legal-page";

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service">
      <p>{siteConfig.name} is an independent fan-made guide hub for +1 Upgrade Per Kill on Roblox. Content is provided for informational and entertainment purposes only.</p>
      <p>Game systems, codes, drops, and update details may change without notice. Always verify important information in-game or through official channels.</p>
      <p>By using this site, you agree not to misuse it, attempt unauthorized access, or present this fan wiki as an official Block PvP, Roblox, or +1 Upgrade Per Kill property.</p>
      <p>Questions about these terms can be sent to <a className="font-semibold text-foreground hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}
