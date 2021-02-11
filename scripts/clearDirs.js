const fs = require("fs");
const path = require("path");

const isDevelopment = process.env.NODE_ENV === "development";

const docsDir = path.join(__dirname, );

const dirName = isDevelopment ? "../out" : "../docs";
const outDir = path.join(__dirname, dirName);

if (fs.existsSync(outDir)) {
    fs.readdirSync(outDir).forEach(item => {
        const itemPath = path.join(outDir, item);
        const isDir = fs.lstatSync(itemPath).isDirectory();
        if (isDir) {
            fs.rmSync(itemPath, { recursive: true, force: true });
        } else {
            fs.rmSync(itemPath);
        }
    });
}

