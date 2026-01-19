"use client";

import { useFAQs } from "@/hooks/use-faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { FAQ } from "@/types/faq";
import { HelpCircle } from "lucide-react";

const FAQSkeleton = () => (
  <div className="space-y-4 max-w-3xl mx-auto">
    {[1, 2, 3, 4, 5].map((i) => (
      <Skeleton key={i} className="h-16 w-full rounded-xl" />
    ))}
  </div>
);

const FaqSection = () => {
  const { data: faqs, isLoading, isError } = useFAQs();

  if (isLoading) {
    return (
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-md mx-auto" />
          </div>
          <FAQSkeleton />
        </div>
      </section>
    );
  }

  if (isError || !faqs || faqs.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-gray-50/50" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg mb-2">
            <HelpCircle className="h-6 w-6 text-primary mr-2" />
            <span className="text-sm font-bold text-primary uppercase tracking-widest">
              Learning Support
            </span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Everything you need to{" "}
            <span className="text-primary italic">know</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Find answers to common questions about our curriculum, mentorship,
            and community.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq: FAQ) => (
              <AccordionItem
                key={faq.id}
                value={`item-${faq.id}`}
                className="border-none bg-white rounded-lg px-8 shadow-sm hover:shadow-md transition-all duration-300 mb-4"
              >
                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
