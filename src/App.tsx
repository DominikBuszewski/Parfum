import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/header/header";
import Homepage from "./pages/Homepage/Homepage";
import styled from "styled-components";

const GlobalTheme = styled.div`
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	font-family: "Dancing Script", cursive;
`;

const App = () => {
	// const [count, setCount] = useState(0);
	// useEffect(() => {});
	return (
		<GlobalTheme>
			<Header />
			<Homepage />
		</GlobalTheme>
	);
};

export default App;
