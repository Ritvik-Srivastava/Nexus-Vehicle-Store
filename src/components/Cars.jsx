import React, { useState } from 'react'
import {data } from '../data/data'
const Cars = () => {
   // console.log(data)

   const [cars, setCars] = useState(data);

   //filter type car bike 

   const filterType = (category) => {
    setCars(
        data.filter((item) => {
            return item.category === category;
        })
    );
   };
   //filter by price
   const filterPrice = (price) => {
    setCars(
        data.filter((item) => {
            return item.price === price;
        })
    );
   };
  return (
    <div id='cars'  className='max-w-[1920px] m-auto px-4 py-12'>
        <h1 className='text-blue-500 font-bold text-4xl text-center'> Top Brands Motor Vehicals</h1>
        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/*filter type */}
            <div>
            <p className='font-bold text-gray-700'>Filter Type</p>
            <div className='flex justify-between flex-wrap'>
                <button onClick={() => setCars(data)} className='m-1 font-bold border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white '>All</button>
                <button onClick={() => filterType('bike')} className='m-1 font-bold border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white '>Bike</button>
                <button onClick={() => filterType('cars')} className='m-1 font-bold border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white '>Cars</button>
                <button onClick={() => filterType('scooty')} className='m-1 font-bold border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white '>Activa</button>
                <button onClick={() => filterType('sports cars')} className='m-1 font-bold border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white '>Sports Cars</button>
                <button onClick={() => filterType('bicycle')} className='m-1 font-bold border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white '>Bicycle</button>
                <button onClick={() => filterType('old cars')} className='m-1 font-bold border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white '>Old Cars</button>
            </div>

            </div>
            {/* filter prize */}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={() => filterPrice('₹10L')} className='m-1 font-bold border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white '>₹10L</button>
                    <button onClick={() => filterPrice('₹25L')}  className='m-1 font-bold border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white '>₹25L</button>
                    <button onClick={() => filterPrice('₹30L')}  className='m-1 font-bold border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white '>₹30L</button>
                    <button onClick={() => filterPrice('₹70L')}  className='m-1 font-bold border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white '>₹70L</button>
                </div>
            </div>
        </div>
    {/* display cars */ }
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {cars.map((item, index) =>(
                <div key={index} className='border shadow-2xl rounded-2xl hover:scale-105 duration-300'>
                <img src={item.image} alt={item.name}
                className='w-full h-[2--px] object-cover rounded-t-lg' />
                <div className='flex justify-between px-4 py-4'> 
                <p className='font-bold'>{item.name}</p>
                <p>
                    <span className='bg-blue-400 text-white p-1 rounded-full'>{item.price}</span>
                </p></div>
                </div>

                
              
            ))}

        </div>
    </div>
  );
};

export default Cars;