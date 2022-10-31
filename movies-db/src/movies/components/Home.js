import React from 'react';
import ShowMovies from "./ShowMovies";
import FormInput from "./FormInput";

const Home = ({input, setInput, modal, movies}) => {
  return (
    <div>
      <FormInput input={input} setInput={setInput} modal={modal} />
      <ShowMovies movies={movies}/>
    </div>
  );
};

export default Home;
