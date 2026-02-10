import Header from "@/components/header"
import AnnouncementsBar from "@/components/announcements-bar"
import HeroSlider from "@/components/hero-slider"
import StatsSection from "@/components/stats-section"
import BankingSolutions from "@/components/banking-solutions"
import TestimonialSlider from "@/components/testimonial-slider"
import VideoTutorials from "@/components/video-tutorials"
import AboutUs from "@/components/about-us"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

export default function Page() {
  return (
    <main>
      <Header />
      <AnnouncementsBar />
      <HeroSlider />
      <StatsSection />
      <BankingSolutions />
      <TestimonialSlider />
      <VideoTutorials />
      <AboutUs />
      <Footer />
      <Chatbot />
    </main>
  )
}
