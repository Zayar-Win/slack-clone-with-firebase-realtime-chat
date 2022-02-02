import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey:
    "AIzaSyAIwM92CV4q6M3bQYBM-HqW091w6-AadWg",
  authDomain: "slack-clone-b95cb.firebaseapp.com",
  projectId: "slack-clone-b95cb",
  storageBucket: "slack-clone-b95cb.appspot.com",
  messagingSenderId: "836618815997",
  appId:
    "1:836618815997:web:a14cfb4331655e33fe7194",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
const Provider = new GoogleAuthProvider();

export { auth, Provider, app };

export default db;
