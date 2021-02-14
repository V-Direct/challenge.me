import React from "react";
import {Link} from 'react-router-dom';

function NavBarItem(props) {
  return (
    <div>
      <button ><Link to={"/"+props.content.toLowerCase()}>{props.content}</Link></button>
    </div>
  );
}

export default NavBarItem;
