import React from "react";
import NavBarItem from "./NavBarItem";
import "../../css/NavBar.css";
import Nav from "../../images/Nav.svg";
import Search from "../../images/search.png";


function NavBar() {
  const renderRightSide = () => {
    if (localStorage.getItem("username")!=null) {
      return (
        <ul className="right">
          <NavBarItem
            content={localStorage.getItem("username")}
            link="account"
          />
          <NavBarItem content="Logout" link="logout" />
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
          <NavBarItem content={<div>
          <img className="NavLogo" alt="nav" src={Nav}></img>
          </div>} link="" />
          <NavBarItem content="Home" link="" />
          <NavBarItem content="Contact" link="contact" />
          <NavBarItem content={<input style={{color:"white"}}></input>} link=""/>
          <NavBarItem content={<div>
          <img className="SearchLogo" alt="search" src={Search}></img>
          </div>} link="" />

        </ul>
        {renderRightSide()}
      </div>
    </nav>
  );
}

export default NavBar;
