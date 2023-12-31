import Image from "next/image";
import React from "react";
import gif from "@/assets/landing.gif";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="px-5 sm:px-8 md:px-10 lg:px-16 py-32 flex justify-between">
      <div className="w-[60%]">
        <p className="text-6xl">
          Crafting Your <span className="text-blue-500">Digital Presence</span>{" "}
          : Where <span className="text-blue-500">Ideas</span> Become{" "}
          <span className="text-blue-500">Websites</span>.
        </p>
        <p className="my-4">
          Welcome to High Ticketed Web, where creativity meets technology. We
          specialize in turning your ideas into visually stunning and highly
          functional websites. Join us on the journey to create a captivating
          online presence that truly reflects the essence of your brand.
        </p>
        <Link
          href={"/request"}
          className="bg-blue-500  px-10 py-2 rounded-full my-5 text-xl   hover:scale-110 transition-all duration-500"
        >
          Get A Website
        </Link>
      </div>
      <div className="w-[40%]">
        <Image src={gif} alt="websites" />
      </div>
    </div>
  );
};

export default Landing;
