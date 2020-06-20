import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { firestore } from "../../firebase/firebase";
import Button from "../custom-button/custom-button.component";
import { device, color } from "../../theme/main-styles.styles";

const StyledShopItemDetails = styled.div`
	width: 98%;
	background-color: red;
	margin-top: 2rem;
	margin: 5rem auto;

	@media ${device.desktop} {
		width: 70%;
	}

	div {
		width: 100%;
		height: 5vh;
		background-color: blue;
		display: flex;
		justify-content: space-between;
	}

	main {
		height: 25vh;
		background-color: purple;
		display: flex;
		flex-direction: column;
		justify-content: center;

		* {
			margin-left: 2rem;
		}
	}
`;

const StyledShopItemDetailsContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 38vh;

	p {
		width: 50%;
		text-align: center;
	}
`;

const ShopItemDetails = () => {
	return (
		<StyledShopItemDetails>
			<div>
				<Button name="Back" />
				<Button name="To checkout" />
			</div>
			<StyledShopItemDetailsContainer>
				<p>asdasdasd</p>
				<p>asdasd</p>
			</StyledShopItemDetailsContainer>
			<main>
				<h3>Description:</h3>
				<span>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nemo
					saepe? Deleniti nisi blanditiis beatae, totam reprehenderit laboriosam
					quod, exercitationem quo nemo dolorum aliquid dolor id nobis vitae
					sunt qui.Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Rerum, nemo saepe? Deleniti nisi blanditiis beatae, totam
					reprehenderit laboriosam quod, exercitationem quo nemo dolorum aliquid
					dolor id nobis vitae sunt qui.Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Rerum, nemo saepe? Deleniti nisi blanditiis beatae,
					totam reprehenderit laboriosam quod, exercitationem quo nemo dolorum
					aliquid dolor id nobis vitae sunt qui.
				</span>
			</main>
		</StyledShopItemDetails>
	);
};

export default ShopItemDetails;
