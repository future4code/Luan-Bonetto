import { User } from "../entities/user";

export interface UserGateway{
  createUserAccount( user:User ): Promise<string>
  login( email:string, password:string ): Promise<string>
}
