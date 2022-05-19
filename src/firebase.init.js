// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKpaiQGAmrXxa1AFYWapob4oYOr6RqErg",
    authDomain: "to-do-app-ef1d8.firebaseapp.com",
    projectId: "to-do-app-ef1d8",
    storageBucket: "to-do-app-ef1d8.appspot.com",
    messagingSenderId: "672851456117",
    appId: "1:672851456117:web:94accdedc639f9aefd883c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;