"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { usePortfolios } from "@/hooks/use-portfolio";
import { Portfolio as PortfolioType } from "@/types/portfolio";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

const PortfolioSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {[1, 2, 3].map((i) => (
      <Card
        key={i}
        className="overflow-hidden border-none shadow-sm h-full flex flex-col rounded-[2.5rem] bg-white"
      >
        <Skeleton className="aspect-[4/3] w-full rounded-t-[2.5rem]" />
        <div className="space-y-4 p-8">
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-20 w-full" />
        </div>
      </Card>
    ))}
  </div>
);

const Portfolio = () => {
  const { data, isLoading, isError } = usePortfolios({
    page_size: 3, // Show only top 3 on homepage
  });

  const portfolios = data?.results || [];

  if (isLoading) {
    return (
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <Skeleton className="h-10 w-64 mx-auto" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <PortfolioSkeleton />
        </div>
      </section>
    );
  }

  if (isError || portfolios.length === 0) {
    return null; // Don't show the section if there's an error or no work to show
  }

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="portfolio">
      {/* Background patterns could go here */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-bold uppercase tracking-wider">
              Our Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
              Showcasing Our Recent{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              Explore how we&apos;ve helped businesses transform their ideas
              into successful digital realities.
            </p>
          </div>
          <Button
            variant="ghost"
            className="group text-blue-600 font-black text-lg p-0 hover:bg-transparent hover:text-blue-700 h-auto gap-2"
            asChild
          >
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {portfolios.map((portfolio: PortfolioType) => (
            <div key={portfolio.id} className="group">
              <Card className="relative overflow-hidden border-none shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] transition-all duration-700 flex flex-col h-full bg-white rounded-[2.5rem] border border-gray-50/50">
                <Link
                  href={`/portfolio/${portfolio.slug}`}
                  className="relative aspect-[4/3] overflow-hidden m-2 rounded-[2rem]"
                >
                  <Image
                    src={
                      portfolio.thumbnail_image || "/placeholder-portfolio.png"
                    }
                    alt={
                      portfolio.thumbnail_image_alt_description ||
                      portfolio.title
                    }
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                      <ExternalLink className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </Link>

                <div className="p-8 pt-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                      {portfolio.category.name}
                    </span>
                  </div>

                  <Link href={`/portfolio/${portfolio.slug}`} className="mb-4">
                    <h3 className="text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors leading-tight tracking-tight">
                      {portfolio.title}
                    </h3>
                  </Link>

                  <p className="text-gray-500 leading-relaxed line-clamp-2 text-lg mb-8 font-medium">
                    {portfolio.meta_description ||
                      portfolio.content
                        .replace(/<[^>]*>/g, "")
                        .substring(0, 100) + "..."}
                  </p>

                  <div className="mt-auto">
                    <Link
                      href={`/portfolio/${portfolio.slug}`}
                      className="inline-flex items-center text-gray-900 font-bold group/link hover:text-blue-600 transition-colors gap-2"
                    >
                      Case Study
                      <ArrowRight className="h-5 w-5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
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

export default Portfolio;
