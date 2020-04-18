import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

  apiKey: "AIzaSyBWbCAcFY2lh5sc2_3Jwfa9_t92B2kSn5g",
  authDomain: "e-commerce-db-42d32.firebaseapp.com",
  databaseURL: "https://e-commerce-db-42d32.firebaseio.com",
  projectId: "e-commerce-db-42d32",
  storageBucket: "e-commerce-db-42d32.appspot.com",
  messagingSenderId: "937983638937",
  appId: "1:937983638937:web:ccc07fb689b790fc756708",
  measurementId: "G-5RXDYC80KZ"
};


export const creatUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();
  

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);

    }
  }
  
  return userRef;
};



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;