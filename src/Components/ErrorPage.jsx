import React from "react";
// import { Link } from 'react-router-dom';
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="flex flex-col">
        <h1 className="text-center text-9xl tracking-widest font-bold text-[#F37335]">
          {" "}
          Oops!
        </h1>
        <h2 className="text-center py-8 text-4xl">The page does not exist !</h2>
        <Link to="/" className=" w-48 mx-auto">
          <button className="inline-flex justify-between gap-4 bg-[#135E9E] pr-6 py-1 rounded-xl items-center pl-2 font-bold">
            <BiRightArrowAlt className="text-3xl w-6 h-6 rounded-full bg-white" />
            <span className="text-xl text-white">Home Page</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
