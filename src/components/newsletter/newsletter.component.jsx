import React from "react";
import styled from "styled-components";
import Button from "../custom-button/custom-button.component";
import { device, colors } from "../../theme/main-styles.styles";

const NewsletterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;

	@media ${device.desktop} {
		width: 100%;
		border: 1px solid black;
		height: 30vh;
	}
`;

const Headline = styled.h3`
	font-size: 1.6em;
	text-align: center;
	margin-top: 25px;

	@media ${device.desktop} {
		text-align: left;
		margin-left: 5px;
		height: 10vh;
	}
`;

const StyledNewsletter = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 15px;
	background-color: ${colors.secondary};
	margin: 5px;

	@media ${device.desktop} {
		/* width: 1%; */
	}
`;

const StyledNewsletterInput = styled.input`
	width: 100%;
	height: 50px;
	margin: 5px 0px 5px 0px;
	font-size: 1.2em;
`;

const Newsletter = () => {
	const SubscribeHandler = (event) => {
		event.preventDefault();
		alert("You have successfully singin for our newsletter");
	};

	return (
		<NewsletterContainer>
			<Headline>Newsletter</Headline>
			<StyledNewsletter>
				<h3>
					Order now and receive the latest news about cosmetics trends, offers
					and promotions!
				</h3>
				<StyledNewsletterInput
					type="email"
					placeholder="Enter your email address"
					required
				/>
				<Button type="submit" name={"Subscribe"} onClick={SubscribeHandler} />
			</StyledNewsletter>
		</NewsletterContainer>
	);
};
export default Newsletter;
