import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { firestore } from "../../firebase/firebase";
import Button from "../custom-button/custom-button.component";
import { device, colors } from "../../theme/main-styles.styles";
import { Link } from "react-router-dom";
import { CartContext } from "../shopping-cart/cart-context";

const StyledShopItemDetails = styled.div`
	width: 98%;
	margin-top: 2rem;
	margin: 5rem auto;
	border: 2px solid ${colors.secondary};
	padding: 5px;
	@media ${device.desktop} {
		width: 70%;
	}

	div {
		width: 100%;
		height: 10%;
		display: flex;
		justify-content: space-between;
	}

	main {
		min-height: 40%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-top: 1px solid ${colors.secondary};
		width: 100%;
	}

	@media ${device.desktop} {
		width: 70%;
	}
	span {
		margin: 1rem auto;
		width: 90%;
		text-align: justify;
	}

	h3 {
		margin: 0.5rem 1rem;
	}
`;

const StyledShopItemDetailsContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30vh;
	padding: 0.3em;

	@media ${device.desktop} {
		height: 40vh;
	}

	div {
		width: 50%;
		text-align: center;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		justify-content: space-around;

		@media ${device.desktop} {
			justify-content: center;
		}

		p {
			font-size: 1em;
			width: 90%;

			@media ${device.desktop} {
				height: 3rem;
				width: 50%;
				font-size: 1.5em;
			}
		}

		h2 {
			font-size: 1em;
			/* text-align: start; */
			width: 90%;

			@media ${device.desktop} {
				width: 50%;
				height: 3rem;
				font-size: 1.5em;
			}
		}

		img {
			width: 100%;
			height: 100%;

			@media ${device.desktop} {
				width: 80%;
				height: 80%;
			}
		}

		button {
		}
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;
`;

const ShopItemDetails = (props) => {
	const [item, setItem] = useState({});
	const [cart, setCart] = useContext(CartContext);

	useEffect(() => {
		const fetchData = async () => {
			const data = await firestore.collection("items").get();
			const mapData = data.docs.map((doc) => doc.data());
			setItem(
				mapData.find((callback, index) => index == props.match.params.id)
			);
		};
		fetchData();
	}, [props.match]);

	const addToCart = (cartItems) => {
		const cartItemToAdd = {
			name: item.name,
			brand: item.brand,
			price: item.price,
			imageUrl: item.imageUrl,
			quantity: 1,
			id: item.id,
		};
		setCart((currentCart) => [...currentCart, cartItemToAdd]);
	};

	return (
		<StyledShopItemDetails>
			<div>
				<StyledLink to="/shop">
					<Button name="Back" />
				</StyledLink>
				<StyledLink to="/cart">
					<Button name="To checkout" />
				</StyledLink>
			</div>
			<StyledShopItemDetailsContainer>
				<div>
					<img src={item.imageUrl} alt="" />
				</div>
				<div>
					<h2>Brand: {item.brand}</h2>
					<h2>Name: {item.name}</h2>
					<p>Notes: {item.notes}</p>
					<p>Price: {item.price}$</p>
					<Button name="add to cart" inverted onClick={addToCart} />
				</div>
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
