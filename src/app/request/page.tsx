"use client";
import React, { useState } from "react";
import PersonalInformation from "@/components/request/PersonalInformation";
import UploadDesc from "@/components/request/UploadDesc";
import Image from "next/image";
import close from "@/assets/close.svg";
import Finish from "@/components/request/Finish";

const RequestWeb = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const tabs = [
    <PersonalInformation key={0} next={handleNext} />,
    <UploadDesc key={1} next={handleNext} back={handleBack} />,
    <Finish key={2} next={handleNext} back={handleBack} />,
  ];
  return (
    <div className="w-full p-20 h-screen overflow-hidden flex items-center justify-center bg-[#121316] text-gray-400">
      <button
        onClick={() => window.history.back()}
        className="absolute top-10 right-10 hover:scale-110 transition-all duration-500"
      >
        <Image src={close} alt="" />
      </button>
      <div className="w-[60vw]">{tabs[activeStep]}</div>
    </div>
  );
};

export default RequestWeb;
