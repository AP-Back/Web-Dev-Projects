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
];

// const names = ["Kathi","Raaj","Kartik"];
// const newNames = names.map((name)=>{
//   return <h1>{name}</h1>
// })

// const BookList = () => {
//   return (
//     <div className="list">
//       {newNames}
//     </div>
//   );
// };

// const newBooks = Book_List.map((a)=>{
//   const { img, book, author } = a;
//   return(
//     <article>
//       <img src={img} />
//       <h2>{book}</h2>
//       <h4>{author}</h4>
//     </article>
//   );
// })

const Book = (props) => {
  //without spread
  // const { img, book, author } = props.bookkk;

  //for spread
  const { img, book, author } = props;
  return (
    <article className="book">
      <img src={img} />
      <h2>{book}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const newBooks = Book_List.map((a) => {
  //without spread
  // return <Book key={a.id} bookkk={a}></Book>;

  //for spread
  return <Book key={a.id} {...a}></Book>;
});

const BookList = () => {
  return <div className="list">{newBooks}</div>;
};

ReactDOM.render(<BookList />, document.getElementById("root"));
