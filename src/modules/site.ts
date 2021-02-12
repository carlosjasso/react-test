type ProdHosts = string[];

type SitePaths = {
    home : string,
    blog : string,
    about : string,
}

const prodHosts = ["carlosjasso.dev", "carlosjasso.github.io"];

const devPaths : SitePaths = {
    home: "/",
    blog: "/blog",
    about: "/about",
}

const prodPaths : SitePaths = {
    home: "/react-test/",
    blog: "/react-test/blog",
    about: "/react-test/about",
}

export function GetSitePaths() : SitePaths {
    const host = window.location.host;
    const paths = prodHosts.includes(host) ? prodPaths : devPaths;
    return paths;
}