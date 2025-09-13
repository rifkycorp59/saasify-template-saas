import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      <div className="container mx-auto p-10">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-muted/50">
                  🚀{" "}
                  <span className="ml-2">Introducing the future of SaaS</span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  Scale Your Business
                  <br />
                  <span className="text-gradient-primary">Beyond Limits</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Transform your workflow with our cutting-edge SaaS platform.
                  Automate processes, gain insights, and accelerate growth like
                  never before.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/">
                  <Button
                    variant="hero"
                    size="xl"
                    className="group dark:text-white cursor-pointer"
                  >
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    variant="outline"
                    size="xl"
                    className="group bg-gradient cursor-pointer"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Watch Demo
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>

            <div
              className="relative animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative">
                <Image
                  src={`/hero-image.jpg`}
                  alt="SaaS Dashboard Preview"
                  width={1280}
                  height={720}
                  className="rounded-2xl shadow-2xl border"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -left-6 bg-card border rounded-lg p-4 shadow-lg animate-float">
                <div className="text-2xl font-bold text-success">+127%</div>
                <div className="text-sm text-muted-foreground">Growth Rate</div>
              </div>

              <div
                className="absolute -bottom-6 -right-6 bg-card border rounded-lg p-4 shadow-lg animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Users</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
