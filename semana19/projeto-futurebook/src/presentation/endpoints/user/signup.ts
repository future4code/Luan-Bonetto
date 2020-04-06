import { Request, Response } from "express";
import { SignupUC } from "../../../business/usecase/user/signupUC";
import { UserDB } from "../../../data/userDB";

export const signupEndpoint = async (req: Request, res: Response) => {
    try {
        const signupUC = new SignupUC(new UserDB())
        const result = await signupUC.execute({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        res.status(200).send(result)

    } catch (err) {
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}