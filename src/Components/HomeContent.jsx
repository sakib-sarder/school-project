import React from "react";
import Lottie from "lottie-react";
import programming from "../assets/programming.json";
import { Link } from "react-router-dom";

const HomeContent = () => {
  return (
    <div className="container mx-auto pt-8 px-6">
      <div className=" sm:flex items-center justify-center gap-5">
        {/* Content  */}
        <div className="lg:w-1/2 mb-8 md:mb-0">
          <h1 className="text-6xl font-semibold">
            The Smarter Way to Learn{" "}
            <span className="text-[#5F54FD] font-bold underline">Anything</span>
          </h1>
          <p className="mt-4 text-lg font-semibold tracking-wider">
            Unlock the power of the web with our web development course...
          </p>
          <div className="flex mt-3 gap-10">
            <Link to="/courses">
              <button className="btn-primary">Courses</button>
            </Link>
            <Link to="/about">
              <button className="btn-secondary">Learn More</button>
            </Link>
          </div>
        </div>
        {/* Animation  */}
        <div className="relative lg:w-1/2 ">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
            <Lottie animationData={programming} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
