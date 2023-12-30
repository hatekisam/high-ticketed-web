import React from "react";

const PersonalInformation = ({ next }: { next: () => void }) => {
  return (
    <div className="w-full flex justify-between flex-col items-center gap-[1rem]">
      <p className="text-4xl">Personal Information</p>
      <p>This is the information describing you</p>
      <div className="w-full flex justify-between flex-col items-center gap-[2rem] sm:gap-[1rem]">
        <div className="w-full flex justify-between items-center ss:flex-col gap-[1rem]">
          <input
            type="text"
            className="bg-[#4b89b833] px-[2rem] py-[1rem] w-full rounded-[10px] outline-none"
            placeholder="First Name"
          />
          <input
            type="text"
            className="bg-[#4b89b833] px-[2rem] py-[1rem] w-full rounded-[10px] outline-none"
            placeholder="Last Name"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-[1rem] w-full">
          <input
            type="text"
            className="bg-[#4b89b833] px-[2rem] py-[1rem]  rounded-[10px] outline-none w-[70%]"
            placeholder="Email"
          />
          <input
            type="text"
            className="bg-[#4b89b833] px-[2rem] py-[1rem] w-[30%] rounded-[10px] outline-none"
            placeholder="Phone"
          />
        </div>
        <input
          type="text"
          placeholder="Address"
          className="bg-[#4b89b833] px-[2rem] py-[1rem] w-full rounded-[10px] outline-none"
        />
        <div className=" w-full flex flex-row justify-end items-center">
          <button
            type="button"
            className="px-10 bg-blue-500 py-3 rounded-full text-white cursor-pointer"
            onClick={next}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
