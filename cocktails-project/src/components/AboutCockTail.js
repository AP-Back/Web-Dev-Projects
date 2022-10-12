import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import BackHomeButton from "./BackHomeButton";

const ItemValueComponent = ({ itemKey, itemValue }) => {
  if (itemValue) {
    if (Array.isArray(itemValue)) {
      return (
        <div className=" my-5 mx-16">
          <span className=" rounded-md text-md text-green-800 bg-green-100 px-2 font-bold">
            {itemKey}
          </span>
          <span className=" font-bold text-lg mx-2">
            {itemValue.map((item, index) => {
              return item && index === 0 ? item : item ? ", " + item : "";
              // return ((item)?(item + (index !== itemValue.length-1)?", ":""):"");
            })}
            .
          </span>
        </div>
      );
    } else {
      return (
        <div className=" my-5 mx-16">
          <span className=" rounded-md text-mg text-green-800 bg-green-100 px-2 font-bold">
            {itemKey}
          </span>
          <span className=" font-bold text-lg mx-2">{itemValue}</span>
        </div>
      );
    }
  }
};

const AboutCockTail = () => {
  const FIRSTELEMENT = 0;
  const [loading, setLoading] = useState(true);
  const [errorPage, setErrorPage] = useState(false);
  const [cockTailItem, setCockTailItem] = useState({});
  const id = useParams().id;
  const itemName = useParams().itemName;

  // const url = `www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${itemName}`; // margarita

  const getCockTails = async () => {
    try {
      const response = await fetch(url);
      // getting the key drinks of that object
      const { drinks } = await response.json();
      // getting the particular id of that object
      const itemDetails = drinks.filter((item) => {
        return item.idDrink === id;
      });

      // getting the first element of the array from the response
      setCockTailItem(itemDetails[FIRSTELEMENT]);
    } catch (error) {
      setErrorPage(true);
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCockTails();
  }, []);

  if (loading) {
    return (
      <div className=" text-center my-20">
        <ClipLoader size={150} color={"#476a2e"} />
      </div>
    );
  } else {
    if (errorPage) {
      // if(false){
      return (
        <div>
          <h1>Oops, an Error had occured!!!</h1>
          <BackHomeButton />
        </div>
      );
    } else {
      return (
        <div>
          <BackHomeButton />
          <h1 className=" mt-10 text-center text-3xl font-bold tracking-wider">
            {cockTailItem.strDrink}
            {/* MARGARITA */}
          </h1>
          <div className="lg:grid lg:grid-cols-2">
            <img
              src={cockTailItem.strDrinkThumb}
              alt={cockTailItem.strDrink}
              className=" rounded-sm w-10/12 mx-auto my-10 lg:mr-5 md:w-8/12 lg:w-7/12 border-8 border-red-700"
            />

            <div className="my-auto md:ml-5">
              {/* ITEM */}
              <ItemValueComponent
                itemKey={"Name: "}
                itemValue={cockTailItem.strDrink}
              />
              <ItemValueComponent
                itemKey={"Category: "}
                itemValue={"Cocktail"}
              />
              <ItemValueComponent
                itemKey={"Info: "}
                itemValue={cockTailItem.strAlcoholic}
              />
              <ItemValueComponent
                itemKey={"Glass: "}
                itemValue={cockTailItem.strGlass}
              />
              <ItemValueComponent
                itemKey={"Instruction: "}
                itemValue={cockTailItem.strInstructions}
              />
              <ItemValueComponent
                itemKey={"Ingredients: "}
                itemValue={[
                  cockTailItem.strIngredient1,
                  cockTailItem.strIngredient2,
                  cockTailItem.strIngredient3,
                  cockTailItem.strIngredient4,
                  cockTailItem.strIngredient5,
                  cockTailItem.strIngredient6,
                  cockTailItem.strIngredient7,
                  cockTailItem.strIngredient8,
                  cockTailItem.strIngredient9,
                  cockTailItem.strIngredient10,
                  cockTailItem.strIngredient11,
                  cockTailItem.strIngredient12,
                  cockTailItem.strIngredient13,
                  cockTailItem.strIngredient14,
                  cockTailItem.strIngredient15,
                ]}
              />
            </div>
          </div>
        </div>
      );
    }
  }
};;

/*



*/
export default AboutCockTail;
