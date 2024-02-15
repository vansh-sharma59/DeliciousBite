import React from "react";
import { useState, useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import Book from "../components/Book";
import Picks from "../components/Picks";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fecthDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    setIsLoading(false);
  };
  console.log(details);

  useEffect(() => {
    fecthDetails();
  }, [params.name]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <div className="container">
        <div className="mt-[8rem]">
          <p className="text-center text-3xl font-semibold mb-4 md:text-4xl lg:text-6xl">
            {details.title}
          </p>
          <div className="w-[30rem] h-[20rem] overflow-hidden rounded-xl m-auto shadow-black shadow-lg md:w-[35rem] md:h-[25rem] md:my-[3rem] lg:w-[49rem] lg:h-[35rem]">
            <img
              src={details.image}
              alt="dish"
              className="w-[100%] h-[100%] object-cover rounded-xl"
            />
          </div>
          <div className="my-8 px-8">
            <h1 className="text-3xl font-medium mb-3 md:text-4xl lg:text-5xl lg:mb-5">
              Ingredients
            </h1>
            {details.extendedIngredients.map((item) => {
              return (
                <li className="text-xl md:text-2xl lg:text-3xl">
                  {item.original}
                </li>
              );
            })}
          </div>
          <div className="my-8 px-8">
            <h1 className="text-3xl font-medium mb-3 md:text-4xl lg:text-5xl lg:mb-5">
              Instructions
            </h1>
            <div
              className="text-xl text-justify md:text-2xl lg:text-3xl"
              dangerouslySetInnerHTML={{ __html: details.instructions }}
            ></div>
            <div
              className="text-xl text-justify mb-[5rem] md:text-2xl lg:text-3xl"
              dangerouslySetInnerHTML={{ __html: details.summary }}
            ></div>
          </div>
        </div>
      </div>
      <Book />
      <Picks />
      <Footer />
    </div>
  );
}

export default Recipe;
