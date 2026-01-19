"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ArrowRight, ArrowLeft } from "lucide-react";
import { useServices } from "@/hooks/use-services";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ServicesPost } from "@/types/services";

const ServiceCardSkeleton = () => (
  <Card className="overflow-hidden border-none shadow-sm h-full flex flex-col rounded-lg bg-white">
    <Skeleton className="aspect-[4/3] w-full rounded-t-lg" />
    <div className="space-y-4 p-8">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-10 w-32 rounded-xl" />
    </div>
  </Card>
);

export default function ServicesManager() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 9;

  const {
    data: servicesData,
    isLoading,
    isError,
  } = useServices({
    search,
    page,
    page_size: pageSize,
  });

  const totalPages = servicesData
    ? Math.ceil(servicesData.count / pageSize)
    : 0;

  return (
    <>
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-24 px-4">
        <div className="relative group">
          <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400 group-focus-within:text-primary transition-colors z-10" />
          <Input
            placeholder="Search learning paths..."
            className="relative pl-16 h-18 bg-white border-gray-100/80 rounded-lg shadow-2xl shadow-gray-200/40 focus:ring-2 focus:ring-primary focus:border-transparent text-xl font-medium transition-all py-8"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>
      </div>

      {/* Services Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <ServiceCardSkeleton key={i} />
          ))}
        </div>
      ) : isError ? (
        <div className="text-center py-20 bg-white rounded-lg shadow-sm border border-gray-100 mb-12">
          <p className="text-red-500 font-medium">
            Something went wrong. Please try again later.
          </p>
        </div>
      ) : servicesData?.results.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-lg shadow-sm border border-gray-100 mb-12 space-y-4 px-6">
          <h3 className="text-2xl font-bold text-gray-900">
            No learning paths found
          </h3>
          <p className="text-gray-600">
            We couldn&apos;t find any modules matching your search criteria.
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearch("");
              setPage(1);
            }}
            className="mt-4 rounded-lg px-8 border-gray-100 text-gray-600 hover:bg-primary/5 hover:text-primary hover:border-primary/20"
          >
            Show all modules
          </Button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
            {servicesData?.results.map((service: ServicesPost) => (
              <div key={service.id} className="group h-full">
                <Card className="relative overflow-hidden border-none shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] transition-all duration-700 flex flex-col h-full bg-white rounded-lg border border-gray-50/50">
                  <Link
                    href={`/services/${service.slug}`}
                    className="relative aspect-[4/3] overflow-hidden m-2 rounded-lg"
                  >
                    <Image
                      src={
                        service.thumbnail_image || "/placeholder-service.png"
                      }
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
                          Module Overview
                          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-24 pb-12">
              <Button
                variant="outline"
                className="rounded-lg h-14 w-14 p-0 border-gray-100 text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm group/prev"
                disabled={page === 1}
                onClick={() => {
                  setPage(page - 1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <ArrowLeft className="h-6 w-6 transition-transform group-hover/prev:-translate-x-1" />
              </Button>
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <Button
                    key={i}
                    variant={page === i + 1 ? "default" : "ghost"}
                    className={`h-14 w-14 rounded-lg font-black text-lg transition-all ${
                      page === i + 1
                        ? "bg-primary text-white shadow-xl shadow-primary/20"
                        : "text-gray-400 hover:bg-primary/5 hover:text-primary"
                    }`}
                    onClick={() => {
                      setPage(i + 1);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>
              <Button
                variant="outline"
                className="rounded-lg h-14 w-14 p-0 border-gray-100 text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm group/next"
                disabled={page === totalPages}
                onClick={() => {
                  setPage(page + 1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <ArrowRight className="h-6 w-6 transition-transform group-hover/next:translate-x-1" />
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
}
