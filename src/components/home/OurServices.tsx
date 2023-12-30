import Image from "next/image";
import React from "react";

const services = [
  {
    icon: "/images/home/system.svg",
    title: "🎨 Custom Design",
    body: "Stand out in the digital crowd with a visually stunning and professionally designed website that captures your brand essence",
  },
  {
    icon: "/images/home/recycle.svg",
    title: "🛠️ Development",
    body: "Our team of skilled developers turns designs into functional, responsive, and high-performing websites, ensuring a seamless user experience across all devices",
  },
  {
    icon: "/images/home/StaffTraining.svg",
    title: "🚀 Launch and Beyond",
    body: "We don't just stop at development. Our support continues post-launch, ensuring your website stays secure, up-to-date, and optimized for success.",
  },
];

const OurServices = () => {
  return (
    <div className=" py-20 pt-32 flex flex-col items-center justify-center">
      <div className="px-16 flex flex-col items-center justify-center">
        <p className="font-bold text-4xl my-3">
          Our <span className="text-blue-500">Services</span>
        </p>
        <h3 className="font-mont font-medium text-lg md:text-xl text-center">
          Opt for [Institution Name] for unique, standout websites. Our
          commitment to creative customization, innovation, and seamless
          collaboration ensures maximum impact in the digital realm.
        </h3>
      </div>
      <div className="px-20 flex justify-between gap-10 items-center my-10">
        {services.map((item: any, index: number) => {
          return (
            <div key={index} className="flex flex-col items-center gap-4 pt-5 relative">
              <Image
                src={item.icon}
                alt={item.title}
                width={100}
                height={100}
                className="z-40"
              />
              <div className="animate-pulse absolute top-1 w-32 h-32 rounded-full bg-[#191A1D]"></div>
              <p className="text-2xl">{item.title}</p>
              <p className="text-sm">{item.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;
