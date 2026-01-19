import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Years of Experience", value: "15+" },
    { label: "Successful Projects", value: "500+" },
    { label: "Expert Consultants", value: "25+" },
    { label: "Client Satisfaction", value: "99%" },
  ];

  const features = [
    "Strategic Business Planning",
    "Operational Excellence",
    "Tailored Solutions",
    "Data-Driven Insights",
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Column */}
          <div className="flex-1 relative w-full max-w-[600px] animate-in fade-in slide-in-from-left-10 duration-1000">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about-image.png"
                alt="About Our Company"
                fill
                className="object-cover transition-transform hover:scale-105 duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full -z-10 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-500/10 rounded-full -z-10 blur-2xl"></div>
          </div>

          {/* Content Column */}
          <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-right-10 duration-1000">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
                Who We Are
              </h2>
              <h3 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Driving Growth through{" "}
                <span className="text-blue-600">Expertise</span> & Innovation
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Aurum Consulting, we believe that every business has the
                potential for greatness. Our mission is to provide the strategic
                guidance and innovative tools necessary to unlock that
                potential. With over a decade of experience, we&apos;ve helped
                hundreds of clients navigate market complexities and achieve
                sustainable success.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
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
