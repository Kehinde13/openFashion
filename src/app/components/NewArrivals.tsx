import Image from 'next/image'
import React from 'react'
import divider from '../assets/Devider.png'


const NewArrivals = () => {
  return (
    <div className='min-h-max p-3 mt-4'>

        <div className='mx-auto w-[40%] text-center my-5'>
        <h1>NEW ARRIVAL</h1>
        <Image
         src={divider}
         alt='divider'
         />
        </div>

         <ul className='flex justify-between gap-4'>
            <li>All</li>
            <li>Apparel</li>
            <li>Dress</li>
            <li>T-Shirt</li>
            <li>Bag</li>
         </ul>



    </div>
  )
}

export default NewArrivals