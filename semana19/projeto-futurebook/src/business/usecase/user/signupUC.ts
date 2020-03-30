import { UserGateway } from "../../gateways/userGateway";
import { v4 } from 'uuid';
import { User } from "../../entities/user";
import * as bcrypt from "bcrypt"
import { JWTAuthentication } from "../../../utils/JWTAuthentication";

export class SignupUC {
    constructor(private db: UserGateway) { }

    public async execute(input: SignupInput): Promise<SignupOutput> {

        const userId = v4()

        const hashPassword = await bcrypt.hash(input.password, 10)

        const newUser = new User(
            userId,
            input.name,
            input.email,
            hashPassword
        )

        this.db.createUser(newUser)

        const jwtAuth = new JWTAuthentication()
        const token = jwtAuth.generateToken(newUser.getId())

        return ({
            message: "User created successfully",
            token
        })
    }
}

export interface SignupInput {
    name: string,
    email: string,
    password: string
}

export interface SignupOutput {
    message: string,
    token: string
}