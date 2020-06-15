import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/header/header.component";
import Homepage from "./pages/Homepage/Homepage";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import Footer from "./components/footer/footer.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInAndSignUpPage from "./pages/SignInAndSignUp/SignInAndSignUp";
import Shop from "./pages/Shop/Shop";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";

// setCurrentUser(user);

const App = () => {
	let unsuscribeFromAuth = useRef(null);
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		unsuscribeFromAuth.current = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({ ...snapShot.data(), id: snapShot.id });
				});
			} else {
				setCurrentUser(userAuth);
			}
		});
		return () => {
			unsuscribeFromAuth();
		};
	}, []);

	console.log(currentUser);

	return (
		<Router>
			<Header currentUser={currentUser} />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/signin" component={SignInAndSignUpPage} />
				<Route path="/shop" component={Shop} />
				<Route path="/cart" component={ShoppingCartPage} />
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
