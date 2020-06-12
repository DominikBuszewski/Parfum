import React from "react";
import styled from "styled-components";
import ShopDirectory from "../../components/shop-directory/shop-directory.component";

const StyledShopContainer = styled.main`
	min-height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Shop = () => {
	return (
		<StyledShopContainer>
			<ShopDirectory />
		</StyledShopContainer>
	);
};

export default Shop;
