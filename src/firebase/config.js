import firebase from "firebase/app"
import "@firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBKOQDmGXuYIM1iKraAGtDd1h5qSF7VgSY",
    authDomain: "cart-react-a8a6b.firebaseapp.com",
    projectId: "cart-react-a8a6b",
    storageBucket: "cart-react-a8a6b.appspot.com",
    messagingSenderId: "66261679318",
    appId: "1:66261679318:web:b27d7eedf6de043b959d77"
});

export const getFirestore = ()=> firebase.firestore(app)