import React from 'react'

const Hero = () => {
  return (
    <div className='hero bg-no-repeat h-[500px] relative'>
        <div className='absolute text-4xl left-[10%] top-[40%] italic'>
            <h1>LUXURY</h1>
            <h1 className='ml-3 text-[#333333]'>FASHION</h1>
            <h1>& ACCESSORIES</h1>
        </div>

        <button className='absolute left-[20%] bottom-10 bg-[#000000] text-white px-3 py-2 rounded-full btn'>
            EXPLORE COLLECTIONS
        </button>
    </div>
  )
}

export default Hero