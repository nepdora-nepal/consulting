import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-24 bg-white overflow-hidden relative border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-blue-600 rounded-[3rem] p-10 md:p-20 relative overflow-hidden group shadow-2xl shadow-blue-200">
          <div className="relative z-10 max-w-3xl space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
              Ready to build the future{" "}
              <span className="text-blue-100">together?</span>
            </h2>
            <p className="text-xl text-blue-50 font-medium">
              Join hundreds of industry leaders who have already transformed
              their businesses with us.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="h-16 px-10 rounded-2xl bg-white text-blue-600 hover:bg-blue-50 font-black text-lg gap-3 shadow-xl"
                asChild
              >
                <Link href="/contact">
                  Work With Us <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-16 px-10 rounded-2xl border-2 border-blue-400 text-white hover:bg-blue-500 font-black text-lg"
                asChild
              >
                <Link href="/services">Our Solutions</Link>
              </Button>
            </div>
          </div>
          {/* Background animated circles */}
          <div className="absolute top-0 right-0 h-full w-full pointer-events-none overflow-hidden">
            <div className="absolute -top-24 -right-24 h-96 w-96 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-1000"></div>
            <div className="absolute -bottom-24 -left-24 h-96 w-96 bg-blue-400/20 rounded-full blur-3xl group-hover:bg-blue-400/30 transition-all duration-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
