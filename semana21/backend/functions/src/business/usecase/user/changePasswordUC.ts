import { UserDB } from "../../../data/userDB";
import { BadRequestError } from "../../errors/badRequestError";

export class ChangePasswordUC{
  constructor( private db:UserDB ){}

  public async execute( input: ChangePasswordInput ): Promise<ChangePasswordOutput>{
    try{
      const result = await this.db.changePassword( input.token, input.newPassword )

      if( result === false ){
        throw new BadRequestError( "Password change denied" )
      }

      return ( {
        message: "Password changed successfully"
      } )
    }catch( err ){
      throw {
        code: err.statusCode || 400,
        message: err.message || "Some error occurred during the request"
      }
    }
  }
}

interface ChangePasswordInput{
  token: string
  newPassword: string
}

interface ChangePasswordOutput{
  message: string
}
