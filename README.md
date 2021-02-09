# How this app got built

## Setting up REACT

- [React 00 - Beginner : React + Typescript from scratch](https://dev.to/nomoredeps/beginner-react-typescript-from-scratch-5dah)

```bash
mkdir -v react-test # create the folder the project is going to live in
cd react-test/ # go into that folder
npm init --y # init a a new npm package | "--y" = send "yes" to all questions
npm i react react-dom # install react dependencies
npm i -D typescript webpack webpack-cli http-server @types/react @types/react-dom # install dev dependencies (not to be included in final project result)
npx tsc --init # init typescript configuration
# write src/App.tsx and index.html
npx tsc # transpile TS to JS
npx webpack # package everything up
cd www/ && http_server # serve
```

## Adding a router

- [Adding a Router](https://create-react-app.dev/docs/adding-a-router/)
- [Learn React Router in 5 Minutes - A Beginner's Tutorial](https://www.freecodecamp.org/news/react-router-in-5-minutes/)
- [Basic routing example](https://reactrouter.com/web/example/basic)

```bash
npm install react-router-dom # install most popular react-router lib
npm i --save-dev @types/react-router-dom # install react-router-dom types
# modify src/App.tsx to add router

```

## Server over HTTP

[Deployment][https://create-react-app.dev/docs/deployment/]

```bash
npm install -d serve # basic development http server
npx serve -s out -l 8080
```

# to-do
[react-helmet](https://www.npmjs.com/package/react-helmet)