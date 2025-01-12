import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import farmpng from "~/assets/honey-farm-landscape.png";
import toybee from "~/assets/toybee.png";

type Props = {};

const WhyInvestSectipon: React.FC<Props> = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
    });
  }, []);

  return (
    <div className="uid h-fit w-full px-10 md:px-[198px] flex flex-col py-28 gap-y-20">
      {/* Keep Investing Section */}
      <div className="uid grid grid-cols-1 lg:grid-cols-5 items-center">
        {/* Content Card */}
        <div
          className="col-span-3 relative"
          data-aos="fade-right" // Trigger fade-right animation
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-snug">
            Why Invest in <br /> Beekeeping?
          </h1>
          <div className="absolute -top-20 left-96">
            <img src={toybee} alt="toybee" />
          </div>
          <p className="text-lg sm:text-xl md:text-2xl font-normal leading-loose mt-10 w-full lg:w-[500px] mb-10">
            Invest in a hive today and watch your investment grow over six
            months to a year while supporting rural farmers. Be a part of the
            change that promotes sustainable agriculture, combats climate
            change, and drives economic empowerment.
          </p>
        </div>
        {/* Image */}
        <div
          className="col-span-2"
          data-aos="fade-left" // Trigger fade-left animation
        >
          <img src={farmpng} alt="farm" />
        </div>
      </div>

      {/* Catalyst Section */}
      <div className="uid grid grid-cols-1 lg:grid-cols-5">
        {/* Image */}
        <div
          className="col-span-2 order-1"
          data-aos="fade-right" // Trigger fade-right animation
        >
          <img src={farmpng} alt="farm" />
        </div>
        {/* Content Card */}
        <div
          className="col-span-3 order-2 grid gap-5 mt-5"
          data-aos="fade-left" // Trigger fade-left animation
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-snug">
            Be a Catalyst for <br /> Change
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-normal leading-loose mt-5 w-full lg:w-[500px] mb-10">
            In the heart of Africa, there{"’"}s a silent revolution taking{" "}
            place, one that nurtures the earth, empowers communities, and
            creates a lasting impact. When you join One Hive Africa, you{"’"}re
            not just investing in beekeeping, you{"’"}re investing in people, in
            nature and in a future where both can thrive together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyInvestSectipon;
