import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
}

function Router() {
    return(
        <div>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/blog" component={ Blog } />
                <Route path="/about" component={ About } />
                <Route component={ Error404 } />
            </Switch>
        </div>
    );
}

// children docus: https://fettblog.eu/typescript-react/children/
const Layout : React.FunctionComponent = ({ children }) => {
    return (
        <div id="main-layout">
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
                <hr />
            </header>
            <main>
                { children }
            </main>
        </div>
    );
}

function Home() {
    return(
        <Layout >
            <main id="home">
                <h1>Hello from home!</h1>
            </main>
        </Layout>
    );
}

function Blog() {
    return(
        <Layout>
            <main id="blog">
                <h1>Hello from blog!</h1>
            </main>
        </Layout>
    );
}

function About() {
    return(
        <Layout>
            <main id="about">
                <h1>Hello from about!</h1>
            </main>
        </Layout>
    );
}

function Error404() {
    return(
        <Layout>
            <main id="error404">
                <h1>404 - Not Found</h1>
            </main>
        </Layout>
    );
}