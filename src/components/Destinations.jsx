import React from 'react'

const Destinations = () => {
  return (
    <div className='max-w-[1240px] py-8 text-center mx-auto '>
        <h1>All inclusive Resorts</h1>
        <p>On The Maldiv's Best Resort</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-6'>
        <img className=" h-full w-full object-cover rounded-md col-span-2 md:col-span-3 row-span-2"src={require('../assets/maldivs1.png')} alt="" />
        <img className=" h-full w-full object-cover rounded-md"src={require('../assets/maldivs.png')} alt="" />
        <img className= "h-full w-full object-cover rounded-md"src={require('../assets/maldivs2.png')} alt="" />
        <img className= "h-full w-full object-cover rounded-md"src={require('../assets/malsivs3.png')} alt="" />
        <img className="h-full w-full object rounded-md"src={require('../assets/maldivs4.png')} alt="" />

        </div>
    </div>
  )
}

export default Destinations