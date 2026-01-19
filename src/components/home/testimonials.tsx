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
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Testimonials
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our <span className="text-blue-600">Clients</span> Say
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we&apos;ve helped businesses like yours achieve their
            goals through strategic consultation.
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
                  <Card className="h-full border-none shadow-sm bg-white rounded-2xl">
                    <CardContent className="p-8 flex flex-col h-full space-y-6">
                      <Quote className="h-8 w-8 text-blue-100 fill-blue-50" />

                      <p className="flex-grow text-gray-700 italic leading-relaxed">
                        &quot;{testimonial.comment}&quot;
                      </p>

                      <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
                        <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                          <AvatarImage
                            src={testimonial.image || ""}
                            alt={testimonial.name}
                          />
                          <AvatarFallback className="bg-blue-50 text-blue-600 font-bold">
                            {testimonial.name.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-bold text-gray-900 text-sm">
                            {testimonial.name}
                          </div>
                          <div className="text-blue-600 text-xs font-medium uppercase tracking-tight">
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
              <CarouselPrevious className="-left-12 hover:bg-blue-600 hover:text-white border-blue-100" />
              <CarouselNext className="-right-12 hover:bg-blue-600 hover:text-white border-blue-100" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
