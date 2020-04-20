import { Request, Response } from 'express';
import { DeleteVideoByIdUC } from '../../business/usecase/video/deleteVideoByIdUC';
import { VideoDB } from '../../data/videoDB';

export const deleteVideoByIdEndpoint = async( req:Request, res:Response ) => {
  try{
    const deleteVideoByIdUC = new DeleteVideoByIdUC( new VideoDB() )
    const response = await deleteVideoByIdUC.execute( {
      videoId: req.params.videoId
    } )

    res.status( 200 ).send( response )
  }catch( err ){
    res.status( err.errorCode || 400 ).send( {
      message: err.message
    } )
  }
}
