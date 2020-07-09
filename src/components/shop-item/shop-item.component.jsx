import React from "react";
import styled from "styled-components";
import { device } from "../../theme/main-styles.styles";

const StyledShopItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0.4em;
	margin: 0.4em;

	h2 {
		text-align: center;
		font-size: 0.8em;
		font-weight: bold;

		@media ${device.desktop} {
			font-size: 1em;
		}
	}

	div {
		width: 15vh;
		height: 25vh;

		@media ${device.desktop} {
			width: 20vh;
		}
	}

	img {
		height: 100%;
		width: 100%;
	}

	span {
		font-family: "montserrat";
		font-size: 0.8em;

		@media ${device.desktop} {
			font-size: 1em;
		}
	}

	:hover {
		border: 1px solid black;
		cursor: pointer;
	}
`;

const ShopItem = ({ name, brand, imageUrl, price }) => (
	<StyledShopItem>
		<h2>{name}</h2>
		<div>
			<img src={imageUrl} alt="" />
		</div>
		<h2>{brand}</h2>
		<span>{price}$ for 50ml Bottle</span>
	</StyledShopItem>
);

export default ShopItem;
