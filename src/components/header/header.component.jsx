import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CartIcon from "../../assets/icons/shopping-cart-icon.svg";
import { Link } from "react-router-dom";
import Menu from "../menu/menu.component";
import Hamburger from "../hamburger-menu-button/hamburger.component";
import { auth } from "../../firebase/firebase";
import { colors, device } from "../../theme/main-styles.styles";

const StyledHeader = styled.header`
	width: 100vw;
`;

const Navigation = styled.nav`
	display: flex;
	align-items: center;
	height: 10vh;
	width: 100vw;
	position: relative;
	justify-content: center;

	@media ${device.desktop} {
		justify-content: center;
	}
`;

const NavIcons = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 70%;

	@media ${device.desktop} {
		justify-content: center;
		width: 45vw;
	}
`;
const Logo = styled.div`
	font-size: 1.5em;
	margin-left: 15px;
	text-decoration: none;
	width: 80%;

	@media ${device.desktop} {
		width: 55vw;
		text-align: end;

		font-size: 3.3em;
		margin-left: 0px;
	}
`;

const SearchBar = styled.input`
	justify-self: center;
	align-self: center;
	width: 80%;
	margin-left: 10%;
	border: 1px solid black;

	@media ${device.desktop} {
		width: 15%;
		position: absolute;
		top: 40px;
		left: 10vw;
	}
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

const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${colors.dark};
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
				<StyledLink to="/">
					<Logo>Parfum.</Logo>
				</StyledLink>

				<NavIcons>
					<StyledLink to="/signin">
						<Links>SIGN IN</Links>
					</StyledLink>

					<Icon src={CartIcon} alt="shopping cart button" />
					<Hamburger open={open} setOpen={setOpen} />
				</NavIcons>
			</Navigation>
			<SearchBar />
			<Menu open={open} setOpen={setOpen} />
		</StyledHeader>
	);
};

export default Header;
