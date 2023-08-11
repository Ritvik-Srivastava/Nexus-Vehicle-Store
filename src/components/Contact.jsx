import React from 'react'
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai'
import { FaFacebookF,
    FaTwitter,
    FaGooglePlusG,
    FaInstagram,
    
} from 'react-icons/fa';


const Contact = () => {
    return (
   
    <div id='contact' className='max-w-[1920px] m-auto w-full p-4 py-16 bg-gray-900    '>
    <hr></hr>
    <hr></hr>
   
    
   
    <h2 className='text-center text-blue-500 text-4xl font-bold py-2 m-auto'> Contact </h2>
    
    <div className='grid md:grid-cols-1 p-4 m-2  '>

    <form>
        <div className="flex justify-between px-4 p-4 ">
        <div className=' flex justify-between  '>
            <div className='hidden md:flex items-center px-6  '>
                <AiOutlineClockCircle size={30} className='mr-4 bg-white items-center flex justify-between' />
                <p className='text-xl text-gray-300 :'>9AM - 5PM</p>
            </div>
            <div className='hidden md:flex items-centerpx-6'>
                <AiFillPhone size={20} className='mr-4 bg-white items-center'/>
                <p className='text-xl text-gray-300'>91-555-3333-1122
                <button className='font-bold mr-50
             text-gray-300 xl:'>Customer Service Number</button></p>

            </div>
   
            
        </div>
        </div>
    
    </form>
</div>

<div className='flex justify-between px-1 m-6' >
        <FaFacebookF  size={40} className='mx-6  bg-black text-blue-500' />
        <FaTwitter size={40} className='mx-6 bg-black text-blue-500' />
        <FaGooglePlusG size={40} className='mx-6 bg-black text-blue-500' />
        <FaInstagram size={40} className='mx-6 bg-black text-blue-500' />
    </div>

</div>
    
    )
    
}

export default Contact