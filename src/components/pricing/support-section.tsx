import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SupportSection() {
  return (
    <div className="mt-32 max-w-5xl mx-auto">
      <div className="glass rounded-lg p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-white/40">
        <div className="h-24 w-24 rounded-lg bg-primary flex items-center justify-center shrink-0 shadow-2xl shadow-primary/20">
          <HelpCircle className="h-12 w-12 text-white" />
        </div>
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-3xl font-black tracking-tighter text-gray-900">
            Need a custom learning plan?
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            Looking for a tailored curriculum or enterprise-wide training? Our
            education experts can design a bespoke learning experience just for
            you.
          </p>
        </div>
        <Button
          size="lg"
          variant="outline"
          className="rounded-2xl h-16 px-10 border-2 border-primary/10 font-extrabold text-lg hover:bg-primary/5 hover:text-primary hover:border-primary/20 shrink-0 transition-all"
          asChild
        >
          <Link href="/contact">Contact Admissions</Link>
        </Button>
      </div>
    </div>
  );
}
