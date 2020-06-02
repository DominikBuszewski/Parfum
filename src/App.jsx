import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import Homepage from "./pages/Homepage/Homepage";
import SignInPage from "./pages/Sign-in/Sign-in";

const App = () => {
	return (
		<div>
			<Header />
			<Homepage />
			<SignInPage />
		</div>
	);
};

export default App;
