import React from 'react'
import october10 from'../assets/Frame 2.png'
import Image from 'next/image'
import autumn from '../assets/image 9.png'
import video from '../assets/Video.png'

const Collections = () => {
  return (
    <div className='w-full'>
        <Image src={october10} alt='october 10 collection' className='w-[100%]' />

        <div className='w-full flex justify-around my-10'>
        <Image src={autumn} alt='autumn collection'  />
        </div>

        <Image src={video} alt='video' className='w-[100%]' />
    </div>
  )
}

export default Collections