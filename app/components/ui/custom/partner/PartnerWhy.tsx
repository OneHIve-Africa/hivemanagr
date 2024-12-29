import React, { useState } from "react";
import combpng from "~/assets/comb.png";
import back from "~/assets/back.png";
import { ChevronLeftCircleIcon, ChevronRightCircleIcon } from "lucide-react";

const PartnerWhy: React.FC = () => {
  const carouselContent = [
    {
      heading: "Drive Real-World Impact",
      body: "Your partnership will directly empower communities, offering them the tools and training needed to thrive. Every hive you help establish is a step toward economic independence for rural farmers.",
    },
    {
      heading: "Revolutionizing Beekeeping",
      body: "Join us in revolutionizing beekeeping practices while creating sustainable income opportunities for rural communities across Africa.",
    },
    {
      heading: "Tradition Meets Technology",
      body: "Experience the perfect blend of tradition and technology as we work together to protect our precious pollinators and enhance food security.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div
      className="w-full bg-oha__yellow px-6 sm:px-10 lg:px-[198px] py-20 sm:py-28 relative h-auto sm:h-[700px] uid text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${back})` }}
    >
      <div className="uid text-white flex flex-col gap-6 lg:gap-48 -mt-14">
        {/* controls */}
        <div className="flex justify-between items-center w-full">
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === 0 ? carouselContent.length - 1 : prev - 1
              )
            }
            className="text-white hover:text-oha__green transition-colors"
          >
            <ChevronLeftCircleIcon
              size={52}
              strokeWidth={2}
              fill="white"
              className="stroke-oha__yellow"
            />
          </button>
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === carouselContent.length - 1 ? 0 : prev + 1
              )
            }
            className="text-white hover:text-oha__green transition-colors"
          >
            <ChevronRightCircleIcon
              size={52}
              strokeWidth={2}
              fill="white"
              className="stroke-oha__yellow"
            />
          </button>
        </div>

        {/* content */}
        <div className="grid gap-6 lg:gap-10">
          <h1 className="font-semibold text-3xl sm:text-5xl leading-snug">
            Why Partner with One Hive Africa?
          </h1>
          <div className="flex flex-col gap-6 sm:gap-10 text-lg sm:text-2xl">
            <div className="flex flex-col gap-4">
              <p className="text-xl sm:text-2xl font-medium transition-all duration-1000 ease-in-out opacity-0 animate-fadeIn leading-snug lg:w-[750px] lg:h-[100px]">
                {carouselContent[currentIndex].heading}:{" "}
                <span className="text-lg sm:text-xl transition-all duration-1000 ease-in-out opacity-0 animate-fadeIn font-light ">
                  {carouselContent[currentIndex].body}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-4 justify-start">
              {carouselContent.map((_, index) => (
                <React.Fragment key={index}>
                  <button
                    className={`${
                      index === currentIndex
                        ? "bg-transparent text-oha__green"
                        : "bg-transparent text-white"
                    } flex items-center justify-center font-light transition-colors`}
                    onClick={() => setCurrentIndex(index)}
                  >
                    {index + 1}
                  </button>
                  {index < carouselContent.length - 1 && (
                    <span className="bg-white w-10 h-0.5"></span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 pb-6 sm:pb-10">
        <img src={combpng} alt="comb" className="h-32 sm:h-52 lg:h-72" />
      </div>
    </div>
  );
};

export default PartnerWhy;
