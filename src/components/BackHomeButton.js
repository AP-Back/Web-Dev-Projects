import { Link } from "react-router-dom";

const BackHomeButton = () => {
  return (
    <div className=" text-center">
      <Link to="/">
        <button className=" rounded-md bg-green-800 font-extralight py-2 px-5 text-white text-sm hover:bg-green-100 hover:text-gray-700 transition delay-200 ease-in-out tracking-widest">
          BACK HOME
        </button>
      </Link>
    </div>
  );
};

export default BackHomeButton;
