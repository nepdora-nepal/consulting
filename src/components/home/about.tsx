import ImageWithFallback from "@/components/common/ImageWithFallback";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Successful Alumni", value: "5,000+" },
    { label: "Course Modules", value: "150+" },
    { label: "Expert Educators", value: "40+" },
    { label: "Learning Success", value: "98%" },
  ];

  const features = [
    "Interactive Learning Content",
    "Expert-Led Mentorship",
    "Flexible Study Schedules",
    "Real-World Skill Building",
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Column */}
          <div className="flex-1 relative w-full max-w-[600px] animate-in fade-in slide-in-from-left-10 duration-1000">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl shadow-gray-200/50 border-4 border-white">
              <ImageWithFallback
                id="about-home"
                src="/about-image.png"
                fallbackSrc="/about-image.png"
                alt="Students studying together"
                fill
                className="object-cover transition-transform hover:scale-105 duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full -z-10 blur-2xl"></div>
          </div>

          {/* Content Column */}
          <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-right-10 duration-1000">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold tracking-wider text-primary uppercase">
                Our Educational Mission
              </h2>
              <h3 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Empowering Minds through{" "}
                <span className="text-primary">Knowledge</span> & Mentorship
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Aura Learn, we believe that education is the key to unlocking
                limitless potential. Our mission is to provide accessible,
                high-quality learning experiences that empower individuals to
                master new skills and shape their own futures. With a community
                of expert educators and dedicated learners, we&apos;re building
                the future of interactive education.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                  <span className="font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-gray-100">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
