import React, { useState, createContext } from "react";

export const FilterContext = createContext();

export const FilterProvider = (props) => {
	const [filter, setFilter] = useState("");

	function filterHandler(prop) {
		console.log(prop);
		setFilter(prop);
	}

	return (
		<FilterContext.Provider value={{ filter, filterHandler }}>
			{props.children}
		</FilterContext.Provider>
	);
};
