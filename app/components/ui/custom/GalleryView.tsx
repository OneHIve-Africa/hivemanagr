import jars from "~/assets/jars.png";
import nest from "~/assets/nest.png";
import learn from "~/assets/learn.png";
import moneytree from "~/assets/moneytree.png";
import handshake from "~/assets/handshake.png";

type Props = {};

const GalleryView = (props: Props) => {
  return (
    <div className=" h-fit w-full px-6 sm:px-10 lg:px-[198px] lg:py-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
      <div className="col-span-1 sm:col-span-2 lg:col-span-2 grid gap-10">
        {/* Text Section */}
        <div>
          <div className="bg-oha__green w-10 h-10"></div>
          <h1 className="text-3xl sm:text-4xl font-semibold ml-6 sm:ml-10 mt-3">
            ONE HIVE ONE TREE
          </h1>
          <div className="ml-6 sm:ml-10 mt-5 text-lg sm:text-2xl">
            Discover the lucrative world of <br /> beekeeping investments
          </div>
        </div>
        <div>
          <img
            src={nest}
            alt="nest"
            className="w-full object-contain object-center"
          />
        </div>
      </div>

      {/* Image Section */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-3 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-x-3 gap-y-3 lg:gap-y-5 lg:gap-x-5  lg:mt-28">
        <div className="uidi w-full h-fit">
          <img
            className="w-full object-contain object-center"
            src={jars}
            alt="jars"
          />
        </div>
        <div className="uid w-full h-fit lg:mt-10">
          <img
            className="w-full object-contain object-center"
            src={learn}
            alt="learn"
          />
        </div>
        <div className="uid w-full h-fit lg:-mt-10">
          <img
            className="w-full object-contain object-center"
            src={moneytree}
            alt="moneytree"
          />
        </div>
        <div className="uid w-full h-fit">
          <img
            className="w-full object-contain object-center"
            src={handshake}
            alt="handshake"
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryView;
