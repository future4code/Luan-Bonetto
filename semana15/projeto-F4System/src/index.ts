import { webMission } from "./webMission";
import { Teatcher } from "./teatcherUser";
import { Student } from "./studentUser";
import{ Specialty } from "./specialty"
import { MainTaskManager } from "./mainTaskManager";

const novoProfessor = new Teatcher("Goli", "go@li.com", new Date, Specialty.HTML)
const novoAluno = new Student("Luan", "luanbonetto42@gmail.com", new Date, "Bouman")

const newWebMission = new webMission(new Date, new Date, [novoProfessor], [novoAluno],"Bouman")

const ADM = new MainTaskManager()

ADM.execute(newWebMission)