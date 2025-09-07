import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DynamicSVG from "./ui/icon-inline";

import { GetDataFooter } from "@/lib/fetch";
import { FooterType } from "@/lib/interface";

export default async function Footer() {
  const data: FooterType = await GetDataFooter();
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto py-16 px-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {data.logo ? (
                <img
                  src={`http://localhost:1337${data.logo.url}`}
                  alt={data.logo.name}
                  width={80}
                  height={80}
                />
              ) : (
                <div className="h-8 w-8 bg-gradient-primary rounded-lg"></div>
              )}
              <span className="text-xl font-bold">{data.name_saas}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {data.description_saas}
            </p>
            <div className="flex space-x-4">
              {data.media_social.map((item, index) => (
                <Button key={index} variant="ghost" size="icon">
                  <a href={item.link}>
                    <DynamicSVG
                      url={`http://localhost:1337${item.logo.url}`}
                      alt={item.logo.name}
                    />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <nav className="flex flex-col space-y-2">
              {data.products.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-muted-foreground hover:text-foreground transition-smooth"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <nav className="flex flex-col space-y-2">
              {data.company.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-muted-foreground hover:text-foreground transition-smooth"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">
              Get the latest updates and insights delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <Input
                placeholder="Enter your email"
                className="flex-1"
                type="email"
              />
              <Button variant="hero">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SaaSify. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {data.legal_link.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
