import React from 'react'

const FeedbackForm = () => {
  return (
    <div id='feedback' className='max-w-[1920px] m-auto w-full p-4 py-16 bg-gray-900'>
    <hr></hr>
    <hr></hr>
    <h2 className='text-center text-blue-500 font-bold text-4xl m-2'>Feedback Form </h2>
    <div className='grid md:grid-cols-1'>

    <form>
        <div className='grid grid-cols-3'>
            <input className='border m-2 p-4' type='text' placeholder='Namw' />
            
            <input className='border m-2 p-4' type='email' placeholder='Email' />
            <input className='border m-2 p-4' type='tel' placeholder='Phone' />
           <div>
            <textarea className='border col-span-2 m-2 p-2' cols="100" rows="20"></textarea>
            <button className='col-span-5 m-4 p-4 text-white font-bold bg-black '>Submit</button>
        </div>
        </div>
    </form>
</div>
</div>

  )
}

export default FeedbackForm