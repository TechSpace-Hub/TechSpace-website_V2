import Hero from "../components/home/Hero";
import LearningSection from "../components/home/LearningSection";
import BuiltFor from "../components/home/BuiltFor";
import CommunitySection from "../components/home/CommunitySection";
import Testimonial from "../components/home/Testimonial";
import Ecosystem from "../components/home/Ecosystem";
import UpcomingEvents from "../components/home/UpcomingEvents";
import FAQSection from "../components/home/FAQSection";
import EventsGallery from "../components/home/EventGallery";

function Home() {
  return (
    <>
      <Hero />
      <LearningSection />
      <BuiltFor />
      <CommunitySection />
     <EventsGallery/>
      <Testimonial />
      <Ecosystem />
      <UpcomingEvents />
      <FAQSection />
    </>
  );
}

export default Home;