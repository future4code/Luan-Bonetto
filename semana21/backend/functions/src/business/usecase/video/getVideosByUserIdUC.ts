import { VideoGatweay } from "../../gateways/videoGateway";
import { Video } from "../../entities/video";

export class GetVideosByUserIdUC{
  constructor( private db:VideoGatweay ){}

  public async execute( input:GetVideosByUserIdInput ): Promise<GetVideosByUserIdOutput>{
    try{
      const result = await this.db.getVideosByUserId( input.userToken )

      return ( {
        videos: result
      } )
    }catch( err ){
      throw {
        code: err.statusCode || 400,
        message: err.message || "Some error occurred during the request"
      }
    }
  }
}

interface GetVideosByUserIdInput{
  userToken: string
}

interface GetVideosByUserIdOutput{
  videos: Video[]
}
