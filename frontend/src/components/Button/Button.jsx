import React from "react"

export default function Button({
    buttonText,
    onClick,
    type,
    className
}) {

    return(

            <button className={className} onClick={onClick} type={type} >{buttonText}</button>

    );
    
}