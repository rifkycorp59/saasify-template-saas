import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { marked } from "marked";

import {
  GetDataServices,
  GetDataHeroSection,
  GetDataGLobal,
} from "@/lib/fetch";
import { Services, HeroSection, Global } from "@/lib/interface";

interface LinkCta {
  link_contact_sale: string;
  link_sign_in: string;
  link_sign_up: string;
  link_free_trial: string;
}

export default async function Pricing() {
  const [dataService, dataHero, dataUrl] = await Promise.all([
    GetDataServices(),
    GetDataHeroSection(),
    GetDataGLobal(),
  ]);

  const dataHeroPricing: HeroSection[] = dataHero.filter(
    (item: HeroSection) => item.name === "Pricing"
  );

  const urlCta = dataUrl as LinkCta;
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-10">
        <div className="text-center space-y-4 mb-16">
          {dataHeroPricing[0].logo ? (
            <div className="flex items-center rounded-full border px-3 py-1 text-sm bg-muted/50">
              <img
                src={`http://localhost:1337${dataHeroPricing[0].logo.url}`}
                alt={dataHeroPricing[0].logo.name}
              />
              <p>{dataHeroPricing[0].name}</p>
            </div>
          ) : (
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-muted/50">
              💰 {dataHeroPricing[0].name}
            </div>
          )}
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            <div
              dangerouslySetInnerHTML={{
                __html: marked(dataHeroPricing[0].title),
              }}
            />
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {dataHeroPricing[0].description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {dataService.map((plan: Services, index: number) => (
            <Card
              key={index}
              className={`relative card-gradient border-0 transition-smooth hover:shadow-elegant animate-fade-in ${
                plan.isPopular ? "glow-effect scale-105" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground dark:text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">{plan.title}</CardTitle>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">
                    {plan.price_suffix}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.benefits.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-success mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={
                    plan.isStartFree
                      ? urlCta.link_free_trial
                      : urlCta.link_sign_up
                  }
                >
                  <Button
                    className="w-full dark:text-white cursor-pointer"
                    variant={plan.isStartFree ? "hero" : "outline"}
                    size="lg"
                  >
                    {plan.isStartFree ? "Start Free Trial" : "Get Started"}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <a href={urlCta.link_contact_sale}>
            <Button variant="ghost" className="dark:text-white cursor-pointer">
              Need a custom plan? Contact Sales →
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
