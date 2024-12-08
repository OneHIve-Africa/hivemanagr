import farmpng from "~/assets/honey-farm-landscape.png";
import toybee from "~/assets/toybee.png";

type Props = {};

const WhyInvestSectipon = (props: Props) => {
  return (
    <div className="uid h-fit w-full px-10 md:px-[198px] flex flex-col py-28 gap-y-20">
      {/* keep investing */}
      <div className="uid grid grid-cols-1 lg:grid-cols-5 ">
        <div className="col-span-3">
          <h1></h1>
          <img
            src={toybee}
            alt="toybee"
          />
          <p></p>
        </div>
        <div className="col-span-2">
          <img
            src={farmpng}
            alt="farm"
          />
        </div>
      </div>
      {/* catalyst */}
      <div className="uid grid grid-cols-1 lg:grid-cols-5">
        <div className="col-span-3 order-2">
          <h1></h1>
          <p></p>
        </div>
        <div className="col-span-2 order-1">
          <img
            src={farmpng}
            alt="farm"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyInvestSectipon;
