import express from 'express';
import cors from 'cors';
import { createUserAccountEndpoint } from './user/createUserAccount';
import { loginEndpoint } from './user/login';
import { changePasswordEndpoint } from './user/changePassword';
import { insertNewVideoEndpoint } from './video/insertNewVideo';

const app = express();

app.use( cors ( { origin: true } ), express.json() );

app.post( '/user/create', createUserAccountEndpoint )
app.post( '/user/login', loginEndpoint )
app.put( '/user/password', changePasswordEndpoint )
app.post( '/video/insert', insertNewVideoEndpoint )

export default app
