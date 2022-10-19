import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
    <>
      <Details />
      <Details />
      <h4>Hello there </h4>
    </>
  );
}

const Name = () => <h1>Kathiresan PL</h1>;

const Regno = () => {
  return <h2>20BCE2400</h2>;
};

function Year() {
  return <h3>3rd year</h3>;
}

const Details = () => {
  return (
    <>
      <Name />
      <Regno />
      <Year />
    </>
  );
};

ReactDOM.render(<Greeting />, document.getElementById("root"));
