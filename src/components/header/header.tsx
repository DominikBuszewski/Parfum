import React from "react";
import styled from "styled-components";
import HamburgerIcon from "../../assets/icons/post-icon.svg";
import CartIcon from "../../assets/icons/shopping-cart-icon.svg";
import FavoriteIcon from "../../assets/icons/heart-icon.svg";
import NavigationBar from "../navbar/navbar";

const Navigation = styled.nav`
	display: flex;
	align-items: center;
	width: 100vw;
	height: 10vh;
`;

const NavIcons = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 70%;
`;
const Logo = styled.div`
	font-size: 1.5em;
	margin-left: 15px;
`;

const SearchBar = styled.input`
	justify-self: center;
	align-self: center;
	width: 80%;
	margin-left: 10%;
	border: 1px solid black;
`;

const HamburgerMenu = styled.img`
	height: 35px;
	width: 35px;
	margin-right: 15px;
`;

const Icon = styled.img`
	height: 25px;
	width: 25px;
	margin-right: 15px;
`;

const Header = () => (
	<>
		<Navigation>
			<div className="search"></div>
			<Logo>Parfum.</Logo>
			<NavIcons>
				<Icon src={FavoriteIcon} alt="favorite items icon" />
				<Icon src={CartIcon} alt="shopping cart button" />
				<HamburgerMenu src={HamburgerIcon} alt="menu button" />
			</NavIcons>
		</Navigation>
		<SearchBar />
		<NavigationBar />
	</>
);

export default Header;
