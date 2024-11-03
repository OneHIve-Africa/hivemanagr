import beepng from "~/assets/bee.png"

const BeeSection: React.FC = () => {

    return(
          <div className="bg-oha__yellow w-full flex flex-col items-center justify-center px-5 pb-0 sm:px-20 relative h-[450px]">

        
          <div className="h-72 flex-col justify-start items-center gap-1 inline-flex">
            <div className="self-stretch h-56 flex-col justify-center items-center flex">
                <div className="w-fit text-white text-5xl font-semibold">Bee Alive</div>
                <div className="w-fit text-center text-white text-4xl font-medium">One Hive, One Tree</div>
            <div className="text-center text-white text-sm font-medium">Help us fund hives, plant trees, and make a lasting environmental impact.</div>
         </div>
        </div>
         <div className="h-[400px] overflow-hidden ">
            <img src={beepng} alt="bee image" className="-mt-[100px] object-cover object-top" />
         </div>
  </div>
    )
}

export default BeeSection;