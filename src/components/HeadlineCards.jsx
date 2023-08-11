import React from 'react'

const HeadlineCards = () => {
  return (
    <div   className='max-w-[1920px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 '>
        {/* card */}
        <div className='rounded-xl relative hover:scale-105 duration-300'>
        
            {/*overlay */}
            <div   className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p  className='font-bold text-2xl px-2 pt-4'>Popular Car</p>
                <p className='px-2'>Know more</p>
                <button className=' border-white bg-white text-black mx-2 absolute bottom-4 '>For Buying Contact Us</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl ' src='https://images.unsplash.com/photo-1570356528233-b442cf2de345?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=766&q=80' alt='/' />
        </div>
            {/* card */}
            <div className='rounded-xl relative hover:scale-105 duration-300'>
            {/*overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sports  Car</p>
                <p className='px-2'>Know more</p>
                <button className=' border-white bg-white text-black mx-2 absolute bottom-4 '>For Buying Contact Us</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.unsplash.com/photo-1616789916664-dce56d9009da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' alt='/' />
        </div>
            {/* card */}
            <div className='rounded-xl relative hover:scale-105 duration-300'>
            {/*overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'> Old  Car</p>
                <p className='px-2'>Know more</p>
                <button className=' border-white bg-white text-black mx-2 absolute bottom-4 '>For Buying Contact Us</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.unsplash.com/photo-1611179672998-a3f08d00fb76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1152&q=80' alt='/' />
        </div>
         {/* card */}
         <div className='rounded-xl relative hover:scale-105 duration-300'>
            {/*overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'> Bike</p>
                <p className='px-2'>Know more</p>
                <button className=' border-white bg-white text-black mx-2 absolute bottom-4 '>For Buying Contact Us</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://www.livemint.com/lm-img/img/2023/04/15/600x338/mt_15_v2_1681556876015_1681558132152_1681558132152.png' alt='/' />
        </div>
         {/* card */}
         <div className='rounded-xl relative hover:scale-105 duration-300'>
            {/*overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'> Scooty</p>
                <p className='px-2'>Know more</p>
                <button className=' border-white bg-white text-black mx-2 absolute bottom-4 '>For Buying Contact Us</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://bd.gaadicdn.com/processedimages/honda/activa-125-2019/640X309/activa-125-20196422c0be07d3d.jpg' alt='/' />
        </div>
         {/* card */}
         <div className='rounded-xl relative hover:scale-105 duration-300'>
            {/*overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'> Bicycle</p>
                <p className='px-2'>Know more</p>
                <button className=' border-white bg-white text-black mx-2 absolute bottom-4 '>For Buying Contact Us</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://hips.hearstapps.com/hmg-prod/images/allbikes-1539286251.jpg?crop=0.987xw:1.00xh;0.00814xw,0&resize=1200:*' alt='/' />
        </div>
    </div>
  )
}

export default HeadlineCards