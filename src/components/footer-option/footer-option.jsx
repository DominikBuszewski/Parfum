import React, { useState } from "react";
import styled from "styled-components";
import next from "../../assets/icons/next.svg";
import FooterOptionItem from "../footer-option-item/footer-option-item.component";
import { colors, device } from "../../theme/main-styles.styles";

const StyledOption = styled.div`
	width: 100%;
	/* margin-top: 10px; */
	border: ${({ open }) => (open ? "none" : "1px solid black")};
	overflow: hidden;
	cursor: pointer;
	background-color: ${colors.light};

	@media ${device.desktop} {
		/* width: 24%; */
	}
`;

const StyledList = styled.ul`
	display: ${({ open }) => (open ? "block" : "none")};
	padding: 15px;

	@media ${device.desktop} {
		display: block;
		height: 20vh;
	}
`;

const StyledButton = styled.button`
	background-color: transparent;
	border: none;
	outline: none;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	width: 100%;
	font-size: 1.6em;
	border: none;
	padding: 10px;

	@media ${device.desktop} {
		height: 10vh;
	}

	img {
		width: 30px;
		height: 30px;
		transform: ${({ open }) => (open ? "rotate(90deg)" : "rotate(180deg)")};
		transition: 0.3s ease-in-out;
		margin-right: 5px;

		@media ${device.desktop} {
			display: none;
		}
	}
`;

const FooterOption = ({ title, props }) => {
	const [open, setOpen] = useState(false);
	const toggleHandler = () => {
		setOpen((currentStatus) => !currentStatus);
	};
	// const props = ["UPS", "DHL", "FEDEX", "TNT"];
	return (
		<StyledOption>
			<StyledButton onClick={toggleHandler} open={open}>
				{title}
				<img src={next} alt="" />
			</StyledButton>

			<StyledList open={open}>
				{props.map((prop) => (
					<FooterOptionItem key={Math.random()} name={prop} />
				))}
			</StyledList>
		</StyledOption>
	);
};

export default FooterOption;
