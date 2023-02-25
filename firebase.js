
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC3f1qdyTQhPH0E3Oz30xNsw8ly0TGjrRs",
    authDomain: "clone-c24f8.firebaseapp.com",
    projectId: "clone-c24f8",
    storageBucket: "clone-c24f8.appspot.com",
    messagingSenderId: "121413451629",
    appId: "1:121413451629:web:2db360a3f6551502702464",
  };

  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore();
  
 export default db;