import React from 'react'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Picks() {
    const [picks, setPicks] = useState([]);

    useEffect(() => {
        getPicks();
      }, []);

    const getPicks = async () => {
        const check = localStorage.getItem("picks");
    
        if (check) {
          setPicks(JSON.parse(check));
        } else {
          const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=3`
          );
          const data = await api.json();
          localStorage.setItem("picks", JSON.stringify(data.recipes));
          setPicks(data.recipes);
        }
      };

  return (
    <div className='my-8'>
      <h1 className='text-3xl text-center font-medium md:text-4xl md:my-6 lg:text-6xl'>Try these recipes</h1>
      <div className='grid grid-cols-1 gap-4 justify-items-center md:grid-cols-2 lg:grid-cols-3 container'>
        {picks.map((item) => {
            return(
                <Link to={"/recipe/"+item.id}>
                <div className="my-[2rem] w-[30rem] shadow-black shadow-lg rounded-xl hover:scale-105 duration-150">
                <div className="w-[30rem] h-[20rem] rounded-t-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt="dish"
                    className="w-[100%] h-[100%] object-cover"
                  />
                </div>
                <h3 className="text-center py-2 text-xl font-medium">
                  {item.title.length > 30
                    ? item.title.slice(0, 30) + "..."
                    : item.title}
                </h3>
              </div>
              </Link>
            )
        })}
      </div>

    </div>
  )
}

export default Picks
