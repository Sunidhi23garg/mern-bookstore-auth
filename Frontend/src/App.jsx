import React from "react";
import Home from "./home/Home";
import Courses from "./courses/Courses"
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  // return <div className="text-3xl font-bold underline">Hello</div>

  return (
    <>
      {/* <Home/>
      <Course/> */}

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/course" element={<Courses/>} />
        <Route path="/signup" element={<Signup/>} />
        {/* <Route path="/contact" element={<Contact/>} /> */}
      </Routes>
    </>
  );
}

export default App;