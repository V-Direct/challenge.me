import React,{useState} from "react";
import {Link} from "react-router-dom";
import Logo from "../../images/logo.svg";
import LoginRel from "../Login/LoginRel.jsx";

async function loginUser(username, password, props) {
  const response = await fetch("http://localhost:3001/user/" + username, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  await localStorage.setItem("username", username);

  if (data.password !== password) {
    document.getElementById("errorLabel").innerHTML = "Falsches passwort";
  }
}

async function errorLabel() {
  const username = document.getElementById("inputUsername").value;
  const password = document.getElementById("inputPassword").value;
  document.getElementById("errorLabel").innerHTML = "";

  if (username.length === 0 || password.length === 0) {
    document.getElementById("errorLabel").innerHTML = "Fehler";
  } else {
    await loginUser(username, password);
    window.location.reload();
  }
}

function Login() {
  return (
    <div className="row">
      <div className="col s4"></div>
    <div className="col s4">
    <img src={Logo} style={{width:"250px"}}></img>
      <ol>
        <label>Username</label>
      </ol>
      <ol>
        <input id="inputUsername" style={{color:"white"}} ></input>
      </ol>
      <ol>
        <label>Password</label>
      </ol>
      <ol>
        {" "}
        <input id="inputPassword" type="password" style={{color:"white"}}></input>
      </ol>
      <ol>
        <label id="errorLabel"></label>
      </ol>
      <ol>
        {" "}
        <button onClick={errorLabel}>
         <Link to="/">Login</Link>
        </button>
      </ol>
    </div>
    <div className="col s4"></div>
    </div>
  );
}

export default Login;
