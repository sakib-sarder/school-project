import React from "react";
import { BiUser } from "react-icons/bi";

const CourseCard = ({ course }) => {
  console.log(course);
  const { course_title, author, img, course_price, description } = course;
  return (
    <div className="">
      <div className="w-full border p-3 shadow-2xl rounded-t-2xl">
        <div>
          <img className="w-full rounded-t-2xl shadow-2xl" src={img} alt="course banner" />
        </div>
        <div className="space-y-3">
          <h1 className="text-5xl font-bold">{course_title}</h1>
          <p className="font-mono text-sm">{description}</p>
          <div className="text-2xl flex items-center gap-2 font-semibold">
            <BiUser className="" />
            <p className="text-gray-500">{author}</p>
          </div>
            <p className=""><span className="text-lg font-semibold">Price:</span> <span className="text-violet-500">${course_price}</span></p>
              </div>
              <div className="text-end mt-4">
                  <button className="btn-primary">Add To Cart</button>
              </div>
      </div>
    </div>
  );
};

export default CourseCard;
