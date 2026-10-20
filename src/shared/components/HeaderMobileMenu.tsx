import Button from "@/shared/components/Button";
import NavLink from "@/shared/components/NavLink";
import { CTA_HREF, PAGE_NAV_ITEMS, sectionHref } from "@/shared/constants/nav";
import { cn } from "@/shared/utils/cn";

type HeaderMobileMenuProps = {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  activeSectionId: string;
};

export default function HeaderMobileMenu({ id, isOpen, onClose, activeSectionId }: HeaderMobileMenuProps) {
  return (
    <div
      id={id}
      inert={!isOpen}
      aria-hidden={!isOpen}
      className={cn(
        "absolute inset-x-0 top-full h-[calc(100svh-100%)] bg-ink lg:hidden",
        "transition-[opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none",
        isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0",
      )}
    >
      <nav aria-label="Mobile" className="flex flex-col items-center gap-10 px-6 py-12">
        <ul className="flex flex-col items-center gap-6 text-lg">
          {PAGE_NAV_ITEMS.map((item) => (
            <li key={item.sectionId}>
              <NavLink
                href={sectionHref(item.sectionId)}
                isActive={activeSectionId === item.sectionId}
                onClick={onClose}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Button asChild variant="light" size="lg">
          <a href={CTA_HREF} onClick={onClose}>
            Get the app
          </a>
        </Button>
      </nav>
    </div>
  );
}
