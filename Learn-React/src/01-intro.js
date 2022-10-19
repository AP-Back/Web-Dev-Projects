import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
    <>
      <div>
        <h1>This is my first component</h1>
        <h2>This is my second heading</h2>
      </div>
      <div>
        <h1>Lorem ipsum dolor sit amet.</h1>
      </div>
    </>
  );
}

/* <></>  is a fragement inside which you can add all the html and return as 1 single element*/
/* You can wrap all the divs inside one big final div too */
/* Or you can make use of semantic tags and just make sure there is one which wraps everything together finally */

const Greeting2 = () => {
  return React.createElement("h1", {}, "Kathiresan PL");
};

ReactDOM.render(<Greeting2 />, document.getElementById("root"));
ReactDOM.render(<Greeting />, document.getElementById("root"));
