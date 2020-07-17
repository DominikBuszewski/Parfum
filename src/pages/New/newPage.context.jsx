import React, { useState, createContext } from "react";

export const NewContext = createContext();

export const NewProvider = (props) => {
	const [newItems, setNewItems] = useState([]);

	return (
		<NewContext.Provider value={{ newItems, setNewItems }}>
			{props.children}
		</NewContext.Provider>
	);
};
