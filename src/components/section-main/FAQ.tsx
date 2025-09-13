import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    question: "How does the free trial work?",
    answer:
      "Our 14-day free trial gives you full access to all Pro features without requiring a credit card. You can explore all our capabilities and see how they fit your business needs before making any commitment.",
  },
  {
    question: "Can I change my plan at any time?",
    answer:
      "Absolutely! You can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately, and we'll prorate any billing adjustments on your next invoice.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We provide email support for all plans, priority support for Pro users, and dedicated 24/7 support for Enterprise customers. Our team typically responds within 2-4 hours during business days.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we take security seriously. All data is encrypted in transit and at rest using industry-standard AES-256 encryption. We're SOC 2 compliant and undergo regular security audits to ensure your data remains protected.",
  },
  {
    question: "Do you offer custom integrations?",
    answer:
      "Pro and Enterprise plans include access to our comprehensive API and webhook system. For Enterprise customers, we also offer custom integrations and dedicated technical support to help you connect with your existing tools.",
  },
  {
    question: "What happens if I cancel my subscription?",
    answer:
      "You can cancel your subscription at any time. Your account will remain active until the end of your current billing period, after which you'll be moved to our free plan with limited features. You can always reactivate your subscription later.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 lg:py-24">
      <div className="container mx-auto px-10">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-muted/50">
            ❓ FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Frequently asked
            <br />
            <span className="text-gradient-primary">questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions? We've got answers. If you can't find what you're
            looking for, feel free to reach out to our team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-gradient border-0 rounded-lg px-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground dark:text-white pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Link href="/">
            <Button variant="hero" className="dark:text-white cursor-pointer">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
