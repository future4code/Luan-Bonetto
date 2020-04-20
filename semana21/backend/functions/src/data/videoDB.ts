import { BaseDB } from "./baseDB";
import { VideoGatweay } from "../business/gateways/videoGateway";
import { Video } from "../business/entities/video";
import { BadRequestError } from "../business/errors/badRequestError";

export class VideoDB extends BaseDB implements VideoGatweay{
  private videoCollection = "videos"
  private userCollection = "users"

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
          doc.data().title,
          doc.id
        )

        return video
      } )
    }catch( err ){
      throw new BadRequestError( err.message )
    }

  }

  public async updateVideoById( videoId:string, title:string, description:string ): Promise<void>{

    try{
      await this.dbFirestore.collection( this.videoCollection ).doc( videoId ).update( {
        title,
        description
      } )

    }catch( err ){
      throw new BadRequestError( err.message )
    }

  }

  public async deleteVideoById( videoId:string ): Promise<void>{

    try{
      await this.dbFirestore.collection( this.videoCollection ).doc( videoId ).delete()
    }catch( err ){
      throw new BadRequestError( err.message )
    }

  }

  public async getVideoInfoById( videoId:string ): Promise<object>{

    try{
      const result = await this.dbFirestore.collection( this.videoCollection ).doc( videoId ).get()

      const userId = result.data()?.userId
      const user = await this.dbFirestore.collection( this.userCollection ).doc( userId ).get()

      const videoInfo = {
        title: result.data()?.title,
        description: result.data()?.description,
        url: result.data()?.url,
        userName: user.data()?.name,
        userPhoto: user.data()?.photo
      }

      return videoInfo
    }catch( err ){
      throw new BadRequestError( err.message )
    }

  }

  public async getAllVideos(): Promise<Video[]>{
    const result = await this.dbFirestore.collection( this.videoCollection ).get()

    return result.docs.map( ( doc ) => {
      let video = new Video(
        doc.data().url,
        doc.data().description,
        doc.data().title,
        doc.id
      )

      return video
    } )
  }
}
