import ContactHeader from "@/components/contact/contact-header";
import ContactInfo from "@/components/contact/contact-info";
import ContactForm from "@/components/contact/contact-form";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <ContactHeader />
        <div className="grid lg:grid-cols-3 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
