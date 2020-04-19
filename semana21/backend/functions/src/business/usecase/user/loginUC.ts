import { UserGateway } from "../../gateways/userGateway"

export class LoginUC {
  constructor( private db:UserGateway ){}

  public async execute( input:LoginInput ): Promise<LoginOutput>{

    try{
      const result = await this.db.login( input.email, input.password )

      return ( {
        message: "User successfully logged!",
        token: result
      } )

    }catch( err ){
      throw {
        code: err.statusCode || 400,
        message: err.message || "Some error occurred during the request"
      }
    }

  }
}

interface LoginInput {
  email: string,
  password: string
}

interface LoginOutput {
  message: string,
  token: string
}
