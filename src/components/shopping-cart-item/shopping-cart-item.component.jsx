import React, { useContext } from "react";
import styled from "styled-components";
import { device } from "../../theme/main-styles.styles";
import { CartContext } from "../shopping-cart/cart-context";
import deleteIcon from "../../assets/icons/trash-icon.svg";
import left from "../../assets/icons/chevron-left-solid.svg";
import right from "../../assets/icons/chevron-right-solid.svg";
const StyledShoppingCartItem = styled.div`
	height: 40vh;
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

		img {
			width: 70%;
			height: 90%;
		}
	}
`;

const StyledOptions = styled.div`
	width: 100%;
	height: 30%;
	display: flex;
	align-items: center;

	@media ${device.desktop} {
		width: 50%;
		height: 100%;
	}
`;

const StyledRemove = styled.div`
	width: 33%;
	text-align: center;

	img {
		width: 2em;
		height: 2em;
	}

	:hover {
		cursor: pointer;
	}

	@media ${device.desktop} {
		width: 20%;
	}
`;
const StyledAmount = styled.div`
	width: 33%;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5em;

	@media ${device.desktop} {
		width: 40%;
	}

	button {
		background: transparent;
		border: none;
		width: 10%;
		align-self: center;
		outline: transparent;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1em;

		img {
			width: 1.5em;
			height: 1.5em;
		}
	}
`;
const StyledSummary = styled.div`
	width: 33%;
	text-align: center;

	@media ${device.desktop} {
		width: 40%;
	}
`;

const ShoppingCartItem = ({
	name,
	brand,
	price,
	imageUrl,
	quantity,
	cartItem,
}) => {
	const cartCtx = useContext(CartContext);
	return (
		<StyledShoppingCartItem>
			<StyledProduct>
				<div>
					<img src={imageUrl} alt="" />
				</div>
				<div>
					<p>{name}</p>
					<p>{brand}</p>
					<p>50ml</p>
				</div>
			</StyledProduct>
			<StyledOptions>
				<StyledRemove
					onClick={() => cartCtx.removeFromCart(cartCtx.cartItems, cartItem)}
				>
					<img src={deleteIcon} alt="" />
				</StyledRemove>
				<StyledAmount>
					<button onClick={() => cartCtx.decrease(cartCtx.cartItems, cartItem)}>
						<img src={left} alt="" />
					</button>
					{quantity}
					<button onClick={() => cartCtx.increase(cartCtx.cartItems, cartItem)}>
						<img src={right} alt="" />
					</button>
				</StyledAmount>
				<StyledSummary>{(price * quantity * 1).toFixed(2)}$</StyledSummary>
			</StyledOptions>
		</StyledShoppingCartItem>
	);
};
export default ShoppingCartItem;
