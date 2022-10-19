import React from "react";
import ReactDOM from "react-dom";
import image from "../../tutorial/src/book.jpg";
import "./index.css";

const BookList = () => {
  return (
    <div className="list">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
};

const Book = () => {
  return (
    <article className="book">
      <BookImage />
      <BookName />
      <Rating />
      <Pricing />
    </article>
  );
};

const BookImage = () => {
  return (
    <>
      <img src={image} />
    </>
  );
};

const name = "Collen Hoover";
const BookName = () => {
  return (
    <>
      <h2>It Ends With Us: A Novel: Volume 1</h2>
      <h4 style={{ color: "blue", letterSpacing: "2px" }}>{name}</h4>
    </>
  );
};

function Rating() {
  return (
    <>
      <h4>⭐⭐⭐⭐⭐ 161,157</h4>
    </>
  );
}

function Pricing() {
  return (
    <>
      <h4>Paperback</h4>
      <h3>Rs 229.00</h3>
    </>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
