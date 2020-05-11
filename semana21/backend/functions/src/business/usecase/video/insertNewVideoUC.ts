import { VideoGatweay } from "../../gateways/videoGateway";
import { Video } from "../../entities/video";

export class InsertNewVideoUC {
  constructor( private db:VideoGatweay ){}

  public async execute( input:InsertNewVideoInput ): Promise<InsertNewVideoOutput>{
    try{
      const newVideo = new Video(
        input.url,
        input.description,
        input.title
      )

      await this.db.insertNewVideo( newVideo, input.userToken )

      return ( {
        message: "Video successfully inserted"
      } )
    }catch( err ){
      throw {
        code: err.statusCode || 400,
        message: err.message || "Some error occurred during the request"
      }
    }
  }
}

interface InsertNewVideoInput {
  title: string,
  description: string,
  url: string,
  userToken: string
}

interface InsertNewVideoOutput {
  message: string
}
