import React from "react";
import ChallengeItemHeader from "./ChallengeItemHeader";
import "../../css/ChallengeItem.css";

export default function ChallengeItem({
  title,
  tag,
  description,
  labels,
  creator,
}) {

  return (
  
          <div className="card challenge-container grey darken-3">
            <div className="card-content">
              <ChallengeItemHeader title={title} tag={tag} />
              <div className="labels-container">
                {
                labels === undefined ? console.log("no label") : labels.map((label) => (
                  <div key={labels.indexOf(label)} className="label">
                    {label}
                  </div>
                ))}
              </div>
              <div className="challenge-description">{description}</div>
              
            </div>
 
        </div>
    
  );
}


/*
<div className="labels-container">
                {labels.map((label) => (
                  <div key={labels.indexOf(label)} className="label">
                    {label}
                  </div>
                ))}
              </div>
*/