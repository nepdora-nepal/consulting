"use client";

import Image from "next/image";
import { useGetOurClients } from "@/hooks/use-our-client";
import { Skeleton } from "@/components/ui/skeleton";
import { OurClient } from "@/types/our-client";

const ClientMarquee = () => {
  const { data: clients, isLoading, isError } = useGetOurClients();

  if (isLoading) {
    return (
      <div className="w-full py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-8 md:gap-16 items-center overflow-hidden">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-12 w-32 shrink-0 opacity-50" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError || !clients || clients.length === 0) {
    return null;
  }

  return (
    <section className="w-full py-12 bg-white border-y border-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
          Trusted by Industry Leaders
        </p>
      </div>

      <div className="relative">
        {/* Gradients for fading effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden group select-none">
          <div className="flex items-center shrink-0 animate-marquee py-4 group-hover:pause-animation">
            {clients.map((client: OurClient, index) => (
              <div
                key={`${client.id}-${index}`}
                className="mx-8 md:mx-16 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
              >
                {client.logo ? (
                  <div className="relative h-12 w-32 md:h-16 md:w-40">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <span className="text-lg font-bold text-gray-300">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center shrink-0 animate-marquee py-4 group-hover:pause-animation">
            {clients.map((client: OurClient, index) => (
              <div
                key={`${client.id}-duplicate-${index}`}
                className="mx-8 md:mx-16 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
              >
                {client.logo ? (
                  <div className="relative h-12 w-32 md:h-16 md:w-40">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <span className="text-lg font-bold text-gray-300">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .pause-animation {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientMarquee;
