import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

type Props = {
    title?: string
}

export const Layout : React.FunctionComponent<Props> = ({ title, children }) => {
    const pageTitle = title ? `MyApp | ${title}` : "MyApp";

    return (
        <div id="main-layout">
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
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
            <div>
                { children }
            </div>
        </div>
    );
}