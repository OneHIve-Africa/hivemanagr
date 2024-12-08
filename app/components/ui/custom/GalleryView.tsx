import jars from "~/assets/jars.png";
import nest from "~/assets/nest.png";
import learn from "~/assets/learn.png";
import moneytree from "~/assets/moneytree.png";
import handshake from "~/assets/handshake.png";

type Props = {};

const GalleryView = (props: Props) => {
  return (
    <div className="uid h-screen w-full px-10 md:px-[198px] grid grid-cols-1 lg:grid-cols-5 py-28">
      <div className="col-span-2 grid gap-10">
        {/* text */}
        <div>
          <div className="bg-oha__green w-10 h-10"></div>
          <h1>ONE HIVE ONE TREE</h1>
          <div>Discover the lucrative world of beekeping investments</div>
        </div>
        <div>
          <img
            src={nest}
            alt="nest"
            className="w-4/5"
          />
        </div>
      </div>
      <div className="col-span-3 grid grid-cols-2 uid gap-10">
        <div className="uid w-full h-fit">
          <img
            className="w-full object-contain object-center"
            src={jars}
            alt="jars"
          />
        </div>
        <div className="uid w-full h-fit">
          <img
            className="w-full object-contain object-center"
            src={learn}
            alt="learn"
          />
        </div>
        <div className="uid w-full h-fit">
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
