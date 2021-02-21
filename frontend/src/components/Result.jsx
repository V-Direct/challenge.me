import React from "react";
import "../css/Result.css";

const data = 
{Place: 500,

Challenge:"100 meter sprint",

pointsEarned:100,

Time: "14 seconds"};

export default function Result(){
return(
    <div>
        <div className="resultDiv">
            <div className="title">Results of {data.Challenge}</div>
            <div className="tableResult">
        <table>
        <div className="tableItems">Place</div>
        <div>{data.Place}</div>
        <div className="tableItems">Time</div>
        <div>{data.Time}</div>
        <div className="tableItems">Points Earned</div>
        <div>{data.pointsEarned}</div>
        </table>
        </div>
        </div>
    </div>

);}