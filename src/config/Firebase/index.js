import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAVsusWZsZGonpCkzC3o5EUvX722SwHLZI",
    authDomain: "backend-829c0.firebaseapp.com",
    databaseURL: "https://backend-829c0-default-rtdb.firebaseio.com",
    projectId: "backend-829c0",
    storageBucket: "backend-829c0.appspot.com",
    messagingSenderId: "347057307303",
    appId: "1:347057307303:web:3c1ff1b3b308f943aae582"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;