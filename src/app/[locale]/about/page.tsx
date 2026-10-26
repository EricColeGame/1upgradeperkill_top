import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/legal-page";

export default function AboutPage() {
  return (
    <LegalPage title="About">
      <p>{siteConfig.name} is an independent fan-built guide hub for +1 Upgrade Per Kill on Roblox, covering upgrade levels, classes, perks, enchants, codes, and PvP progression for new and veteran players alike.</p>
      <p>The wiki is maintained by players and is not affiliated with Block PvP, Roblox, or the official game team. It is published at {siteConfig.url.replace(/^https?:\/\//, "")}.</p>
      <p>Questions, corrections, and feedback can be sent to <a className="font-semibold text-foreground hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}
