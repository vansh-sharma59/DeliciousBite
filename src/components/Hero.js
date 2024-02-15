import React from "react";
import Dish from "../images/food-main.png";

function Hero() {
  return (
    <div className="pt-[8rem] md:flex md:pl-[2rem] container">
      <div className="mt-[2rem] md:w-[50%] md:flex md:flex-col md:justify-center">
        <h1 className="text-6xl text-center pt-2 sm:text-7xl lg:text-start lg:text-[7rem]">
          EXPERIENCE OF
        </h1>
        <h1 className="text-6xl text-center pt-2 sm:text-7xl lg:text-start lg:text-[7rem]">
          RAEL RECIPES
        </h1>
        <h1 className="text-6xl text-center pt-2 sm:text-7xl lg:text-start lg:text-[7rem]">
          TASTE
        </h1>
        <div className="text-3xl pt-4 md:border-black md:border-t-[2px] text-center mt-[2rem] lg:text-start lg:text-5xl">
          <p>We offer wide range of recipes</p>
          <p>And all kinds of cuisines</p>
        </div>
      </div>
      <div className="w-[35rem] h-[35rem] m-auto pt-[2rem] lg:pl-[8rem] lg:w-[45rem] lg:h-[45rem] xl:w-[55rem]">
        <img
          src={Dish}
          alt="Dish"
          className="w-[100%] h-[100%] object-contain"
        />
      </div>
    </div>
  );
}

export default Hero;
