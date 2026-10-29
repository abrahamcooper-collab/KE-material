import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import FeatureBar from "@/app/components/FeatureBar";
import Services from "@/app/components/Services";
import CTABanner from "@/app/components/CTABanner";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import Equipment from "@/app/components/Equipment";
import HowItWorks from "@/app/components/HowItWorks";
import ServiceArea from "@/app/components/ServiceArea";
import ContactForm from "@/app/components/ContactForm";
import FAQ from "@/app/components/FAQ";
import CTAFinal from "@/app/components/CTAFinal";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureBar />
      <Services />
      <CTABanner />
      <WhyChooseUs />
      <Equipment />
      <HowItWorks />
      <ServiceArea />
      <ContactForm />
      <FAQ />
      <CTAFinal />
      <Footer />
    </>
  );
}
