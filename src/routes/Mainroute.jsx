import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";
import Home from "@/components/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";

const Mainroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default Mainroute;
