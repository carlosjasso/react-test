const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "../out");

// clear output dir
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

