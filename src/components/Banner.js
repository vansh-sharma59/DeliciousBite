import React from 'react'
import Dessert from '../images/dessert.svg'
import Snack from '../images/snack.svg'
import Meat from '../images/meat.svg'
import Drink from '../images/drink.svg'
import Meal from '../images/meal.svg'

function Banner() {
  return (
    <div className='flex my-5 justify-around md:my-7 '>
      <div className='hover:scale-105 duration-150'>
        <img src={Dessert} alt="dessert" className='pb-2 w-[5rem] m-auto md:w-[6rem] lg:w-[7rem]'/>
        <p className='text-xl font-semibold text-center lg:text-2xl'>DESSERTS</p>
      </div>
      <div className='hover:scale-105 duration-150'>
        <img src={Snack} alt="snack" className='pb-2 w-[5rem] m-auto md:w-[6rem] lg:w-[7rem]'/>
        <p className='text-xl font-semibold text-center lg:text-2xl'>SNACKS</p>
      </div>
      <div className='hover:scale-105 duration-150'>
        <img src={Meat} alt="meat" className='pb-2 w-[5rem] m-auto md:w-[6rem] lg:w-[7rem]'/>
        <p className='text-xl font-semibold text-center lg:text-2xl'>MEAT</p>
      </div>
      <div className='hover:scale-105 duration-150'>
        <img src={Drink} alt="drink" className='pb-2 w-[5rem] m-auto md:w-[6rem] lg:w-[7rem]'/>
        <p className='text-xl font-semibold text-center lg:text-2xl'>Drink</p>
      </div>
      <div className='hover:scale-105 duration-150'>
        <img src={Meal} alt="meal" className='pb-2 w-[5rem] m-auto md:w-[6rem] lg:w-[7rem]'/>
        <p className='text-xl font-semibold text-center lg:text-2xl'>MEAL</p>
      </div>
    </div>
  )
}

export default Banner;