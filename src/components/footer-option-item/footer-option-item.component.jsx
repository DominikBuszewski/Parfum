import React from "react";
import styled from "styled-components";
import { colors, device } from "../../theme/main-styles.styles";

const StyledLi = styled.li`
	list-style: none;
	font-size: 1.2em;
	border-bottom: 1px solid black;

	@media ${device.desktop} {
		font-size: 1.5em;

		:hover {
			background-color: ${colors.dark};
			color: ${colors.light};
		}
	}
`;

const FooterOptionItem = ({ name }) => <StyledLi>{name}</StyledLi>;

export default FooterOptionItem;
