import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b45ae047?w=400&h=400&fit=crop&crop=face",
    content: "This platform transformed our business operations completely. The intuitive interface and powerful features helped us scale from 10 to 1000+ customers in just 6 months.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateLab",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    content: "The analytics dashboard gives us insights we never had before. We've increased our conversion rate by 150% since implementing their solution.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, GrowthCo",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    content: "Outstanding customer support and a product that actually delivers on its promises. The ROI was evident within the first month of usage.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-10">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-muted/50">
            💬 Testimonials
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Loved by thousands of
            <br />
            <span className="text-gradient-primary">
              businesses worldwide
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their businesses with our platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
                  <Card className="card-gradient border-0 transition-smooth hover:shadow-elegant h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      <blockquote className="text-base mb-6 leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="max-md:ml-4"/>
            <CarouselNext className="max-md:mr-4"/>
          </Carousel>
        </div>
      </div>
    </section>
  )
}