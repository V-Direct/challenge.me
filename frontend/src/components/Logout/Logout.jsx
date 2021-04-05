import React, {useCallback}  from "react";
import {Redirect, useHistory} from "react-router-dom";
import Home from "../App.jsx";


export default function Logout(){

    localStorage.removeItem("username");
    window.location.reload();
    return (
      <Redirect push to="/"></Redirect>
    );
}
