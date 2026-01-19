"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ArrowLeft, ArrowRight, ShieldCheck, Zap, Target } from "lucide-react";

import { useService } from "@/hooks/use-services";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import FaqSection from "@/components/home/faq";

const ServiceDetailSkeleton = () => (
  <div className="container mx-auto px-4 md:px-6 py-12">
    <Skeleton className="h-6 w-32 mb-8" />
    <Skeleton className="h-12 w-3/4 max-w-2xl mb-8" />
    <div className="grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-8 space-y-8">
        <Skeleton className="aspect-video w-full rounded-[2.5rem]" />
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
      <aside className="lg:col-span-4 space-y-6">
        <Skeleton className="h-[400px] w-full rounded-3xl" />
      </aside>
    </div>
  </div>
);

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const { data: service, isLoading, isError } = useService(slug);

  if (isLoading) return <ServiceDetailSkeleton />;

  if (isError || !service) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center space-y-6 px-4">
        <div className="bg-white p-12 rounded-[2.5rem] shadow-xl text-center space-y-6 max-w-md">
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Service Not Found
          </h1>
          <p className="text-gray-500 text-lg">
            The specialized service you are looking for might have been updated
            or moved.
          </p>
          <Button
            size="lg"
            className="rounded-xl w-full h-14 bg-blue-600 hover:bg-blue-700 font-bold"
            asChild
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Service Header */}
      <div className="bg-gray-50/50 pt-32 pb-16 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 mb-8 gap-2 bg-blue-50 px-4 py-2 rounded-full transition-all hover:gap-3"
          >
            <ArrowLeft className="h-4 w-4" /> Back to All Services
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-2xl font-medium italic">
              {service.meta_description ||
                "Specialized solutions designed to catalyze growth and exceed your business objectives."}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Service Content */}
          <article className="lg:col-span-8 space-y-12">
            <div className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-100/50 group">
              <Image
                src={service.thumbnail_image || "/placeholder-service.png"}
                alt={service.thumbnail_image_alt_description || service.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2.5rem]" />
            </div>

            <div
              className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed font-normal
                prose-headings:text-gray-900 prose-headings:font-extrabold prose-headings:tracking-tighter prose-headings:mb-6
                prose-p:mb-10 prose-p:leading-8
                prose-strong:text-gray-900 prose-strong:font-bold
                prose-li:text-gray-600 prose-li:my-2
                prose-img:rounded-3xl prose-img:shadow-xl
                prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-3xl prose-blockquote:text-gray-800 prose-blockquote:italic"
              dangerouslySetInnerHTML={{ __html: service.description }}
            />
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-10 lg:sticky lg:top-36 h-fit">
            {/* Quick Benefits */}
            <Card className="border-none shadow-2xl shadow-gray-200/50 rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-10 space-y-8">
                <h3 className="text-2xl font-black text-gray-900 tracking-tighter">
                  Why Choose Us?
                </h3>
                <ul className="space-y-6">
                  {[
                    {
                      icon: ShieldCheck,
                      text: "Industry-leading security",
                      color: "text-green-500",
                      bg: "bg-green-50",
                    },
                    {
                      icon: Zap,
                      text: "Rapid deployment & scaling",
                      color: "text-orange-500",
                      bg: "bg-orange-50",
                    },
                    {
                      icon: Target,
                      text: "Data-driven strategies",
                      color: "text-blue-500",
                      bg: "bg-blue-50",
                    },
                    {
                      icon: Target,
                      text: "Customized solution design",
                      color: "text-purple-500",
                      bg: "bg-purple-50",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 group">
                      <div
                        className={`h-12 w-12 rounded-2xl ${item.bg} flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 duration-300`}
                      >
                        <item.icon className={`h-6 w-6 ${item.color}`} />
                      </div>
                      <span className="font-bold text-gray-700 group-hover:text-gray-900 transition-colors">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Button
                    className="w-full h-14 bg-blue-600 hover:bg-blue-700 rounded-2xl font-black text-lg gap-3 shadow-lg shadow-blue-200"
                    asChild
                  >
                    <Link href="/contact">
                      Request Consultation <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Support Widget */}
            <div className="bg-gray-900 p-10 rounded-[2.5rem] text-white space-y-6 relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-2xl font-black tracking-tighter mb-2">
                  Need Help?
                </h4>
                <p className="text-gray-400 font-medium mb-8">
                  Speak with our specialist to find the perfect solution for
                  your needs.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 font-black text-blue-400 hover:text-blue-300 transition-all hover:gap-5"
                >
                  Contact Specialist <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              {/* Decorative background circle */}
              <div className="absolute -bottom-12 -right-12 h-40 w-40 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/30 transition-all duration-700"></div>
            </div>
          </aside>
        </div>
      </div>

      {/* FAQs integrated at the bottom of single service page */}
      <div className="border-t border-gray-100">
        <FaqSection />
      </div>
    </div>
  );
}
