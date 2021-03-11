import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDssclJ81IyT4gThUt3M_ychnSwPgCM4vQ",
    authDomain: "movie-api-e47e4.firebaseapp.com",
    projectId: "movie-api-e47e4",
    storageBucket: "movie-api-e47e4.appspot.com",
    messagingSenderId: "628315101477",
    appId: "1:628315101477:web:ac13e9f43dd800bb4ba2cc"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;