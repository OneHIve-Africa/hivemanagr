import farmpng from "~/assets/honey-farm-landscape.png"
type Props = {}

const WhyInvestSectipon = (props: Props) => {
  return (
    <div className="grid md:grid-cols-5 px-20 pt-32 gap-x-20">
  <div className="md:col-span-3 flex-col justify-start items-start gap-[43px] inline-flex">
    <div className="text-gray-900 text-5xl font-bold tracking-wider">Why Invest in <br /> Beekeeping?<br/></div>
    <div className="w-[558px] h-[170px] opacity-80 text-[#151515] text-xl font-normal font-['Source Sans Pro'] leading-loose">Invest in a hive today and watch your investment grow over six months to a year while supporting rural farmers. Be a part of the change that promotes sustainable agriculture, combats climate change, and drives economic empowerment.</div>
  </div>
  <img className="w-[344px] h-[516px] rounded-[14px] md:col-span-2" src={farmpng}/>
</div>
  )
}

export default WhyInvestSectipon