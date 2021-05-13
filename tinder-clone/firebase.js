import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDqkGGUjKoqNgGylHt5PjLbVZNd7tEKOCg",
    authDomain: "tinder-clone-dceb3.firebaseapp.com",
    projectId: "tinder-clone-dceb3",
    storageBucket: "tinder-clone-dceb3.appspot.com",
    messagingSenderId: "55559977193",
    appId: "1:55559977193:web:83ee32772d80b1ff549878",
    measurementId: "G-WLMVP80WNM"
};

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore();
export default db;





