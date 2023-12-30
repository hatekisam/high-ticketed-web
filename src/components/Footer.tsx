import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#121316] px-16 py-10 text-white flex justify-between">
        <p className="text-2xl font-bold">HTicketed Web</p>
        <div>
          <p className="font-bold">Legal Information</p>
          <p>About</p>
          <p>About</p>
          <p>About</p>
        </div>
        <div>
          <p className="font-bold">Address</p>
          <p>United States</p>
          <p>About</p>
          <p>About</p>
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
