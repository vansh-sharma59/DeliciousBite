import React from "react";
import { IoStarSharp } from "react-icons/io5";

function Testimonial() {
  return (
    <div className="my-[5rem]">
      <h1 className="text-5xl text-center font-medium lg:text-6xl">What People Say</h1>
      <div className="mt-[2rem] gap-9 md:grid md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col justify-center items-center mb-[2rem] p-3">
          <div className="flex mb-3 text-yellow-400 text-[1.5rem] lg:text-[2rem]">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </div>
          <h4 className="text-2xl font-medium mb-3 lg:text-3xl">Healthy and Tasty!</h4>
          <p className="text-xl text-center mb-3 lg:text-2xl">The site provides the best recipe which are health and tasty.</p>
          <p className="text-xl lg:text-2xl">Amy</p>
        </div>
        <div className="flex flex-col justify-center items-center mb-[2rem] p-3">
          <div className="flex mb-3 text-yellow-400 text-[1.5rem] lg:text-[2rem]">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </div>
          <h4 className="text-2xl font-medium mb-3 lg:text-3xl">5 stars! Love it!</h4>
          <p className="text-xl text-center mb-3 lg:text-2xl">I really like all the recipes and dishes which are provided.</p>
          <p className="text-xl lg:text-2xl">Lesli</p>
        </div>
        <div className="flex flex-col justify-center items-center mb-[2rem] p-3">
          <div className="flex mb-3 text-yellow-400 text-[1.5rem] lg:text-[2rem]">
            <IoStarSharp/>
            <IoStarSharp/>
            <IoStarSharp/>
            <IoStarSharp/>
          </div>
          <h4 className="text-2xl font-medium mb-3 lg:text-3xl">Very good quality food!</h4>
          <p className="text-xl text-center mb-3 lg:text-2xl">The quality of the recipes are very good and healtyh aswell.</p>
          <p className="text-xl lg:text-2xl">Tom</p>
        </div>
        <div className="flex flex-col justify-center items-center mb-[2rem] p-3">
          <div className="flex mb-3 text-yellow-400 text-[1.5rem] lg:text-[2rem]">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </div>
          <h4 className="text-2xl font-medium mb-3 lg:text-3xl">Delicious! So yummy!</h4>
          <p className="text-xl text-center mb-3 lg:text-2xl">All the dishes are very tasty and so delicious.</p>
          <p className="text-xl lg:text-2xl">Kevin</p>
        </div>
        <div className="flex flex-col justify-center items-center mb-[2rem] p-3">
          <div className="flex mb-3 text-yellow-400 text-[1.5rem] lg:text-[2rem]">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </div>
          <h4 className="text-2xl font-medium mb-3 lg:text-3xl">My family loved it</h4>
          <p className="text-xl text-center mb-3 lg:text-2xl">All my family members loved the recipes i made.</p>
          <p className="text-xl lg:text-2xl">Evelyn</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
