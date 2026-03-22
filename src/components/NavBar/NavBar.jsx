import React from "react";
import logo from "../../assets/Logo.png";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 border-b border-gray-300 pt-5 md:pt-10">
        <div className="navbar-start">
          <img src={logo} alt="" />
        </div>

        <div class="navbar-center  hidden md:flex">
          <a class="btn btn-ghost bg-gray-200 text-xl">Sort by view</a>
        </div>
        <div className="navbar-end">
          <a className="btn bg-red-500 text-white">Blog</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
