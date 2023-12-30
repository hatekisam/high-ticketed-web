import React from "react";

const Finish = ({ next, back }: { next: () => void; back: () => void }) => {
  return (
    <div className="w-full flex justify-between flex-col items-center gap-[1rem]">
      <p className="text-4xl">Finish</p>
      <p>Send the Order to the team of HTicketed Web</p>
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
          Send
        </button>
      </div>
    </div>
  );
};

export default Finish;
