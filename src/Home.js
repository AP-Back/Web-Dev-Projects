import React, { useEffect, useRef, useState } from "react";
import Cocktails from "./Cocktails";

const Home = () => {
  const [state, setstate] = useState("");

  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div>
      <div className=" rounded-md mx-auto max-w-sm md:max-w-xl lg:max-w-xl shadow-lg bg-gray-100 p-5">
        <p className=" text-green-900 font-extrabold font-mono">
          Search Your Favorite Cocktail
        </p>
        <input
          className=" w-full my-4 px-2 py-1"
          ref={ref}
          type="text"
          value={state}
          onChange={(e) => {
            setstate(e.target.value);
          }}
        />
      </div>
      <Cocktails state={state} />
    </div>
  );
};

export default Home;
