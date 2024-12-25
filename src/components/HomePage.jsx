import React from "react";
import { Link } from "react-router-dom";
import courses from "../data/courses";

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6">
        <h1 className="text-center text-4xl font-bold">Welcome to Tech Institute</h1>
        <p className="text-center mt-4">Learn from the best courses in technology and cybersecurity.</p>
      </header>

      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
              <p className="mb-4">{course.description}</p>
              <Link
                to={`/course/${course.id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
