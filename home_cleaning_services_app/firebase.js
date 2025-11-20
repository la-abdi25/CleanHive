// Import the functions from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
//setup Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7HmBAOwgwJ-Xrl6qDTqQCa4Es_vuQL1w",
  authDomain: "cleanhive-messaging.firebaseapp.com",
  projectId: "cleanhive-messaging",
  storageBucket: "cleanhive-messaging.firebasestorage.app",
  messagingSenderId: "45850657879",
  appId: "1:45850657879:web:5e3912b8ee11f1905d0f12",
  measurementId: "G-D1SX8ZCJHM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messageDB = getFirestore(app);
const auth = getAuth();

//sign in anonymously
const myPromise = new Promise((resolve, reject) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      resolve(user);
    } else {
      signInAnonymously(auth)
        .then((userAuth) => {
          resolve(userAuth.user);
        })
        .catch(reject);
    }
  });
});
export { messageDB, myPromise };
