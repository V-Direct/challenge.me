import React from "react";

export default function NameLabel({
    username,
    className
}) {
    return(
        <div className={className}>
            {username}
        </div>

    );
}