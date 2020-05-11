import { Request, Response } from 'express';
import { GetVideosByUserIdUC } from '../../business/usecase/video/getVideosByUserIdUC';
import { VideoDB } from '../../data/videoDB';

export const getVideosByUserIdEndpoint = async ( req: Request, res: Response ) => {
  try{
    const getVideosByUserIdUC = new GetVideosByUserIdUC( new VideoDB() )
    const response = await getVideosByUserIdUC.execute( {
      userToken: req.headers.auth as string
    } )

    res.status( 200 ).send( response )
  }catch( err ){
    res.status( err.errorCode || 400 ).send( {
      message: err.message
    } )
  }
}
