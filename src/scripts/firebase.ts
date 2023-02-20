import { initializeApp } from "firebase/app";

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

initializeApp(firebaseConfig);
