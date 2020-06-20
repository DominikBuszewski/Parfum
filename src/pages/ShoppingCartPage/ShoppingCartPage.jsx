import React from "react";
import styled from "styled-components";
import ShoppingCart from "../../components/shopping-cart/shopping-cart.component";

const StyledShoppingPage = styled.div`
	width: 100%;
	min-height: 50vh;
	/* padding: 15px; */
	display: flex;
	justify-content: center;
`;

const ShoppingCartPage = () => {
	return (
		<StyledShoppingPage>
			<ShoppingCart />
		</StyledShoppingPage>
	);
};

export default ShoppingCartPage;
