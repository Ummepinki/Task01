import React from "react";

const Summary = () => {
  return (
    <>
      <div className="bg-white grid grid-cols-3  mt-20 justify-center items-center">
        <div className="text-center">
          <p className="text-center text-[48px] font-semibold text-[#18063C]">
            15k+
          </p>
          <p className="text-[18px] text-[#404040]">Active User</p>
        </div>
        <div className="text-center">
          <p className="text-center text-[48px] font-semibold text-[#18063C]">
            30k+
          </p>
          <p className="text-[18px] text-[#404040]">Total Download</p>
        </div>
        <div className="text-center">
          <p className="text-center text-[48px] font-semibold text-[#18063C]">
            10k+
          </p>
          <p className="text-[18px] text-[#404040]">Customer</p>
        </div>
      </div>
    </>
  );
};

export default Summary;
