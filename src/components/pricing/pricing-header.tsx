import { Badge } from "@/components/ui/badge";

export default function PricingHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
      <Badge className="bg-blue-50 text-blue-600 border-none px-6 py-2 rounded-full font-bold text-sm hover:bg-blue-50">
        PRICING PLANS
      </Badge>
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-gray-900 leading-[1.1]">
        Simple & Transparent <span className="text-blue-600">Pricing</span>
      </h1>
      <p className="text-xl text-gray-500 font-medium">
        Choose the perfect plan to accelerate your business growth. No hidden
        fees, ever.
      </p>
    </div>
  );
}
