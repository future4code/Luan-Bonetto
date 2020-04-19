import { Request, Response } from 'express';
import { UpdateVideoByIdUC } from '../../business/usecase/video/updateVideoByIdUC';
import { VideoDB } from '../../data/videoDB';

export const updateVideoByIdEndpoint = async ( req: Request, res: Response ) => {
  try{
    const updateVideoByIdUC = new UpdateVideoByIdUC( new VideoDB() )
    const response = updateVideoByIdUC.execute( {
      videoId: req.params.videoId,
      titulo: req.body.titulo,
      description: req.body.description
    } )

    res.status( 200 ).send( response )
  }catch( err ){
    res.status( err.errorCode || 400 ).send( {
      message: err.message
    } )
  }
}
