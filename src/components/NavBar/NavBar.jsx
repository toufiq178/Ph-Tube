import React from "react";
import logo from "../../assets/Logo.png";
import Button from "../Button/Button";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 border-b border-gray-300 pt-5 md:pt-10">
        <div className="navbar-start">
          <img src={logo} alt="" />
        </div>

        <div className="navbar-center  hidden md:flex">
          <Button className = "bg-gray-100 ">Sort by view</Button>
        </div>
        <div className="navbar-end">
          <Button  className = "bg-red-500 text-white">Blog</Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
