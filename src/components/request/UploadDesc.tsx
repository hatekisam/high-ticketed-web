"use client";
import React, { useState } from "react";
import FileInput from "./ImageInput";

const UploadDesc = ({ next }: { next: () => void }) => {
  const [selectedImage, setSelectedImage] = useState<any>();
  return (
    <div className="">
      <p>Upload the description of the website to be built in  doc format</p>
      <FileInput setSelectFile={setSelectedImage} />
      <button
        type="button"
        className="w-full bg-blue-500 py-3 rounded-full text-white cursor-pointer my-4"
        onClick={next}
      >
        Next
      </button>
    </div>
  );
};

export default UploadDesc;
