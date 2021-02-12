import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./global.scss";
import { GetSitePaths } from "./modules/site";
import { Home } from "./modules/home"
import { Blog } from "./modules/blog";
import { About } from "./modules/about";
import { Error404 } from "./modules/error/error404";

ReactDOM.render(<App />, document.getElementById('root'));

function App() {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
}

function Router() {
    const paths = GetSitePaths();

    return(
        <Switch>
            <Route exact path={paths.home} component={ Home } />
            <Route path={paths.blog} component={ Blog } />
            <Route path={paths.about} component={ About } />
            <Route component={ Error404 } />
        </Switch>
    );
}