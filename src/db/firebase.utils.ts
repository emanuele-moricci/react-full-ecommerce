// Import the functions you need from the SDKs you need
import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";

// Add SDKs for Firebase products that you want to use here
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  Auth,
  UserCredential,
  User,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  Firestore,
  getFirestore,
  doc,
  getDoc,
  setDoc,
  DocumentSnapshot,
  DocumentData,
} from "firebase/firestore";

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

// Export Data
export const auth: Auth = getAuth(app);
export const firestore: Firestore = getFirestore(app);

// Google Sign-In
const provider: GoogleAuthProvider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = (): Promise<UserCredential> =>
  signInWithPopup(auth, provider);

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
