import { Video } from "../entities/video";

export interface VideoGatweay{
  insertNewVideo( video:Video, userToken:string ): Promise<void>
}
