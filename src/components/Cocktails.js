import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";

const Cocktails = ({ state }) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${state}`;

  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(true);
  const [cockTails, setCockTails] = useState([]);

  const getItems = async () => {
    setLoading(true);
    setIsError(true);
    try {
      const response = await fetch(url);
      const { drinks } = await response.json();
      // setting the value of the state variable, cocktails
      // directly
      if (drinks) {
        setCockTails(drinks);
        setIsError(false);
      }
      setLoading(false);
    } catch (error) {
      setIsError(true);
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getItems();
  }, [state]);

  if (loading) {
    return (
      <div className=" text-center my-20">
        <ClipLoader size={150} color={"#476a2e"} />
      </div>
    );
  } else {
    if (isError) {
      return (
        <div className=" font-extrabold mx-auto my-20 text-green-800 w-8/12 text-center">
          <h1 className="text-6xl">
            404! <br /> Cocktail Does Not Exist!!!
          </h1>
          <h3 className="text-3xl">
            <br /> Search Something Else &lt;3
          </h3>
        </div>
      );
    } else {
      return (
        <div>
          {/* This div is mainly concerend with the 3X3 layout */}
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20 mx-10 md:mx-10 lg:mx-32">
            {cockTails.map((cockTail) => {
              return (
                /* This div is mainly concerned with each box inside the grid */
                <div
                  className="bg-gray-200 rounded max-w-md mx-auto shadow hover:shadow-xl transition delay-100 ease-in-out"
                  key={cockTail.idDrink}
                >
                  <img
                    // src="https://www.thecocktaildb.com/images/media/drink/pwgtpa1504366376.jpg"
                    src={cockTail.strDrinkThumb}
                    alt={cockTail.strDrink}
                    className=""
                  />

                  <div className=" m-3">
                    <h1 className=" font-extrabold text-4xl font-mono">
                      {cockTail.strDrink}
                    </h1>
                    <h3 className=" font-extrabold text-xl font-mono">
                      {cockTail.strGlass}
                    </h3>
                    <h5 className=" font-extralight text-lg">
                      {cockTail.strAlcoholic}
                    </h5>
                    <Link
                      to={`/cocktail/${cockTail.strDrink}/${cockTail.idDrink}`}
                    >
                      <button className="rounded-lg bg-green-700 text-white font-mono hover:bg-green-100 hover:text-green-700 transition delay-200 ease-linear px-2 py-1">
                        DETAILS
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
};

export default Cocktails;
