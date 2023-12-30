"use client";
import React from "react";

const UploadDesc = ({ next, back }: { next: () => void; back: () => void }) => {
  return (
    <div className="w-full flex justify-between flex-col items-center gap-[1rem]">
      <p className="text-4xl">Website Description</p>
      <p>All Information regarding the website you want to be developed</p>
      <div className="w-full flex justify-between flex-col items-center gap-[2rem] sm:gap-[1rem]">
        <input
          type="text"
          placeholder="Website Name"
          className="bg-[#4b89b833] px-[2rem] py-[1rem] w-full rounded-[10px] outline-none"
        />
        <textarea
          placeholder="Description of the website"
          className="bg-[#4b89b833] w-[100%] resize-none h-[17em] p-[1rem] rounded-[10px] outline-none"
        ></textarea>
      </div>
      <div className="flex justify-between w-full">
        <button
          type="button"
          className=" bg-[#191A1D] py-3 px-10 rounded-full text-white cursor-pointer my-4"
          onClick={back}
        >
          Back
        </button>
        <button
          type="button"
          className=" bg-blue-500 py-3 px-10 rounded-full text-white cursor-pointer my-4"
          onClick={next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UploadDesc;
