import React, { useState } from "react";
import styled from "styled-components";
import { auth, signInWithGoogle } from "../../firebase/firebase";
import Button from "../custom-button/custom-button.component";
import InvertedButton from "../inverted-button/inverted-button.component";

const StyledSignIn = styled.div`
	background-color: white;
	display: flex;
	flex-direction: column;
`;

const Headline2 = styled.h2`
	font-size: 1.5em;
	margin-bottom: 1em;
`;

const FormInput = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const StyledInput = styled.input`
	border: none;
	font-size: 1.5em;
	border-bottom: 1px solid black;
	width: 70%;
	margin-bottom: 1em;
`;

const StyledLabel = styled.label`
	width: 70%;
	text-align: left;
`;

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(email, password);
		setEmail("");
		setPassword("");
	};
	return (
		<StyledSignIn>
			<Headline2>I already have an account</Headline2>

			<FormInput onSubmit={handleSubmit}>
				<StyledLabel>Email</StyledLabel>
				<StyledInput
					name="email"
					type="email"
					onChange={(event) => setEmail(event.target.value)}
					value={email}
					label="email"
					required
				/>
				<StyledLabel>Password</StyledLabel>
				<StyledInput
					name="password"
					type="password"
					value={password}
					onChange={(event) => setPassword(event.target.value)}
					label="password"
					required
				/>
				<ButtonContainer>
					<Button name={"SignIn"} type="submit" />
					<InvertedButton name={"Sign in with google"} />
				</ButtonContainer>
			</FormInput>
		</StyledSignIn>
	);
};

export default SignIn;
