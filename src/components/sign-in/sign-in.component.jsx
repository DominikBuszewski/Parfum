import React, { useState } from "react";
import styled from "styled-components";
import { auth, signInWithGoogle } from "../../firebase/firebase";
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

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const [userCredentials, setUserCretentials] = useState({
	// 	email: "",
	// 	passwrod: "",
	// });
	// const { email, password } = userCredentials;
	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			await auth.signInWithEmailAndPassword(email, password);
			setEmail("");
			setPassword("");
		} catch (error) {
			console.log(error);
		}
		// setUserCretentials({ email: "", password: "" });
	};
	// const handleChange = (event) => {
	// 	const { value, name } = event.target.value;
	// 	setUserCretentials({ ...userCredentials, [name]: value });
	// };
	return (
		<StyledSignIn>
			<Headline2>I already have an account</Headline2>

			<FormInput onSubmit={handleSubmit}>
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
					<Button name={"Sign In"} type="submit" />
					<Button
						primary
						name={"Sign in with google"}
						onClick={signInWithGoogle}
					/>
				</ButtonContainer>
			</FormInput>
		</StyledSignIn>
	);
};

export default SignIn;
