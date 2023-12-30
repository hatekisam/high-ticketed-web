"use client";
import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import PersonalInformation from "@/components/request/PersonalInformation";
import UploadDesc from "@/components/request/UploadDesc";

const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
  },
];

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
  return (
    <div className="w-full p-20 h-screen overflow-hidden flex items-center justify-center bg-[#121316] text-gray-400">
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        className="w-full h-[80%]"
      >
        <Step>
          <StepLabel className="text-gray-400" sx={{ color: "white" }}>
            <p className="text-gray-400">Personal Information</p>
          </StepLabel>
          <StepContent>
            <PersonalInformation next={handleNext} />
          </StepContent>
        </Step>
        <Step>
          <StepLabel className="text-gray-400" sx={{ color: "white" }}>
            <p className="text-gray-400">Website Description</p>
          </StepLabel>
          <StepContent>
            <UploadDesc next={handleNext} />
          </StepContent>
        </Step>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel optional={index === 2 ? <p>Last step</p> : null}>
              {step.label}
            </StepLabel>
            <StepContent>
              <p>{step.description}</p>
              <div>
                <div>
                  <button onClick={handleNext}>
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </button>
                  <button disabled={index === 0} onClick={handleBack}>
                    Back
                  </button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default RequestWeb;
