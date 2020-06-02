import React from "react";
import styled from "styled-components";
import closeIcon from "../../assets/icons/remove-icon.svg";

const Categories = styled.nav`
	height: 100vh;
	width: 100%;
	position: fixed;
	top: 14vh;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-color: white;
	z-index: 800;
	scroll-behavior: smooth;
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
	transition: 1s ease-in-out;
`;

const MenuElement = styled.li`
	color: black;
	font-size: 2em;
	list-style: none;
	margin: 25px;

	:hover {
		cursor: pointer;
	}
`;

const Menu = ({ open, setOpen }) => (
	<Categories open={open} onClick={() => setOpen(!open)}>
		<MenuElement>Brands</MenuElement>
		<MenuElement>Women</MenuElement>
		<MenuElement>Man</MenuElement>
		<MenuElement>Bestsellers</MenuElement>
		<MenuElement>Promotions</MenuElement>
	</Categories>
);

export default Menu;
