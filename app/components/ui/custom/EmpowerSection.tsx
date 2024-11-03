import React from 'react'
import combpng from "~/assets/comb.png"


const EmpowerSection = () => {
  return (
    <div className='w-full bg-oha__green h-full p-5 pb-20 sm:px-20 relative'>
        <div className='w-3/5 flex flex-col gap-10 mt-10'>
            <h1 className='text-3xl text-white font-semibold'>

            Empower Lives. Protect Nature. <br /> Harvest the Future.
            </h1>

            <p className='text-white text-opacity-80 text-wrap'>
                Welcome to One Hive Africa, where your investment is more than just a financial transaction—it's a commitment to changing lives and preserving our planet. 
            </p>
<p className='text-white text-opacity-80 text-wrap'>

Together, we are creating a world where every hive is a symbol of hope, every drop of honey is a testament to resilience, and every investment is a step towards a sustainable future.
</p>

        </div>
    <div className='w-full relative'>
        <img src={combpng} alt="bee comb" className='w-80 h-80 object-cover object-center absolute -bottom-10 -right-20 '/>
    </div>
    </div>
  )
}

export default EmpowerSection;