import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { marked } from "marked";

import { GetDataFAQ, GetDataHeroSection, GetDataGLobal } from "@/lib/fetch";
import { FAQ, HeroSection, Global } from "@/lib/interface";

interface LinkCta {
  link_contact_sale: string;
  link_sign_in: string;
  link_sign_up: string;
  link_free_trial: string;
}

export default async function FAQSection() {
  const [dataFAQ, dataHero, dataUrl] = await Promise.all([
    GetDataFAQ(),
    GetDataHeroSection(),
    GetDataGLobal(),
  ]);

  const dataHeroFAQ: HeroSection[] = dataHero.filter(
    (item: HeroSection) => item.name === "FAQ"
  );

  const urlCta = dataUrl as LinkCta;
  return (
    <section id="faq" className="py-16 lg:py-24">
      <div className="container mx-auto px-10">
        <div className="text-center space-y-4 mb-16">
          {dataHeroFAQ[0].logo ? (
            <div className="flex items-center rounded-full border px-3 py-1 text-sm bg-muted/50">
              <img
                src={`http://localhost:1337${dataHeroFAQ[0].logo.url}`}
                alt={dataHeroFAQ[0].logo.name}
              />
              <p>{dataHeroFAQ[0].name}</p>
            </div>
          ) : (
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-muted/50">
              ❓ {dataHeroFAQ[0].name}
            </div>
          )}
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-muted/50"></div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            <div
              dangerouslySetInnerHTML={{
                __html: marked(dataHeroFAQ[0].title),
              }}
            />
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {dataHeroFAQ[0].description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {dataFAQ.map((faq: FAQ, index: number) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-gradient border-0 rounded-lg px-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-white">
                  <div
                    dangerouslySetInnerHTML={{ __html: marked(faq.answer) }}
                    className="markdown"
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a href={urlCta.link_contact_sale}>
            <Button variant="hero" className="dark:text-white cursor-pointer">
              Contact Support
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
