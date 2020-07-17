import React, { useState, createContext } from "react";

export const BestsellerContext = createContext();

export const BestsellerProvider = (props) => {
	const [bestItems, setBestItems] = useState([]);

	return (
		<BestsellerContext.Provider value={{ bestItems, setBestItems }}>
			{props.children}
		</BestsellerContext.Provider>
	);
};
