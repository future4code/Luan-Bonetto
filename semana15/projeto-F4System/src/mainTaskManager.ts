import { Mission } from "./mission";
import { webMission } from "./webMission";
import { FileManager } from "./JSONFileManager";


export class MainTaskManager {

    private webMissionList:webMission[] = []
    private fileManager:FileManager

    constructor(){
        this.fileManager = new FileManager('database.json')
    }

    public execute(mission:Mission){

        let LisOfFile:FileManager = this.fileManager

        let teste = LisOfFile.readFile()
        this.webMissionList = teste

        if(mission instanceof webMission){
            this.webMissionList.push(mission)
            LisOfFile.writeFile(this.webMissionList)
        }
    }
}