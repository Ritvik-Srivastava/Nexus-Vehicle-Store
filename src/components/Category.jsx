import React from 'react'
import { categories } from '../data/data'
const Category = () => {
    console.log(categories);
  return (
    <div id='brand' className='max-w-[1920px] m-auto px-4 py-12'>
        <h1 className='text-blue-600 font-bold text-4xl text-center'>
            Top Brands
          

        </h1>
          {/* Categories */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
            {categories.map((item, index) => (
                <div key={index} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center '>
                <h2 className='fint-bold sm:text-xl'>{item.name}</h2>
                <img src={item.image} alt={item.name}
                    className='w-20'
                />
                </div>
            ))}
          </div>
    </div>
  )
}

export default Category