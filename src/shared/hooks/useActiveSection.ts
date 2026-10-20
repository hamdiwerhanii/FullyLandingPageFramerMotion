"use client";

import { useEffect, useState } from "react";
import { PAGE_NAV_ITEMS, type NavSectionId } from "@/shared/constants/nav";

type SectionRef = { sectionId: NavSectionId; element: HTMLElement };

const PROBE_OFFSET_PX = 16;

export const useActiveSection = () => {
  const [activeSectionId, setActiveSectionId] = useState<NavSectionId | "">("");

  useEffect(() => {
    const sections = PAGE_NAV_ITEMS.map((item) => ({
      sectionId: item.sectionId,
      element: document.getElementById(item.sectionId),
    })).filter((item): item is SectionRef => item.element instanceof HTMLElement);

    if (!sections.length) return;

    const resolveActiveSection = () => {
      const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
      const probeY = headerHeight + PROBE_OFFSET_PX;

      let nextSectionId: NavSectionId | "" = "";
      for (const { sectionId, element } of sections) {
        if (element.getBoundingClientRect().top <= probeY) nextSectionId = sectionId;
      }

      setActiveSectionId((prev) => (prev === nextSectionId ? prev : nextSectionId));
    };

    let frame = 0;
    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        resolveActiveSection();
      });
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return activeSectionId;
};
