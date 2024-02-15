import React from "react";
import Fish from "../images/fish.png";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="my-[5rem]">
      <div className="container">
        <h1 className="text-center text-6xl sm:text-7xl lg:mt-[9rem] lg:text-8xl">
          OUR CATEGORIES
        </h1>
        <div className="lg:my-[6rem] lg:flex">
          <div className="hidden text-3xl font-medium lg:visible lg:flex lg:flex-col justify-evenly lg:text-4xl">
            <Link to={"cuisine/thai"}>
              <p className="py-5 mx-5 border-b-[1px] border-black flex justify-between lg:mr-[-6rem] hover:scale-105 duration-150">
                <IoIosArrowBack /> THAI CUISINE
              </p>
            </Link>
            <Link to={"cuisine/spanish"}>
              <p className="py-5 mx-5 border-b-[1px] border-black flex justify-between hover:scale-105 duration-150">
                <IoIosArrowBack /> &nbsp; SPANISH CUISINE
              </p>
            </Link>
            <Link to={"cuisine/mexican"}>
              <p className="py-5 mx-5 border-b-[1px] border-black flex justify-between lg:mr-[-6rem] hover:scale-105 duration-150">
                <IoIosArrowBack /> MEXICAN CUISINE
              </p>
            </Link>
          </div>
          <div className="w-[35rem] h-[35rem] m-auto pt-[2rem] lg:w-[45rem] lg:h-[45rem]">
            <img
              src={Fish}
              alt="fish"
              className="w-[100%] h-[100%] object-contain"
            />
          </div>
          <div className="text-3xl font-medium lg:flex lg:flex-col justify-evenly lg:text-4xl">
            <Link to={"cuisine/indian"}>
              <p className="py-5 mx-5 border-b-[1px] border-black flex justify-between lg:ml-[-6rem] hover:scale-105 duration-150">
                INDIAN CUISINE <IoIosArrowForward />
              </p>
            </Link>
            <Link to={"cuisine/japanese"}>
              <p className="py-5 mx-5 border-b-[1px] border-black flex justify-between hover:scale-105 duration-150">
                JAPANESE CUISINE &nbsp; <IoIosArrowForward />
              </p>
            </Link>
            <Link to={"cuisine/italian"}>
              <p className="py-5 mx-5 border-b-[1px] border-black flex justify-between lg:ml-[-6rem] hover:scale-105 duration-150">
                ITALIAN CUISINE <IoIosArrowForward />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
