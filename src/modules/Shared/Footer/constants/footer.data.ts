import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { PAGE_NAV_ITEMS, sectionHref } from "@/shared/constants/nav";
import type { SocialId } from "@/shared/constants/site";

export const FOOTER_LINKS = PAGE_NAV_ITEMS.map((item) => ({
  label: item.label,
  href: sectionHref(item.sectionId),
}));

export const SOCIAL_ICONS: Record<SocialId, IconType> = {
  x: FaXTwitter,
  facebook: FaFacebook,
  instagram: FaInstagram,
};
