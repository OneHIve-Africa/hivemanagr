import React from "react";
import combpng from "~/assets/comb.png";

const EmpowerSection = () => {
  return (
    <div className="w-full bg-oha__green p-5 pb-20 sm:px-10 px-[198px] relative h-screen uid">
      <div className="uid"></div>
      <div className="absolute right-0 bottom-0 pb-10">
        <img
          src={combpng}
          alt="comb"
          className=""
        />
      </div>
    </div>
  );
};

export default EmpowerSection;
