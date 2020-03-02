import { User } from "./user";
import { Specialty } from "./specialty"

export class Teatcher implements User {
    constructor(
        public name: string,    
        public email: string,
        public dateOfBirth: Date,
        public specialty:Specialty
    ){}
}