import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/header.component";
import Homepage from "./pages/Homepage/Homepage";
import { auth } from "./firebase/firebase";
import Footer from "./components/footer/footer.component";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignInAndSignUpPage from "./pages/SignInAndSignUp/SignInAndSignUp";
import GlobalStyle from "./theme/globalstyles.styles";

const App = () => {
	// let unsuscribeFromAuth = null;

	// const [currentUser, setCurrentUser] = useState(null);
	// useEffect(() => {
	// 	unsuscribeFromAuth = auth.onAuthStateChanged((user) =>
	// 		setCurrentUser(user)
	// 	);
	// 	console.log(currentUser);
	// }, [currentUser]);

	// useEffect(() => {
	// 	return () => unsuscribeFromAuth();
	// }, []);

	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/signin" component={SignInAndSignUpPage} />
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
