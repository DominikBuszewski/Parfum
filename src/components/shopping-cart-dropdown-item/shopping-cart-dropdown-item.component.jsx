import React from "react";
import styled from "styled-components";

import { colors } from "../../theme/main-styles.styles";

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
	}
`;

const ShoppingCartDropdownItem = ({ remove, quantity, name, imageUrl }) => {
	return (
		<StyledShoppingCartDropdownItem>
			<img src={imageUrl} alt="" />
			<div>{name}</div>
			<div>
				<button>+</button>
				<span>{quantity}</span>
				<button onClick={remove}>-</button>
			</div>
		</StyledShoppingCartDropdownItem>
	);
};

export default ShoppingCartDropdownItem;
