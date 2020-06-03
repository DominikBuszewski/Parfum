import React from "react";
import styled from "styled-components";
import SignIn from "../../components/sign-in/sign-in.component";

const StyledSignInPage = styled.div`
	min-height: 90vw;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const StyledSignInSection = styled.div`
	width: 100%;
	height: 50vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: black;
`;

const StyledRegisterSection = styled.div`
	width: 100%;
	height: 50vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SignInPage = () => (
	<StyledSignInPage>
		<StyledSignInSection>
			<SignIn />
		</StyledSignInSection>
		<StyledRegisterSection />
	</StyledSignInPage>
);

export default SignInPage;
