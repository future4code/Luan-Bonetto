import { Request, Response } from 'express';
import { ChangePasswordUC } from '../../business/usecase/user/changePasswordUC';
import { UserDB } from '../../data/userDB';

export const changePasswordEndpoint = async( req: Request, res: Response ) => {
  try{
    const changePasswordUC = new ChangePasswordUC( new UserDB() )
    const result = await changePasswordUC.execute( {
      token: req.body.token,
      newPassword: req.body.newPassword
    } )

    res.status( 200 ).send( result )
  }catch( err ){
    res.status( err.errorCode || 400 ).send( {
      message: err.message
    } )
  }
}
