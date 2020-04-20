import { Request, Response } from 'express';
import { GetVideoInfoByIdUC } from '../../business/usecase/video/getVideoInfoByIdUC';
import { VideoDB } from '../../data/videoDB';

export const getVideoInfoByIdEndpoint = async( req: Request, res: Response ) => {
  try{
    const getVideoInfoByIdUC = new GetVideoInfoByIdUC( new VideoDB() )
    const response = await getVideoInfoByIdUC.execute( {
      videoId: req.params.videoId
    } )

    res.status( 200 ).send( response )
  }catch( err ){
    res.status( err.errorCode || 400 ).send( {
      message: err.message
    } )
  }
}
