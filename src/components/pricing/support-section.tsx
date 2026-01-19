import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SupportSection() {
  return (
    <div className="mt-32 max-w-5xl mx-auto">
      <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-gray-200/50 flex flex-col md:flex-row items-center gap-12 border border-gray-50">
        <div className="h-20 w-20 rounded-[2rem] bg-blue-600 flex items-center justify-center shrink-0 shadow-xl shadow-blue-200">
          <HelpCircle className="h-10 w-10 text-white" />
        </div>
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-3xl font-black tracking-tighter text-gray-900">
            Need a custom plan?
          </h3>
          <p className="text-xl text-gray-500 leading-relaxed font-medium">
            Looking for something more tailored to your specific enterprise
            requirements? Our expert team can design a bespoke package just for
            you.
          </p>
        </div>
        <Button
          size="lg"
          variant="outline"
          className="rounded-2xl h-16 px-10 border-2 border-gray-100 font-black text-lg hover:bg-gray-50 shrink-0"
          asChild
        >
          <Link href="/contact">Let&apos;s Talk</Link>
        </Button>
      </div>
    </div>
  );
}
