import React from "react";
import Chef1 from "../images/chef1.jpg";
import Chef2 from "../images/chef2.jpg";
import Chef3 from "../images/chef3.jpg";

function Chefs() {
  return (
    <div>
      <h1 className="text-center text-5xl font-medium my-10 md:my-[4rem] md:text-6xl lg:text-7xl lg:my-[5rem]">Our Pupular Chefs</h1>
      <div className="flex flex-col md:flex-row justify-around">
        <div className="my-8 font-medium">
          <div className="w-[25rem] h-[35rem] m-auto overflow-hidden rounded-3xl lg:w-[30rem] lg:h-[45rem]">
            <img src={Chef1} alt="chef" className="w-[100%] h-[100%] object-cover"/>
          </div>
          <h3 className="text-center text-2xl mt-3 lg:text-3xl">Betran Komar</h3>
          <h2 className="text-center text-2xl mt-2 lg:text-3xl">Head Chef</h2>
        </div>
        <div className="my-8 font-medium">
          <div className="w-[25rem] h-[35rem] m-auto overflow-hidden rounded-3xl lg:w-[30rem] lg:h-[45rem]">
            <img src={Chef2} alt="chef" className="w-[100%] h-[100%] object-cover"/>
          </div>
          <h3 className="text-center text-2xl mt-3 lg:text-3xl">Freey Sauwi</h3>
          <h2 className="text-center text-2xl mt-2 lg:text-3xl">Chef</h2>
        </div>
        <div className="my-8 font-medium">
          <div className="w-[25rem] h-[35rem] m-auto overflow-hidden rounded-3xl lg:w-[30rem] lg:h-[45rem]">
            <img src={Chef3} alt="chef" className="w-[100%] h-[100%] object-cover"/>
          </div>
          <h3 className="text-center text-2xl mt-3 lg:text-3xl">Iswan Dracho</h3>
          <h2 className="text-center text-2xl mt-2 lg:text-3xl">Chef</h2>
        </div>
      </div>
    </div>
  );
}

export default Chefs;
