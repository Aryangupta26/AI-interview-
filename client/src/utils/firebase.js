
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interview-1-357f1.firebaseapp.com",
  projectId: "ai-interview-1-357f1",
  storageBucket: "ai-interview-1-357f1.firebasestorage.app",
  messagingSenderId: "1037010937233",
  appId: "1:1037010937233:web:8535e0d53b7fb92acde630"
  
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}




// authDomain: "interviewiq-ba6ba.firebaseapp.com",
//   projectId: "interviewiq-ba6ba",
//   storageBucket: "interviewiq-ba6ba.firebasestorage.app",
//   messagingSenderId: "862159592601",
//   appId: "1:862159592601:web:7308d702cd708076ddec08"