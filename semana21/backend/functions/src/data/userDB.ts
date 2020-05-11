import { BaseDB } from './baseDB';
import { BadRequestError } from '../business/errors/badRequestError';
import { User } from '../business/entities/user';
import { UserGateway } from '../business/gateways/userGateway';

export class UserDB extends BaseDB implements UserGateway {

  private userCollection = "users"

  public async createUserAccount( user:User ): Promise<string> {

    try{
      const result = await this.dbFirebase.auth().createUserWithEmailAndPassword( user.getEmail(), user.getPassword() )

      const userToken = result.user?.getIdToken()

      if( !userToken ){
        throw new BadRequestError( "The token could not be generated" )
      }

      const newId = this.dbFirebase.auth().currentUser?.uid

      if( !newId ){
        throw new BadRequestError( "The token could not be generated" )
      }

      await this.dbFirestore.collection( this.userCollection ).doc( newId ).set( {
        name: user.getName(),
        email: user.getEmail(),
        dateOfBirth: user.getDateOfBirth(),
        photo: user.getPhoto()
      } )

      this.dbFirebase.auth().currentUser?.sendEmailVerification()


      return userToken

    }catch( err ){
      throw new BadRequestError( err.message )
    }

  }

  public async login( email:string, password:string ): Promise<string> {

    try{
      const result = await this.dbFirebase.auth().signInWithEmailAndPassword( email, password )

      const userToken = result.user?.getIdToken()

      if( !userToken ){
        throw new BadRequestError( "The token could not be generated" )
      }

      return userToken

    }catch( err ){
      throw new BadRequestError( err.message )
    }

  }

  public async changePassword( token:string, newPassword:string ): Promise<boolean>{

    try{
      const checkRevoked = true

      await this.dbFirebaseAdmin.auth().verifyIdToken( token, checkRevoked )
      await this.dbFirebase.auth().currentUser?.updatePassword( newPassword )

      return true

    }catch( err ){
      throw new BadRequestError( err.message )
    }

  }

}
