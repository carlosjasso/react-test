import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./global.scss";
import { Home } from "./modules/home"
import { Blog } from "./modules/blog";
import { About } from "./modules/about";
import { Error404 } from "./modules/error/error404";

ReactDOM.render(<App />, document.getElementById('root'));

const prodHosts = ["carlosjasso.dev", "carlosjasso.github.io"];
const devPaths = {
    home: "/",
    blog: "/blog",
    about: "/about",
};
const prodPaths = {
    home: "/react-test/",
    blog: "/react-test/blog",
    about: "/react-test/about",
}

function App() {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
}

function Router() {
    const host = window.location.host;
    const paths = prodHosts.includes(host) ? prodPaths : devPaths;

    return(
        <Switch>
            <Route exact path={paths.home} component={ Home } />
            <Route path={paths.blog} component={ Blog } />
            <Route path={paths.about} component={ About } />
            <Route component={ Error404 } />
        </Switch>
    );
}