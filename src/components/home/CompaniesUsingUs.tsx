import React from "react";

const CompaniesUsingUs = () => {
  return (
    <div className=" py-20 pt-32 flex flex-col items-center justify-center">
      <div className="px-16 flex flex-col items-center justify-center">
        <p className="font-bold text-4xl my-3">
          Companies Using <span className="text-blue-500">HTicketed Web</span>
        </p>
      </div>
      <div className="my-5 grid grid-cols-5 gap-5 w-full px-20" >
        {[...Array(15)].map((_, index) => (
          <div className="px-5 py-10 rounded-xl bg-[#191A1D] text-white text-4xl font-bold flex items-center justify-center"> Logo</div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesUsingUs;
