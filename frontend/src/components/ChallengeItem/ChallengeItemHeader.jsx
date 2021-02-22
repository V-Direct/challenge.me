import React from "react";

export default function ChallengeItemHeader({ title, tag }) {
  return (
    <div className="challenge-header">
      <div className="challenge-title">{title}</div>
      <div className="challenge-tag">{tag}</div>
    </div>
  );

}
