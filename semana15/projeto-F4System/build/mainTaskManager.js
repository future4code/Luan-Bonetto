"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webMission_1 = require("./webMission");
const JSONFileManager_1 = require("./JSONFileManager");
class MainTaskManager {
    constructor() {
        this.webMissionList = [];
        this.fileManager = new JSONFileManager_1.FileManager('database.json');
    }
    execute(mission) {
        let LisOfFile = this.fileManager;
        let teste = LisOfFile.readFile();
        this.webMissionList = teste;
        if (mission instanceof webMission_1.webMission) {
            this.webMissionList.push(mission);
            LisOfFile.writeFile(this.webMissionList);
        }
    }
}
exports.MainTaskManager = MainTaskManager;
//# sourceMappingURL=mainTaskManager.js.map