import { Request, Response } from 'express';
import { CreateUserAccountUC } from '../../business/usecase/user/createUserAccountUC';
import { UserDB } from '../../data/userDB';

export const createUserAccountEndpoint = async( req: Request, res: Response ) => {
  try {
    const createUserAccountUC = new CreateUserAccountUC( new UserDB() )
    const response = await createUserAccountUC.execute( {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      dateOfBirth: req.body.dateOfBirth,
      photo: req.body.photo
    } )

    res.status( 200 ).send( response )
  }catch( err ){
    res.status( err.errorCode || 400 ).send( {
      message: err.message
    } )
  }
}
