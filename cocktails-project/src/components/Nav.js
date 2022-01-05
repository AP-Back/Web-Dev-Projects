import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.svg";

const Nav = () => {
  return (
    <div className=" shadow-2xl mb-14 px-10 pt-1 pb-3">
      <Link to="/">
        <img className="h-20 w-52" src={logo} alt="The Cocktail Database" />
      </Link>
      <Link
        className="text-2xl pr-10 hover:text-green-700 transition delay-100"
        to="/"
      >
        Home
      </Link>
      <Link
        className="text-2xl hover:text-green-700 transition delay-100"
        to="/about"
      >
        About
      </Link>
    </div>
  );
};
// D:\A-CODING\PRESENT\WEB-DEV\REACT-PROJECTS-MINE\cocktails-project\src\img\logo.svg

export default Nav;
