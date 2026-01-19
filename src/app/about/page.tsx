import HeroSection from "@/components/about/hero-section";
import StorySection from "@/components/about/story-section";
import ValuesSection from "@/components/about/values-section";
import TeamSection from "@/components/about/team-section";
import CTASection from "@/components/about/cta-section";
import { siteConfigAPI } from "@/services/api/site-config";

export default async function AboutPage() {
  const siteConfig = await siteConfigAPI.getSiteConfig();

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StorySection siteConfig={siteConfig} />
      <ValuesSection />
      <TeamSection />
      <CTASection />
    </div>
  );
}
