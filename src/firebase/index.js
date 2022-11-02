
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATn1tfK9QdhGh1l8l-Cj8ZrEo6OmxED4I",
  authDomain: "vue-fire-auth-yt-35c36.firebaseapp.com",
  projectId: "vue-fire-auth-yt-35c36",
  storageBucket: "vue-fire-auth-yt-35c36.appspot.com",
  messagingSenderId: "650425672599",
  appId: "1:650425672599:web:cee9041ed4e9b6ebae9ad2",
  measurementId: "G-RFQSD8JLNT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const auth = getAuth(app)

export {auth}
