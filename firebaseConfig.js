import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use

import { getAuth } from "firebase/auth";

// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA52Vp3zDYQTo39cUl-7hMhXFnBrYitHTc",
  authDomain: "alternative-sales-management.firebaseapp.com",
  projectId: "alternative-sales-management",
  storageBucket: "alternative-sales-management.appspot.com",
  messagingSenderId: "906477838827",
  appId: "1:906477838827:web:e339e3c2f5626efe0939ae",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//const db = getDatabase(app);

export { app, auth };
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
