import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwOFLOl3BW2eqNTjZp4N2nFxwqAjbTsg8",
  authDomain: "fac-website-baf1c.firebaseapp.com",
  projectId: "fac-website-baf1c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);