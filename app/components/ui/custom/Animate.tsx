import React, { useEffect, useRef } from "react";
import investImage from "~/assets/invest.png";
import { Button } from "../button";
type Props = {
  className?: string;
};

const Animate: React.FC<Props> = ({ className }) => {
  return (
    <div className="uid h-fit w-full px-10 md:px-[198px] flex flex-col py-28 gap-10">
      <h1 className="w-full text-center text-6xl font-semibold">
        Invest in Nature, Reap the Rewards
      </h1>

      <div>
        {/* card 1 */}
        <div className="flex justify-between bg-oha__yellow rounded-lg shadow-md text-white p-10 pt-20">
          <div className="">
            <h1 className="text-5xl font-semibold">For Investors</h1>
            <p className="text-2xl leading-8 mt-7 font-normal">
              Discover the lucrative world of beekeeping investments. <br />{" "}
              With detailed insights and data, our platform offers you <br /> an
              opportunity to grow your wealth while making a <br /> positive
              impact.
            </p>
            <Button className="bg-oha__green text-white rounded-md shadow font-semibold text-lg px-10 py-7 mt-7">
              Invest
            </Button>
          </div>
          <div>
            <img
              src={investImage}
              alt="invest"
              className="w-40 h-52"
            />
          </div>
        </div>

        {/* card 2 */}
        <div className="bg-[#151414] h-20 w-full rounded-lg"></div>

        {/* card 3 */}
        <div className="bg-oha__green h-20 w-full rounded-lg"></div>
      </div>
    </div>
  );
};

export default Animate;
