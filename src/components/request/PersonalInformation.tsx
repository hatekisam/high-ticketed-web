import React from "react";

const PersonalInformation = () => {
  return (
    <div className="w-[100%] flex justify-between flex-col items-center gap-[1rem]">
      <div className="w-[100%] flex justify-between flex-col items-center gap-[2rem] sm:gap-[1rem]">
        <div className="w-[100%] flex justify-between items-center ss:flex-col gap-[1rem]">
          <input
            type="text"
            name="fullname"
            className="bg-[#4b89b833] px-[2rem] py-[1rem] w-[100%] rounded-[10px] outline-none"
            placeholder="Full names"
          />
          <input
            type="text"
            name="user_email"
            className="bg-[#4b89b833] px-[2rem] py-[1rem] w-[100%] rounded-[10px] outline-none"
            placeholder="Email"
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="bg-[#4b89b833] px-[2rem] py-[1rem] w-[100%] rounded-[10px] outline-none"
        />
        <input
          type="submit"
          value="Send Message"
          className="w-full bg-blue-500 py-3 rounded-full text-white cursor-pointer"
        />
      </div>
    </div>
  );
};

export default PersonalInformation;
