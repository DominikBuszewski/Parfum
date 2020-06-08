import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
	list-style: none;
`;

const FooterOptionItem = ({ name }) => <StyledLi>{name}</StyledLi>;

export default FooterOptionItem;
