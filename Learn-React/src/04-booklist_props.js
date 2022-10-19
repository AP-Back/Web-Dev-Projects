import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const FirstBook = {
  img: "https://images-eu.ssl-images-amazon.com/images/I/71ys1PAnzPL._AC_UL600_SR600,400_.jpg",
  book: "How to Stop Worrying and Start Living",
  author: "Dale Carnegie",
};

const BookList = () => {
  return (
    <div className="list">
      <Book
        img="https://images-eu.ssl-images-amazon.com/images/I/71j0FLAauxL._AC_UL600_SR600,400_.jpg"
        book="It Ends With Us: A Novel: Volume 1"
        author="Colleen Hoover"
      >
        <p>
          Lorem ipsum Hic et sint libero reprehenderit cupiditate veniam quo
          quam dicta illum vero, provident itaque accusantium natus beatae
          possimus quidem repellendus ipsa laudantium iure animi tempore?
        </p>
      </Book>
      <Book
        img="https://images-eu.ssl-images-amazon.com/images/I/814jC+rODgL._AC_UL600_SR600,400_.jpg"
        book="The Subtle Art Of Not Giving A Fuck"
        author="Mark Manson"
      />
      <Book
        img={FirstBook.img}
        book={FirstBook.book}
        author={FirstBook.author}
      />
    </div>
  );
};

const Book = (props) => {
  const { img, book, author, children } = props;
  return (
    <article className="book">
      <img src={img} />
      <h2>{book}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
