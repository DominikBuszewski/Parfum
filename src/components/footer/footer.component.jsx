import React, { useState } from "react";
import styled from "styled-components";
import { colors, device } from "../../theme/main-styles.styles";
import FooterOption from "../footer-option/footer-option";
import Newsletter from "../newsletter/newsletter.component";

const StyledFooter = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const StyledFooterOptions = styled.footer`
	min-height: 40vh;
	width: 100vw;
	padding: 15px;

	@media ${device.desktop} {
		height: 50vh;
		padding: 50px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
`;

const StyledOptionContainer = styled.div``;

const StyledEnd = styled.div`
	width: 100%;
	height: 5vh;
	background-color: ${colors.secondary};
	display: flex;
	justify-content: center;
	align-items: center;
`;

const P = styled.p`
	font-size: 0.8em;
`;

const Footer = () => {
	// const deliveryToggleHandler = () => (setDeliveryMenu(!deliveryMenu));
	return (
		<StyledFooter>
			<StyledFooterOptions>
				<FooterOption
					title={"Delivery"}
					props={["UPS", "TNT", "FEDEX", "DHL"]}
				/>
				<FooterOption
					title={"Payment"}
					props={["BLIK", "VISA", "MASTERCARD"]}
				/>
				<FooterOption
					title={"Customer Service"}
					props={["CONTACT", "RECLAMATIONS"]}
				/>
				<Newsletter />
			</StyledFooterOptions>
			<StyledEnd>
				<P>
					This is a trial site for testing, I own nothing - Dominik Buszewski
				</P>
			</StyledEnd>
		</StyledFooter>
	);
};
export default Footer;

//
