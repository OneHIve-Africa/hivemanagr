import beeicon from "~/assets/beeicon.png";
import eyeicon from "~/assets/eyeicon.png";
import moneyicon from "~/assets/moneyicon.png";
import envicon from "~/assets/envicon.png";

type Props = {};

const IconView = ({}) => {
  return (
    <div className="uid h-fit w-full px-10 md:px-[198px] py-28">
      <div className="grid lg:grid-cols-2 gap-10 text-[#151515]">
        <div className="flex flex-col items-center gap-5">
          <img src={moneyicon} alt="Icon 1" className=" mb-4" />
          <h2 className="text-3xl font-bold mb-2">Sustainable Returns</h2>
          <p className="text-xl w-full text-center ">
            Your investment doesn't just grow your portfolio; <br /> it nurtures
            communities and the environment.
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 lg:mt-32 uid">
          <img src={beeicon} alt="Icon 2" className=" mb-4" />
          <h2 className="text-3xl font-bold mb-2">Empowered Farmers</h2>
          <p className="text-xl w-full text-center ">
            We're committed to training and supporting <br /> beekeepers,
            ensuring they have the knowledge <br /> and resources to succeed..
          </p>
        </div>
        <div className="flex flex-col items-center mt-10 gap-5">
          <img src={eyeicon} alt="Icon 3" className=" mb-4" />
          <h2 className="text-3xl font-bold mb-2">Transparent & Trustworthy</h2>
          <p className="text-xl w-full text-center ">
            Our platform offers full transparency, with <br /> dashboards that
            keep investors, farmers, and <br /> partners informed every step of
            the way.
          </p>
        </div>
        <div className="flex flex-col items-center lg:mt-48 gap-5 uid">
          <img src={envicon} alt="Icon 4" className=" mb-4" />
          <h2 className="text-3xl font-bold mb-2 text-center">
            Positive Environmental Impact
          </h2>
          <p className="text-xl w-full text-center ">
            By supporting beekeeping, you're directly <br /> contributing to the
            conservation of biodiversity <br /> and the fight against climate
            change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IconView;
