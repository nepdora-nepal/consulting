import ServicesHeader from "@/components/services/services-header";
import ServicesManager from "@/components/services/services-manager";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <ServicesHeader />
        <ServicesManager />
      </div>
    </div>
  );
}
