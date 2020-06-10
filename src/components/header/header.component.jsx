import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CartIcon from "../../assets/icons/shopping-cart-icon.svg";
import { Link } from "react-router-dom";
import NavigationBar from "../navbar/navbar.component";
import Menu from "../menu/menu.component";
import Hamburger from "../hamburger-menu-button/hamburger.component";
import { auth } from "../../firebase/firebase";

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
	text-decoration: none;
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

const Links = styled.p`
	text-decoration: none;
	margin-right: 10px;
`;

const LinkWrapper = styled.div`
	a {
		text-decoration: none;
		color: black;
	}
`;

const Header = ({ currentUser }) => {
	const [open, setOpen] = useState(false);
	useEffect(() => {
		open && (document.body.style.overflow = "hidden");
		!open && (document.body.style.overflow = "unset");
	}, [open]);
	return (
		<StyledHeader>
			<Navigation>
				<div className="search"></div>
				<LinkWrapper>
					<Link to="/">
						<Logo>Parfum.</Logo>
					</Link>
				</LinkWrapper>
				<NavIcons>
					<LinkWrapper>
						<Link to="/signin">
							<Links>SIGN IN</Links>
						</Link>
					</LinkWrapper>
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
