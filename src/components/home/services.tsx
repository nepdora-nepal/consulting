"use client";

import { ServicesPost } from "@/types/services";
import { useServices } from "@/hooks/use-services";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowRight } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Image from "next/image";
import Link from "next/link";

const ServicesSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[1, 2, 3].map((i) => (
        <Card
          key={i}
          className="overflow-hidden border-none shadow-sm h-full flex flex-col rounded-lg bg-white"
        >
          <Skeleton className="aspect-[4/3] w-full rounded-t-lg" />
          <div className="space-y-4 p-8">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-20 w-full" />
          </div>
        </Card>
      ))}
    </div>
  );
};

const Services = () => {
  const { data, isLoading, isError, error } = useServices();

  if (isLoading) {
    return (
      <section className="bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Expertise
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Loading our specialized services...
            </p>
          </div>
          <ServicesSkeleton />
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-md mx-auto">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Failed to load services:{" "}
                {error?.message || "Something went wrong."}
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>
    );
  }

  if (!data?.results || data.results.length === 0) {
    return (
      <section className="">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Expertise
          </h2>
          <p className="mt-8 text-gray-500">No services found at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 relative overflow-hidden" id="services">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider">
              Educational Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
              Curated Learning Paths for Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Growth
              </span>
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              We offer a wide range of interactive modules designed to help you
              master new skills and achieve your educational goals.
            </p>
          </div>
          <Button
            variant="ghost"
            className="group text-primary font-black text-lg p-0 hover:bg-transparent hover:text-primary/80 h-auto gap-2"
            asChild
          >
            <Link href="/services">
              Browse All Modules
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {data.results.map((service: ServicesPost) => (
            <div key={service.id} className="group">
              <Card className="relative overflow-hidden border-none shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] transition-all duration-700 flex flex-col h-full bg-white rounded-lg border border-gray-50/50">
                <Link
                  href={`/services/${service.slug}`}
                  className="relative aspect-[4/3] overflow-hidden m-2 rounded-lg"
                >
                  <Image
                    src={service.thumbnail_image || "/placeholder-service.png"}
                    alt={
                      service.thumbnail_image_alt_description || service.title
                    }
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </Link>

                <div className="p-8 pt-6 flex flex-col flex-grow">
                  <Link href={`/services/${service.slug}`} className="mb-4">
                    <h4 className="text-2xl font-black text-gray-900 group-hover:text-primary transition-colors leading-tight tracking-tight">
                      {service.title}
                    </h4>
                  </Link>

                  <p className="text-gray-500 leading-relaxed line-clamp-3 text-lg mb-8 font-medium">
                    {service.meta_description ||
                      service.description
                        .substring(0, 150)
                        .replace(/<[^>]*>/g, "") + "..."}
                  </p>

                  <div className="mt-auto">
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-primary text-lg font-black hover:bg-transparent hover:text-primary/80 group/btn inline-flex items-center gap-2"
                      asChild
                    >
                      <Link href={`/services/${service.slug}`}>
                        Explore Path
                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
