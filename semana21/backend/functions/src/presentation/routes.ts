import express from 'express';
import cors from 'cors';
import { createUserAccountEndpoint } from './user/createUserAccount';
import { loginEndpoint } from './user/login';
import { changePasswordEndpoint } from './user/changePassword';
import { insertNewVideoEndpoint } from './video/insertNewVideo';
import { getVideosByUserIdEndpoint } from './video/getVideosByUserId';
import { updateVideoByIdEndpoint } from './video/updateVideoById';
import { deleteVideoByIdEndpoint } from './video/deleteVideoById';
import { getVideoInfoByIdEndpoint } from './video/getVideoInfoById';
import { getAllVideosEndpoint } from './video/getAllVideos';


const app = express();

app.use( cors ( { origin: true } ), express.json() );

app.post( '/user/create', createUserAccountEndpoint )
app.post( '/user/login', loginEndpoint )
app.put( '/user/password', changePasswordEndpoint )
app.post( '/video/insert', insertNewVideoEndpoint )
app.get( '/videos/user', getVideosByUserIdEndpoint )
app.put( '/video/update/:videoId', updateVideoByIdEndpoint )
app.delete( '/video/delete/:videoId', deleteVideoByIdEndpoint )
app.get( '/video/info/:videoId', getVideoInfoByIdEndpoint )
app.get( '/videos', getAllVideosEndpoint )

export default app
