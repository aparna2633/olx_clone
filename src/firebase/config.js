import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYDswf-I4lKtWvOrnwi9mlKJNxA1HysDQ",
  authDomain: "fir-a9c52.firebaseapp.com",
  projectId: "fir-a9c52",
  storageBucket: "fir-a9c52.appspot.com",
  messagingSenderId: "457914080083",
  appId: "1:457914080083:web:07d428dee18eb4a94e1fa6",
  measurementId: "G-9E8NQ43WEH"
};


  export default firebase.initializeApp(firebaseConfig)  