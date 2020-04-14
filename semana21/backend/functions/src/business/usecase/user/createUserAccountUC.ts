import { UserDB } from "../../../data/userDB";

export class CreateUserAccountUC {
  constructor( private db:UserDB ){}

  public async execute( input:CreateUserAccountInput ): Promise<CreateUserAccountOutput>{
    try{
      const userToken = await this.db.createUserAccount( input.email, input.password )

      return ( {
        message: "User successfully registered!",
        token: userToken
      } )
    }catch( err ){
      throw {
        code: err.statusCode || 400,
        message: err.message || "Some error occurred during the request"
      }
    }
  }
}

interface CreateUserAccountInput{
  email: string,
  password: string
}

interface CreateUserAccountOutput{
  message: string,
  token: string
}
