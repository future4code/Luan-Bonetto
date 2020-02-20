"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JSONFileManager_1 = require("./JSONFileManager");
const userPost_1 = require("./userPost");
class NormalPostCreator {
    constructor() {
        this.fileManager = new JSONFileManager_1.FileManager('database.json');
    }
    create(autor, text) {
        if (!autor || !text) {
            this.errorPrinter.printError("msg de erro", new Date);
        }
        else {
            let newPost = new userPost_1.UserPost(autor, text, new Date);
            this.fileManager.writeFile(newPost);
        }
    }
}
exports.NormalPostCreator = NormalPostCreator;
//# sourceMappingURL=normalPostCreator.js.map