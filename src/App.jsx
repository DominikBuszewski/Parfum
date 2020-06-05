import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/header.component";
import Homepage from "./pages/Homepage/Homepage";
import { auth } from "./firebase/firebase";

const App = () => {
	let unsuscribeFromAuth = null;

	const [currentUser, setCurrentUser] = useState(null);
	useEffect(() => {
		unsuscribeFromAuth = auth.onAuthStateChanged((user) =>
			setCurrentUser(user)
		);
		console.log(currentUser);
	}, [currentUser]);

	useEffect(() => {
		return () => unsuscribeFromAuth();
	}, []);

	return (
		<div>
			<Header currentUser={currentUser} />
			<Homepage />
		</div>
	);
};

export default App;
