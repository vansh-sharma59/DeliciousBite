import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Nothing from "../components/Nothing";

function Searched() {
  const [search, setSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let params = useParams();

  const getSearch = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearch(recipes.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getSearch(params.search);
  }, [params.search]);

  console.log(search);

  return isLoading ? (
    <Loading />
  ) : search.length == 0 ? (
    <Nothing />
  ) : (
    <div className="mt-[8rem]">
      <h1 className="text-center text-4xl font-medium md:text-5xl lg:text-6xl lg:py-[2rem]">
        {params.search.toUpperCase()}
      </h1>
      <div className="grid grid-cols-1 gap-4 justify-items-center md:grid-cols-2 lg:grid-cols-3 container">
        {search.map((item) => {
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
                <h3 className="text-center py-2 text-xl font-medium">
                  {item.title.length > 30
                    ? item.title.slice(0, 30) + "..."
                    : item.title}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Searched;
