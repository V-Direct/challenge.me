import React from "react";

export default function ChallengeItemHeader({ title, tag }) {
  return (
    <div className="card-title challenge-header">
      <div className="challenge-title">{title}</div><p/>
      <div className="challenge-tag">{tag}</div>
    </div>
  );
}
