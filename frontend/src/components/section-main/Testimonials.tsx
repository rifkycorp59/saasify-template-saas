import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { marked } from "marked";

import { GetDataTestimonials, GetDataHeroSection } from "@/lib/fetch";
import { Testimonial, HeroSection } from "@/lib/interface";

export default async function Testimonials() {
  const [dataTestimonial, dataHero] = await Promise.all([
    GetDataTestimonials(),
    GetDataHeroSection(),
  ]);

  const dataHeroTestimonial: HeroSection[] = dataHero.filter(
    (item: HeroSection) => item.name === "Testimonials"
  );

  return (
    <section id="testimonials" className="py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-10">
        <div className="text-center space-y-4 mb-16">
          {dataHeroTestimonial[0].logo ? (
            <div className="flex items-center rounded-full border px-3 py-1 text-sm bg-muted/50">
              <img
                src={`http://localhost:1337${dataHeroTestimonial[0].logo.url}`}
                alt={dataHeroTestimonial[0].logo.name}
              />
              <p>{dataHeroTestimonial[0].name}</p>
            </div>
          ) : (
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-muted/50">
              💬 {dataHeroTestimonial[0].name}
            </div>
          )}
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-muted/50"></div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            <div
              dangerouslySetInnerHTML={{
                __html: marked(dataHeroTestimonial[0].title),
              }}
            />
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {dataHeroTestimonial[0].description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {dataTestimonial.map(
                (testimonial: Testimonial, index: number) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/1"
                  >
                    <Card className="card-gradient border-0 transition-smooth hover:shadow-elegant h-full">
                      <CardContent className="pt-6">
                        <div className="flex items-center space-x-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>

                        <blockquote className="text-base mb-6 leading-relaxed">
                          "{testimonial.testimoni}"
                        </blockquote>

                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage
                              src={`http://localhost:1337${testimonial.image.url}`}
                              alt={testimonial.image.name}
                            />
                            <AvatarFallback>
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-semibold">
                              {testimonial.name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {testimonial.title}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                )
              )}
            </CarouselContent>
            <CarouselPrevious className="max-md:ml-4" />
            <CarouselNext className="max-md:mr-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
