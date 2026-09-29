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
import { useEffect } from "react";
import { preloadImages } from "../utils/preloadImages";



export default function LandingPage() {
  useEffect(() => {
    const run = () => preloadImages();
    if ("requestIdleCallback" in window) requestIdleCallback(run);
    else setTimeout(run, 500);
  }, []);

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