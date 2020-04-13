import { Request, Response } from 'express';
import { CreateUserAccountUC } from '../../business/usecase/user/createUserAccountUC';
import { UserDB } from '../../data/userDB';

export const createUserAccountEndpoint = async( req: Request, res: Response ) => {
  try {
    const createUserAccountUC = new CreateUserAccountUC( new UserDB() )
    const result = await createUserAccountUC.execute( {
      email: req.body.email,
      password: req.body.password
    } )

    res.status( 200 ).send( result )
  }catch( err ){
    res.status( err.errorCode || 400 ).send( {
      message: err.message
    } )
  }
}
