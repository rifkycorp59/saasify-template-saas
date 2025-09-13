import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
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
              <Link href="/">
                <Button variant="ghost" size="icon" className="cursor-pointer">
                  <Twitter className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="ghost" size="icon" className="cursor-pointer">
                  <Github className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="ghost" size="icon" className="cursor-pointer">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="ghost" size="icon" className="cursor-pointer">
                  <Mail className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                Features
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                Integrations
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                API
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                Security
              </Link>
            </nav>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                Careers
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                Contact
              </Link>
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
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
