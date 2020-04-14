import { BaseDB } from './baseDB';
import { BadRequestError } from '../business/errors/badRequestError';
import { User } from '../business/entities/user';
import { UserGateway } from '../business/gateways/userGateway';

export class UserDB extends BaseDB implements UserGateway {

  private userCollection = "users"

  public async createUserAccount( user:User ): Promise< string > {

    try{
      const result = await this.dbFirebase.auth().createUserWithEmailAndPassword( user.getEmail(), user.getPassword() )

      const userToken = result.user?.getIdToken()

      if( !userToken ){
        throw new BadRequestError( "The token could not be generated" )
      }

      await this.dbFirestore.collection( this.userCollection ).doc().set( {
        name: user.getName(),
        email: user.getEmail(),
        dateOfBirth: user.getDateOfBirth(),
        photo: user.getPhoto()
      } )

      return userToken

    }catch( err ){
      throw new BadRequestError( err.message )
    }
  }

}
