import { NavbarDefault } from 'kadesh/components/navbar';
import { HeroSection } from 'kadesh/components/sections/hero';
import { AboutSection } from 'kadesh/components/sections/about';
import { ServicesSection } from 'kadesh/components/sections/services';
import { DoctorsSection } from 'kadesh/components/sections/doctors';
import { TestimonialsSection } from 'kadesh/components/sections/testimonials';
import { ScheduleSection } from 'kadesh/components/sections/schedule';
import { PricingSection } from 'kadesh/components/sections/pricing';
import { LocationSection } from 'kadesh/components/sections/location';
import { FacilitiesSection } from 'kadesh/components/sections/facilities';
import { NewsletterSection } from 'kadesh/components/sections/newsletter';
import { ProposalsSection } from 'kadesh/components/sections/proposals';
import { CTASection } from 'kadesh/components/sections/cta';
import { FooterSection } from 'kadesh/components/sections/footer';

export default function HomePage() {
  return (
    <>
      <NavbarDefault />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DoctorsSection />
        <TestimonialsSection />
        <ScheduleSection />
        <PricingSection />
        <LocationSection />
        <FacilitiesSection />
        <NewsletterSection />
        <ProposalsSection />
        <CTASection />
      </main>
      <FooterSection />
    </>
  );
}
