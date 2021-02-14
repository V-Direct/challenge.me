import React from "react";
import "../css/App.css";
import NavBar from "./NavBar/NavBar";
import ChallengeItem from "./ChallengeItem/ChallengeItem";

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <ChallengeItem></ChallengeItem>
      </div>
    </div>
  );
}

export default App;
