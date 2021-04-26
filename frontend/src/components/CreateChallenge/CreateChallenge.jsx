import React from "react";
import ChallengeItemHeader from "../ChallengeItem/ChallengeItemHeader";
import CreateChallengeLabels from "./CreateChallengeLabels";
import "../../css/ChallengeItem.css";
import Button from "../Button/Button";

export default class CreateChallenge extends React.Component {
  constructor() {
    super();
    this.labels = [];
  }

  getLabelData = (childData) => {
    this.labels = childData;
  };

  onClick = async () => {
    console.log(this.labels);

    // await fetch("http://localhost:3001/challenge/", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: {
    //     title: document.getElementById("challange-create-title").value,
    //     description: document.getElementById("challange-create-description")
    //       .value,
    //     labels: this.labels,
    //     creator: localStorage.getItem("username"),
    //   },
    // });

    console.log({
      title: document.getElementById("challenge-create-title").value,
      description: document.getElementById("challenge-create-description")
        .value,
      labels: this.labels,
      creator: localStorage.getItem("username"),
    });
  };

  render() {
    return (
      <div className="card grey darken-3">
        <div className="card-content">
          <ChallengeItemHeader title="Create Challenge" />
          <input
            placeholder="Title"
            type="text"
            id="challenge-create-title"
          ></input>
          <textarea
            placeholder="Description"
            className="description-textarea"
            id="challenge-create-description"
          ></textarea>

          <CreateChallengeLabels labelData={this.getLabelData} />

          <Button buttonText="Create Challange" onClick={this.onClick} />
        </div>
      </div>
    );
  }
}
