import React from "react";
import { Button } from "../../button";
import back from "~/assets/beekeeper-lady.png";

const PartnerStories: React.FC = () => {
  return (
    <div className="px-4 sm:px-5 md:px-10 lg:px-[198px] py-8 sm:py-16 uid">
      <div
        className="uid min-h-[500px] sm:h-auto md:h-[700px] px-4 sm:px-5 md:px-[120px] py-8 sm:py-10 
        bg-oha__green bg-cover bg-center flex justify-start items-end text-white rounded-lg"
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className="flex flex-col justify-center items-start uid gap-6 sm:gap-10 pb-8 sm:pb-20">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold w-full">
            Stories of Change
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg leading-5 sm:leading-6 md:leading-8 
            w-full sm:w-[500px] lg:w-[700px]"
          >
            Imagine a farmer in a remote village, who once struggled to make
            ends meet. With your help, she now manages thriving hives, providing
            for her family and contributing to the local economy. This is not
            just a story—it{"'"}s the lived experience of thousands of farmers
            who have benefited from partnerships like yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-10 w-full sm:w-auto">
            <Button
              className="text-white bg-oha__green rounded-md shadow font-semibold 
              text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-7 w-full sm:w-auto"
            >
              Partner
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerStories;
