import React from "react";
import styled from "styled-components";
import closeIcon from "../../assets/icons/remove-icon.svg";

const NavWrapper = styled.nav`
	height: 100vh;
	width: 70%;
	background-color: white;
	border-left: solid 1px black;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 400;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transform: translateX(+100%);
`;

const HamburgerMenuClose = styled.img`
	height: 35px;
	width: 35px;
	right: 32px;
	top: 15px;
	position: absolute;
`;

const Ul = styled.ul`
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const L = styled.li`
	list-style: none;
	color: black;
	font-size: 2em;
	margin: 5px 0px 5px 5px;
`;

const NavigationBar = () => (
	<NavWrapper>
		<HamburgerMenuClose src={closeIcon} />
		<Ul>
			<L>Brands</L>
			<L>Bestsellers</L>
			<L>Sales</L>
			<L>Woman</L>
			<L>Man</L>
			<L>Unisex</L>
		</Ul>
	</NavWrapper>
);

export default NavigationBar;
