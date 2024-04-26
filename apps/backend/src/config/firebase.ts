import * as admin from 'firebase-admin';
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export function setupFirebase() {
  const app = initializeApp({
    apiKey: "AIzaSyBpcoJTAjA_imQmdv7JPlpDxD1_tQRDSyY",
    authDomain: "nx-weather-app.firebaseapp.com",
    projectId: "nx-weather-app",
    storageBucket: "nx-weather-app.appspot.com",
    messagingSenderId: "64228865105",
    appId: "1:64228865105:web:07af4f658df3f34e853470",
    measurementId: "G-2JB7YYG4DW"
  });
  
//   const analytics = getAnalytics(app);
  
  admin.initializeApp({
    credential:
      process.env.USE_DEFAULT_SERVICE_ACCOUNT === 'true'
        ? admin.credential.applicationDefault()
        : admin.credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS),
  });
  
}
