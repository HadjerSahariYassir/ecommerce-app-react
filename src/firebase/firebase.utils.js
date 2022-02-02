import firebase from "firebase/compat/app";
import "firebase/compat/firestore";  //Db
import "firebase/compat/auth" // authentification

    const config = {
        apiKey: "AIzaSyB7qdpxZBo9IEDL3rnwyZhKhn0JxEV15nA",
        authDomain: "crwn-db-9a2f3.firebaseapp.com",
        projectId: "crwn-db-9a2f3",
        storageBucket: "crwn-db-9a2f3.appspot.com",
        messagingSenderId: "922452104084",
        appId: "1:922452104084:web:84badb09b7e5b2ac34f581",
        measurementId: "G-M3D193KWP9"
    }

    firebase.initializeApp(config);

    export const auth = firebase.auth();
    export const firestore = firebase.firestore();

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account"});
    export const signInWithGoogle = () => auth.signInWithPopup(provider);

    export default firebase;