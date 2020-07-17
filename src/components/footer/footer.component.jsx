import React from "react";
import styled from "styled-components";
import { colors, device } from "../../theme/main-styles.styles";
import FooterOption from "../footer-option/footer-option";
import Newsletter from "../newsletter/newsletter.component";
import dior from "../../assets/images/missdior.jpeg";

const StyledFooter = styled.div`
	width: 100%;
	min-height: 50vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const StyledFooterOptions = styled.footer`
	min-height: 40vh;
	width: 100%;
	padding: 1em;

	@media ${device.desktop} {
		width: 70%;
		height: 50vh;
		padding: 50px;
		align-self: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const StyledEnd = styled.div`
	margin-top: 50px;
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

const About = styled.section`
	width: 98%;
	min-height: 40vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 15px;

	@media ${device.desktop} {
		width: 70%;
		align-self: center;
	}

	h2 {
		font-size: 2em;
		margin-bottom: 2em;
		border-bottom: 1px solid ${colors.dark};
		width: 100%;
		text-align: center;
	}

	div {
		display: flex;
		justify-content: space-around;
		align-items: center;

		p {
			width: 60%;

			@media ${device.desktop} {
				width: 50%;
				font-size: 1em;
				letter-spacing: 3px;
			}
		}

		img {
			width: 40%;

			@media ${device.desktop} {
				width: 20%;
			}
		}
	}
`;

const Footer = () => {
	// const deliveryToggleHandler = () => (setDeliveryMenu(!deliveryMenu));
	return (
		<StyledFooter>
			<About>
				<h2>About US</h2>
				<div>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
						excepturi earum eaque nostrum sit odio mollitia nesciunt. Illo, hic
						excepturi! Inventore rem facere saepe? Praesentium aliquid tenetur
						ullam dolores quibusdam? Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Nihil commodi praesentium cupiditate ut vel ipsa
						quae, voluptatem dolore sit pariatur, deserunt voluptate
						reprehenderit expedita! Cum in quis aspernatur facere inventore!
					</p>
					<br />
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
						excepturi earum eaque nostrum sit odio mollitia nesciunt. Illo, hic
						excepturi! Inventore rem facere saepe? Praesentium aliquid tenetur
						ullam dolores quibusdam? Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Nihil commodi praesentium cupiditate ut vel ipsa
						quae, voluptatem dolore sit pariatur, deserunt voluptate
						reprehenderit expedita! Cum in quis aspernatur facere inventore!
					</p>
					<img src={dior} alt="" />
				</div>
			</About>
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
