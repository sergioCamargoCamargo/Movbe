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
        apiKey: "AIzaSyDbR5FbVmNT-hUXid106ZHGPD-bhswga0k",
        authDomain: "movbe-958d8.firebaseapp.com",
        projectId: "movbe-958d8",
        storageBucket: "movbe-958d8.appspot.com",
        messagingSenderId: "908668159801",
        appId: "1:908668159801:web:45a2f7fba53ce065578ae8",
        measurementId: "G-B4QXKFRJLZ"
    }
};

// Initialize Firebase
const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);