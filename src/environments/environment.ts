// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDQrpFlLL9piUb1cM00-tW-bY3jo-kOAcA",
        authDomain: "movbe-95f3e.firebaseapp.com",
        projectId: "movbe-95f3e",
        storageBucket: "movbe-95f3e.firebasestorage.app",
        messagingSenderId: "982525032663",
        appId: "1:982525032663:web:103d9c0bed40b2d37b9892",
        measurementId: "G-B0MPBVQJM7"
    }
};

// Initialize Firebase
const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);