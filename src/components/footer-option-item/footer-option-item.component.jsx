import React from "react";
import styled from "styled-components";
import { colors, device } from "../../theme/main-styles.styles";

const StyledLi = styled.li`
	list-style: none;
	font-size: 1em;
	border-bottom: 1px solid black;
	font-family: "montserrat";

	@media ${device.desktop} {
		font-size: 1.3em;

		:hover {
			border-bottom: 3px solid ${colors.dark};
			/* color: ${colors.light}; */
		}
	}
`;

const FooterOptionItem = ({ name }) => <StyledLi>{name}</StyledLi>;

export default FooterOptionItem;
