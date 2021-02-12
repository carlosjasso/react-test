import React from "react";
import { GetSitePaths } from "../site";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

type Props = {
    title?: string
}

export const Layout : React.FunctionComponent<Props> = ({ title, children }) => {
    const pageTitle = title ? `MyApp | ${title}` : "MyApp";
    const paths = GetSitePaths();

    return (
        <div id="main-layout">
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to={paths.home}>Home</Link>
                        </li>
                        <li>
                            <Link to={paths.blog}>Blog</Link>
                        </li>
                        <li>
                            <Link to={paths.about}>About</Link>
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