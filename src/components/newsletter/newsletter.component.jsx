import React from "react";
import styled from "styled-components";
import Button from "../custom-button/custom-button.component";

const StyledNewsletter = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 15px;
	background-color: #e7b3b3;
	margin: 5px;
`;

const StyledNewsletterInput = styled.input`
	width: 100%;
	height: 50px;
	margin: 5px 0px 5px 0px;
	font-size: 1.2em;
`;

const Newsletter = () => (
	<StyledNewsletter>
		<h3>
			Order now and receive the latest news about cosmetics trends, offers and
			promotions!
		</h3>
		<StyledNewsletterInput
			type="email"
			placeholder="Enter your email address"
			required
		/>
		<Button type="submit" name={"Subscribe"} />
	</StyledNewsletter>
);

export default Newsletter;
