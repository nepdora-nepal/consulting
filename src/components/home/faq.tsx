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
          <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-lg mb-2">
            <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">
              Support
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got questions? We have answers. If you can&apos;t find what
            you&apos;re looking for, feel free to reach out to our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq: FAQ) => (
              <AccordionItem
                key={faq.id}
                value={`item-${faq.id}`}
                className="border-none bg-white rounded-2xl px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
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
