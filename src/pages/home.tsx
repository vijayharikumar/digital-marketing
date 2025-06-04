import HeroSection from "../components/hero-section";
import PortfolioSection from "../components/portfolio-section";
import MarketerSection from "../components/marketer-section";
import ServiceSection from "../components/service-section";
import ClientSection from "../components/client-section";
import ContactSection from "../components/contact-section";
import MembersSection from "../components/members.section";
import PromoSection from "../components/promo-section";
import GetInTouch from "../components/get-in-touch";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className="font-sans mx-auto">
      <HeroSection />
      <ServiceSection />
      <MarketerSection />
      <PortfolioSection />
      <ClientSection />
      <ContactSection />
      <MembersSection />
      <PromoSection />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
