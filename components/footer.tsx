import Image from "next/image";
import { Button } from "./ui/button";
import apple from "../public/logos/logo-apple.png";
import google from "../public/logos/logo-google.png";

const LINKS = ["About Us", "Careers", "Press", "Blog", "Pricing"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-[#212121] lg:px-20 px-10 pt-12 pb-12 text-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <h5 className="mb-4">Material Tailwind</h5>
            <p className="mb-12 font-normal">
              The reward for getting on the stage is fame.
            </p>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li key={link}>
                  <a className="py-1 font-medium transition-colors pr-3">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <h6 className="mb-3">Get the app</h6>
            <div className="flex flex-col gap-2">
              <Button
                variant={"secondary"}
                className="flex items-center justify-center py-5 px-6"
              >
                <Image
                  width={256}
                  height={256}
                  src={apple}
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="ios"
                />
                App Store
              </Button>
              <Button
                variant={"secondary"}
                className="flex items-center justify-center py-5 px-6"
              >
                <Image
                  width={256}
                  height={256}
                  src={google}
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="ios"
                />
                Google Play
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
