"use client";

import Link from "next/link";
import { Check, ArrowRight, Star } from "lucide-react";
import { usePricings } from "@/hooks/use-pricing";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Pricing, PricingFeature } from "@/types/pricing";

const PricingSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[1, 2, 3].map((i) => (
      <Card
        key={i}
        className="border-none shadow-sm rounded-[2.5rem] overflow-hidden"
      >
        <CardHeader className="p-10 pb-0 space-y-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-10 w-32" />
        </CardHeader>
        <CardContent className="p-10 space-y-6">
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((j) => (
              <Skeleton key={j} className="h-4 w-full" />
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-10 pt-0">
          <Skeleton className="h-14 w-full rounded-2xl" />
        </CardFooter>
      </Card>
    ))}
  </div>
);

export default function PricingList() {
  const { data: pricingsData, isLoading, isError } = usePricings();
  const pricings = pricingsData?.results || [];

  if (isLoading) return <PricingSkeleton />;

  if (isError) {
    return (
      <div className="text-center py-20 bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 max-w-2xl mx-auto">
        <p className="text-red-500 font-bold text-lg">
          Failed to load pricing plans. Please try again later.
        </p>
      </div>
    );
  }

  if (pricings.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 max-w-2xl mx-auto space-y-6 p-12">
        <h3 className="text-3xl font-black text-gray-900 tracking-tighter">
          No Plans Available
        </h3>
        <p className="text-gray-500 text-lg">
          Our team is currently updating our service packages. Please check back
          soon or contact us for a custom quote.
        </p>
        <Button
          size="lg"
          className="rounded-2xl h-14 px-8 bg-blue-600 hover:bg-blue-700 font-black shadow-lg shadow-blue-100"
          asChild
        >
          <Link href="/contact">Contact Support</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
      {pricings.map((plan: Pricing) => (
        <Card
          key={plan.id}
          className={`relative border-none transition-all duration-500 rounded-[2.5rem] overflow-hidden flex flex-col h-full
              ${
                plan.is_popular
                  ? "shadow-2xl shadow-blue-200/50 lg:scale-105 z-10 bg-blue-600 text-white"
                  : "shadow-xl shadow-gray-200/50 bg-white text-gray-900 hover:scale-[1.02]"
              }`}
        >
          {plan.is_popular && (
            <div className="absolute top-8 right-8">
              <Badge className="bg-white/20 text-white border-none px-4 py-1.5 rounded-full font-bold text-xs backdrop-blur-md flex gap-1.5 items-center">
                <Star className="h-3 w-3 fill-current" /> MOST POPULAR
              </Badge>
            </div>
          )}

          <CardHeader className="p-10 pb-4 space-y-4">
            <h3
              className={`text-2xl font-black tracking-tight ${plan.is_popular ? "text-blue-50" : "text-gray-900"}`}
            >
              {plan.name}
            </h3>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-black tracking-tighter">
                ${plan.price}
              </span>
              <span
                className={`text-lg font-bold opacity-70 ${plan.is_popular ? "text-blue-100" : "text-gray-400"}`}
              >
                /month
              </span>
            </div>
            <p
              className={`text-lg leading-relaxed ${plan.is_popular ? "text-blue-100" : "text-gray-500"}`}
            >
              {plan.description}
            </p>
          </CardHeader>

          <CardContent className="p-10 pt-6 space-y-8 flex-grow">
            <div
              className={`h-[1px] w-full ${plan.is_popular ? "bg-white/10" : "bg-gray-100"}`}
            />
            <ul className="space-y-4">
              {plan.features
                ?.sort((a, b) => a.order - b.order)
                .map((feature: PricingFeature, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <div
                      className={`h-6 w-6 rounded-full flex items-center justify-center shrink-0 mt-0.5
                      ${plan.is_popular ? "bg-white/20 text-white" : "bg-blue-50 text-blue-600"}`}
                    >
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                    <span
                      className={`font-bold transition-colors ${plan.is_popular ? "text-blue-50" : "text-gray-700"}`}
                    >
                      {feature.feature}
                    </span>
                  </li>
                ))}
            </ul>
          </CardContent>

          <CardFooter className="p-10 pt-0 mt-auto">
            <Button
              className={`w-full h-14 rounded-2xl font-black text-lg shadow-lg transition-all
                  ${
                    plan.is_popular
                      ? "bg-white text-blue-600 hover:bg-blue-50 shadow-blue-800/20"
                      : "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-100"
                  }`}
              asChild
            >
              <Link href="/contact" className="gap-2">
                Get Started <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
