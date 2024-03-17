import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiSolidDish } from "react-icons/bi";
import { GiKnifeFork } from "react-icons/gi";
import { LuAlarmClock } from "react-icons/lu";
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=2`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  return (
    <div className="m-[3rem] lg:m-[5rem]">
      <h1 className="text-5xl py-5 text-center font-medium md:text-56xl md:my-6 lg:text-7xl">
        Choose from 5,000+ recies
      </h1>
      <div className="flex flex-col items-center lg:flex-row lg:justify-evenly">
        {popular.map((item) => {
          return (
            <Link to={"/recipe/" + item.id}>
              <div className="my-[2rem] w-[30rem] shadow-black shadow-lg rounded-xl hover:scale-105 duration-150">
                <div className="w-[30rem] h-[20rem] rounded-t-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt="dish"
                    className="w-[100%] h-[100%] object-cover"
                  />
                </div>
                <h3 className="text-center py-4 text-2xl font-bold">
                  {item.title.length > 30
                    ? item.title.slice(0, 30) + "..."
                    : item.title}
                </h3>
                <div className="flex flex-col justify-center items-start p-[1rem] ml-[1rem]">
                  <div className="p-[0.8rem] flex justify-center items-center text-2xl font-bold">
                    <LuAlarmClock
                      size={19}
                      className="mr-[1rem] text-orange-600"
                    />{" "}
                    <h5>{item.readyInMinutes} min</h5>
                  </div>
                  <div className="p-[0.8rem] flex justify-center items-center text-2xl font-bold">
                    <GiKnifeFork
                      size={19}
                      className="mr-[1rem] text-orange-600"
                    />{" "}
                    <h5>NutriScore {item.healthScore}</h5>
                  </div>
                  <div className="p-[0.8rem] flex justify-center items-center text-2xl font-bold">
                    <BiSolidDish
                      size={19}
                      className="mr-[1rem] text-orange-600"
                    />{" "}
                    <h5>{item.servings}</h5>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-center py-6 md:text-4xl">
            Diets we provide:
          </h1>
          <div>
            <p className="flex text-2xl p-2 md:text-3xl">
              <IoCheckmarkOutline size={24} className="text-orange-600 mr-5" />
              Vegetarian
            </p>
            <p className="flex text-2xl p-2 md:text-3xl">
              <IoCheckmarkOutline size={24} className="text-orange-600 mr-5" />
              Pescatarian
            </p>
            <p className="flex text-2xl p-2 md:text-3xl">
              <IoCheckmarkOutline size={24} className="text-orange-600 mr-5" />
              Gluten-free
            </p>
            <p className="flex text-2xl p-2 md:text-3xl">
              <IoCheckmarkOutline size={24} className="text-orange-600 mr-5" />
              Lactos-free
            </p>
            <p className="flex text-2xl p-2 md:text-3xl">
              <IoCheckmarkOutline size={24} className="text-orange-600 mr-5" />
              Keto
            </p>
            <p className="flex text-2xl p-2 md:text-3xl">
              <IoCheckmarkOutline size={24} className="text-orange-600 mr-5" />
              Paleo
            </p>
            <p className="flex text-2xl p-2 md:text-3xl">
              <IoCheckmarkOutline size={24} className="text-orange-600 mr-5" />
              Low FODMAP
            </p>
            <p className="flex text-2xl p-2 md:text-3xl">
              <IoCheckmarkOutline size={24} className="text-orange-600 mr-5" />
              Kid-friendly
            </p>
          </div>
        </div>
      </div>
      <Link to={"cuisine/thai"}>
        <h1 className="flex items-center text-3xl justify-center pt-5 text-orange-600 lg:mt-[3rem] cursor-pointer hover:scale-105 duration-150">
          See all recipes <IoIosArrowRoundForward size={28} />
        </h1>
      </Link>
    </div>
  );
}

export default Popular;
