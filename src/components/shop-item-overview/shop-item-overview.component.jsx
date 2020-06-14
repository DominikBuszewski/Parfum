import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Aqua from "../../assets/images/aquadigioparfum.png";
import Button from "../custom-button/custom-button.component";

const StyledShopItemOverview = styled.main`
	display: flex;
	flex-direction: column;
`;

const ShopItemOverviewHeader = styled.header`
	height: 5vh;
	width: 80%;
	display: flex;
	p {
		width: 20%;
		margin-left: 5%;
	}
`;

const ShopItemOverviewDescription = styled.section`
	display: flex;
	justify-content: space-between;

	img {
		width: 40%;
	}

	div {
		width: 60%;
	}
`;

const ShopItemOverview = () => {
	return (
		<StyledShopItemOverview>
			<ShopItemOverviewHeader>
				<p>{brand}</p>
				<p>{name}</p>
			</ShopItemOverviewHeader>
			<ShopItemOverviewDescription>
				<div>
					<img src={imgUrl} alt="" />
					<h3>Item description</h3>
					<p>{notes}</p>
					<p>{ingridients}</p>
				</div>
				<div>
					<p>50 ml {price}$</p>

					<p>FREE SHIPPMENT!</p>
					<Button name={"Add to cart"} />
				</div>
			</ShopItemOverviewDescription>
		</StyledShopItemOverview>
	);
};

export default ShopItemOverview;
