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
					title={"for"}
					subcategories={["Man", "Woman", "Unisex"]}
				/>
				<ShopDirectoryMenuItem
					title={"brand"}
					subcategories={["Armani", "Chanel", "Mugler", "Prada", "YSL"]}
				/>
				<ShopDirectoryMenuItem
					title={"type"}
					subcategories={["Fresh", "Sweet"]}
				/>
			</StyledUl>
		</StyledDirectoryFilterMenu>
	);
};
export default ShopDirectoryFilterMenu;
