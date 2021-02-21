import React from "react";
import NavBarItem from "./NavBarItem";
import "../../css/NavBar.css";

import "materialize-css"

function NavBar() {
  return (
    <nav className="">
      <div className="nav-wrapper blue darken-3">
        <NavBarItem content="Home" link=""/>
        <NavBarItem content="Contact" link="contact"/>
        <NavBarItem content="Register" link="register"/>
        <NavBarItem content="Login" link="login" />
      </div>
    </nav>
  );
}

export default NavBar;
