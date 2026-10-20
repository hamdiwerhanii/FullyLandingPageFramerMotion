export const SITE = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  name: "Learning App",
  title: "Learning App | Learn Anytime, Anywhere",
  description:
    "Your perfect learning app: expert instructors, interactive lessons, certificates and personalized progress tracking, right in your pocket.",
  tagline: "Empowering your quest for knowledge, anytime and anywhere.",
  author: {
    name: "Hamdi Werhani",
    url: "https://github.com/hamdiwerhanii",
  },
  repoUrl: "https://github.com/hamdiwerhanii/FullyLandingPageFramerMotion",
} as const;

export const STORE_LINKS = [
  {
    id: "app-store",
    label: "App Store",
    href: "https://www.apple.com/app-store/",
    icon: "/logos/logo-apple.png",
  },
  {
    id: "google-play",
    label: "Google Play",
    href: "https://play.google.com/store/apps",
    icon: "/logos/logo-google.png",
  },
] as const;

export const SOCIAL_LINKS = [
  { id: "x", label: "X (Twitter)", href: "https://x.com" },
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com" },
] as const;

export type SocialId = (typeof SOCIAL_LINKS)[number]["id"];
