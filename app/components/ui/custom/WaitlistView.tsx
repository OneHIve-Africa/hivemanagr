import React from "react";
import back from "~/assets/back.png";
import { Button } from "../button";
type Props = {};
const WaitlistView: React.FC<Props> = ({}) => {
  return (
    <div
      className="uid h-[800px] w-full px-10 md:px-[198px] py-2 bg-oha__yellow bg-cover bg-center flex justify-center items-center text-white"
      style={{ backgroundImage: `url(${back})` }}
    >
      <div className="flex flex-col justify-center items-center uid gap-10">
        <h1 className="text-5xl font-extrabold text-center w-full">
          Join Us in Harvesting Hope
        </h1>
        <p className="text-center text-wrap text-lg leading-8 lg:w-[750px]">
          This is more than just a platform—it{"’"}s a movement. A movement
          driven by people like you who believe in the power of collective
          impact. Whether you{"’"}re an investor seeking meaningful returns, a
          farmer eager to start a beekeeping journey, or an organization looking
          to make a difference, One Hive Africa welcomes you.
        </p>
        <div className="flex gap-10">
          <Button className="bg-white text-oha__green rounded-md shadow font-semibold text-lg px-10 py-7">
            Sponsor
          </Button>
          <Button className="bg-oha__green text-white rounded-md shadow font-semibold text-lg px-10 py-7">
            Invest
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WaitlistView;
