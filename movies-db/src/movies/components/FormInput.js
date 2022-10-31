import React, { useRef, useEffect } from "react";

const FormInput = (props) => {
  const ref = useRef(null);
  const { input, setInput, modal } = props;
  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <div className=" mx-10 xl:mx-20 mt-10 mb-20">
      {/* TITLE */}
      <div className=" text-3xl sm:text-4xl font-semibold">Search Movies</div>
      {/* TITLE-END */}

      {/* INPUT */}
      <div>
        <form action="" method="get">
          <input
            type="text"
            className=" rounded-md border-2 border-sky-400 focus:border-sky-700 focus:duration-200 !outline-none mt-5 w-4/5 xl:w-[62rem] pb-2 pt-1 px-4 text-xl"
            ref={ref}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </form>
        {modal && <span className=" text-red-700">{modal}</span>}
      </div>
      {/* INPUT-END */}
    </div>
  );
};

export default FormInput;
