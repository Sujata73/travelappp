import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import shrestha from '../assets/shrestha.mp4'

const Background = () => {
  return (
    <div className='relative w-full h-screen'>
        <video className='w-full h-full object-cover' src={shrestha} autoPlay loop muted />
        <div className=' absolute bg-gray-900/25 top-0 left-0 h-full w-full '></div>
        <div className='absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full text-white p-4 '>
          <h1>Go somewhere new</h1>
          <h2 className='pb-4'> Affordable travel. Unforgettable experiences.</h2>
          <form className='flex justify-between items-center border  max-w-[700px]  w-full p-1 bg-gray-100/70 rounded-md text-black  '>
          <div className='' >
            <input  className=" bg-transparent w-[300px] sm:w-[400px] outline-none"type="text" placeholder="Search Destination"/>
          </div>
          <div>
            <button><AiOutlineSearch size={20}/></button>
          </div>
          </form>
        </div>
    </div>
  )
}

export default Background