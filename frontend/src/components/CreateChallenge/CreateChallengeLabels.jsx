import React from "react";

import "../../css/ChallengeItem.css";

export default class CreateChallengeLabels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div>
        <div className="row createlabelscontainer">
          <div className="labelsinput">
            <input
              type="text"
              id="labelinput"
              placeholder="Label hinzufügen"
            ></input>
          </div>

          <div className="labelsinputbutton">
            <button
              className="btn-floating btn-small waves-effect red"
              onClick={() => {
                this.setState({
                  data: [
                    ...this.state.data,
                    document.getElementById("labelinput").value,
                  ],
                });

                this.props.labelData([
                  ...this.state.data,
                  document.getElementById("labelinput").value,
                ]);

                document.getElementById("labelinput").value = "";
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="row">
          <div className="labelsshow">
            {this.state.data.map((item) => (
              <div className="label" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
