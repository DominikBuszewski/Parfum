import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/header.component";
import Homepage from "./pages/Homepage/Homepage";
import { auth } from "./firebase/firebase";

const App = () => {
	const [currentUser, setCurrentUser] = useState(null);
	useEffect(() => {
		auth.onAuthStateChanged((user) => setCurrentUser(user));
	}, [currentUser]);
	return (
		<div>
			<Header />
			<Homepage />
		</div>
	);
};

export default App;
