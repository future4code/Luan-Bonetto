import { VideoGatweay } from "../../gateways/videoGateway";

export class UpdateVideoByIdUC{
  constructor( private db:VideoGatweay ){}

  public async execute( input:UpdateVideoByIdInput ): Promise<UpdateVideoByIdOutput>{
    try{
      await this.db.updateVideoById(
        input.videoId,
        input.titulo,
        input.description
      )

      return ( {
        message: "Video updated successfully"
      } )
    }catch( err ){
      throw {
        code: err.statusCode || 400,
        message: err.message || "Some error occurred during the request"
      }
    }
  }
}

interface UpdateVideoByIdInput{
  videoId: string
  titulo: string
  description: string
}

interface UpdateVideoByIdOutput{
  message: string
}
