import { Request, Response } from 'express';
import { GetAllVideosUC } from '../../business/usecase/video/getAllVideosUC';
import { VideoDB } from '../../data/videoDB';

export const getAllVideosEndpoint = async( req: Request, res: Response ) => {
  try{
    const getAllVideosUC = new GetAllVideosUC( new VideoDB() )
    const response = await getAllVideosUC.execute()

    res.status( 200 ).send( response )
  }catch( err ){
    res.status( err.errorCode || 400 ).send( {
      message: err.message
    } )
  }
}
