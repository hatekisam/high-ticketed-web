"use client";
import React, { useState } from "react";
import FileInput from "./ImageInput";

const UploadDesc = ({ next, back }: { next: () => void; back: () => void }) => {
  const [selectedImage, setSelectedImage] = useState<any>();
  return (
    <div className="">
      <p>Upload the description of the website to be built in doc format</p>
      <FileInput setSelectFile={setSelectedImage} />
      <div className="flex justify-between">
        <button
          type="button"
          className=" bg-[#191A1D] py-3 px-5 rounded-full text-white cursor-pointer my-4"
          onClick={back}
        >
          Back
        </button>
        <button
          type="button"
          className=" bg-blue-500 py-3 px-5 rounded-full text-white cursor-pointer my-4"
          onClick={next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UploadDesc;
