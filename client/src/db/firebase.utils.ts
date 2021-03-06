// Import the functions you need from the SDKs you need
import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";

// Add SDKs for Firebase products that you want to use here
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  Auth,
  User,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import {
  Firestore,
  getFirestore,
  doc,
  getDoc,
  setDoc,
  DocumentSnapshot,
  DocumentData,
  collection,
  writeBatch,
  QuerySnapshot,
  where,
  query,
  getDocs,
} from "firebase/firestore";

import { Collection, CollectionList } from "src/pages/shop/state/shop.types";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyB3_X4kHb06EJvv2Utjj-6xX_-S8HXHDSU",
  authDomain: "react-full-ecommerce.firebaseapp.com",
  projectId: "react-full-ecommerce",
  storageBucket: "react-full-ecommerce.appspot.com",
  messagingSenderId: "1868830030",
  appId: "1:1868830030:web:a06a9a71a2eab4711f7a1f",
  measurementId: "G-08DJF4CETL",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Export Firebase Data
export const auth: Auth = getAuth(app);
export const firestore: Firestore = getFirestore(app);

// Google Sign-In
export const googleProvider: GoogleAuthProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

// Get and Parse the Current User From the DB
export const createUserProfileDocument = async (
  userAuth: User,
  overrideName?: string
): Promise<DocumentSnapshot<DocumentData> | null> => {
  if (!userAuth) return null;

  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName: overrideName ?? displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating user: ", error);
    }
  }

  return snapShot;
};

// Shop Collections related functions
export const convertCollectionsSnapshotToMap = (
  collections: QuerySnapshot<DocumentData>
): CollectionList => {
  const transformedCollection: Collection[] = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce(
    (acc: { [key: string]: typeof coll }, coll) => {
      acc[coll.title.toLowerCase()] = coll;
      return acc;
    },
    {}
  );
};

export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: object[]
) => {
  const collectionRef = collection(firestore, collectionKey);

  const batch = writeBatch(firestore);
  objectsToAdd.forEach((obj) => {
    const newDocRef = doc(collectionRef);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

// User related functions
export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsub = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsub();
        resolve(userAuth);
      },
      reject
    );
  });
};

export const getUserCartRef = async (userId: string) => {
  const cartsRef = collection(firestore, "carts");
  const cartQuery = query(cartsRef, where("userId", "==", userId));
  const snapShot = await getDocs(cartQuery);

  if (snapShot.empty) {
    const cartDocRef = doc(cartsRef);
    await setDoc(cartDocRef, { userId, cartItems: [] });
    return cartDocRef;
  } else {
    return snapShot.docs[0].ref;
  }
};
