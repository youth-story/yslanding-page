// firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace with your Firebase project's configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeijhIF9n6oGNcqT4vGaK9Dqk1M8YVkKQ",
    authDomain: "youth-story-2264b.firebaseapp.com",
    projectId: "youth-story-2264b",
    storageBucket: "youth-story-2264b.appspot.com",
    messagingSenderId: "278314370259",
    appId: "1:278314370259:web:3f60438173a600c6404026"
};

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);