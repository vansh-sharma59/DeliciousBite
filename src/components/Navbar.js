import React from "react";
import Logo from "../images/logo.png";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
    setInput("");
  };

  return (
    <div className="fixed top-0 left-0 w-[100%] bg-white">
      <div className="flex justify-between mx-9">
        <Link to={"/"}>
          <img src={Logo} alt="logo" className="w-[14rem] p-2 lg:w-[17rem]" />
        </Link>
        <div className="flex items-center">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="border-black border-b-[1px] focus:outline-none text-xl lg:text-2xl"
            />
          </form>
          <CiSearch className="text-[2rem]" onClick={submitHandler} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
