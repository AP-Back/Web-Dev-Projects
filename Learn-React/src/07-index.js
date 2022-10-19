import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Book_List } from "./07-Book_List";
import Book from "./07-Book";
import { Fn1 } from "./07-Book";
import { Fn2 } from "./07-Book";

const newBooks = Book_List.map((a) => {
  return <Book key={a.id} {...a}></Book>;
});

const BookList = () => {
  return (
    <div className="list">
      {newBooks}
      <Fn1 />
      <Fn2 />
    </div>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
