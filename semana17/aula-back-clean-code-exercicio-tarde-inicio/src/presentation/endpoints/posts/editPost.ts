import { Request, Response } from "express";
import { PostDB } from "../../../data/postDataBase";
import { EditPostUC } from "../../../business/usecase/posts/editPost";

export const editPostEndpoint = async (req: Request, res: Response) => {
  try{
    const updatePostUC = new EditPostUC(new PostDB())
    const result = await updatePostUC.execute({
      title: req.body.title,
      content: req.body.content,
      type: req.body.type,
      id: req.body.id,
      image: req.body.image
    })

    res.status(200).send(result)
  }catch(err){
    res.status(err.errorCode || 400).send({
      message: err.message
    });
  }
};
