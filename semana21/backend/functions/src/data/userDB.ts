import { BaseDB } from './baseDB';
import { BadRequestError } from '../business/errors/badRequestError';

export class UserDB extends BaseDB {

  public async createUserAccount( email: string, password: string ): Promise< string | undefined > {

    try{
      const result = await this.dbFirebase.auth().createUserWithEmailAndPassword( email, password )

      const userToken = result.user?.getIdToken()

      return userToken

    }catch( err ){
      throw new BadRequestError( err.message )
    }
  }

}
