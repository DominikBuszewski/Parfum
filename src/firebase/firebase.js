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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

const fbProvider = new firebase.auth.FacebookAuthProvider();
fbProvider.setCustomParameters({ aprompt: "select_account" });
export const signInWithFacebook = () => auth.signInWithPopup(fbProvider);
