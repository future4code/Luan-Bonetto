import { Request, Response } from 'express';
import { UpdateVideoByIdUC } from '../../business/usecase/video/updateVideoByIdUC';
import { VideoDB } from '../../data/videoDB';

export const updateVideoByIdEndpoint = async ( req: Request, res: Response ) => {
  try{
    const updateVideoByIdUC = new UpdateVideoByIdUC( new VideoDB() )
    const response = await updateVideoByIdUC.execute( {
      videoId: req.params.videoId,
      title: req.body.title,
      description: req.body.description
    } )

    res.status( 200 ).send( response )
  }catch( err ){
    res.status( err.errorCode || 400 ).send( {
      message: err.message
    } )
  }
}
