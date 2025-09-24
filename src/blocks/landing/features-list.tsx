import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Features as FeaturesType } from "@/types/blocks/landing";
import { SmartIcon } from "@/blocks/common";

export function FeaturesList({
  features,
  className,
}: {
  features: FeaturesType;
  className?: string;
}) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container">
        <div className="grid items-start gap-12 pb-12 md:grid-cols-2">
          <div>
            <div className="">
              <h2 className="text-foreground text-balance text-4xl font-semibold">
                {features.title}
              </h2>
              <p className="my-6 text-balance text-lg">
                {features.description}
              </p>

              {features.buttons && features.buttons.length > 0 && (
                <div className="flex items-center gap-2 justify-center">
                  {features.buttons?.map((button, idx) => (
                    <Link
                      key={idx}
                      href={button.url ?? ""}
                      target={button.target ?? "_self"}
                      className={cn(
                        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                        "h-9 px-4 py-2",
                        "shadow-sm shadow-black/15 border border-transparent bg-background ring-1 ring-foreground/10 duration-200 hover:bg-muted/50 dark:ring-foreground/15 dark:hover:bg-muted/50"
                      )}
                    >
                      {button.icon && (
                        <SmartIcon name={button.icon as string} size={24} />
                      )}
                      {button.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          <Image
            src={features.image?.src ?? ""}
            alt={features.image?.alt ?? ""}
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>

        <div className="relative grid grid-cols-2 gap-x-3 gap-y-6 border-t pt-12 sm:gap-6 lg:grid-cols-4">
          {features.items?.map((item, idx) => (
            <div className="space-y-3" key={idx}>
              <div className="flex items-center gap-2">
                {item.icon && (
                  <SmartIcon name={item.icon as string} size={16} />
                )}
                <h3 className="text-sm font-medium">{item.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                {item.description ?? ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
