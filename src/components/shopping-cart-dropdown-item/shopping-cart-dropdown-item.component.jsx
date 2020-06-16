import React from "react";
import styled from "styled-components";
import aqua from "../../assets/images/aquadigioparfum.png";
import { colors } from "../../theme/main-styles.styles";

const StyledShoppingCartDropdownItem = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-bottom: 1px solid ${colors.secondary};
	img {
		width: 30%;
	}
`;

const ShoppingCartDropdownItem = ({ quantity, name, summary }) => (
	<StyledShoppingCartDropdownItem>
		<img src={aqua} />
		<div>{name}</div>
		<span>{quantity}</span>
		<span>{summary}$</span>
	</StyledShoppingCartDropdownItem>
);

export default ShoppingCartDropdownItem;
