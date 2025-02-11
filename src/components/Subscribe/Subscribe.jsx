import React from 'react'

const Subscribe = () => {
  return (
    <div data-aos="zoom-in" className='mb-12 bg-slate-700 dark:bg-gray-800 text-white '>
        <div className="container backdrop-blur-sm py-10">
            <div className=' space-y-6 max-w-xl mx-auto'>
                <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold'>Get Notified About New Products</h1>
                <input
                 type="email" 
                 data-aos="fade-up" 
                 className='bg-slate-200 text-black   w-full p-3 border rounded-sm
                  border-gray-300 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 '
                 placeholder='Enter your email '
                  />
              
            </div>
        </div>
    </div>
  )
}

export default Subscribe