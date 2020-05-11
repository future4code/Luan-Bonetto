import { VideoGatweay } from "../../gateways/videoGateway";

export class DeleteVideoByIdUC{
  constructor( private db:VideoGatweay ){}

  public async execute( input: DeleteVideoByIdInput ): Promise<DeleteVideoByIdOutput>{
    try{
      await this.db.deleteVideoById( input.videoId )

      return ( {
        message: "video successfully deleted"
      } )
    }catch( err ){
      throw {
        code: err.statusCode || 400,
        message: err.message || "Some error occurred during the request"
      }
    }
  }
}

interface DeleteVideoByIdInput{
  videoId: string
}

interface DeleteVideoByIdOutput{
  message: string
}
