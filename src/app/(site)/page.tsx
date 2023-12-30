import Landing from "@/components/home/Landing";
import SliderSection from "@/components/home/Slider";

export default function Home() {
  return (
    <div className="bg-[#121316] pt-20 text-white">
      <Landing />
      <SliderSection />
    </div>
  );
}
