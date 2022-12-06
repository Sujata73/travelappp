import React from 'react'

const Selects = () => {
  return (
    <div className=' max-w-[1240px] grid sm:grid-cols-2 lg:grid-cols-3 px-4 py-16 gap-4 mx-auto'>
        <div className='relative hover:scale-105 duration-300 cursor-pointer '>
            <img className='rounded shadow-lg  w-full h-full object-cover ' src={require('../assets/bali.png')}/>
            <div className='absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-1 absolute font-bold text-white text-2xl'>Bali</p>
            </div>
          
        </div>
        <div className='relative hover:scale-105 duration-300 cursor-pointer '>
            <img className='rounded shadow-lg  w-full h-full object-cover' src={require('../assets/bali.png')}/>
            <div className='absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-1 absolute font-bold text-white text-2xl'>Bali</p>
            </div>
          
        </div>
        <div className='relative hover:scale-105 duration-300 cursor-pointer '>
            <img className='rounded shadow-lg w-full h-full object-cover ' src={require('../assets/paris.png')}/>
            <div className='absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-1 absolute font-bold text-white text-2xl'>paris</p>
            </div>
          
        </div>
        <div className='relative hover:scale-105 duration-300 cursor-pointer '>
            <img className='rounded shadow-lg w-full h-full object-cover' src={require('../assets/maldivs2.png')}/>
            <div className='absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-1 absolute font-bold text-white text-2xl'>Maldivs</p>
            </div>
          
        </div>
        <div className='relative hover:scale-105 duration-300 cursor-pointer '>
            <img className='rounded shadow-lg w-full f-full object-cover ' src={require('../assets/dubai.png')}/>
            <div className='absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-1 absolute font-bold text-white text-2xl'>Dubai</p>
            </div>
          
        </div>
        <div className='relative hover:scale-105 duration-300 cursor-pointer '>
            <img className='rounded shadow-lg w-full h-full object-cover ' src={require('../assets/turkey.png')}/>
            <div className='absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-1 absolute font-bold text-white text-2xl'>Turkey</p>
            </div>
          
        </div>
        
    </div>
  )
}

export default Selects