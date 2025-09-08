import { marked } from "marked";

import { GetDataCTA, GetDataGLobal } from "@/lib/fetch";
import { CTAType } from "@/lib/interface";

interface LinkCta {
  link_contact_sale: string;
  link_sign_in: string;
  link_sign_up: string;
  link_free_trial: string;
}

export default async function CTA() {
  const data: CTAType = await GetDataCTA();
  const urlCta: LinkCta = await GetDataGLobal();
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-primary"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            <div dangerouslySetInnerHTML={{ __html: marked(data.title) }} />
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            {data.description}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-scale-in">
            <a href={urlCta.link_free_trial}>
              <button className="group bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-white/90 transition-smooth shadow-elegant hover:shadow-glow hover:scale-105 cursor-pointer">
                <span className="flex items-center gap-2">
                  Start Free Trial
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-smooth"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
            </a>

            <a href={urlCta.link_contact_sale}>
              <button className="group bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-smooth cursor-pointer">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Contact Sales
                </span>
              </button>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-80">
            {data.advantages.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {item.highlight}
                </div>
                <div className="text-sm text-white/80">{item.advantage}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C300,100 900,20 1200,60 L1200,120 L0,120 Z"
            fill="white"
            fillOpacity="0.1"
          ></path>
        </svg>
      </div>
    </section>
  );
}
