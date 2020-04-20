import { VideoGatweay } from "../../gateways/videoGateway";

export class GetVideoInfoByIdUC{
  constructor( private db:VideoGatweay ){}

  public async execute( input:GetVideoInfoByIdInput ): Promise<GetVideoInfoByIdOutput>{

    try{
      const videoInfo = await this.db.getVideoInfoById( input.videoId )

      return ( {
        videoInfo
      } )
    }catch( err ){
      throw {
        code: err.statusCode || 400,
        message: err.message || "Some error occurred during the request"
      }
    }

  }
}

interface GetVideoInfoByIdInput{
  videoId: string
}

interface GetVideoInfoByIdOutput{
  videoInfo: object
}
