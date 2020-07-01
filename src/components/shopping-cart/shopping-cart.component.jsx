import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { colors, device } from "../../theme/main-styles.styles";
import ShoppingCartItem from "../shopping-cart-item/shopping-cart-item.component";
import { CartContext } from "./cart-context";

const StyledShoppingCart = styled.section`
	min-height: 40vh;
	width: 98%;
	background-color: silver;
	margin: 50px 0 50px 0;

	@media ${device.desktop} {
		width: 80%;
	}
`;

const H2 = styled.h2`
	font-family: "montserrat";
	text-align: left;
	font-size: 1em;
	border-bottom: 2px solid ${colors.dark};
	@media ${device.desktop} {
		font-size: 1.3em;
	}
`;

const ShoppingCartItems = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

const ShoppingCartHeader = styled.ul`
	display: flex;
	width: 100%;
	margin: 5px 0 5px 0;
	border-bottom: 1px solid black;

	@media ${device.desktop} {
		margin: 25px 0 15px 0;
	}
`;

const CartHeaderElement = styled.li`
	list-style: none;

	:nth-child(1) {
		width: 100%;

		@media ${device.desktop} {
			width: 50%;
			text-align: center;
		}
	}
	:nth-child(2) {
		display: none;
		text-align: center;

		@media ${device.desktop} {
			display: block;
			width: 10%;
		}
	}
	:nth-child(3) {
		display: none;
		text-align: center;

		@media ${device.desktop} {
			width: 20%;
			display: block;
		}
	}
	:nth-child(4) {
		display: none;
		text-align: center;

		@media ${device.desktop} {
			width: 20%;
			display: block;
		}
	}
`;

const ShoppingCart = () => {
	const [cart, setCart] = useContext(CartContext);

	const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
	const fixedPrice = (totalPrice * 1).toFixed(2);

	return (
		<StyledShoppingCart>
			<H2>Items in cart: {cart.length}</H2>
			<H2>
				Total price:
				{cart.length > 0 ? fixedPrice : "0"}$
			</H2>
			{console.log(cart.length)}
			<ShoppingCartHeader>
				<CartHeaderElement>Product</CartHeaderElement>
				<CartHeaderElement>Remove</CartHeaderElement>
				<CartHeaderElement>Amount</CartHeaderElement>
				<CartHeaderElement>Summary</CartHeaderElement>
			</ShoppingCartHeader>
			<ShoppingCartItems>
				{cart.map((cartItem) => (
					<ShoppingCartItem
						key={cartItem.id}
						name={cartItem.name}
						brand={cartItem.brand}
						qyantity={cartItem.quantity}
						price={cartItem.price}
						imageUrl={cartItem.imageUrl}
					/>
				))}
			</ShoppingCartItems>
		</StyledShoppingCart>
	);
};
export default ShoppingCart;
