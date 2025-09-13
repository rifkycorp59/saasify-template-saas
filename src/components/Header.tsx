"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-10">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#features"
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            Features
          </Link>
          <Link
            href="#testimonials"
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            Testimonials
          </Link>
          <Link
            href="#pricing"
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            FAQ
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <div className="hidden md:flex items-center space-x-2">
            <Link href="/">
              <Button variant="ghost" className="cursor-pointer">
                Sign In
              </Button>
            </Link>
            <Link href="/">
              <Button variant="hero" size="sm" className="cursor-pointer">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-10 py-4 space-y-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="#features"
                className="block text-muted-foreground hover:text-foreground transition-smooth"
              >
                Features
              </Link>
              <Link
                href="#testimonials"
                className="block text-muted-foreground hover:text-foreground transition-smooth"
              >
                Testimonials
              </Link>
              <Link
                href="#pricing"
                className="block text-muted-foreground hover:text-foreground transition-smooth"
              >
                Pricing
              </Link>
              <Link
                href="#faq"
                className="block text-muted-foreground hover:text-foreground transition-smooth"
              >
                FAQ
              </Link>
            </div>
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="dark:text-white cursor-pointer"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/">
                <Button variant="hero">Get Started</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
