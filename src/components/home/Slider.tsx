"use client";

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SLIDE_DATA = [
  {
    icon: "/images/home/slide-icon-1.png",
    title: "20 Projects",
    text: `Done in ${new Date().getFullYear()}`,
  },
  {
    icon: "/images/home/slide-icon-2.png",
    title: "120 Customers",
    text: "Who are satisfied",
  },
  {
    icon: "/images/home/slide-icon-3.png",
    title: "$ 20000",
    text: `Income in ${new Date().getFullYear()}`,
  },
];

const SliderSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="pb-52 hidden lg:block">
      <div className="absolute w-[1900px] right-0">
        <div
          className="h-[230px] !bg-cover !bg-no-repeat w-full flex items-center relative"
          style={{
            background: "url(/images/home/slider-bg.png)",
          }}
        >
          <div className="absolute right-0 w-[800px] h-fit">
            <Slider arrows={false} {...settings}>
              {SLIDE_DATA.map((data, index) => (
                <div
                  className="!flex items-center gap-6 text-black"
                  key={index}
                >
                  <img src={data.icon} />
                  <div className="flex flex-col gap-2.5">
                    <h1 className="text-2xl font-monument">{data.title}</h1>
                    <p className="">{data.text}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
