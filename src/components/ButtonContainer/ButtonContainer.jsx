import React, { use } from "react";
import Button from "../Button/Button";

const ButtonContainer = ({
  promiseCategories,
  activeCategory,
  setActiveCategory,
}) => {
  const categories = use(promiseCategories);
  //   console.log(categories.categories.category);

  const handleClick = (categoryName) => {
    setActiveCategory(categoryName);
  };

  return (
    <div className="flex justify-center items-center mt-10 gap-4 py-5 flex-wrap">
      <Button
        onClick={() => {
          handleClick("All");
        }}
        className={
          activeCategory === "All"
            ? "bg-red-500 text-white"
            : "bg-gray-100 text-black"
        }
      >
        All
      </Button>

      {/* <Button onClick ={() => {toggle("Music")}} className = {activeBtn === "Music"? "bg-red-500 text-white" : "bg-gray-100 text-black"}>Music</Button>
            <Button onClick ={() => {toggle("Comedy")}} className = {activeBtn === "Comedy"? "bg-red-500 text-white" : "bg-gray-100 text-black"}>Comedy</Button>
            <Button onClick ={() => {toggle("Drawing")}} className = {activeBtn === "Drawing"? "bg-red-500 text-white" : "bg-gray-100 text-black"}>Drawing</Button> */}

      {categories.categories.map((ctg) => (
        <Button
          onClick={() => {
            handleClick(ctg.category_id);
          }}
          key={ctg.category_id}
          className={
            activeCategory === ctg.category_id
              ? "bg-red-500 text-white"
              : "bg-gray-100 text-black"
          }
        >
          
          {ctg.category}
        </Button>
      ))}
    </div>
  );
};

export default ButtonContainer;
