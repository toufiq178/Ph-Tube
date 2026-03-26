import React from 'react';

const Button = ({className , children , onClick}) => {
    return (
        <button className={`btn cursor-pointer ${className}`} onClick={onClick}>{children}</button>
    );
};

export default Button;