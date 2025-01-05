import React from "react";
import { Frame } from "../Frame";
// import beeetilt from "~/assets/beekeeper-tilt.png";
// import tishi from "~/assets/tilt-shift-medieval.png";
// import vimod from "~/assets/view-modern.png";
import trcomb from "~/assets/trcomb.png";
import tree from "~/assets/tree.png";
import brush from "~/assets/brush.png";
const PartnerRole: React.FC = () => {
  return (
    <div className="px-10 lg:px-[198px] py-28">
      {/* <div className="grid gap-10">
        <h1 className="text-3xl lg:text-6xl font-semibold ">
          Low Investment, High Impact
        </h1>
        <p className="text-lg lg:text-2xl font-normal leading-loose lg:w-[800px]">
          Even the smallest investment can create a significant impact on our
          environment and bee populations. Join us in making a difference—your
          contribution helps support sustainable beekeeping and fosters a
          healthier planet for everyone."
        </p>
      </div> */}

      <div className="my-20 flex justify-center items-center w-full uid">
        <div className="grid md:grid-cols-2 items-center gap-6 md:gap-20 w-full md:w-fit uid self-center">
          <div className="grid gap-10">
            <h1 className="text-3xl lg:text-6xl font-semibold ">
              Low Investment, High Impact
            </h1>
            <p className="text-lg lg:text-2xl font-normal leading-loose lg:w-[800px]">
              Even the smallest investment can create a significant impact on
              our environment and bee populations. Join us in making a
              difference—your contribution helps support sustainable beekeeping
              and fosters a healthier planet for everyone."
            </p>
          </div>

          <Frame
            title="Educate and Train"
            description=" Provide essential beekeeping knowledge and skills to communities."
            imageSrc={trcomb}
            backgroundColor="#d9d9d9"
          />

          <Frame
            title="Equip Farmers"
            description="Supply the necessary tools and hives to get started."
            imageSrc={brush}
            backgroundColor="#d9d9d9"
          />

          <Frame
            title="Nurture the Environment"
            description="Foster initiatives like reforestation and biodiversity protection through beekeeping."
            imageSrc={tree}
            backgroundColor="#d9d9d9"
          />
        </div>
      </div>
    </div>
  );
};

export default PartnerRole;
