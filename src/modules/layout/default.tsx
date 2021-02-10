import React from "react";
import { Link } from "react-router-dom";

export const Layout : React.FunctionComponent = ({ children }) => {
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