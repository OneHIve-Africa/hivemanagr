
import farmpng from "~/assets/honey-farm-landscape.png"

type Props = {}

const Catalyst = (props: Props) => {
  return (
    
         <div className="grid md:grid-cols-5 px-20 pt-32 gap-x-20">
  <img className="w-[344px] h-[516px] rounded-[14px] md:col-span-2" src={farmpng}/>
  <div className="md:col-span-3 flex-col justify-start items-start gap-[43px] inline-flex">
    <div className="text-gray-900 text-5xl font-bold tracking-wider">Be a Catalyst for <br /> Change<br/></div>
    <div className="w-[558px] h-[170px] opacity-80 text-[#151515] text-xl font-normal font-['Source Sans Pro'] leading-loose">In the heart of Africa, there’s a silent revolution taking place, one that nurtures the earth, empowers communities, and creates a lasting impact. 

When you join One Hive Africa, you’re not just investing in beekeeping; you’re investing in people, in nature, and in a future where both can thrive together.</div>
  </div>
    </div>
    
  )
}

export default Catalyst