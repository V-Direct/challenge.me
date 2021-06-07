import React from "react";

export default class ChallengeView extends React.Component {
  render() {
    return <div>
    <table className="responsive-table white-text text-darken-2">
        <thead>
          <tr>
              <th>Title</th>
              <th>Tag</th>
              <th>Description</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{this.props.location.challenge.title}</td>
            <td>{this.props.location.challenge.tag}</td>
            <td>{this.props.location.challenge.description}</td>
          </tr>test
        </tbody>
      </table>
    </div>;
  }
}
