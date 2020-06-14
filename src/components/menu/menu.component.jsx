import React from "react";
import styled from "styled-components";
import { colors, device } from "../../theme/main-styles.styles";
import { Link } from "react-router-dom";

const Categories = styled.nav`
	height: 100vh;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${colors.light};
	z-index: 800;
	scroll-behavior: smooth;
	transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
	transition: 1s ease-in-out;

	@media ${device.desktop} {
		height: 5vh;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		transform: translateX(0px);
		position: relative;
		border-bottom: 1px black solid;
	}
`;

const MenuElement = styled(Link)`
	text-decoration: none;
	color: black;
	font-size: 2em;
	list-style: none;
	margin: 25px;
	text-align: center;

	:hover {
		cursor: pointer;
		border-bottom: 3px solid ${colors.secondary};
	}

	@media ${device.desktop} {
		font-size: 1.4em;
	}
`;

const Menu = ({ open, setOpen }) => (
	<Categories open={open} onClick={() => setOpen(!open)}>
		<MenuElement to="/shop">Shop</MenuElement>
		<MenuElement>Top 10</MenuElement>
		<MenuElement>Women</MenuElement>
		<MenuElement>Man</MenuElement>
		<MenuElement>New</MenuElement>
		<MenuElement>Promotions</MenuElement>
	</Categories>
);

export default Menu;
