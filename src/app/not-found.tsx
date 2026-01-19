import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-white relative overflow-hidden py-24">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl w-full text-center space-y-12">
        {/* Error Code Graphic */}
        <div className="relative inline-block">
          <h1 className="text-[12rem] md:text-[16rem] font-black text-gray-900/5 leading-none select-none">
            404
          </h1>
        </div>

        {/* Message Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 leading-tight">
            Oops! Path <span className="text-primary italic">Not Found</span>
          </h2>
          <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-md mx-auto">
            It seems you&apos;ve wandered into an uncharted learning module.
            Let&apos;s get you back on course.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            size="lg"
            className="h-16 px-10 rounded-lg bg-primary hover:bg-primary/90 text-white font-black text-lg gap-3 shadow-xl shadow-primary/20"
            asChild
          >
            <Link href="/">
              <Home className="h-5 w-5" /> Back to Dashboard
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-16 px-10 rounded-lg border-2 border-gray-100 text-gray-600 hover:bg-gray-50 font-black text-lg gap-3 transition-all"
            asChild
          >
            <Link href="/services">
              <ArrowLeft className="h-5 w-5" /> Explore Modules
            </Link>
          </Button>
        </div>

        {/* Helpful Tip */}
        <div className="pt-12 text-sm text-gray-400 font-medium uppercase tracking-widest">
          Need assistance?{" "}
          <Link href="/contact" className="text-primary hover:underline">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
