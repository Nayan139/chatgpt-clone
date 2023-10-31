// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9bUT9-hVCFcGsEsBLBbBGjsT7BPRjfxk",
  authDomain: "chatgpt-yt-c2e64.firebaseapp.com",
  projectId: "chatgpt-yt-c2e64",
  storageBucket: "chatgpt-yt-c2e64.appspot.com",
  messagingSenderId: "271651098660",
  appId: "1:271651098660:web:bd80e0e27049531fdec8b1",
  measurementId: "G-6Q512K2P0V",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
