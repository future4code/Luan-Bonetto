import express from 'express';
import cors from 'cors';
import { createUserAccountEndpoint } from './user/createUserAccount';
import { loginEndpoint } from './user/login';
import { changePasswordEndpoint } from './user/changePassword';

const app = express();

app.use( cors ( { origin: true } ), express.json() );

app.post( '/user/create', createUserAccountEndpoint )
app.post( '/user/login', loginEndpoint )
app.put( '/user/password', changePasswordEndpoint )

export default app
