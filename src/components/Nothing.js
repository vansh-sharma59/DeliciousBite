import React from 'react'
import Noicon from '../images/nothing-found.png';

function Nothing() {
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center'>
      <img src={Noicon} alt="nothing found" className='w-[5rem] md:w-[8rem]'/>
      <h1 className='text-2xl font-medium md:text-4xl'>Nothiing Found</h1>
      <p className='md:text-2xl'>Try searching mango, cookie, cake etc..</p>

    </div>
  )
}

export default Nothing
