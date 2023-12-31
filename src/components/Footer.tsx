import Link from "next/link";
import React from "react";

const Footer = () => {
  const routes = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];
  return (
    <div>
      <div className="bg-[#121316] px-16 py-10 text-white flex justify-between">
        <p className="text-2xl font-bold">HTicketed Web</p>
        <div className="flex gap-10 items-center">
          <div>
            <p className="font-bold">Legal Information</p>
            {routes.map((route: any, index: number) => {
              return (
                <Link key={index} href={route.href} className="block">
                  {route.title}
                </Link>
              );
            })}
          </div>
          <div>
            <p className="font-bold">Contacts</p>
            <ul className="list-disc">
              <li>hticketedweb@gmail.com</li>
              <li>1-505-699-3768</li>
              <li>Albuquerque, New Mexico</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-[#191A1D] px-20 py-3 text-gray-400">
        <p>www.highticketedweb.com</p>
        <p>
          Copyright © {new Date().getFullYear()} HTicketed. All Rights Reserved
        </p>
        <p>+252343413494</p>
      </div>
    </div>
  );
};

export default Footer;
