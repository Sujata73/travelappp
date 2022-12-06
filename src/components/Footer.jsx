import React from 'react'
import{BsFacebook}from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
            <div className='sm:flex text-center justify-center items-center '>
            <h1 ><span className='text-blue-500'>Travel</span>world</h1>
            
            <div className=' flex justify-between w-full sm:max-w-[280px] my-4 mx-3'>
            <BsFacebook className="icon"/>
                <FaTwitter className="icon"/>
                <FaYoutube className="icon"/>
                <FaInstagram className="icon"/>
            </div>
            </div>
            <div className='flex justify-between cursor-pointer'>
                <ul className='lg:flex '>
                    <li>Home</li>
                    <li>Partnerships</li>
                    <li>Carrers</li>
                    <li>Newrooms</li>
                    <li>Advertising</li>
                </ul>
                <ul className='float-right lg:flex'>
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Travel</li>
                    <li>View</li>
                    <li>Book</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
