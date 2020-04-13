import firebaseAdmin from 'firebase-admin'
import firebase from 'firebase'

export abstract class BaseDB {
  protected dbFirestore = firebaseAdmin.firestore()
  protected dbFirebase = firebase
}
