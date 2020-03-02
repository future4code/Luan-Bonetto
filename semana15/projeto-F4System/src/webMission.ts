import { Mission } from "./mission";
import { Teatcher } from "./teatcherUser";
import { Student } from "./studentUser";

export class webMission extends Mission{
    constructor(
        public startDate:Date,
        public endDate:Date, 
        public teatchers:Teatcher[], 
        public students:Student[],
        protected patron:string
    ){
        super(
            startDate, 
            endDate, 
            teatchers,
            students
        )
    }
}