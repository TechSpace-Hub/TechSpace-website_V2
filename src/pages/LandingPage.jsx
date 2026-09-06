import Hero from "../components/Hero";
import BuildManageDeploy from "../components/BuildManageDeploy";
import WhoItsFor from "../components/WhoItsFor";
import Community from "../components/Community";
import Events from "../components/Events";
import Gallery from "../components/Gallery";
import Stories from "../components/Stories";
import Foundry from "../components/Foundry";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <BuildManageDeploy />
      <WhoItsFor />
      <Community />
      <Events />
      <Gallery />
      <Stories />
      <Foundry />
      <FAQ />
      <Footer />
    </>
  );
}