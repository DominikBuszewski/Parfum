import React, { useState, useContext } from "react";
import { StyledLi, StyledDiv } from "./shop-directory-filter-menu-item.styles";
import { FilterContext } from "../shop-directory/shop-directory-context";

const ShopDirectoryMenuItem = ({ title, subcategories }) => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const filterCtx = useContext(FilterContext);

	const toggleMenuHandler = () => {
		setToggleMenu((currentStatus) => !currentStatus);
	};

	return (
		<StyledLi onClick={toggleMenuHandler} toggleMenu={toggleMenu}>
			<StyledDiv>
				<p>{title}</p>
			</StyledDiv>
			<ul>
				{subcategories.map((sub) => (
					<li key={Math.random()} onClick={() => filterCtx.filterHandler(sub)}>
						{sub}
					</li>
				))}
			</ul>
		</StyledLi>
	);
};
export default ShopDirectoryMenuItem;
