import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Import your components
import Navbar from "./components/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Skills from "./pages/skill/skill";
import Contact from "./pages/contact/contact";
import Project from "./pages/project/project";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
