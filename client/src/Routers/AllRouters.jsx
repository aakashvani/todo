// import React from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import SignUp from "../Pages/SignUp";
import Dashbord from "../Pages/Dashbord";
import Signin from "../Pages/Signin";

const AllRouters = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Dashbord" element={<Dashbord />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin"element={<Signin/>} />
      </Routes>
    </div>
  );
};

export default AllRouters;
