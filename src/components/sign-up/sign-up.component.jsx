import React, { useState } from "react";
import styled from "styled-components";
import Button from "../custom-button/custom-button.component";

const StyledSignIn = styled.div`
	background-color: white;
	display: flex;
	flex-direction: column;
	width: 330px;
	height: 350px;
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
	width: 100%;
	margin-bottom: 1em;
`;

const StyledLabel = styled.label`
	width: 70%;
	text-align: left;
`;

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(email, password, name);
		setEmail("");
		setPassword("");
		setName("");
	};
	return (
		<StyledSignIn>
			<Headline2>Register new account</Headline2>

			<FormInput onSubmit={handleSubmit}>
				<StyledLabel>Name</StyledLabel>
				<StyledInput
					name="text"
					type="text"
					onChange={(event) => setName(event.target.value)}
					value={name}
					label="name"
					required
				/>
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
					<Button name={"Sign Up"} type="submit" />
				</ButtonContainer>
			</FormInput>
		</StyledSignIn>
	);
};

export default SignUp;
