import Container from "@/shared/components/Container";
import Logo from "@/shared/components/Logo";
import StoreButtons from "@/shared/components/StoreButtons";
import { DOWNLOAD_SECTION_ID } from "@/shared/constants/nav";
import { SITE, SOCIAL_LINKS } from "@/shared/constants/site";
import { sectionTitleId } from "@/shared/utils/sectionTitleId";
import { FOOTER_LINKS, SOCIAL_ICONS } from "../constants/footer.data";

const EXTERNAL_LINK_PROPS = { target: "_blank", rel: "noopener noreferrer" } as const;
const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-10 bg-ink py-12 text-white">
      <Container className="flex flex-col gap-12 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <Logo />
          <p className="mt-4 mb-8 text-gray-300">{SITE.tagline}</p>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-start">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-medium text-gray-300 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="mt-6 flex justify-center gap-4 md:justify-start">
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICONS[social.id];
              return (
                <li key={social.id}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    {...EXTERNAL_LINK_PROPS}
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    <Icon aria-hidden className="h-5 w-5" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <section id={DOWNLOAD_SECTION_ID} aria-labelledby={sectionTitleId(DOWNLOAD_SECTION_ID)} className="text-center md:text-left">
          <h2 id={sectionTitleId(DOWNLOAD_SECTION_ID)} className="mb-3 font-semibold">
            Get the app
          </h2>
          <StoreButtons className="sm:flex-col" />
        </section>
      </Container>

      <Container className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-sm text-gray-400 sm:flex-row">
        <p>
          © {CURRENT_YEAR} {SITE.name}. All rights reserved.
        </p>
        <p>
          Built by{" "}
          <a href={SITE.author.url} {...EXTERNAL_LINK_PROPS} className="text-white hover:underline">
            {SITE.author.name}
          </a>
        </p>
      </Container>
    </footer>
  );
}
