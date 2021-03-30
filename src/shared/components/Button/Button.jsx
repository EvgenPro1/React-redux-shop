import React from "react";

export const Button = ({text, type='button', className, onClick}) => {
    const newClassName = className + " btn btn-mouse-down"
    return <input onClick={onClick} className={newClassName} type={type} value={text}/>
}




