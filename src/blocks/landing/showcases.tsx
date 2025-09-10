import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LandingData } from "@/services/locale";

export function Showcases({ data }: { data: LandingData["showcases"] }) {
  if (!data) {
    return null;
  }

  return (
    <section className="bg-background">
      <div className="@container py-16 md:py-24">
        <div className="container">
          <h2 className="text-muted-foreground text-balance text-4xl font-semibold md:w-2/3">
            {data.title}
            <strong className="text-foreground font-semibold">
              {data.description}
            </strong>
          </h2>
          <div className="@3xl:grid-cols-3 @xl:grid-cols-2 mt-12 grid gap-6">
            {data.items.map((item, idx) => (
              <div className="row-span-4 grid grid-rows-subgrid gap-4">
                <div className="bg-background ring-foreground/5 aspect-square rounded-xl border border-transparent p-2 shadow ring-1">
                  <Image
                    src={item.img_url}
                    alt={item.title}
                    width={6394}
                    height={4500}
                    className="h-full w-full object-cover object-center rounded-md"
                  />
                </div>
                <h3 className="text-muted-foreground text-sm">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                <Link
                  href={item.url}
                  target={item.target}
                  className="text-primary hover:text-foreground flex items-center gap-1 text-sm transition-colors duration-200"
                >
                  Read more
                  <ChevronRight className="size-3.5 translate-y-px" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
