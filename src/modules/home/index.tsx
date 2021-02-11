import React from "react";
import { Layout } from "../layout/default"
import Styles from "./index.module.scss";

export function Home() {
    return(
        <Layout >
            <main id="home" className={Styles["home-container"]}>
                <h1>Hello from home!</h1>
            </main>
        </Layout>
    );
}