import React from "react";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import Header from "./components/header/header";
import Homepage from "./pages/Homepage/Homepage";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

const App = () => {
	const [open, setOpen] = useState(false);
	const node = useRef();
	return (
		<>
			<Header />
			<Homepage />
		</>
	);
};

export default App;
