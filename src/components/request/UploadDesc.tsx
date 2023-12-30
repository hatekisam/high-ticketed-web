import React from "react";

const UploadDesc = ({ next }: { next: () => void }) => {
  return (
    <div className="">
      <div className="bg-blue-500 rounded-md h-[200px] w-full"></div>
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
