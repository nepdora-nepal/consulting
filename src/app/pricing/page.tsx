import PricingHeader from "@/components/pricing/pricing-header";
import PricingList from "@/components/pricing/pricing-list";
import SupportSection from "@/components/pricing/support-section";
import FaqSection from "@/components/home/faq";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <PricingHeader />
        <PricingList />
        <SupportSection />
      </div>

      {/* FAQ Section integrated at the bottom of pricing */}
      <div className="border-t border-gray-100">
        <FaqSection />
      </div>
    </div>
  );
}
