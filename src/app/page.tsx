import Hero from "@/components/home/hero";
import ClientMarquee from "@/components/home/client-marquee";
import About from "@/components/home/about";
import Services from "@/components/home/services";
import Portfolio from "@/components/home/portfolio";
import Appointment from "@/components/home/appointment";
import Testimonials from "@/components/home/testimonials";
import Blogs from "@/components/home/blogs";
import FaqSection from "@/components/home/faq";

const HomePage: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <ClientMarquee />
      <About />
      <Services />
      <Appointment />
      <Portfolio />
      <Testimonials />
      <Blogs />
      <FaqSection />
    </main>
  );
};

export default HomePage;
