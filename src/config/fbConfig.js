import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnmfJXYrXsmjT8Y3F3YpZa7avjtDS5tUs",
  authDomain: "mrioplan.firebaseapp.com",
  databaseURL: "https://mrioplan.firebaseio.com",
  projectId: "mrioplan",
  storageBucket: "mrioplan.appspot.com",
  messagingSenderId: "529232650662",
  appId: "1:529232650662:web:56c235a6c28489040bef67",
  measurementId: "G-7V7SL0RPX8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
