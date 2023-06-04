import { User } from "firebase/auth";
import { addDoc, getDocs, query, where } from "firebase/firestore";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAuth, firestore } from "src/firebase";
import { useTypedDispatch } from "src/redux";
import { clearUserInfo, setIsLoading, setUserInfo } from "src/redux/slices";

export const useAuthControl = () => {
	const dispatch = useTypedDispatch();
	const [user, loading] = useAuthState(firebaseAuth);

	const handleLoadSelectedUser = async (fbUser: User) => {
		dispatch(setIsLoading(true));
		let dispatched = false;
		const userQuery = query(firestore.users, where("uid", "==", fbUser.uid));
		const userFirestore = await getDocs(userQuery);
		userFirestore.forEach((userSnap) => {
			if (dispatched) return;

			dispatch(
				setUserInfo(userSnap.data())
			);
			dispatched = true;
		});
		if (dispatched) {
			dispatch(setIsLoading(false));
			return;
		}
		await addDoc(firestore.users, {
			uid: fbUser.uid,
			photoURL: fbUser.photoURL
		});
		await handleLoadSelectedUser(fbUser);
	};

	useEffect(() => {
		dispatch(setIsLoading(loading));
		if (loading) return;

		if (!user) {
			dispatch(clearUserInfo());
			return;
		}

		handleLoadSelectedUser(user);

		// dispatch(
		// 	user ?
		// 		setUserInfo({
		// 			uid: user.uid, 
		// 			photoURL: user.photoURL
		// 		}) :
		// 		clearUserInfo()
		// );


	}, [loading, user]);
    
};