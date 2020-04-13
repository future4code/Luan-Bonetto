import * as functions from 'firebase-functions';
import firebaseAdmin from 'firebase-admin';
import firebase from 'firebase';
import { AddressInfo } from 'net';
import express from 'express';
import cors from 'cors';

const app = express ();

app.use ( cors ( { origin: true } ), express.json () );

exports.app = functions.https.onRequest ( app );

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

firebaseAdmin.initializeApp ( functions.config ().firebase );
firebase.initializeApp ( firebaseConfig );


const server = app.listen ( process.env.PORT || 3000, () => {
  if ( server ) {
    const address = server.address () as AddressInfo;
    // tslint:disable-next-line: no-console
    console.log ( `Server is running in http://localhost:${address.port}` );
  } else {
    // tslint:disable-next-line: no-console
    console.error ( 'Failure upon starting server.' );
  }
} );
