import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto py-16 px-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <img
              src={`/logo.png`}
              alt="logo"
              width={80}
              height={80}
            /> */}
              <div className="h-8 w-8 bg-gradient-primary rounded-lg"></div>
              <span className="text-xl font-bold">SaaSify</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Transform your business with our cutting-edge SaaS platform. Scale
              beyond limits with intelligent automation and insights.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <nav className="flex flex-col space-y-2">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                Features
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                Integrations
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                API
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                Security
              </a>
            </nav>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <nav className="flex flex-col space-y-2">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                About
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                Careers
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                Contact
              </a>
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
            © 2024 SaaSify. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
