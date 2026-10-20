"use client";

import { useEffect, useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import Button from "@/shared/components/Button";
import HeaderMobileMenu from "@/shared/components/HeaderMobileMenu";
import Logo from "@/shared/components/Logo";
import NavLink from "@/shared/components/NavLink";
import { useActiveSection } from "@/shared/hooks/useActiveSection";
import { useLockBodyScroll } from "@/shared/hooks/useLockBodyScroll";
import { CTA_HREF, PAGE_NAV_ITEMS, sectionHref } from "@/shared/constants/nav";

const LG_BREAKPOINT_PX = 1024;
const MOBILE_MENU_ID = "mobile-menu";

export default function Header() {
  const activeSectionId = useActiveSection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  useLockBodyScroll(isMenuOpen);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleResize = () => {
      if (window.innerWidth >= LG_BREAKPOINT_PX) setIsMenuOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-ink py-4 text-white">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 lg:px-20">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {PAGE_NAV_ITEMS.map((item) => (
              <li key={item.sectionId}>
                <NavLink href={sectionHref(item.sectionId)} isActive={activeSectionId === item.sectionId}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Button asChild variant="light" className="hidden lg:inline-flex">
          <a href={CTA_HREF}>Get the app</a>
        </Button>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls={MOBILE_MENU_ID}
          className="rounded-md p-2 hover:bg-white/10 lg:hidden"
        >
          {isMenuOpen ? <RxCross2 aria-hidden className="h-5 w-5" /> : <RxHamburgerMenu aria-hidden className="h-5 w-5" />}
        </button>
      </div>

      <HeaderMobileMenu
        id={MOBILE_MENU_ID}
        isOpen={isMenuOpen}
        onClose={closeMenu}
        activeSectionId={activeSectionId}
      />
    </header>
  );
}
