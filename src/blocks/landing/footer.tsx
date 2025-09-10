import { LandingData } from "@/services/locale";
import { Link } from "@/core/i18n/navigation";
import Image from "next/image";

export function Footer({ data }: { data: LandingData["footer"] }) {
  return (
    <footer role="contentinfo" className="py-8 sm:py-20">
      <div className="container space-y-16">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="space-y-6 md:col-span-2 md:space-y-12">
            {data.brand ? (
              <Link
                href={data.brand.url}
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Image
                  src={data.brand.logo.src}
                  alt={data.brand.logo.alt}
                  width={100}
                  height={100}
                  className="h-10 w-auto"
                />
                <span className="text-lg font-medium">{data.brand.title}</span>
              </Link>
            ) : null}

            <p className="text-muted-foreground text-balance text-sm">
              {data.brand.description}
            </p>
          </div>

          <div className="col-span-3 grid gap-6 sm:grid-cols-3">
            {data.nav.items.map((link, index) => (
              <div key={index} className="space-y-4 text-sm">
                <span className="block font-medium">{link.title}</span>

                <div className="flex flex-wrap gap-4 sm:flex-col">
                  {link.children.map((item, index) => (
                    <Link
                      key={index}
                      href={item.url}
                      target={item.target}
                      className="text-muted-foreground hover:text-primary block duration-150"
                    >
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          aria-hidden
          className="h-px bg-[length:6px_1px] bg-repeat-x opacity-25 [background-image:linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)]"
        />
        <div className="flex flex-wrap justify-between gap-4">
          <span className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Tailark, All rights reserved{" "}
          </span>

          <div className="ring-foreground/5 bg-card flex items-center gap-2 rounded-full border border-transparent py-1 pl-2 pr-4 shadow ring-1">
            <div className="relative flex size-3">
              <span className="duration-1500 absolute inset-0 block size-full animate-pulse rounded-full bg-emerald-100"></span>
              <span className="relative m-auto block size-1 rounded-full bg-emerald-500"></span>
            </div>
            <span className="text-sm">All Systems Normal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
