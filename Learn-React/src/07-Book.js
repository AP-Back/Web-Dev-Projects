import React from 'react'

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

const clickHandler = () => {
  alert("Hello World");
};

const complexclick = (author) => {
  console.log(author);
};

export default Book;

const Fn1 = () =>{
  return(
    <h1>Hello World</h1>
  );
}

const Fn2 = () =>{
  return(
    <h1>Bye World</h1>
  );
}

export {Fn1,Fn2}; 
