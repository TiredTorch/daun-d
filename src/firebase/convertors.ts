import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions, WithFieldValue } from "firebase/firestore";
import { Character, Place, User } from "src/types";

export const userConvertor: FirestoreDataConverter<User> = {
	toFirestore(data: WithFieldValue<User>): DocumentData {
		return data;
	},
	fromFirestore(
		snapshot: QueryDocumentSnapshot<User>,
		options: SnapshotOptions
	): User {
		const data = snapshot.data(options);
		return data;
	}
};

export const characterConvertor: FirestoreDataConverter<Character> = {
	toFirestore(data: WithFieldValue<Character>): DocumentData {
		return data;
	},
	fromFirestore(
		snapshot: QueryDocumentSnapshot<Character>,
		options: SnapshotOptions
	): Character {
		const data = snapshot.data(options);
		return data;
	}
};

export const placeConvertor: FirestoreDataConverter<Place> = {
	toFirestore(data: WithFieldValue<Place>): DocumentData {
		return data;
	},
	fromFirestore(
		snapshot: QueryDocumentSnapshot<Place>,
		options: SnapshotOptions
	): Place {
		const data = snapshot.data(options);
		return data;
	}
};