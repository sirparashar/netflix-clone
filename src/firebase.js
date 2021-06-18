import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnGe1y5wg0-elPOLqofYorejs30cyI85s",
  authDomain: "netflix-clone-e8be5.firebaseapp.com",
  projectId: "netflix-clone-e8be5",
  storageBucket: "netflix-clone-e8be5.appspot.com",
  messagingSenderId: "593886472796",
  appId: "1:593886472796:web:f24bf1b1348d5e50ac9499",
  measurementId: "G-LQZF86KEW6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
