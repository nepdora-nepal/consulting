"use client";

import { useTestimonials } from "@/hooks/use-testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Testimonial } from "@/types/testimonial";

const TestimonialsSkeleton = () => {
  return (
    <div className="flex gap-4 overflow-hidden">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="min-w-0 shrink-0 grow-0 basis-full lg:basis-1/3"
        >
          <Skeleton className="h-64 w-full rounded-2xl" />
        </div>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const { data: testimonials, isLoading, isError } = useTestimonials();

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Client Feedback
            </h2>
          </div>
          <TestimonialsSkeleton />
        </div>
      </section>
    );
  }

  if (isError || !testimonials || testimonials.length === 0) {
    return null; // Don't show the section if there's an error or no data
  }

  return (
    <section className="py-20 bg-gray-50/50 overflow-hidden" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
            Testimonials
          </h2>
          <h3 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Success stories from our{" "}
            <span className="text-primary italic">Learners</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Join thousands of students who have transformed their careers
            through our interactive platforms and expert-led mentorship.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial: Testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/2"
                >
                  <Card className="h-full border-none shadow-xl shadow-gray-200/50 bg-white rounded-lg hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                    <CardContent className="p-10 flex flex-col h-full space-y-8">
                      <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Quote className="h-8 w-8 text-primary fill-primary/10" />
                      </div>

                      <p className="flex-grow text-gray-700 italic leading-relaxed">
                        &quot;{testimonial.comment}&quot;
                      </p>

                      <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
                        <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                          <AvatarImage
                            src={testimonial.image || ""}
                            alt={testimonial.name}
                          />
                          <AvatarFallback className="bg-primary/10 text-primary font-black">
                            {testimonial.name.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-black text-gray-900 text-base tracking-tight">
                            {testimonial.name}
                          </div>
                          <div className="text-primary text-xs font-bold uppercase tracking-widest mt-0.5">
                            {testimonial.designation}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-14 h-12 w-12 rounded-lg hover:bg-primary hover:text-white border-primary/10 transition-all font-bold" />
              <CarouselNext className="-right-14 h-12 w-12 rounded-lg hover:bg-primary hover:text-white border-primary/10 transition-all font-bold" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
