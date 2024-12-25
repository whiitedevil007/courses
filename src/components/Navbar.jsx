import React from "react";

const Navbar = () => {
  const menuItems = ["Home", "About Us", "Courses", "Testimonials", "Contact"];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tech Institute</h1>
        <ul className="flex space-x-6">
          {menuItems.map((item, index) => (
            <li key={index} className="cursor-pointer hover:text-gray-200">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
