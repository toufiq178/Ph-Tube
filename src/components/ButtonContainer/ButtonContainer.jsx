import React, { use, useState } from "react";
import Button from "../Button/Button";

const ButtonContainer = ({ promiseCategories }) => {
  const categories = use(promiseCategories);
  //   console.log(categories.categories.category);

  const [activeBtn, setActiveBtn] = useState("All");

  const toggle = (categoryName) => {
    setActiveBtn(categoryName);
  };

  return (
    <div className="flex justify-center items-center mt-10 gap-4 py-5 flex-wrap">

      <Button onClick={() => {toggle("All");}}className={activeBtn === "All"? "bg-red-500 text-white": "bg-gray-100 text-black"}>All</Button>


      {/* <Button onClick ={() => {toggle("Music")}} className = {activeBtn === "Music"? "bg-red-500 text-white" : "bg-gray-100 text-black"}>Music</Button>
            <Button onClick ={() => {toggle("Comedy")}} className = {activeBtn === "Comedy"? "bg-red-500 text-white" : "bg-gray-100 text-black"}>Comedy</Button>
            <Button onClick ={() => {toggle("Drawing")}} className = {activeBtn === "Drawing"? "bg-red-500 text-white" : "bg-gray-100 text-black"}>Drawing</Button> */}


      {categories.categories.map((ctg) => (
        <Button onClick={() => {toggle(ctg.category); }} className={ activeBtn === ctg.category ? "bg-red-500 text-white"  : "bg-gray-100 text-black" } > {ctg.category}</Button>
        
        ))}


    </div>
  );
};

export default ButtonContainer;
