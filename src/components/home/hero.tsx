import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col justify-center space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-1000">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
                Professional Consultation Services
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
                Transform Your Business with{" "}
                <span className="text-blue-600">Expert Guidance</span>
              </h1>
              <p className="max-w-[600px] text-lg text-gray-600 md:text-xl leading-relaxed">
                Unlock your potential with our tailored strategies. We provide
                the insights you need to scale operations, optimize efficiency,
                and drive sustainable growth.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8"
              >
                Book a Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-200 text-blue-700 hover:bg-blue-50 font-semibold px-8"
              >
                Explore Services
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Trusted by 500+ Clients
              </div>
              <div className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Certified Experts
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none animate-in fade-in slide-in-from-right-10 duration-1000 delay-200">
            <div className="relative aspect-square w-full rounded-2xl bg-gray-100/50 p-2 ring-1 ring-gray-200/50 lg:aspect-[4/3]">
              <div className="absolute inset-0 bg-blue-100/20 rounded-2xl -rotate-6 transform"></div>
              <Image
                src="/hero-image.png"
                alt="Business Team Consultation"
                fill
                className="rounded-xl object-cover shadow-2xl transition-all hover:scale-105 duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
