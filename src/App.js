import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CoursePage from "./components/CoursePage";


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/course/:id" element={<CoursePage />} />
      </Routes>
    </Router>
  );
}

export default App;
