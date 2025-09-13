import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyALBFMoredMRGLENATZCetOSA4MPVKM6fg",
  authDomain: "sitezpk.firebaseapp.com",
  databaseURL: "https://sitezpk-default-rtdb.firebaseio.com",
  projectId: "sitezpk",
  storageBucket: "sitezpk.appspot.com",
  messagingSenderId: "736145525308",
  appId: "1:736145525308:web:72b95e87693a67c0d35139",
  measurementId: "G-J8YS3EV3Z2",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage(app);
