import React, { useState } from "react";
import styled from "styled-components";

import FooterOption from "../footer-option/footer-option";
import Newsletter from "../newsletter/newsletter.component";

const StyledFooter = styled.footer`
	min-height: 40vh;
	width: 100vw;
	padding: 15px;
`;

const StyledOptionContainer = styled.div``;

const Footer = () => {
	// const deliveryToggleHandler = () => (setDeliveryMenu(!deliveryMenu));
	return (
		<StyledFooter>
			<FooterOption title={"Delivery"} props={["UPS", "TNT", "FEDEX", "DHL"]} />
			<FooterOption title={"Ppayment"} props={["BLIK", "VISA", "MASTERCARD"]} />
			<FooterOption
				title={"Customer Service"}
				props={["Contact", "Reclamations"]}
			/>
			<Newsletter />
		</StyledFooter>
	);
};
export default Footer;

//
