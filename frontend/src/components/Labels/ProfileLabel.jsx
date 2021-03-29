import React from "react";
import {Link} from 'react-router-dom';

export default function ProfileLabel({
    content,
    link,
    className,
    divClassname
}) {

    return(
    
    <div className={divClassname}>
     <Link className={className} to={"/"+link}>{content}</Link>
    </div>);
    
}