import React, { useState, createContext } from "react";

export const FilterContext = createContext();

export const FilterProvider = (props) => {
	const [filter, setFilter] = useState("");
	const [category, setCategory] = useState("");

	function filterHandler(prop) {
		setFilter(prop);
	}

	const categoryHandler = (prop) => {
		setCategory(prop);
	};

	return (
		<FilterContext.Provider
			value={{ filter, filterHandler, category, categoryHandler }}
		>
			{props.children}
		</FilterContext.Provider>
	);
};
