// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC6SIaS3Fu3NoHv47tpSIgYcQ3r3mzFhPo",
    authDomain: "whastapp-clone-c3aaa.firebaseapp.com",
    projectId: "whastapp-clone-c3aaa",
    storageBucket: "whastapp-clone-c3aaa.appspot.com",
    messagingSenderId: "975794798549",
    appId: "1:975794798549:web:8cc1dade74963335f0475c",
    measurementId: "G-5NL8XYYEVM"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore();
  const auth=firebaseApp.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export{auth,provider}
  export default db;
  