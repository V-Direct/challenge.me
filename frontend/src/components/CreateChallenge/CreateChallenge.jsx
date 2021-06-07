import React from "react";
import ChallengeItemHeader from "../ChallengeItem/ChallengeItemHeader";
import CreateChallengeLabels from "./CreateChallengeLabels";
import "../../css/ChallengeItem.css";
import Button from "../Button/Button";
import MapContainer from "./MapContainer";

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
    const title = document.getElementById("challenge-create-title").value;
    const description = document.getElementById("challenge-create-description")
      .value;
    console.log(
      JSON.stringify({
        title: title,
        description: description,
        labels: this.labels,
        start_date: Date.now(),
        creator: localStorage.getItem("username"),
      })
    );

    await fetch("http://localhost:3001/challenge/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        labels: this.labels,
        start_date: Date.now(),
        creator: localStorage.getItem("username"),
      }),
    });
  };

  // Initialize and add the map

  render() {
    return (
      <div className="card grey darken-3">
        <div className="card-content">
          <div style={{ marginBottom: 30 + "%" }}>
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

            <div className="col s6">
              <CreateChallengeLabels labelData={this.getLabelData} />
              <button
                className="waves-effect waves-light btn red"
                onClick={this.onClick}
              >
                Create Challenge
              </button>
            </div>
            <div className="col s6">
              <MapContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
