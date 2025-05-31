import Navbar from "./components/navbar";
import SeeOffers from "./components/see-offers";
import HeroSection from "./components/hero-section";
import Latest from "./components/latest";
import Help from "./components/help";
import MoreReason from "./components/more-reason";
import Accessories from "./components/accessories";
import Sound from "./components/sound";
import Experience from "./components/experience";
import Special from "./components/special";
import QuickLinks from "./components/quick-links";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SeeOffers />
      <HeroSection />
      <Latest />
      <Help />
      <MoreReason />
      <Accessories />
      <Sound />
      <Experience />
      <Special />
      <QuickLinks />
      <Footer />
    </div>
  );
}
