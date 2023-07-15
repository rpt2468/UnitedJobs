import { initializeApp } from "firebase/app";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGs5omgCG6MztR6s7YaMfP9SfzjQ47MM8",
  authDomain: "unitedjobs1234.firebaseapp.com",
  projectId: "unitedjobs1234",
  storageBucket: "unitedjobs1234.appspot.com",
  messagingSenderId: "584833930281",
  appId: "1:584833930281:web:ba8fec4d266fa755a0b838"
};

const firebaseApp = initializeApp(firebaseConfig);

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

//export { firebaseApp };



