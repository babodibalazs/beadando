import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";

import "dotenv/config";

const firebaseConfig = {
  "apiKey": process.env.apiKey,
  "authDomain": process.env.authDomain,
  "projectId": process.env.projectId,
  "storageBucket": process.env.storageBucket,
  "messagingSenderId": process.env.messagingSenderId,
  "appId": process.env.appId,
  "measurementId": process.env.measurementId
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth()
export const db = app.firestore()
export default app