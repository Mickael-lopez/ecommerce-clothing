import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCi894yMqE9v3ccRSFbs7gtFqXKpwr7AIc",
    authDomain: "ecommerce-clothing-db-f0e46.firebaseapp.com",
    databaseURL: "https://ecommerce-clothing-db-f0e46.firebaseio.com",
    projectId: "ecommerce-clothing-db-f0e46",
    storageBucket: "ecommerce-clothing-db-f0e46.appspot.com",
    messagingSenderId: "808861414098",
    appId: "1:808861414098:web:7ad2e74758cc334f7c330b"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

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
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();
    
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
    
    return await batch.commit();
};

export const convertCollectionSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc=> {
        const {title, items} = doc.data();
        
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
    
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
