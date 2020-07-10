import React from "react";
import {
	StyledDirectoryFilterMenu,
	StyledUl,
} from "./shop-directory-filter-menu.styles";
import ShopDirectoryMenuItem from "../shop-directory-filter-menu-item/shop-directory-filter-menu-item.component";

const ShopDirectoryFilterMenu = () => {
	return (
		<StyledDirectoryFilterMenu>
			<h2>Categories</h2>
			<StyledUl>
				<ShopDirectoryMenuItem
					title={"For who?"}
					subcategories={["Man", "Woman", "Unisex"]}
				/>
				<ShopDirectoryMenuItem
					title={"Brand"}
					subcategories={["Armani", "Chanel", "YSL"]}
				/>
				<ShopDirectoryMenuItem
					title={"Type"}
					subcategories={["Fresh", "Sweet"]}
				/>
			</StyledUl>
		</StyledDirectoryFilterMenu>
	);
};
export default ShopDirectoryFilterMenu;
