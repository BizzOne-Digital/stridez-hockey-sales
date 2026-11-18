import { Hero } from "@/components/home/Hero";
import { Categories } from "@/components/home/Categories";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Audience } from "@/components/home/Audience";
import { AboutPreview } from "@/components/home/AboutPreview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FAQ } from "@/components/home/FAQ";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <WhyChooseUs />
      <Audience />
      <AboutPreview />
      <HowItWorks />
      <FAQ />
      <ContactCTA />
    </>
  );
}
