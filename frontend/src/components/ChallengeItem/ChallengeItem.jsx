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
      <div className="row">
        
          <div className="card challenge-container blue darken-3">
            <div className="card-content">
              <ChallengeItemHeader title={title} tag={tag} />
              <div className="challenge-description">{description}</div>
              <div className="labels-container">
                {
                labels === undefined ? console.log("no label") : labels.map((label) => (
                  <div key={labels.indexOf(label)} className="label">
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        
      </div>
  );
}


