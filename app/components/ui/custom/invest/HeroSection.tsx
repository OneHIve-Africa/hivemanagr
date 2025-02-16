import beekeeperworking from "~/assets/beekeeper-working-bee-farm.png";
const HeroSection: React.FC = () => {
  return (
    <div
      className="uid h-screen w-screen px-10 lg:px-[198px] py-2 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${beekeeperworking})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-45 z-0">
        <div className="relative w-full h-full uid">
          <div className="grid gap-6 px-6 md:px-10 lg:px-[30px] text-white z-50 absolute bottom-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Invest in the Future of Beekeeping
            </h1>
            <p className="text-base md:text-lg lg:hidden leading-relaxed font-normal">
              At One Hive Africa, your investment goes beyond financial returns;
              it supports sustainable agriculture, empowers rural communities,
              and contributes to environmental preservation. By investing in
              beehives, you{"’"}re not only securing a profitable future but
              also becoming part of a movement that transforms lives and
              landscapes.
            </p>
            <p className="leading-loose text-xl font-normal hidden lg:block">
              At One Hive Africa, your investment goes beyond financial returns;
              it supports <br /> sustainable agriculture, empowers rural
              communities, and contributes to environmental <br /> preservation.
              By investing in beehives, you{"’"}re not only securing a
              profitable future but <br /> also becoming part of a movement that
              transforms lives and landscapes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
