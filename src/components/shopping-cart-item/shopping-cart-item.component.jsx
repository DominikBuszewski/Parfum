import React from "react";
import styled from "styled-components";
import { device } from "../../theme/main-styles.styles";
import aqua from "../../assets/images/aquadigioparfum.png";

const StyledShoppingCartItem = styled.div`
	height: 50vh;
	width: 100%;
	border-bottom: 2px solid green;

	@media ${device.desktop} {
		display: flex;
		height: 25vh;
	}
`;

const StyledProduct = styled.div`
	width: 100%;
	display: flex;

	@media ${device.desktop} {
		width: 50%;
		height: 100%;
	}

	div {
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	img {
		height: 30vh;

		@media ${device.desktop} {
			height: 100%;
		}
	}
`;

const StyledOptions = styled.div`
	width: 100%;
	height: 30%;
	display: flex;
	align-items: flex-start;

	@media ${device.desktop} {
		width: 50%;
		height: 100%;
		align-items: center;
	}
`;

const StyledRemove = styled.div`
	width: 33%;
	text-align: center;

	@media ${device.desktop} {
		width: 20%;
	}
`;
const StyledAmount = styled.div`
	width: 33%;
	text-align: center;

	@media ${device.desktop} {
		width: 40%;
	}
`;
const StyledSummary = styled.div`
	width: 33%;
	text-align: center;

	@media ${device.desktop} {
		width: 40%;
	}
`;

const ShoppingCartItem = () => (
	<StyledShoppingCartItem>
		<StyledProduct>
			<img src={aqua} />
			<div>
				<p>Name</p>
				<p>Producer</p>
				<p>50ml</p>
			</div>
		</StyledProduct>
		<StyledOptions>
			<StyledRemove>X Remove</StyledRemove>
			<StyledAmount>- 1 +</StyledAmount>
			<StyledSummary>34$</StyledSummary>
		</StyledOptions>
	</StyledShoppingCartItem>
);

export default ShoppingCartItem;
