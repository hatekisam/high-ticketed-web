import React from "react";

const ContactForm = () => {
  return (
    <div className=" flex justify-between p-20 relative">
      <div className="w-[100%]">
        <img
          loading="lazy"
          src="/images/contact/Person2.svg"
          alt="Libblio"
          role="img"
        />
        <div className="absolute w-[8rem] h-[8rem] mdsm:w-[5rem] mdsm:h-[5rem] rounded-full top-[0]  z-[-1] bg-veryLightYellow blob1 pulse"></div>
        <div className="absolute w-[8rem] h-[8rem] mdsm:w-[5rem] mdsm:h-[5rem] rounded-full bottom-[4%]  z-[-1] bg-veryLightGreen blob2 pulse"></div>
        <div className="absolute w-[6rem] h-[6rem] mdsm:w-[5rem] mdsm:h-[5rem] rounded-full top-0 left-[32%] z-[-1] bg-ReddishOrange pulse red-bounce"></div>
      </div>
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
          <textarea
            name="message"
            placeholder="Message"
            className="bg-[#4b89b833] w-[100%] resize-none h-[17em] p-[1rem] rounded-[10px] outline-none"
          ></textarea>
          <input
            type="submit"
            value="Send Message"
            className="w-full bg-blue-500 py-3 rounded-full text-white cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
