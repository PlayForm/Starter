// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "", // TODO Replace with your own API key
	appId: "", // TODO Replace with your own app ID
	authDomain: "", // TODO Replace with your own auth domain
	databaseURL: "", // TODO Replace with your own database URL
	measurementId: "", // TODO Replace with your own measurement ID
	messagingSenderId: "", // TODO Replace with your own messaging sender ID
	projectId: "", // TODO Replace with your own project ID
	storageBucket: "", // TODO Replace with your own storage bucket
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
