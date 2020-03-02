"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webMission_1 = require("./webMission");
const teatcherUser_1 = require("./teatcherUser");
const studentUser_1 = require("./studentUser");
const specialty_1 = require("./specialty");
const mainTaskManager_1 = require("./mainTaskManager");
const novoProfessor = new teatcherUser_1.Teatcher("Goli", "go@li.com", new Date, specialty_1.Specialty.HTML);
const novoAluno = new studentUser_1.Student("Luan", "luanbonetto42@gmail.com", new Date, "Bouman");
const newWebMission = new webMission_1.webMission(new Date, new Date, [novoProfessor], [novoAluno], "Bouman");
const ADM = new mainTaskManager_1.MainTaskManager();
ADM.execute(newWebMission);
//# sourceMappingURL=index.js.map