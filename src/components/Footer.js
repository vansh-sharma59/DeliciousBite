import React from 'react'

function Footer() {
  return (
    <div className='pt-[5rem] bg-[#faf6ed]'>
      <h1 className='text-5xl text-center font-medium mb-8 sm:text-6xl'>LET'S CONNECT WITH US</h1>
      <div className='flex justify-center'>
        <input type="text" placeholder='Enter your e-mail' className='bg-transparent border-[1px] border-black rounded-3xl px-4 md:w-[22rem]'/>
        <button className='bg-black text-white rounded-3xl p-3 ml-3 hover:scale-105 duration-150'>SUBSCRIBE NOw</button>
      </div>
      <div className='mt-[2rem] grid grid-cols-2 md:grid-cols-4 md:my-[5rem]'>
        <div className='p-[1rem] text-xl md:text-2xl lg:text-3xl text-center'>
            <p>About Us</p>
            <p>Dishes</p>
            <p>Contact</p>
        </div>
        <div className='p-[1rem] text-xl md:text-2xl lg:text-3xl text-center'>
            <p>Compare Plans</p>
            <p>Resources</p>
            <p>Health & Safety</p>
        </div>
        <div className='p-[1rem] text-xl md:text-2xl lg:text-3xl text-center'>
            <p>Terms of Service</p>
            <p>Provacy & Policy</p>
            <p>Request</p>
        </div>
        <div className='p-[1rem] text-xl md:text-2xl lg:text-3xl text-center'>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
        </div>
      </div>
      <div className='flex justify-center border-black border-t-[1px]'>
        <p className='text-xl font-semibold py-2'>Made by Vansh Sharma</p>
      </div>
    </div>
  )
}

export default Footer
