import React from "react";
import beekeeperworking from "~/assets/hands-different.png";

const PartnerHero: React.FC = () => {
  return (
    <div
      className="uid min-h-screen w-full px-4 sm:px-6 md:px-10 lg:px-[198px] py-2 relative 
        bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${beekeeperworking})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40">
        <div className="relative w-full h-full uid flex items-center justify-center p-4 sm:p-6">
          <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[70%] text-white">
            <h1
              className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl 
              font-semibold leading-tight sm:leading-tight text-center"
            >
              Become a Catalyst for Change: Partner with One Hive Africa
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerHero;
