import Image from "next/image";
import Button from "@/shared/components/Button";
import { STORE_LINKS } from "@/shared/constants/site";
import { cn } from "@/shared/utils/cn";

type StoreButtonsProps = {
  className?: string;
};

export default function StoreButtons({ className }: StoreButtonsProps) {
  return (
    <ul className={cn("flex flex-col gap-2 sm:flex-row", className)}>
      {STORE_LINKS.map((store) => (
        <li key={store.id}>
          <Button asChild variant="light" size="lg" className="w-full">
            <a href={store.href} target="_blank" rel="noopener noreferrer">
              <Image src={store.icon} alt="" width={24} height={24} className="h-6 w-6" />
              {store.label}
            </a>
          </Button>
        </li>
      ))}
    </ul>
  );
}
