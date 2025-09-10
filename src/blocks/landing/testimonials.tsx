import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { LandingData } from "@/services/locale";

export function Testimonials({ data }: { data: LandingData["testimonials"] }) {
  if (!data) {
    return null;
  }

  type TestimonialItem = (typeof data.items)[number];

  const chunkArray = (
    array: TestimonialItem[],
    chunkSize: number
  ): TestimonialItem[][] => {
    const result: TestimonialItem[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const testimonialChunks = chunkArray(
    data.items,
    Math.ceil(data.items.length / 3)
  );

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">{data.title}</h2>
            <p className="mt-6">{data.description.replace("<br/>", "\n")}</p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
            {testimonialChunks.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="space-y-3">
                {chunk.map(({ name, role, content, avatar_url }, index) => (
                  <Card key={index}>
                    <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                      <Avatar className="size-9">
                        <AvatarImage
                          alt={name}
                          src={avatar_url}
                          loading="lazy"
                          width="120"
                          height="120"
                        />
                        <AvatarFallback>{name}</AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-medium">{name}</h3>

                        <span className="text-muted-foreground block text-sm tracking-wide">
                          {role}
                        </span>

                        <blockquote className="mt-3">
                          <p className="text-gray-700 dark:text-gray-300">
                            {content}
                          </p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
