import Image from "next/image";
import Container from "@/shared/components/Container";
import StoreButtons from "@/shared/components/StoreButtons";
import { RevealGroup, RevealItem } from "@/shared/components/Reveal";
import { SLIDE_FROM_RIGHT } from "@/shared/constants/motion";
import { HOME_SECTION_ID } from "@/shared/constants/nav";
import { sectionTitleId } from "@/shared/utils/sectionTitleId";
import { HERO_IMAGE, HERO_INTRO } from "../constants/hero.data";

const SECTION_ID = HOME_SECTION_ID;

export default function HeroSection() {
  return (
    <section id={SECTION_ID} aria-labelledby={sectionTitleId(SECTION_ID)}>
      <div className="bg-ink pt-16 pb-40 text-white lg:pt-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <RevealGroup playOnMount>
            <RevealItem>
              <h1
                id={sectionTitleId(SECTION_ID)}
                className="mb-7 text-5xl font-extrabold tracking-tight text-balance md:text-6xl"
              >
                Your Perfect <br /> Learning App
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="mb-7 text-xl md:pr-16 xl:pr-36">
                Our app is here to empower you on your quest for knowledge, anytime and anywhere.
              </p>
            </RevealItem>
            <RevealItem>
              <p className="mb-4 font-bold">Get the app</p>
            </RevealItem>
            <RevealItem>
              <StoreButtons />
            </RevealItem>
          </RevealGroup>

          <RevealGroup playOnMount variants={SLIDE_FROM_RIGHT}>
            <Image
              src={HERO_IMAGE.src}
              alt={HERO_IMAGE.alt}
              width={HERO_IMAGE.width}
              height={HERO_IMAGE.height}
              priority
              sizes="(min-width: 1024px) 32rem, 80vw"
              className="mx-auto h-auto w-full max-w-sm md:max-w-md lg:ml-auto lg:max-w-lg"
            />
          </RevealGroup>
        </Container>
      </div>

      <Container className="relative -mt-24">
        <RevealGroup playOnMount className="rounded-xl bg-white p-6 shadow-md md:p-14">
          <RevealItem>
            <h2 className="mb-3 text-3xl font-bold">{HERO_INTRO.title}</h2>
          </RevealItem>
          <RevealItem>
            <p className="text-gray-600 lg:w-5/12">{HERO_INTRO.text}</p>
          </RevealItem>
        </RevealGroup>
      </Container>
    </section>
  );
}
