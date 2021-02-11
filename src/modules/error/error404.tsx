import React from "react";
import { Layout } from "../shared/default-layout";

export function Error404() {
    return(
        <Layout title="Error404">
            <main id="error404">
                <h1>404 - Not Found</h1>
            </main>
        </Layout>
    );
}