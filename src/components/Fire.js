import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBoVwGIgIS6ADElxHL0ef25h1T7GzhlTZ4",
    authDomain: "nba-players-3bc69.firebaseapp.com",
    databaseURL: "https://nba-players-3bc69.firebaseio.com",
    projectId: "nba-players-3bc69",
    storageBucket: "nba-players-3bc69.appspot.com",
    messagingSenderId: "239415981057",
    appId: "1:239415981057:web:ed2a517be6022e8764bc00"
  };
 //Initialize firebase
var Fire = firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export default Fire;