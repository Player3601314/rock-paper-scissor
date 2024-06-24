import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAHB_lZoMeyRmcQD9-oyUnIPTkJVR8MsHA",
  authDomain: "rock-paper-scissor-38ca4.firebaseapp.com",
  projectId: "rock-paper-scissor-38ca4",
  storageBucket: "rock-paper-scissor-38ca4.appspot.com",
  messagingSenderId: "591291348276",
  appId: "1:591291348276:web:385a66aced5aef56f92161",
  measurementId: "G-NC7DQDJYF0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}