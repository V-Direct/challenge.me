import React from "react";
import NavBarItem from "./NavBarItem";
import "../../css/NavBar/NavBar.css";

function NavBar() {
  return (
    <nav className="navitem">
      <NavBarItem content="Home" />
      <NavBarItem content="Contact" />
      <NavBarItem content="Notifications" />
    </nav>
  );
}

export default NavBar;
