import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
	list-style: none;
	font-size: 1.2em;
	border-bottom: 1px solid black;
	cursor: pointer;
`;

const FooterOptionItem = ({ name }) => <StyledLi>{name}</StyledLi>;

export default FooterOptionItem;
