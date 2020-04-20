import { Video } from "../entities/video";

export interface VideoGatweay{
  insertNewVideo( video:Video, userToken:string ): Promise<void>
  getVideosByUserId( userToken:string ): Promise<Video[]>
  updateVideoById( videoId:string, titulo:string, description:string ): Promise<void>
  deleteVideoById( videoId:string ): Promise<void>
  getVideoInfoById( videoId:string ): Promise<object>
  getAllVideos(): Promise<Video[]>
}
