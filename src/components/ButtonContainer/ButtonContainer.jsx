import React, { useState } from 'react';
import Button from '../Button/Button';

const ButtonContainer = () => {


    const [activeBtn , setActiveBtn] = useState("All")

    const toggle = (btnName) => {
        setActiveBtn(btnName)
    }

    
    return (
        <div className='flex justify-center items-center mt-10 gap-4 py-5 flex-wrap'>
            <Button onClick ={() => {toggle("All")}}  className = {activeBtn === "All"? "bg-red-500 text-white" : "bg-gray-100 text-black"}>All</Button>
            <Button onClick ={() => {toggle("Music")}} className = {activeBtn === "Music"? "bg-red-500 text-white" : "bg-gray-100 text-black"}>Music</Button>
            <Button onClick ={() => {toggle("Comedy")}} className = {activeBtn === "Comedy"? "bg-red-500 text-white" : "bg-gray-100 text-black"}>Comedy</Button>
            <Button onClick ={() => {toggle("Drawing")}} className = {activeBtn === "Drawing"? "bg-red-500 text-white" : "bg-gray-100 text-black"}>Drawing</Button>
        </div>
    );
};

export default ButtonContainer;