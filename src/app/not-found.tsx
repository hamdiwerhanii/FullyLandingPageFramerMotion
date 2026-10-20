import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/shared/components/Button";
import Container from "@/shared/components/Container";
import { HOME_HREF } from "@/shared/constants/nav";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-title" className="bg-ink py-32 text-white">
      <Container className="flex flex-col items-center text-center">
        <p className="text-7xl font-extrabold text-gray-500">404</p>
        <h1 id="not-found-title" className="mt-6 text-4xl font-bold">
          This page doesn&apos;t exist
        </h1>
        <p className="mt-4 max-w-md text-lg text-gray-300">
          The link may be broken or the page may have moved. Let&apos;s get you back to learning.
        </p>
        <Button asChild variant="light" size="lg" className="mt-10">
          <Link href={HOME_HREF}>Back to home</Link>
        </Button>
      </Container>
    </section>
  );
}
