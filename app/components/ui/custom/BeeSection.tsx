import beepng from "~/assets/bee.png";

const BeeSection: React.FC = () => {
  return (
    <div className="uid h-screen w-full bg-oha__yellow relative overflow-hidden">
      <img
        src={beepng}
        alt="bee"
        className="absolute top-[11rem]"
      />
    </div>
  );
};

export default BeeSection;
