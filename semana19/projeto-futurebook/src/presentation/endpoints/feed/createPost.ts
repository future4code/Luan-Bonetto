import { Request, Response } from "express";
import { JWTAuthentication } from "../../../utils/JWTAuthentication";
import { CreatePostUC } from "../../../business/usecase/feed/createPostUC";
import { FeedDB } from "../../../data/feedDB";

export const createPostEndpoint = async (req: Request, res: Response) => {
    try {

        const jwtAuth = new JWTAuthentication()
        const userId = jwtAuth.verifyToken(req.headers.auth as string)

        const createPostUC = new CreatePostUC(new FeedDB())
        const result = await createPostUC.execute({
            picture: req.body.picture,
            description: req.body.description,
            postDate: req.body.postDate,
            postType: req.body.postType,
            userId
        })

        res.status(200).send(result)

    } catch (err) {
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}