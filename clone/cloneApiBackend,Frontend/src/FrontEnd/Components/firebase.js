/*import firebase from "firebase/compat/app";

firebase.initializeApp({
    apiKey: "AIzaSyBcyTtvLewlMgJirIU0oS9cWG1h6YS1pfU",
    authDomain: "twitter-clone-4b79a.firebaseapp.com",
    projectId: "twitter-clone-4b79a",
    storageBucket: "twitter-clone-4b79a.appspot.com",
    messagingSenderId: "867523604018",
    appId: "1:867523604018:web:d372f440d5f58b4a05562b"
  });

const auth = firebase.auth();
const storage = firebase.storage();

export {storage,auth};
*/

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// FROM FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyBcyTtvLewlMgJirIU0oS9cWG1h6YS1pfU",
  authDomain: "twitter-clone-4b79a.firebaseapp.com",
  projectId: "twitter-clone-4b79a",
  storageBucket: "twitter-clone-4b79a.appspot.com",
  messagingSenderId: "867523604018",
  appId: "1:867523604018:web:d372f440d5f58b4a05562b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.storage();

export {firebase,db};