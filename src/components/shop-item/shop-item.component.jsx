import React from "react";
import styled from "styled-components";
import { device } from "../../theme/main-styles.styles";

const StyledShopItem = styled.div`
	/* height: 400px;
	width: 250px; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 15px;

	@media ${device.desktop} {
	}

	h2 {
		text-align: center;
		font-size: 0.8em;
		font-weight: bold;

		@media ${device.desktop} {
			font-size: 1em;
		}
	}

	img {
		height: 200px;
		width: 150px;
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
		<img src={imageUrl} alt="" />
		<h2>{brand}</h2>
		<span>{price}$ for 50ml Bottle</span>
	</StyledShopItem>
);

export default ShopItem;
