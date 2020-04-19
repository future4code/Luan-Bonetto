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
        title: video.getTitle(),
        description: video.getDescription(),
        url: video.getUrl(),
        userId
      } )
    }catch( err ){
      throw new BadRequestError( err.message )
    }

  }

  public async getVideosByUserId( userToken:string ): Promise<Video[]>{

    try{

      const verifiedToken = await this.dbFirebaseAdmin.auth().verifyIdToken( userToken )
      const userId = verifiedToken.uid

      const result = await this.dbFirestore.collection( this.videoCollection )
      .where( "userId", "==", userId )
      .get()

      return result.docs.map( ( doc ) => {
        let video = new Video(
          doc.data().url,
          doc.data().description,
          doc.data().titulo,
          doc.id
        )

        return video
      } )
    }catch( err ){
      throw new BadRequestError( err.message )
    }

  }

  public async updateVideoById( videoId:string, titulo:string, description:string ): Promise<void>{

    try{
      await this.dbFirestore.collection( this.videoCollection ).doc( videoId ).update( {
        titulo,
        description
      } )

    }catch( err ){
      throw new BadRequestError( err.message )
    }

  }

}
