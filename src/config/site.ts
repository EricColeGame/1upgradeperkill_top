export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "1 Upgrade Per Kill Wiki",
  shortName: "1 Upgrade Per Kill",
  logoText: "1",
  tagline: "Complete Guides, Codes, Classes & Upgrade Paths",
  description: "Explore +1 Upgrade Per Kill, a Roblox PvP arena game where every kill upgrades your gear and every death resets your progress. Learn about upgrade levels, classes, codes, perks, enchants, and combat strategies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://1upgradeperkill.top",
  supportEmail: "support@1upgradeperkill.top",
  gameUrl: "https://www.roblox.com/games/113273588963037/1-Upgrade-Per-Kill",
  heroVideoId: "Qsg2sIzSFrE", // +1 Upgrade Per Kill gameplay preview
  social: {
    discord: "https://www.roblox.com/games/113273588963037/1-Upgrade-Per-Kill",
    youtube: "https://www.youtube.com/watch?v=Qsg2sIzSFrE",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
