import { Request, Response } from "express";
import { JWTAuthentication } from "../../../utils/JWTAuthentication";
import { UndoFriendshipUC } from "../../../business/usecase/user/undoFriendshipUC";
import { UserDB } from "../../../data/userDB";

export const undoFriendshipEndpoint = async (req:Request, res:Response) => {
    try{

        const jwtAuth = new JWTAuthentication()
        const userId = jwtAuth.verifyToken(req.headers.auth as string)
        const undoFriendshipUC = new UndoFriendshipUC(new UserDB())
        const result = await undoFriendshipUC.execute({
            userId,
            friendId: req.body.friendId
        })

        res.status(200).send(result)

    }catch(err){
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}