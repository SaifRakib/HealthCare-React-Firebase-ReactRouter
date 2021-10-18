import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";



// Initialize Firebase
const initializeAuthentication = () => {
        initializeApp(firebaseConfig);
}

export default initializeAuthentication;