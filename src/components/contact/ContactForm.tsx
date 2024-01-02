"use client";
import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { api } from "@/utils/api/api";
import { ClipLoader } from "react-spinners";
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const schema = yup.object().shape({
    name: yup.string().required("Please provide your names"),
    email: yup
      .string()
      .email("Please provide a valid email")
      .required("Please provide your email"),
    subject: yup.string().required("Please provide the subject to your email"),
    message: yup.string().required("Please provide the message"),
  });
  const onSubmit = (data: any) => {
    setLoading(true);
    api
      .post("/contact", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <div className=" flex justify-between p-20 relative">
      <div className="w-[100%]">
        <img
          // loading="lazy"
          src="/images/contact/Person2.svg"
          alt="contact us"
          role="img"
        />
        <div className="absolute w-[8rem] h-[8rem] mdsm:w-[5rem] mdsm:h-[5rem] rounded-full top-[0]  z-[-1] bg-veryLightYellow blob1 pulse"></div>
        <div className="absolute w-[8rem] h-[8rem] mdsm:w-[5rem] mdsm:h-[5rem] rounded-full bottom-[4%]  z-[-1] bg-veryLightGreen blob2 pulse"></div>
        <div className="absolute w-[6rem] h-[6rem] mdsm:w-[5rem] mdsm:h-[5rem] rounded-full top-0 left-[32%] z-[-1] bg-ReddishOrange pulse red-bounce"></div>
      </div>
      <div className="w-[100%] flex justify-between flex-col items-center gap-[1rem]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[100%] flex justify-between flex-col items-center gap-[2rem] sm:gap-[1rem]"
        >
          <div className="w-[100%] flex justify-between items-center ss:flex-col gap-[1rem]">
            <input
              type="text"
              className="bg-[#4b89b833] px-[2rem] py-[1rem] w-[100%] rounded-[10px] outline-none"
              placeholder="Full names"
              {...register("name")}
            />
            <input
              type="text"
              {...register("email")}
              className="bg-[#4b89b833] px-[2rem] py-[1rem] w-[100%] rounded-[10px] outline-none"
              placeholder="Email"
            />
          </div>
          <p className="text-red-500">
            {errors.name?.message || errors.email?.message}
          </p>
          <input
            type="text"
            {...register("subject")}
            placeholder="Subject"
            className="bg-[#4b89b833] px-[2rem] py-[1rem] w-[100%] rounded-[10px] outline-none"
          />
          <p className="text-red-500">{errors.subject?.message}</p>
          <textarea
            {...register("message")}
            placeholder="Message"
            className="bg-[#4b89b833] w-[100%] resize-none h-[17em] p-[1rem] rounded-[10px] outline-none"
          ></textarea>
          <p className="text-red-500">{errors.message?.message}</p>
          {loading ? (
            <div className="w-full bg-blue-500 py-3 rounded-full text-white cursor-pointer flex items-center justify-center">
              <ClipLoader color="white" size={15} />
            </div>
          ) : (
            <input
              type="submit"
              value="Send Message"
              className="w-full bg-blue-500 py-3 rounded-full text-white cursor-pointer"
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
