import React from "react";
import styled from "styled-components";
import { colors, device } from "../../theme/main-styles.styles";
import { Link } from "react-router-dom";
import Button from "../custom-button/custom-button.component";

const StyledDropdown = styled.div`
	height: 400px;
	width: 300px;
	background-color: ${colors.light};
	position: absolute;
	top: 8%;
	right: 10%;
	border: 1px solid black;
	display: ${({ show }) => (show ? "flex" : "none")};
	transition: 0.3s ease-in;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

const StyledShopItemsContainer = styled.div`
	width: 94%;
	height: 80%;
	border: 1px solid red;
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

const ShoppingCartDropdown = ({ toggleCart }) => (
	<StyledDropdown show={toggleCart}>
		<StyledShopItemsContainer>asd</StyledShopItemsContainer>
		<StyledLink to="/cart">
			<Button name={"TO CHECKOUT"} />
		</StyledLink>
	</StyledDropdown>
);

export default ShoppingCartDropdown;
