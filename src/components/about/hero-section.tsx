export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 bg-blue-100/50 px-4 py-2 rounded-full border border-blue-200">
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">
              Our Journey
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 leading-[1.05]">
            Driving the future of{" "}
            <span className="text-blue-600">consultancy.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl leading-relaxed italic">
            Empowering organizations through innovative strategies, data-driven
            insights, and unwavering commitment to excellence.
          </p>
        </div>
      </div>
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full text-blue-600">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
}
