import React, {useCallback}  from "react";
//import {Redirect} from "react-router-dom";
import {useHistory} from 'react-router-dom';



export default function LoginRel(){

  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/'), [history]);


  return (
    <div type="button" onClick={handleOnClick}>
      Login
    </div>
  );
}
