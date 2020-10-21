import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config={
    apiKey: "AIzaSyBoKeUvsBiPvJAWueUWoL6qq8fcGjWHM_A",
    authDomain: "connectorworld-3fa8e.firebaseapp.com",
    databaseURL: "https://connectorworld-3fa8e.firebaseio.com",
    projectId: "connectorworld-3fa8e",
    storageBucket: "connectorworld-3fa8e.appspot.com",
    messagingSenderId: "324031145729",
    appId: "1:324031145729:web:190f006b78fea502bf5d00",
    measurementId: "G-J971GGR9SQ"
};

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

// const provider= new firebase.auth.GoogleAuthProvider();
// provider.setCustomerParameters({prompt:'select_account'});
// export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;
