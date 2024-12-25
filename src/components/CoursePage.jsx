import React from "react";
import { useParams } from "react-router-dom";
import courses from "../data/courses";

const CoursePage = () => {
  const { id } = useParams();
  const course = courses.find((course) => course.id === id);

  if (!course) {
    return <h2 className="text-center text-2xl font-bold">Course not found</h2>;
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">{course.title}</h1>
      <p className="mb-8">{course.description}</p>

      {course.sections.map((section, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
          <ul className="list-disc ml-8">
            {section.modules.map((module, idx) => (
              <li key={idx} className="text-lg mb-2">{module}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CoursePage;
