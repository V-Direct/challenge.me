import React from "react";
import {Link} from 'react-router-dom';
import "../../css/NavBar.css";

function NavBarItem({link, content}) {
  return (
    <li>
      <div className="navitem">
        <div><Link to={"/"+link}>{content}</Link></div>
      </div>
    </li>
  );
}

export default NavBarItem;
