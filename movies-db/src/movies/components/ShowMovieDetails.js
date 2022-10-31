import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ShowMovieDetails = () => {
  const [dataMovie, setDataMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const imdbID = useParams().id;
  const type = useParams().type;

  const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`;
  const getDataMovie = async () => {
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response === "False") {
      setDataMovie("");
    } else {
      setIsLoading(false);
      setDataMovie(data);
    }
  };

  useEffect(() => {
    getDataMovie();
  }, []);

  if (dataMovie === "") {
    return (
      <div className=" mb-7 text-3xl sm:text-4xl font-bold text-center">
        {`${type}`} does not exist
      </div>
    );
  } else if(isLoading){
    return(
      <div className=" text-center text-3xl my-24 font-semibold">
        Loading...
      </div>
    );
  } else {
    return (
      <div className=" mt-20">
        <div className=" sm:grid grid-cols-2 px-5 sm:px-10">
          <div className="w-fit sm:ml-auto sm:mr-[5%] flex items-center">
            <img
              src={dataMovie.Poster}
              alt={dataMovie.Title}
              className="  w-[90vw] sm:w-96"
            />
          </div>
          <div className=" my-10 ml-5 w-3/5">
            <div className=" mb-7 text-3xl sm:text-4xl font-bold">
              {dataMovie.Title}
            </div>
            <div className=" lg:text-lg tracking-wide">{dataMovie.Plot}</div>
            <div className=" my-3 rounded-xl text-sky-800 px-3 pb-1 font-semibold bg-blue-300 w-fit">
              {dataMovie.Year}
            </div>
            <div>
              <Link
                to="/"
                className=" inline-block my-3 rounded-lg border-2 text-white border-sky-500 bg-sky-500 px-5 py-1 hover:text-sky-500 hover:bg-white duration-200 ease-in-out"
              >
                Back To Movies
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ShowMovieDetails;
