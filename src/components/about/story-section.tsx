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
            <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-lg overflow-hidden shadow-2xl z-10">
              <Image
                src="/about-image.png"
                alt="Our Office"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            {/* Decorative floating boxes */}
            <div className="absolute -bottom-10 -right-10 w-64 bg-primary p-10 rounded-lg shadow-2xl z-20 hidden md:block">
              <p className="text-4xl font-black text-white mb-2">10,000+</p>
              <p className="text-primary-foreground font-bold uppercase tracking-wider text-sm">
                Empowered Learners Globally
              </p>
            </div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-gray-900 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
          </div>

          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900">
                A story of{" "}
                <span className="text-primary underline decoration-primary/20 underline-offset-8">
                  education
                </span>{" "}
                and growth.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Founded with a vision to democratize high-quality education,{" "}
                {siteConfig?.business_name || "Aura Learn"} started with a
                simple belief: that learning should be interactive, engaging,
                and accessible to all.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Today, we stand as a premier platform for skill development,
                blending expert mentorship with powerful learning tools. Our
                mission is to support every student in their quest for knowledge
                and mastery.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4 p-8 bg-gray-50 rounded-lg border border-gray-100 transition-colors hover:bg-white hover:shadow-xl">
                <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                  To empower learners worldwide by providing top-tier
                  educational resources and personalized mentorship.
                </p>
              </div>
              <div className="space-y-4 p-8 bg-gray-50 rounded-lg border border-gray-100 transition-colors hover:bg-white hover:shadow-xl">
                <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center shadow-lg shadow-secondary/20">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                  To be the most inspiring learning community, fostering
                  innovation and lifelong success through education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
