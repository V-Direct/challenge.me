import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./components/App";
import Contact from "./components/pages/Contact";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/SideProfile/Profile";
import Logout from "./components/Logout/Logout.jsx"

const Routing = () => {
  return (
    <BrowserRouter>
      <div>
      <NavBar />
      </div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/contact" component={Contact} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile}/>
        <Route path="/logout" component={Logout}/>
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <>
    <Routing />
  </>,
  document.getElementById("root")
);
