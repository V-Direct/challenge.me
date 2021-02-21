import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./components/App";
import Contact from "./components/pages/Contact";
import Register from './components/Register';
import Login from './components/Login';
import Result from './components/Result';

const Routing = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/contact" component={Contact} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/result" component={Result} />
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render((
    <BrowserRouter>
        <Routing />
    </BrowserRouter>
), document.getElementById("root"));

