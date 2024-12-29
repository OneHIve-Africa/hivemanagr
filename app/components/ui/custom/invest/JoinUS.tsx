import React from "react";
import back from "~/assets/back.png";
import { Button } from "../../button";

const JoinUS: React.FC = () => {
  return (
    <div className="px-5 md:px-10 lg:px-[198px] py-16 uid ">
      <div
        className="uid h-auto md:h-[800px] px-5 md:px-[198px] py-10 bg-oha__green bg-cover bg-center flex justify-center items-center text-white rounded-lg"
        style={{ backgroundImage: `url(${back})` }}>
        <div className="flex flex-col justify-center items-center uid gap-6 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold w-full">
            Join Us in Making an Impact
          </h1>
          <h4 className="text-lg md:text-xl -mt-2">
            Financial growth with social impact.
          </h4>
          <p className="text-base md:text-lg leading-6 md:leading-8">
            At One Hive Africa, we provide a unique opportunity to grow your
            wealth while supporting a cause that matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
            <Button className="bg-white text-oha__green rounded-md shadow font-semibold text-lg px-8 py-4 md:px-10 md:py-7">
              Invest
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUS;
