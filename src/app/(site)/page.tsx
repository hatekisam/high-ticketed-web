import CompaniesUsingUs from "@/components/home/CompaniesUsingUs";
import Landing from "@/components/home/Landing";
import OurServices from "@/components/home/OurServices";
import RequestWeb from "@/components/home/RequestWeb";
import SliderSection from "@/components/home/Slider";
import Testimonials from "@/components/home/Testimonials";
import WhyUs from "@/components/home/WhyUs";

export default function Home() {
  return (
    <div className="bg-[#121316] pt-20 text-white w-screen overflow-x-hidden">
      <Landing />
      <SliderSection />
      <WhyUs />
      <CompaniesUsingUs />
      <OurServices />
      <Testimonials />
      <RequestWeb />
    </div>
  );
}
