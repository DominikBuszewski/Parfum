import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import Homepage from "./pages/Homepage/Homepage";

const App = () => {
	return (
		<div>
			<Header />
			<Homepage />
		</div>
	);
};

export default App;
