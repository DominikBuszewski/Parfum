import React from "react";
import styled from "styled-components";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { device } from "../../theme/main-styles.styles";

const StyledSignInPage = styled.div`
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media ${device.desktop} {
		min-height: 80vh;
		flex-direction: row;
		width: 100%;
		justify-content: space-around;
	}
`;

const StyledFormContainer = styled.div`
	width: 100%;
	height: 50%;
	display: flex;
	justify-content: center;
	align-items: center;

	@media ${device.desktop} {
		width: 40%;
		height: 500px;
	}
`;

const SignInAndSignUpPage = () => (
	<StyledSignInPage>
		<StyledFormContainer>
			<SignIn />
		</StyledFormContainer>
		<StyledFormContainer>
			<SignUp />
		</StyledFormContainer>
	</StyledSignInPage>
);

export default SignInAndSignUpPage;
