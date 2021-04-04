import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";

async function createUser(newUsername, newPassword) {
  const response = await fetch("http://localhost:3001/user/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: newUsername, password: newPassword }),
  });
  const data = await response.json();
  console.log(data);
}

const onClick = () => {
  const newUsername = document.getElementById("inputUsername").value;
  const newPassword = document.getElementById("inputPassword").value;

  !newUsername || !newPassword || newUsername === "" || newPassword === ""
    ? (document.getElementById("errorLabel").innerHTML = "ungültige Werte")
    : createUser(newUsername, newPassword);
};

function Register() {
  return (
    <div className="row">
      <div className="col s4"></div> 
      <form className="col s4">
        <img src={Logo} style={{margin:"10%"}}></img>
        <div className="input-field">
          <input id="inputUsername" placeholder="Username"></input>
        </div>
        <div className="input-field">
          <input id="inputPassword" placeholder="Password" type="password"></input>
        </div>
         
        <div>
          <label id="errorLabel"></label>
        </div>
        <div>
          <button onClick={onClick}>
            <Link to="/">Register</Link>
          </button>
        </div>
      </form>
      <div className="col s4"></div> 
    </div>
  );
}

export default Register;
