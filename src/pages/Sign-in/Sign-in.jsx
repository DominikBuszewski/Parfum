import React from "react";
import styled from "styled-components";
import SignIn from "../Sign-in/Sign-in";

const Container = styled.div`
	width: 100%;
	height: 100vh;
`;

const SignInPage = () => (
	<Container>
		<SignIn />
	</Container>
);

export default SignInPage;
