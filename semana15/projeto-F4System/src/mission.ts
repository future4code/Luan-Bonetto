import { Teatcher } from "./teatcherUser";
import { Student } from "./studentUser";

export abstract class Mission {
    constructor(
        startDate:Date,
        endDate:Date,
        teatchers:Teatcher[],
        students:Student[]
    ){}
}