import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CartIcon from "../../assets/icons/shopping-cart-icon.svg";
import FavoriteIcon from "../../assets/icons/heart-icon.svg";
import NavigationBar from "../navbar/navbar.component";
import Menu from "../menu/menu.component";
import Hamburger from "../hamburger-menu-button/hamburger.component";

const StyledHeader = styled.header`
	width: 100vw;
`;

const Navigation = styled.nav`
	display: flex;
	align-items: center;
	height: 10vh;
	width: 100%;
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

const Icon = styled.img`
	height: 25px;
	width: 25px;
	margin-right: 15px;
`;

const Header = () => {
	const [open, setOpen] = useState(false);
	useEffect(() => {
		open && (document.body.style.overflow = "hidden");
		!open && (document.body.style.overflow = "unset");
	}, [open]);
	return (
		<StyledHeader>
			<Navigation>
				<div className="search"></div>
				<Logo>Parfum.</Logo>
				<NavIcons>
					<Icon src={FavoriteIcon} alt="favorite items icon" />
					<Icon src={CartIcon} alt="shopping cart button" />
					<Hamburger open={open} setOpen={setOpen} />
				</NavIcons>
			</Navigation>
			<SearchBar />
			<Menu open={open} setOpen={setOpen} />
			<NavigationBar />
		</StyledHeader>
	);
};

export default Header;
