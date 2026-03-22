import React from 'react';
import Button from '../Button/Button';

const ButtonContainer = () => {
    return (
        <div className='flex justify-center items-center mt-10 gap-4 py-5 flex-wrap'>
            <Button  className = "bg-gray-100 ">All</Button>
            <Button  className = "bg-gray-100 ">Music</Button>
            <Button  className = "bg-gray-100 ">Comedy</Button>
            <Button  className = "bg-gray-100 ">Drawing</Button>
        </div>
    );
};

export default ButtonContainer;