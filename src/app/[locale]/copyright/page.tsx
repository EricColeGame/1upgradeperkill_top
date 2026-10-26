import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/legal-page";

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright">
      <p>+1 Upgrade Per Kill, 1 Upgrade Per Kill Wiki, Roblox, Block PvP, and related logos and media belong to their respective owners.</p>
      <p>This is an independent, non-official fan wiki created for guide and educational purposes. It is not endorsed by or affiliated with Block PvP or Roblox.</p>
      <p>If you own rights to content displayed here and have a concern, contact <a className="font-semibold text-foreground hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> for review.</p>
    </LegalPage>
  );
}
