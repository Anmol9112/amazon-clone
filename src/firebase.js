import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAmJVvDPJJJLacIqdIR-5_ZCeaK4f3BlNU",
    authDomain: "clone-dc65a.firebaseapp.com",
    projectId: "clone-dc65a",
    storageBucket: "clone-dc65a.appspot.com",
    messagingSenderId: "344006186875",
    appId: "1:344006186875:web:971bbcee145e282c4e4fde",
    measurementId: "G-F97L348V1W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };