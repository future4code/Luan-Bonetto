import { Request, Response } from 'express';
import { InsertNewVideoUC } from '../../business/usecase/video/insertNewVideoUC';
import { VideoDB } from '../../data/videoDB';

export const insertNewVideoEndpoint = async( req:Request, res: Response ) => {
  try{
    const insertNewVideoUC = new InsertNewVideoUC( new VideoDB() )
    const response = await insertNewVideoUC.execute( {
      title: req.body.title,
      description: req.body.description,
      url: req.body.url,
      userToken: req.body.userToken
    } )

    res.status( 200 ).send( response )
  }catch( err ){
    res.status( err.errorCode || 400 ).send( {
      message: err.message
    } )
  }
}
