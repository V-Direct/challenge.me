import React from "react";
import ChallengeItemHeader from "./ChallengeItemHeader";
import '../../css/ChallengeItem.css';

export default function ChallengeItem({
  title,
  tag,
  description,
  labels,
  creator,
}) {
  return (
    <div className="challange-container">
      <ChallengeItemHeader title={title} tag={tag} />
      <div className="challenge-description">{description}</div>
      <div className="labels-container">
        {labels.map((label) => (
          <div key={labels.indexOf(label)} className="label">{label}</div>
        ))}
      </div>
    </div>
  );
}
