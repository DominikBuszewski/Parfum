import React, { useState } from "react";
import styled from "styled-components";
import Button from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase";

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
	const [displayName, setDiasplayName] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			await createUserProfileDocument(user, { displayName });
			setDiasplayName("");
			setEmail("");
			setPassword("");
		} catch (error) {
			console.log(error, "Problem with creating new user");
		}
	};

	return (
		<StyledSignIn>
			<Headline2>Register new account</Headline2>

			<FormInput onSubmit={handleSubmit}>
				<StyledLabel>Name</StyledLabel>
				<StyledInput
					name="text"
					type="text"
					onChange={(e) => setDiasplayName(e.target.value)}
					value={displayName}
					label="name"
					required
				/>
				<StyledLabel>Email</StyledLabel>
				<StyledInput
					name="email"
					type="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					label="email"
					required
				/>

				<StyledLabel>Password</StyledLabel>
				<StyledInput
					name="password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					label="password"
					autoComplete="false"
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
