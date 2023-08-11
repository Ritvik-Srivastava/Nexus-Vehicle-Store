
import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'
import {GoSignIn, GoSignOut} from 'react-icons/go'
import {TbTruckDelivery} from 'react-icons/tb'
import { MdFavorite, MdHelp} from 'react-icons/md'
import {FaUserFriends, FaWallet } from 'react-icons/fa'
import {BiSolidContact} from 'react-icons/bi'


const Navbar = () => {
    const [nav,setNav] = useState(false)

    
 
    
  return (
    
    <div className='max-w-[1920px] mx-auto flex justify-between items-center p-4 bg-gray-900 text-white font-bold font-rome'>
    {/*left side */}
    <div className='flex items-center'>
    <div onClick={() => setNav(!nav)} className='cursor-pointer'>
            <AiOutlineMenu size={30} />


        </div>
        <img className='max-h-[150px] md:max-h-[70px] w-full object-cover p-1 mx-2' src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/05/attachment_86038415-e1556815397953.jpeg?auto=format&q=60&fit=max&w=930'  alt='/'/>
        <h1 className='text-2xl  sm:text-4xl lg:text-4xl px-2'>Nexus <span className='font-bold text-blue-500'>  Vehicle  </span> <span className='font-bold'> Store</span>
        </h1>
       

    </div>

    {/* search input */}
    <div className='bg-gray-200 rounded-full flex item-center px-4 w-[200px] sm:w-[400px] lg:w-[500px] text-black'>
        <AiOutlineSearch size={20} 
            className='flex items-center m-auto'
        />
        <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='Search Cars' />
    </div>
    {/*cart button */}
    <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2' /> Cart
    </button>
    <button  className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
    <GoSignIn  size={20} className='mr-2'/>
    
    SignIn</button>
    <button  className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
        <GoSignOut size={20} className='mr-2' /> 
        SignOut
    </button>

    {/*mobile menu */ }
    {/* overlay */}
    {nav ? <div className='bg-black/60 fixed w-full h-screen z-10 
    top-0 left-0'></div>: ''}
    {/*side bar */}
    <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-black/70 text-white font-bold font-mono  z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose onClick={() => setNav(!nav)} size={30} 
        className='absolute right-4 top-4 cursor-pointer'/>
        <h2 className='text-2xl p-4 font-bold '> Nexus 
         <span> <span className='text-blue-500 font-bold'>Vehicle</span>  Store</span>
        </h2>
        <nav>
            <ul className='flex flex-col p-4 text-white font-bold'>
            <li className='text-xl py-4 flex'>
                <TbTruckDelivery size={25} className='mr-4' /> Orders
                </li>
                <li className='text-xl py-4 flex'>
                <MdFavorite size={25} className='mr-4' /> Favorites
                </li>
                <li className='text-xl py-4 flex'>
                <FaWallet size={25} className='mr-4' /> Wallet
                </li>
                <li className='text-xl py-4 flex'>
                <MdHelp size={25} className='mr-4' /> Help
                </li>
                
                <li className='text-xl py-4 flex'>
                <FaUserFriends size={25} className='mr-4' /> Invite Friends
                </li>
                <li className='text-xl py-4 flex'>
                <BiSolidContact size={25} className='mr-4' /> Contact
                </li>
            </ul>
        </nav>
    </div>

 








       
    </div>
  )
}

export default Navbar