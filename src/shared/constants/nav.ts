export const HOME_SECTION_ID = "home";
export const DOWNLOAD_SECTION_ID = "download";

export const sectionHref = (sectionId: string) => `/#${sectionId}`;

export const PAGE_NAV_ITEMS = [
  { label: "Features", sectionId: "features" },
  { label: "Mobile", sectionId: "mobile" },
  { label: "Testimonials", sectionId: "testimonials" },
] as const;

export type NavSectionId = (typeof PAGE_NAV_ITEMS)[number]["sectionId"];

export const HOME_HREF = "/";
export const CTA_HREF = sectionHref(DOWNLOAD_SECTION_ID);
