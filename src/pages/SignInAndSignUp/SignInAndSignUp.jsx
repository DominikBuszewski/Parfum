import React from "react";
import styled from "styled-components";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const StyledSignInPage = styled.div`
	min-height: 90vw;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const StyledSignInOrSignUp = styled.div`
	width: 100%;
	height: 50vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SignInAndSignUpPage = () => (
	<StyledSignInPage>
		<StyledSignInOrSignUp>
			<SignIn />
		</StyledSignInOrSignUp>
		<StyledSignInOrSignUp>
			<SignUp />
		</StyledSignInOrSignUp>
	</StyledSignInPage>
);

export default SignInAndSignUpPage;
