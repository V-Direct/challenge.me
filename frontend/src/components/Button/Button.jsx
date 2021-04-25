import React from "react"

export default function Button({
    buttonText,
    onClick,
    type,
    className
}) {

    return(
        <button className="btn red" onClick={onClick} type={type} >{buttonText}</button>
    );
    
}