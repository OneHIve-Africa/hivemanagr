import React from "react";
import investImage from "~/assets/invest.png";
import { Button } from "../button";

type Props = {
  className?: string;
};

const Animate: React.FC<Props> = ({ className }) => {
  return (
    <div className="uid h-fit w-full px-6 sm:px-10 lg:px-[198px] flex flex-col py-16 sm:py-28 gap-10">
      <h1 className="w-full text-center text-4xl sm:text-5xl lg:text-6xl font-semibold">
        Invest in Nature, Reap the Rewards
      </h1>

      <div className="">
        {/* Card 1 */}
        <div className="flex flex-col sm:flex-row justify-between bg-oha__yellow rounded-lg shadow-md text-white p-6 sm:p-10">
          <div className="sm:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-semibold">
              For Investors
            </h1>
            <p className="text-lg sm:text-2xl leading-8 mt-5 font-normal">
              Discover the lucrative world of beekeeping investments. <br />
              With detailed insights and data, our platform offers you <br />
              an opportunity to grow your wealth while making a <br />
              positive impact.
            </p>
            <Button className="bg-oha__green text-white rounded-md shadow font-semibold text-lg px-10 py-6 sm:mt-7 mt-5">
              Invest
            </Button>
          </div>
          <div className="sm:w-1/2 flex justify-center sm:justify-end mt-5 sm:mt-0">
            <img
              src={investImage}
              alt="invest"
              className="w-40 sm:w-48 h-auto"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#151414] h-20 w-full rounded-lg"></div>

        {/* Card 3 */}
        <div className="bg-oha__green h-20 w-full rounded-lg"></div>
      </div>
    </div>
  );
};

export default Animate;
