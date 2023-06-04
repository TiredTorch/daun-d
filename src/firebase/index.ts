import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { characterConvertor, placeConvertor, userConvertor } from "./convertors";

const firebaseConfig = {
	apiKey: import.meta.env["VITE_API_KEY"],
	authDomain: import.meta.env["VITE_AUTH_DOMAIN"],
	projectId: import.meta.env["VITE_PROJECT_ID"],
	storageBucket: import.meta.env["VITE_STORAGE_BUCKET"],
	messagingSenderId: import.meta.env["VITE_MESSAGING_SENDER_ID"],
	appId: import.meta.env["VITE_APP_ID"]
};

const firebaseApp = initializeApp(firebaseConfig);

const firebaseFirestore = getFirestore(firebaseApp);
const firestoreUsersCollection = 
	collection(firebaseFirestore, "users")
		.withConverter(userConvertor);
const firestoreCharactersCollection = 
	collection(firebaseFirestore, "characters")
		.withConverter(characterConvertor);
const firestorePlacesCollection = 
	collection(firebaseFirestore, "places")
		.withConverter(placeConvertor);

export const firebaseAuth = getAuth(firebaseApp);
export const firebaseStorage = getStorage(firebaseApp);
export const firestore = {
	users: firestoreUsersCollection,
	characters: firestoreCharactersCollection,
	places: firestorePlacesCollection
};

