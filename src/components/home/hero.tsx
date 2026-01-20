import Image from "next/image";
import { Button } from "@/components/ui/button";
import ImageWithFallback from "@/components/common/ImageWithFallback";
const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col justify-center space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-1000">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                Unlock Your Potential
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
                Master New Skills with{" "}
                <span className="text-primary">Interactive Learning</span>
              </h1>
              <p className="max-w-[600px] text-lg text-gray-600 md:text-xl leading-relaxed">
                Experience a new way of learning. Our expert-led courses and
                personalized mentorship are designed to help you thrive in the
                digital age.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8"
              >
                Start Learning
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/20 text-primary hover:bg-primary/10 font-semibold px-8"
              >
                Explore Courses
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5 text-secondary"
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
                10k+ Active Learners
              </div>
              <div className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5 text-secondary"
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
                Expert Instructors
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none animate-in fade-in slide-in-from-right-10 duration-1000 delay-200">
            <div className="relative aspect-square w-full rounded-2xl bg-gray-100/50 p-2 ring-1 ring-gray-200/50 lg:aspect-[4/3]">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl -rotate-6 transform"></div>
                 <ImageWithFallback
                id="hero-image"
                src="/hero-image.png"
                fallbackSrc="/hero-image.png"
                alt="Students learning together"
                fill
                className="rounded-xl object-cover shadow-2xl transition-all hover:scale-105 duration-500"
              />
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
