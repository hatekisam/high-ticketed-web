import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
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
    <div className="text-white fixed left-0 top-0 bg-[#121316] w-full flex justify-between p-4 z-20">
      <p className="text-2xl">HTicketed Web</p>
      <div>
        {routes.map((route: any, index: number) => {
          return (
            <Link href={route.href} className="text-sm font-bold px-5">
              {route.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
