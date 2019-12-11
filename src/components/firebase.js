import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyARn2Fa86nETijeyn-afjgyoHlkusUXX4I",
    authDomain: "anon-voting-booth.firebaseapp.com",
    databaseURL: "https://anon-voting-booth.firebaseio.com",
    projectId: "anon-voting-booth",
    storageBucket: "anon-voting-booth.appspot.com",
    messagingSenderId: "297294494416",
    appId: "1:297294494416:web:e83fa5e90c4ea456967cd5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;