import beepng from "~/assets/bee.png";

const BeeSection: React.FC = () => {
  return (
    <div className="uid h-screen w-full bg-oha__yellow relative overflow-hidden">
      {/* Background overlay (commented out) */}
      {/* <div className="absolute uid w-full h-full text-center bg-black"></div> */}

      <div className="text-white w-full flex flex-col items-center justify-center pt-32 sm:pt-52 gap-6 sm:gap-10">
        <h1 className="text-5xl sm:text-8xl font-semibold">BEE ALIVE</h1>
        <h3 className="text-4xl sm:text-6xl font-semibold tracking-wider">
          One Hive, One Tree
        </h3>
        <h4 className="text-lg sm:text-2xl">
          Help us fund hives, plant trees, and make a lasting environmental
          impact.
        </h4>
      </div>

      <img
        src={beepng}
        alt="bee"
        className="absolute top-[15rem] sm:top-[20rem] w-2/3 sm:w-auto max-w-full h-auto"
      />
    </div>
  );
};

export default BeeSection;
