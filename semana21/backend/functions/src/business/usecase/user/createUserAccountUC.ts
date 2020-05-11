import { User } from "../../entities/user";
import { BadRequestError } from "../../errors/badRequestError";
import { UserGateway } from "../../gateways/userGateway";

export class CreateUserAccountUC {
  constructor( private db:UserGateway ){}

  public async execute( input:CreateUserAccountInput ): Promise<CreateUserAccountOutput>{
    try{

      if( !input.name ||
          !input.email ||
          !input.password ||
          !input.dateOfBirth ||
          !input.photo
        ){
        throw new BadRequestError( "Some field is empty!" )
      }

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
