import { UserGateway } from "../../gateways/userGateway";
import * as bcrypt from "bcrypt";
import { JWTAuthentication } from "../../../utils/JWTAuthentication";

export class LoginUC {
    constructor(private db: UserGateway) { }

    public async execute(input: LoginInput) {

        const user = await this.db.getUserByEmail(input.email)

        if (!user) {
            throw new Error('incorrect email')
        }

        const isPasswordCorrect = await bcrypt.compare(input.password, user.getPassword())

        if (!isPasswordCorrect) {
            throw new Error('incorrect password')
        }

        const jwtAuth = new JWTAuthentication()
        const token = jwtAuth.generateToken(user.getId())

        return ({
            message: "User successfully logged in",
            token
        })
    }
}

export interface LoginInput {
    email: string
    password: string
}

export interface LoginOutput {
    message: string
    token: string
}