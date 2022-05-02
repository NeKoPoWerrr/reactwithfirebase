import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAW62x1ob3V_MBV63fIdnEaHF924E64kZ4",
  authDomain: "reactwithfirebasepratice.firebaseapp.com",
  projectId: "reactwithfirebasepratice",
  storageBucket: "reactwithfirebasepratice.appspot.com",
  messagingSenderId: "907200817415",
  appId: "1:907200817415:web:1a45e70ab12184e07e7da2",
  measurementId: "G-VGB7SXRL7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);