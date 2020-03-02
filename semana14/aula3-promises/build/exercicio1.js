const fs = require("fs");
let filesArray = [];
fs.readdir('./src/textos', function (err, files) {
    if (err) {
        console.error(err);
        return;
    }
    files.forEach(function (file) {
        filesArray.push(file);
    });
    filesArray.forEach(function (file) {
        fs.readFile(`./src/textos/${file}`, (err, data) => {
            if (err)
                throw err;
            const fileContent = data.toString();
            console.log(fileContent);
        });
    });
});
//# sourceMappingURL=exercicio1.js.map