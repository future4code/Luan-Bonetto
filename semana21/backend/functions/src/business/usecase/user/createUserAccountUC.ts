import { UserDB } from "../../../data/userDB";
import { User } from "../../entities/user";

export class CreateUserAccountUC {
  constructor( private db:UserDB ){}

  public async execute( input:CreateUserAccountInput ): Promise<CreateUserAccountOutput>{
    try{

      const newUser = new User(
        input.name,
        input.email,
        input.password,
        input.dateOfBirth,
        input.photo
      )

      const userToken = await this.db.createUserAccount( newUser )

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
  name: string,
  email: string,
  password: string,
  dateOfBirth: number,
  photo: string
}

interface CreateUserAccountOutput{
  message: string,
  token: string
}
