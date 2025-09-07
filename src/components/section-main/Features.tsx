import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Shield, BarChart3, Users, Rocket, Globe } from "lucide-react"


const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance with our optimized infrastructure and global CDN.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption and compliance with industry standards.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights into your business with real-time analytics and custom dashboards.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamlessly collaborate with your team with real-time updates and shared workspaces.",
  },
  {
    icon: Rocket,
    title: "Easy Integration",
    description: "Connect with your favorite tools through our comprehensive API and webhooks.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Scale globally with multi-region deployment and 99.9% uptime guarantee.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-10">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-muted/50">
            ✨ Features
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Everything you need to
            <br />
            <span className="text-gradient-primary">
              succeed online
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive suite of tools helps you build, grow, and scale your business 
            with confidence and ease.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="card-gradient border-0 transition-smooth hover:shadow-elegant group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <feature.icon className="h-6 w-6 text-white dark:text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}