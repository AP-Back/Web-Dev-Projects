import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import AboutCockTail from "./AboutCockTail";

import Nav from "./Nav";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cocktail/:itemName/:id" element={<AboutCockTail />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
