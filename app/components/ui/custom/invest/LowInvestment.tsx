import React from "react";
import { Frame } from "../Frame";
import money_mask from "~/assets/money_mask.png";
import honey_mask from "~/assets/honey_mask.png";
import handshake_skew from "~/assets/handshake_skew.png";
import game from "~/assets/game.png";

const LowInvestment: React.FC = () => {
  return (
    <div className="px-10 lg:px-[198px] py-28">
      <div className="grid gap-10">
        <h1 className="text-3xl lg:text-6xl font-semibold ">
          Low Investment, High Impact
        </h1>
        <p className="text-lg lg:text-2xl font-normal leading-loose lg:w-[800px]">
          Even the smallest investment can create a significant impact on our
          environment and bee populations. Join us in making a difference—your
          contribution helps support sustainable beekeeping and fosters a
          healthier planet for everyone."
        </p>
      </div>

      <div className="my-20 flex justify-center items-center w-full uid">
        <div className="grid md:grid-cols-2 items-center gap-6 md:gap-20 w-full md:w-fit uid self-center">
          <Frame
            title="Attractive Returns"
            description="Earn competitive returns within six months to one year by investing in beehives managed by skilled and trained beekeepers."
            imageSrc={money_mask}
            backgroundColor="#d9d9d9"
          />

          <Frame
            title="Transparency"
            description="Our investor dashboard provides real-time updates on your investment, from hive management to honey production and sales."
            imageSrc={honey_mask}
            backgroundColor="#f4f4f4"
          />

          <Frame
            title="Impact-Driven"
            description="Your investment helps rural farmers gain financial independence, contributes to environmental conservation, and supports sustainable practices."
            imageSrc={game}
            backgroundColor="#d9d9d9"
          />

          <Frame
            title="Trusted Partnerships"
            description="We collaborate with reputable organizations to ensure the highest standards in beekeeping and honey production."
            imageSrc={handshake_skew}
            backgroundColor="#f4f4f4"
          />
        </div>
      </div>
    </div>
  );
};

export default LowInvestment;
