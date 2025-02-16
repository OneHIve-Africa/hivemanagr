import React from "react";
import comb_frame from "~/assets/comb_frame.png";

const Empower: React.FC = () => {
  return (
    <div className="uid h-screen w-full bg-oha__green relative overflow-hidden flex justify-between">
      {/* comb 1 */}
      <div className="uid h-full relative flex-shrink-0 w-[360px]">
        <img
          src={comb_frame}
          alt="comb"
          className="scale-x-[-1] h-full w-full object-cover object-center absolute -bottom-72 uid"
        />
      </div>
      <div className="absolute w-full z-20 h-full flex justify-center">
        <div className="text-white w-full flex flex-col items-center justify-center gap-6 sm:gap-10">
          <h3 className="text-4xl sm:text-5xl font-semibold tracking-wider text-center">
            Empowering Farmers,
            <br /> <br /> One Hive at a Time
          </h3>
          <h4 className="text-lg sm:text-2xl text-center lg:w-[840px] tracking-wider">
            Whether you're a seasoned beekeeper or just starting out, this
            platform is designed to support your journey every step of the way.
          </h4>
        </div>
      </div>
      {/* comb 2 */}
      <div className="uid h-full relative flex-shrink-0 w-[360px]">
        <img
          src={comb_frame}
          alt="comb"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Empower;
