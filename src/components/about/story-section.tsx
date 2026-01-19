import Image from "next/image";
import { Target, Users } from "lucide-react";
import { SiteConfig } from "@/types/site-config";

interface StorySectionProps {
  siteConfig: SiteConfig | null;
}

export default function StorySection({ siteConfig }: StorySectionProps) {
  return (
    <section className="py-24 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl z-10">
              <Image
                src="/about-image.png"
                alt="Our Office"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            {/* Decorative floating boxes */}
            <div className="absolute -bottom-10 -right-10 w-64 bg-blue-600 p-10 rounded-[2.5rem] shadow-2xl z-20 hidden md:block">
              <p className="text-4xl font-black text-white mb-2">15+</p>
              <p className="text-blue-100 font-bold uppercase tracking-wider text-sm">
                Years of Domain Expertise
              </p>
            </div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-gray-900 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
          </div>

          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900">
                A story of{" "}
                <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">
                  innovation
                </span>{" "}
                and trust.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Founded in 2009,{" "}
                {siteConfig?.business_name || "Aurum Consulting"} started with a
                simple belief: that every professional challenge is an
                opportunity for breakthrough innovation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Today, we stand as a global leader in strategic consulting,
                helping thousands of businesses navigate complex market shifts
                with confidence. Our approach combines traditional wisdom with
                cutting-edge technology to deliver results that truly matter.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4 p-8 bg-gray-50 rounded-[2rem] border border-gray-100 transition-colors hover:bg-white hover:shadow-xl">
                <div className="h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-100">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                  To catalyze organizational growth by delivering world-class
                  strategic insights and operational excellence.
                </p>
              </div>
              <div className="space-y-4 p-8 bg-gray-50 rounded-[2rem] border border-gray-100 transition-colors hover:bg-white hover:shadow-xl">
                <div className="h-12 w-12 rounded-2xl bg-gray-900 flex items-center justify-center shadow-lg shadow-gray-200">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                  To be the world&apos;s most trusted partner in building
                  sustainable, future-ready organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
