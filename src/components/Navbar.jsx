import React,{useState} from 'react'
import{BsFillPersonFill}from 'react-icons/bs'
import{BiSearch}from 'react-icons/bi'
import{GiHamburgerMenu}from 'react-icons/gi'
import{BsFacebook}from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav,setnav] = useState(false)
    const[logo,setlogo] = useState(false)
    const handlenav = () => {
        setnav(!nav)
        setlogo(!logo)
    }
  return (
    <div className='flex justify-between w-full items-center h-20 px-4 absolute text-white z-10'>
        <div>
            <h1 onClick={handlenav} className= {logo  ? 'hidden ': 'block'}><span className='text-blue-500'>Travel</span>world</h1>
        </div>
        <ul className=' hidden md:flex'>
            <li >Home</li>
            <li className='px-4 '>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Blogs</li>
        </ul>
        <div className='hidden md:flex'>
        <BiSearch className="mr-2"size={20} />
            <BsFillPersonFill size={20}/>
            
        </div>
       {/* hamburger */}
        <div onClick={handlenav}className=' md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20}/> : <GiHamburgerMenu size={20}/>}
       
        </div>
        {/* mobile menu dropdown */}
        <div onClick={handlenav}className= {nav? 'absolute w-full text-black left-0 top-0 w-full bg-gray-100/90 py-7 px-4 flex-col' :'absolute left-[-100%]'}>
        <ul>
        <h1 className='font-bold'><span className='text-blue-600'>Travel</span>world</h1>
            <li className='border-b'>Home</li>
            <li className='border-b'>Destinations</li>
            <li className='border-b'>Travel</li>
            <li className='border-b'>View</li>
            <li className='border-b'>Blogs</li>
            <div className='flex flex-col ' >
                <button className='my-6'>Search</button>
                <button>Account</button>
            </div>
            <div className='flex justify-between my-6'>
                <BsFacebook className="icon"/>
                <FaTwitter className="icon"/>
                <FaYoutube className="icon"/>
                <FaInstagram className="icon"/>


            </div>
        </ul>  
        </div>
    </div>
  )
}

export default Navbar