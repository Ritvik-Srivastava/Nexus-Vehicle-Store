import React from 'react';

const Hero = () => {
  return (
    <div id='home' className='max-w-[1920px] mx-autp '>
    
        <div className='max-h-[500px] relative'>
        {/* overlay*/}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> Welcome <span className='text-blue-500'> To </span></h1>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> Nexus <span className='text-blue-500'>  Vehicle Store</span></h1>

            </div>
            
            <img className='w-full max-h-[450px] object-cover ' src='https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'  alt='/' />
            

        </div>
        </div>
   
  )
}

export default Hero