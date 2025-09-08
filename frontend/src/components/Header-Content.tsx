"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Navbar } from "@/lib/interface";

interface NavbarProps {
  data: Navbar;
}

export default function HeaderContent({ data }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-10 w-">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {data.menu.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <div className="hidden md:flex items-center space-x-2">
            <a href={data.link_sign}>
              <Button variant="ghost" className="cursor-pointer">Sign In</Button>
            </a>
            <a href={data.link_sign_up}>
              <Button variant="hero" size="sm" className="cursor-pointer">
                Get Started
              </Button>
            </a>
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
            <div className="flex flex-col items-center space-y-4">
            {data.menu.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                {item.name}
              </a>
            ))}
            </div>
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Button variant="ghost" className="dark:text-white">
                <a href={data.link_sign}>Sign In</a>
              </Button>
              <Button variant="hero">
                <a href={data.link_sign_up}>Get Started</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
