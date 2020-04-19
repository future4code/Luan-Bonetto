import { BaseDB } from "./baseDB";
import { VideoGatweay } from "../business/gateways/videoGateway";
import { Video } from "../business/entities/video";
import { BadRequestError } from "../business/errors/badRequestError";

export class VideoDB extends BaseDB implements VideoGatweay{
  private videoCollection = "videos"

  public async insertNewVideo( video:Video, userToken:string ): Promise<void>{

    try{

      const verifiedToken = await this.dbFirebaseAdmin.auth().verifyIdToken( userToken )
      const userId = verifiedToken.uid

      await this.dbFirestore.collection( this.videoCollection ).doc().set( {
        titulo: video.getTitle(),
        description: video.getDescription(),
        url: video.getUrl(),
        userId
      } )
    }catch( err ){
      throw new BadRequestError( err.message )
    }
  }

}
