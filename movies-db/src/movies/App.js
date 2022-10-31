import React, { useState, useEffect } from "react";
import HelmetHeader from "./HelmetHeader.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowMovieDetails from "./components/ShowMovieDetails.js";
import Home from "./components/Home.js";

const App = () => {
  const [input, setInput] = useState("Batman");
  const [modal, setModal] = useState("");
  const [movies, setMovies] = useState([]);

  const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${input}`;

  const getData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    if(data.Response === "False"){
      setModal(data.Error)
    } else{
      setModal("")
      setMovies(data.Search)
    }
  }

  useEffect(()=>{
    getData();
  }, [input])

  return (
    <>
      <Router>
        <HelmetHeader />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                input={input}
                setInput={setInput}
                modal={modal}
                movies={movies}
              />
            }
          />
          <Route path="/:type/:id" element={<ShowMovieDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
