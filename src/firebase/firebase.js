import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyBtH53bHCjOk1XK9JCh-Nw9kcfzgIF-pMU",
	authDomain: "parfum-1829a.firebaseapp.com",
	databaseURL: "https://parfum-1829a.firebaseio.com",
	projectId: "parfum-1829a",
	storageBucket: "parfum-1829a.appspot.com",
	messagingSenderId: "726858870041",
	appId: "1:726858870041:web:47346bc8cf88f1307d6988",
	measurementId: "G-ZVFXC6LCWT",
};

// export const createUserProfileDocument = async (userAuth, additionalData) => {
// 	if (!userAuth) return;

// }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
