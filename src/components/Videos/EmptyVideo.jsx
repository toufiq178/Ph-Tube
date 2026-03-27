import React from 'react';
import emptyImg from "../../assets/Icon.png"

const EmptyVideo = () => {
    return (
        <div className='h-[40vh] md:h-[50vh] lg:h-[60vh] flex justify-center items-center text-center'>
            
            <div className='flex flex-col justify-center items-center gap-5'>
                <img src={emptyImg} alt="" />
                <h1 className='font-bold text-2xl px-5 md:text-4xl'>Oops!! Sorry, There is no content here</h1>
            </div>
        </div>
    );
};

export default EmptyVideo;