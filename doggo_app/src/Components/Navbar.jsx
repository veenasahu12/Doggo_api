import React from "react";
import { Link } from "react-router-dom";
import Style from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={Style.navbar}>
      <Link to="/Register" className="link">
        Sign-Up
      </Link>
    </div>
  );
};

export default Navbar;
