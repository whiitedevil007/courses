import React from "react";

const courseModules = {
  "MERN Stack": [
    "HTML5: Basic Structure",
    "Advanced HTML: Forms and Multimedia",
    "CSS3 Basics: Selectors and Properties",
    "Advanced CSS: Flexbox, Grid, and Animations",
    "JavaScript Basics: Syntax and Functions",
    // ... Add all 100 modules
    "Capstone Project: Building a Full-Stack Application",
  ],
  "Android Development": [
    "Kotlin Basics: Variables and Data Types",
    "Object-Oriented Programming in Kotlin",
    "Functional Programming in Kotlin",
    "Advanced Coroutines for Concurrency",
    "Setting Up Android Studio",
    // ... Add all 100 modules
    "Capstone Project: End-to-End Android App Development",
  ],
  "Ethical Hacking": [
    "Introduction to Cybersecurity",
    "Setting Up a Hacking Lab",
    "Networking Basics for Hackers",
    "Passive Information Gathering",
    "Active Information Gathering",
    // ... Add all 100 modules
    "Capstone Project: Full-Scale Penetration Testing",
  ],
};

const CourseDetails = ({ course }) => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">{course}</h2>
      <ul className="list-disc pl-6">
        {courseModules[course]?.map((module, index) => (
          <li key={index} className="mb-2 text-gray-700">
            {module}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
