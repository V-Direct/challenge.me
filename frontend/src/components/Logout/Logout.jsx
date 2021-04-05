import React, {useCallback}  from "react";
import {Redirect} from "react-router-dom";



export default function Logout(){

    localStorage.removeItem("username");
    window.location.reload();
    return (
      <Redirect push to="/"></Redirect>
    );
}
