import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { SITE } from "@/shared/constants/site";

describe("SEO routes", () => {
  it("robots.txt allows crawling and points to the sitemap", () => {
    const result = robots();

    expect(result.rules).toEqual({ userAgent: "*", allow: "/" });
    expect(result.sitemap).toBe(`${SITE.url}/sitemap.xml`);
  });

  it("sitemap lists the home page", () => {
    const [home] = sitemap();

    expect(home.url).toBe(SITE.url);
  });
});
