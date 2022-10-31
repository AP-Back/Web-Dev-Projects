import React from "react";
import { Link } from "react-router-dom";

const ShowSingleMovie = ({ movie }) => {
  return (
    <div className="relative">
      <Link to={`/${movie.Type}/${movie.imdbID}`}>
        <img
          src={movie.Poster}
          alt={movie.Title}
          className=" object-cover h-[25rem] w-[22rem] sm:w-72"
        />
        <div className=" absolute top-0 h-full w-full opacity-0 hover:opacity-80 ease-in-out duration-300 bg-gray-800 text-white vert-center">
          <div className=" px-10">
            <span className=" text-2xl font-semibold ">{movie.Title}</span>
            <br />
            <span>{movie.Year}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

const ShowMovies = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 lg:grid-cols-4 sm:gap-5 xl:gap-8 w-fit mx-auto px-3 sm:px-10 my-20">
      {movies.map((singleMovie) => {
        return <ShowSingleMovie movie={singleMovie} key={singleMovie.imdbID} />;
      })}
    </div>
  );
};

export default ShowMovies;
