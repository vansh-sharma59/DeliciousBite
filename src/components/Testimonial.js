import React from "react";
import { IoStarSharp } from "react-icons/io5";
import User2 from "../images/user2.jpg";
import User3 from "../images/user3.jpg";
import User4 from "../images/user4.jpg";
import User5 from "../images/user5.jpg";
import food1 from "../images/food1.jpg";
import food2 from "../images/food2.jpg";
import food3 from "../images/food3.jpg";
import food4 from "../images/food4.jpg";
import food5 from "../images/food5.jpg";
import food6 from "../images/food6.jpg";
import food7 from "../images/food7.jpg";
import food8 from "../images/food8.jpg";
import food9 from "../images/food9.jpg";

function Testimonial() {
  return (
    <div className="my-[5rem]">
      <div className="flex">
        <div className="m-auto lg:w-[100%] lg:flex flex-col justify-center items-center">
          <h3 className="text-4xl font-medium text-center text-orange-600 p-[2rem] md:text-5xl">
            Testimonials
          </h3>
          <h1 className="text-5xl p-4 text-center font-medium lg:text-7xl lg:font-bold mb-[4rem] lg:text-left lg:ml-[4rem]">
            See What People Say About Our Dishes
          </h1>
          <div className="mt-[2rem] gap-9 md:grid md:grid-cols-2 lg:w-[100%]">
            <div className="flex flex-col justify-center items-center mx-[1rem] mb-[2rem] p-7">
              <div className="w-[5rem] h-[5rem] rounded-full overflow-hidden">
                <img
                  src={User2}
                  alt="user"
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>
              <div className="flex m-3 text-yellow-400 text-[1.5rem] lg:text-[2rem]">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
              <h4 className="text-2xl font-medium mb-3 lg:text-3xl">
                5 stars! Love it!
              </h4>
              <p className="text-xl text-center mb-3 lg:text-2xl">
                I really like all the recipes and dishes which are provided.
                It's amazing not to worry about food anymore!
              </p>
              <p className="text-xl lg:text-2xl">Lesli</p>
            </div>
            <div className="flex flex-col justify-center items-center mx-[1rem] mb-[2rem] p-7">
              <div className="w-[5rem] h-[5rem] rounded-full overflow-hidden">
                <img
                  src={User3}
                  alt="user"
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>
              <div className="flex m-3 text-yellow-400 text-[1.5rem] lg:text-[2rem]">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
              <h4 className="text-2xl font-medium mb-3 lg:text-3xl">
                Very good quality food!
              </h4>
              <p className="text-xl text-center mb-3 lg:text-2xl">
                The quality of the recipes are very good and healtyh aswell. It
                feels truly magical.
              </p>
              <p className="text-xl lg:text-2xl">Tom</p>
            </div>
            <div className="flex flex-col justify-center items-center mx-[1rem] mb-[2rem] p-7">
              <div className="w-[5rem] h-[5rem] rounded-full overflow-hidden">
                <img
                  src={User4}
                  alt="user"
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>
              <div className="flex m-3 text-yellow-400 text-[1.5rem] lg:text-[2rem]">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
              <h4 className="text-2xl font-medium mb-3 lg:text-3xl">
                Delicious! So yummy!
              </h4>
              <p className="text-xl text-center mb-3 lg:text-2xl">
                All the dishes are very tasty and so delicious and are easy to
                prepare.
              </p>
              <p className="text-xl lg:text-2xl">Kevin</p>
            </div>
            <div className="flex flex-col justify-center items-center mx-[1rem] mb-[2rem] p-7">
              <div className="w-[5rem] h-[5rem] rounded-full overflow-hidden">
                <img
                  src={User5}
                  alt="user"
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>
              <div className="flex m-3 text-yellow-400 text-[1.5rem] lg:text-[2rem]">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
              <h4 className="text-2xl font-medium mb-3 lg:text-3xl">
                My family loved it
              </h4>
              <p className="text-xl text-center mb-3 lg:text-2xl">
                All my family members loved the recipes i made.
              </p>
              <p className="text-xl lg:text-2xl">Evelyn</p>
            </div>
          </div>
        </div>
        <div className="hidden px-4 lg:grid grid-cols-3 gap-4 lg:w-[75%]">
          <div className="overflow-hidden">
            <img
              src={food1}
              alt="Food"
              className="w-[100%] h-[100%] object-cover object-center hover:scale-110 duration-200"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={food2}
              alt="Food"
              className="w-[100%] h-[100%] object-cover object-center hover:scale-110 duration-200"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={food3}
              alt="Food"
              className="w-[100%] h-[100%] object-cover object-center hover:scale-110 duration-200"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={food4}
              alt="Food"
              className="w-[100%] h-[100%] object-cover object-center hover:scale-110 duration-200"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={food5}
              alt="Food"
              className="w-[100%] h-[100%] object-cover object-center hover:scale-110 duration-200"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={food6}
              alt="Food"
              className="w-[100%] h-[100%] object-cover object-center hover:scale-110 duration-200"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={food7}
              alt="Food"
              className="w-[100%] h-[100%] object-cover object-center hover:scale-110 duration-200"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={food8}
              alt="Food"
              className="w-[100%] h-[100%] object-cover object-center hover:scale-110 duration-200"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={food9}
              alt="Food"
              className="w-[100%] h-[100%] object-cover object-center hover:scale-110 duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
