import React, { useState } from "react";
import styled from "styled-components";

import FooterOption from "../footer-option/footer-option";

const StyledFooter = styled.footer`
	min-height: 40vh;
	width: 100vw;
	background-color: pink;
	padding: 15px;
`;

const StyledOptionContainer = styled.div``;

const Footer = () => {
	// const deliveryToggleHandler = () => (setDeliveryMenu(!deliveryMenu));
	return (
		<StyledFooter>
			<FooterOption title={"Delivery"} />
		</StyledFooter>
	);
};
export default Footer;

//
