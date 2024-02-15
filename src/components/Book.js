import React from "react";
import Books from "../images/Book.png";

function Book() {
  return (
    <div className="border-[#faf6ed] border-[2rem]">
    <div className="bg-[#faf6ed] border-[#d90d0d] border-[1px] lg:flex lg:flex-row-reverse">
      <div className="lg:flex lg:flex-col justify-center lg:w-[50%]">
        <h3 className="text-3xl sm:text-4xl font-medium text-center pt-[2rem]">Our Latest recipe book is out now!</h3>
        <p className="text-2xl sm:text-3xl text-center py-3">Subscrib to get CODE fro 10% discount fro your first purchase.</p>
        <div className="flex justify-center">
            <input type="text" placeholder="email" className="border-black border-b-[1px] bg-transparent pl-3 focus:outline-none"/>
            <button className="bg-[#ed4040] text-white p-2 rounded-3xl hover:bg-[#ff1818] hover:scale-105 duration-150">subscribe</button>
        </div>
      </div>
      <div className="w-[35rem] h-[25rem] m-auto">
        <img src={Books} alt="book" className="w-[100%] h-[100%] object-contain"/>
      </div>
    </div>
    </div>
  );
}

export default Book;
