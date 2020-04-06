import { Request, Response } from "express";
import { JWTAuthentication } from "../../../utils/JWTAuthentication";
import { NewFriendshipUC } from "../../../business/usecase/user/newFriendshipUC";
import { UserDB } from "../../../data/userDB";

export const newFriendshipEndpoint = async (req: Request, res: Response) => {
    try {

        const jwtAuth = new JWTAuthentication()
        const userId = jwtAuth.verifyToken(req.headers.auth as string)

        const newFriendshipUC = new NewFriendshipUC(new UserDB())
        const result = await newFriendshipUC.execute({
            userId,
            friendId: req.body.friendId
        })

        res.status(200).send(result)

    } catch (err) {
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}