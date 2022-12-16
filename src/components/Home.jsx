import React from "react";
import Stories from "./Stories";
import Publications from "./Publications";
import publications from "../data/publications";

function Home() {
    return (
        <>
            <Stories />
            <Publications data_publications={publications.filter(p => p.spectateurs !== "private")} />
        </>
    )
}

export default Home

