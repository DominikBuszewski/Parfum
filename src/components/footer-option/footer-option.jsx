import React, { useState } from "react";
import styled from "styled-components";
import next from "../../assets/icons/next.svg";
import FooterOptionItem from "../footer-option-item/footer-option-item.component";

const StyledOption = styled.div`
	width: 100%;
	margin-top: 10px;
	border: ${({ open }) => (open ? "none" : "1px solid black")};
	overflow: hidden;
`;

const LI = styled.li`
	list-style: none;
	text-align: center;
	width: 100%;
	border-bottom: 1px solid black;
	text-align: left;
	cursor: pointer;
`;

const StyledList = styled.ul`
	display: ${({ open }) => (open ? "block" : "none")};
	padding: 15px;
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
	font-size: 2em;
	border: none;

	img {
		width: 30px;
		height: 30px;
		transform: ${({ open }) => (open ? "rotate(-90deg)" : "rotate(90deg)")};
		transition: 0.6s ease-in-out;
		margin-right: 5px;
	}
`;

const FooterOption = ({ title }) => {
	const [open, setOpen] = useState(false);
	const toggleHandler = () => {
		setOpen(!open);
	};
	return (
		<StyledOption>
			<StyledButton onClick={toggleHandler} open={open}>
				{title}
				<img src={next} />
			</StyledButton>

			<StyledList open={open}>
				<FooterOptionItem name={"UPS"} />
				<FooterOptionItem name={"DHL"} />
				<FooterOptionItem name={"FEDEX"} />
				<FooterOptionItem name={"TNT"} />
			</StyledList>
		</StyledOption>
	);
};

export default FooterOption;
