import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Book_List = [
  {
    id: "1",
    img: "https://images-eu.ssl-images-amazon.com/images/I/71ys1PAnzPL._AC_UL600_SR600,400_.jpg",
    book: "How to Stop Worrying and Start Living",
    author: "Dale Carnegie",
  },
  {
    id: "2",
    img: "https://images-eu.ssl-images-amazon.com/images/I/71j0FLAauxL._AC_UL600_SR600,400_.jpg",
    book: "It Ends With Us: A Novel: Volume 1",
    author: "Colleen Hoover",
  },
  {
    id: "3",
    img: "https://images-eu.ssl-images-amazon.com/images/I/814jC+rODgL._AC_UL600_SR600,400_.jpg",
    book: "The Subtle Art Of Not Giving A Fuck",
    author: "Mark Manson",
  },
  {
    id: "4",
    img: "https://images-eu.ssl-images-amazon.com/images/I/814jC+rODgL._AC_UL600_SR600,400_.jpg",
    book: "The Last Thing He Told Me: The No. 1 New York Times Bestseller and Reese's Book Club Pick",
    author: "Laura Dave",
  },
];

const clickHandler = () => {
  alert("Hello World");
};

const complexclick = (author) => {
  console.log(author);
};

const Book = (props) => {
  const { img, book, author } = props;
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(book);
      }}
    >
      <img src={img} />
      <h2 onClick={() => console.log("Hey there")}>{book}</h2>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Read more
      </button>
      <button type="button" onClick={() => complexclick(author)}>
        Button
      </button>
      {/* If we put a function with parameter in onclick directly the function call gets invoked without even clicking */}
      {/* To avoid that we do ()=>functionname(paramter) */}
    </article>
  );
};

const newBooks = Book_List.map((a) => {
  return <Book key={a.id} {...a}></Book>;
});

const BookList = () => {
  return <div className="list">{newBooks}</div>;
};

ReactDOM.render(<BookList />, document.getElementById("root"));
