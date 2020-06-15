import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CartIcon from "../../assets/icons/shopping-cart-icon.svg";
import { Link } from "react-router-dom";
import Menu from "../menu/menu.component";
import Hamburger from "../hamburger-menu-button/hamburger.component";
import { auth } from "../../firebase/firebase";
import { colors, device } from "../../theme/main-styles.styles";
import ShoppingCartDropdown from "../shopping-cart-dropdown/shopping-cart-dropdown.component";

const StyledHeader = styled.header`
	width: 100%;
`;

const Navigation = styled.nav`
	display: flex;
	align-items: center;
	height: 10vh;
	width: 100%;
	position: relative;
	justify-content: center;

	@media ${device.desktop} {
	}
`;

const NavIcons = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 60%;

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

const IconContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 5px;
`;

const Icon = styled.img`
	height: 25px;
	width: 25px;
	margin-right: 15px;

	&:hover {
		cursor: pointer;
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${colors.dark};
	margin: 0 10px;
	font-family: "montserrat";
`;

const Header = ({ currentUser }) => {
	const [open, setOpen] = useState(false);
	const [toggleCart, setToggleCart] = useState(false);

	const toggleHandler = () => {
		setToggleCart(!toggleCart);
	};
	useEffect(() => {
		open && (document.body.style.overflow = "hidden");
		!open && (document.body.style.overflow = "unset");
	}, [open]);
	useEffect(() => {
		return () => setOpen(false);
	}, []);
	return (
		<StyledHeader>
			<Navigation>
				<StyledLink to="/">
					<Logo>Parfum.</Logo>
				</StyledLink>

				<NavIcons>
					{currentUser ? (
						<StyledLink onClick={() => auth.signOut()} to="/">
							Sign Out
						</StyledLink>
					) : (
						<StyledLink to="/signin">Sign In</StyledLink>
					)}
					<IconContainer onClick={toggleHandler}>
						<Icon src={CartIcon} alt="shopping cart button" />
						<p>(4)</p>
					</IconContainer>
					<Hamburger open={open} setOpen={setOpen} />
				</NavIcons>
			</Navigation>
			<SearchBar placeholder="Type in item you want to search for" />
			<Menu open={open} setOpen={setOpen} />
			<ShoppingCartDropdown
				toggleCart={toggleCart}
				toggleHandler={toggleHandler}
			/>
		</StyledHeader>
	);
};

export default Header;
