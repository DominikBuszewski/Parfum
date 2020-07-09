import React, { useContext } from "react";
import styled from "styled-components";
import { colors } from "../../theme/main-styles.styles";
import { Link } from "react-router-dom";
import Button from "../custom-button/custom-button.component";
import ShoppingCartDropdownItem from "../shopping-cart-dropdown-item/shopping-cart-dropdown-item.component";
import { CartContext } from "../shopping-cart/cart-context";

const StyledDropdown = styled.div`
	height: 400px;
	width: 300px;
	background-color: ${colors.light};
	position: absolute;
	top: 8%;
	right: 10%;
	border: 1px solid black;
	display: ${({ toggleCart }) => (toggleCart ? "flex" : "none")};
	transition: 0.3s ease-in;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	z-index: 10;

	p {
		align-self: flex-start;
		margin: 5px 0px 0px 15px;
	}
`;

const StyledShopItemsContainer = styled.div`
	width: 94%;
	height: 80%;
	border-top: 2px solid ${colors.secondary};
	overflow-y: scroll;
`;
const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${colors.dark};
	margin: 0 10px;
	font-family: "montserrat";
	display: flex;
	flex-direction: center;
	align-items: center;
`;

const ShoppingCartDropdown = ({ toggleCart, toggleHandler }) => {
	const cartCtx = useContext(CartContext);

	return (
		<StyledDropdown toggleCart={toggleCart}>
			<StyledShopItemsContainer>
				{cartCtx.cartItems.map((cartItem) => (
					<ShoppingCartDropdownItem
						key={cartItem.id}
						name={cartItem.name}
						quantity={cartItem.quantity}
						imageUrl={cartItem.imageUrl}
						cartItem={cartItem}
					/>
				))}
			</StyledShopItemsContainer>
			<StyledLink to="/cart">
				<Button name={"TO CHECKOUT"} onClick={toggleHandler} />
			</StyledLink>
		</StyledDropdown>
	);
};

export default ShoppingCartDropdown;
