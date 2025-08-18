import Feature from "@/components/feature";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import MobileConvenience from "@/components/mobileConvenience";
import Navbar from "@/components/navbar";
import Testimonials from "@/components/testimonials";
import VideoIntro from "@/components/videoIntro";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoIntro />
      <Feature />
      <MobileConvenience />
      <Testimonials />
      <Footer />
    </>
  );
}
