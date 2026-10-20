import Image from "next/image";
import Container from "@/shared/components/Container";
import { RevealGroup } from "@/shared/components/Reveal";
import { FADE_UP } from "@/shared/constants/motion";
import { SHOWCASE_IMAGE } from "../constants/showcase.data";

export default function ShowcaseSection() {
  return (
    <section aria-label="Showcase" className="pt-20">
      <Container>
        <RevealGroup variants={FADE_UP}>
          <Image
            src={SHOWCASE_IMAGE.src}
            alt={SHOWCASE_IMAGE.alt}
            width={SHOWCASE_IMAGE.width}
            height={SHOWCASE_IMAGE.height}
            sizes="(min-width: 1280px) 70rem, 100vw"
            className="h-auto w-full rounded-xl"
          />
        </RevealGroup>
      </Container>
    </section>
  );
}
