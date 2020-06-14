import React from "react";
import styled from "styled-components";
import { colors, device } from "../../theme/main-styles.styles";

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
		font-size: 1em;
		font-weight: bold;
	}

	img {
		height: 200px;
		width: 150px;
	}

	p {
		font-family: "montserrat";
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
		<p>{price}$ for 50ml Bottle</p>
	</StyledShopItem>
);

export default ShopItem;
