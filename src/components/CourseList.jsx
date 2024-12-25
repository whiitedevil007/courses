import React from "react";

const courses = ["MERN Stack", "Android Development", "Ethical Hacking"];

const CourseList = ({ onCourseSelect }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
      {courses.map((course, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 shadow hover:bg-blue-50 cursor-pointer"
          onClick={() => onCourseSelect(course)}
        >
          <h3 className="text-xl font-bold">{course}</h3>
          <p className="text-gray-600">Explore the full curriculum</p>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
