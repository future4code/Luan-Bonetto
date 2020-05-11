import { VideoGatweay } from "../../gateways/videoGateway";
import { Video } from "../../entities/video";

export class GetAllVideosUC{
  constructor( private db:VideoGatweay ){}

  public async execute(): Promise<GetAllVideosOutput>{
    try{
      const videos = await this.db.getAllVideos()

      return ( {
        videos
      } )
    }catch( err ){
      throw {
        code: err.statusCode || 400,
        message: err.message || "Some error occurred during the request"
      }
    }
  }
}

interface GetAllVideosOutput{
  videos: Video[]
}
