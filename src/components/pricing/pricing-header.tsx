import { Badge } from "@/components/ui/badge";

export default function PricingHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
      <Badge className="bg-primary/10 text-primary border-none px-6 py-2.5 rounded-lg font-black text-sm hover:bg-primary/20 tracking-widest uppercase">
        Learning Plans
      </Badge>
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-gray-900 leading-[1.1]">
        Simple & Transparent{" "}
        <span className="text-primary italic">Investment</span>
      </h1>
      <p className="text-xl text-gray-600 font-medium leading-relaxed">
        Choose the perfect plan to accelerate your learning journey. Focus on
        your growth without hidden fees.
      </p>
    </div>
  );
}
