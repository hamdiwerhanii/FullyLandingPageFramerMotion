import Image from "next/image";
import Section from "@/shared/components/Section";
import { RevealGroup, RevealItem } from "@/shared/components/Reveal";
import { SLIDE_FROM_LEFT, SLIDE_FROM_RIGHT } from "@/shared/constants/motion";
import { sectionTitleId } from "@/shared/utils/sectionTitleId";
import StatCard from "./StatCard";
import { MOBILE_IMAGE, STATS } from "../constants/mobileConvenience.data";

const SECTION_ID = "mobile";

export default function MobileConvenienceSection() {
  return (
    <Section id={SECTION_ID} containerClassName="max-w-6xl">
      <RevealGroup className="grid items-center gap-12 lg:grid-cols-2">
        <RevealItem variants={SLIDE_FROM_LEFT}>
          <Image
            src={MOBILE_IMAGE.src}
            alt={MOBILE_IMAGE.alt}
            width={MOBILE_IMAGE.width}
            height={MOBILE_IMAGE.height}
            sizes="(min-width: 1024px) 28rem, 50vw"
            className="mx-auto h-auto w-1/2 lg:w-10/12"
          />
        </RevealItem>

        <RevealItem variants={SLIDE_FROM_RIGHT}>
          <h2
            id={sectionTitleId(SECTION_ID)}
            className="mb-4 text-4xl font-semibold leading-tight text-gray-900"
          >
            Mobile Convenience
          </h2>
          <p className="mb-5 text-xl text-gray-600">Access your learning materials on the go.</p>

          <dl className="grid grid-cols-2 gap-x-5 gap-y-16 py-6">
            {STATS.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </dl>
        </RevealItem>
      </RevealGroup>
    </Section>
  );
}
