import Image from "next/image";
import React from "react";

const people = [
  {
    icon: "/images/contact/person.avif ",
    title: "Mugisha Yves",
    body: "Stand out in the digital crowd with a visually stunning and professionally designed website that captures your brand essence",
  },
  {
    icon: "/images/contact/person.avif ",
    title: "Mugisha Yves",
    body: "Our team of skilled developers turns designs into functional, responsive, and high-performing websites, ensuring a seamless user experience across all devices",
  },
  {
    icon: "/images/contact/person.avif ",
    title: "Mugisha Yves",
    body: "We don't just stop at development. Our support continues post-launch, ensuring your website stays secure, up-to-date, and optimized for success.",
  },
];

const OurTeam = () => {
  return (
    <div className=" py-20 pt-32 flex flex-col items-center justify-center">
      <div className="px-16 flex flex-col items-center justify-center">
        <p className="font-bold text-4xl my-3">
          Our <span className="text-blue-500">Team</span>
        </p>
        <h3 className="font-mont font-medium text-lg md:text-xl text-center">
          A team of dedicated developers willing to make your website
        </h3>
      </div>
      <div className="px-20 flex justify-between gap-10 items-center my-10">
        {people.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-4 p-4 relative bg-[#121316]  justify-center rounded-lg"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={200}
                height={100}
                className="z-40 "
              />
              <p className="text-2xl">{item.title}</p>
              <p className="text-sm">{item.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurTeam;
