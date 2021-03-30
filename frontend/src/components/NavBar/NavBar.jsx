import React from "react";
import NavBarItem from "./NavBarItem";
import "../../css/NavBar.css";

function NavBar() {
  const renderRightSide = () => {
    if (1 === 3) {
      return (
        <ul className="right">
          <NavBarItem
            content={localStorage.getItem("username")}
            link="account"
          />
          <NavBarItem content="Logout" link="" />
        </ul>
      );
    } else {
      return (
        <ul className="right">
          <NavBarItem content="Register" link="register" />
          <NavBarItem content="Login" link="login" />
        </ul>
      );
    }
  };

  return (
    <nav className="">
      <div className="nav-wrapper">
        <ul className="left">
          <NavBarItem content="Home" link="" />
          <NavBarItem content="Contact" link="contact" />
        </ul>
        {renderRightSide()}
      </div>
    </nav>
  );
}

export default NavBar;
