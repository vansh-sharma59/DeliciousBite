import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

function Explore() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
    setInput("");
  };

  return (
    <div className="border-[#faf6ed] border-[2rem]">
    <div className="bg-[#faf6ed] border-[#d90d0d] border-[1px] flex flex-col justify-center items-center py-[4rem]">
      <h1 className="text-center text-5xl font-medium mb-[2rem] sm:text-6xl md:text-7xl">
        Hungry? Let's explore..
      </h1>
      <form onSubmit={submitHandler} className="flex justify-center items-center">
        <CiSearch className="text-3xl mr-3 cursor-pointer hover:scale-105 duration-150" onClick={submitHandler}/>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="border-black border-[1px] rounded-3xl bg-transparent focus:outline-none sm:text-xl w-[20rem] h-[2.5rem] p-3 md:w-[28rem]"
        />
      </form>
    </div>
    </div>
  );
}

export default Explore;
