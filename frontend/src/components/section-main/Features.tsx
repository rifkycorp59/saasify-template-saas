import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DynamicSVG from "../ui/icon-inline";
import { marked } from "marked";

import { GetDataFeatures, GetDataHeroSection } from "@/lib/fetch";
import { Feature, HeroSection } from "@/lib/interface";

export default async function Features() {
  const [dataFeatures, dataHero] = await Promise.all([
    GetDataFeatures(),
    GetDataHeroSection(),
  ]);

  const dataHeroFeature: HeroSection[] = dataHero.filter(
    (item: HeroSection) => item.name === "Features"
  );

  return (
    <section
      id="features"
      className="py-16 lg:py-24 bg-muted/30 overflow-hidden"
    >
      <div className="container mx-auto px-10">
        <div className="text-center space-y-4 mb-16">
          {dataHeroFeature[0].logo ? (
            <div className="flex items-center rounded-full border px-3 py-1 text-sm bg-muted/50">
              <img
                src={`http://localhost:1337${dataHeroFeature[0].logo.url}`}
                alt={dataHeroFeature[0].logo.name}
              />
              <p>{dataHeroFeature[0].name}</p>
            </div>
          ) : (
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-muted/50">
              ✨ {dataHeroFeature[0].name}
            </div>
          )}
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            <div
              dangerouslySetInnerHTML={{
                __html: marked(dataHeroFeature[0].title),
              }}
            />
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {dataHeroFeature[0].description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataFeatures.map((feature: Feature, index: number) => (
            <Card
              key={index}
              className="card-gradient border-0 transition-smooth hover:shadow-elegant group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <DynamicSVG
                    url={`http://localhost:1337${feature.logo.url}`}
                    alt={feature.logo.name}
                    className="h-6 w-6 text-white"
                  />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
