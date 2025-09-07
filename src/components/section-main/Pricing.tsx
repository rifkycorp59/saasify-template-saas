import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: 29,
    description: "Perfect for small teams getting started",
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "Standard integrations",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: 79,
    description: "Best for growing businesses",
    features: [
      "Up to 50 team members",
      "500GB storage",
      "Advanced analytics",
      "Priority support",
      "All integrations",
      "Custom workflows",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 199,
    description: "For large organizations",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Enterprise analytics",
      "24/7 dedicated support",
      "Custom integrations",
      "Advanced workflows",
      "Full API access",
      "SSO & SAML",
      "Custom contracts",
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-10">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-muted/50">
            💰 Pricing
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Simple, transparent
            <br />
            <span className="text-gradient-primary">
              pricing for everyone
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your business. Upgrade or downgrade at any time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative card-gradient border-0 transition-smooth hover:shadow-elegant animate-fade-in ${
                plan.popular ? 'glow-effect scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground dark:text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-4 w-4 text-success mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full dark:text-white" 
                  variant={plan.popular ? "hero" : "outline"}
                  size="lg"
                >
                  {plan.popular ? "Start Free Trial" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <Button variant="ghost" className="dark:text-white">
            Need a custom plan? Contact Sales →
          </Button>
        </div>
      </div>
    </section>
  )
}