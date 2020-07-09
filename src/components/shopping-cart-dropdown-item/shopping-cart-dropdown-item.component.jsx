import React, { useContext } from "react";
import styled from "styled-components";
import left from "../../assets/icons/chevron-left-solid.svg";
import right from "../../assets/icons/chevron-right-solid.svg";
import { colors } from "../../theme/main-styles.styles";
import { CartContext } from "../shopping-cart/cart-context";

const StyledShoppingCartDropdownItem = styled.div`
	width: 100%;
	height: 15vh;
	display: grid;
	grid-template-columns: repeat(3, 33%);
	justify-content: space-around;
	align-items: center;
	border-bottom: 1px solid ${colors.secondary};

	img {
		width: 100%;
		height: 80%;
	}
	div {
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;

		span {
			font-size: 1.3em;
		}
		button {
			background: transparent;
			border: none;
			padding: 0.3em;
			display: flex;
			justify-content: center;
			align-items: center;
			outline: transparent;

			img {
				height: 1.3em;
			}
		}
	}
`;

const ShoppingCartDropdownItem = ({
	cartItem,
	remove,
	quantity,
	name,
	imageUrl,
}) => {
	const cartCtx = useContext(CartContext);
	return (
		<StyledShoppingCartDropdownItem>
			<img src={imageUrl} alt="" />
			<div>{name}</div>
			<div>
				<button onClick={() => cartCtx.decrease(cartCtx.cartItems, cartItem)}>
					<img src={left} alt="" />
				</button>
				<span>{quantity}</span>
				<button onClick={() => cartCtx.increase(cartCtx.cartItems, cartItem)}>
					<img src={right} alt="" />
				</button>
			</div>
		</StyledShoppingCartDropdownItem>
	);
};

export default ShoppingCartDropdownItem;
