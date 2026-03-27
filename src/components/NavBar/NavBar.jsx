import React from "react";
import logo from "../../assets/Logo.png";
import Button from "../Button/Button";

const NavBar = ({ handleSearch }) => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100 border-b border-gray-300 pt-5 md:pt-10 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left side */}
        <div className="navbar-start">
          <img src={logo} alt="Logo" />
        </div>

        {/* Right Side */}
        <div className="navbar-end flex flex-col md:flex-row items-center gap-4">
          
          
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full max-w-xs md:max-w-60"
            onChange={(e) => handleSearch(e.target.value)}
          />

         
          <Button className="bg-red-500 text-white">
            Blog
          </Button>

        </div>
      </div>
    </div>
  );
};

export default NavBar;