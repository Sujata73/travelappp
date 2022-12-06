import React from 'react'

const Search = () => {
  return (
    <>
    <div className='flex text-center relative justify-center  flex-col sm:flex-row w-full'>
    <div className='max-w-[1240px] px-20 py-6'>
        <h1 className='absolute px-32 text-white py-3  text-xs md:text-lg'> Exploring earth’s attractions</h1>
        <img className="h-72 w-auto rounded-xl object-cover"src={require('../assets/world.png')}/>
    </div>
    <div className='mx-6 md:mx-0'>
        <div className='border '>
            <p className='py-2'>GET AN ADDITIONAL 10% OFF</p>
            <p className='py-4'>12 HOURS LEFT</p>
            <p className='bg-gray-600 text-white py-2'>BOOK NOW</p>
        </div>
        <form className='w-full '>
          <div className='flex flex-col my-2'>
            <label>Desinations</label>
            <select className='border rounded py-2'>
              <option >Nepal</option>
              <option >Maldivs</option>
              <option >Dubai</option>
              <option >Paris</option>
              <option >Bali</option>
            </select>
          </div>
          <div className='flex flex-col my-2'>
            <label>Check-In</label>
            <input className="border rounded py-2"type='date'/>
          </div>
          <div className='flex flex-col my-2'>
            <label>Check-Out</label>
            <input className='rounded border py-2' type='date'/>
          </div>
          <div>
            <button className='my-2 w-full'>Rates and Avialabilities</button>
          </div>
        </form>
    </div>
    </div>
    </>
  )
}

export default Search