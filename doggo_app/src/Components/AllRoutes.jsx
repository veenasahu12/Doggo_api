import React from "react";
import Register from "./Register/Register";
import Login from "./Login/Login"
import Breeds from "./Breeds_page/Breeds";
import BreedDetail from "./Breeds_page/BreedDetail";
import {Routes,Route} from "react-router-dom";
import RequireAuth from "./RequireAuth";


const AllRoutes = (props) => {
    
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Breeds" element={<RequireAuth><Breeds /></RequireAuth>} />
        <Route path="/Breeds/:id" element={<RequireAuth><BreedDetail /></RequireAuth>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
