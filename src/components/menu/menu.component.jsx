import React from "react";
import styled from "styled-components";

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
		<MenuElement>Bestsellers</MenuElement>
		<MenuElement>Women</MenuElement>
		<MenuElement>Man</MenuElement>
		<MenuElement>New</MenuElement>
		<MenuElement>Promotions</MenuElement>
	</Categories>
);

export default Menu;
