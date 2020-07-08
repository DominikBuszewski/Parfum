import React from "react";
import styled from "styled-components";
import aqua from "../../assets/images/aquadigioparfum.png";
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

const ShoppingCartDropdownItem = ({
	quantity,
	name,
	imageUrl,
	increase,
	decrease,
}) => (
	<StyledShoppingCartDropdownItem>
		<img src={imageUrl} alt="" />
		<div>{name}</div>
		<div>
			<button onClick={increase}>+</button>
			<span>{quantity}</span>
			<button onClick={decrease}>-</button>
		</div>
	</StyledShoppingCartDropdownItem>
);

export default ShoppingCartDropdownItem;
