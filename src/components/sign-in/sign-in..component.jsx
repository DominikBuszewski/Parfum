import React, { useState } from "react";
import { signInWithGoogle } from "../../firebase/firebase";
import Button from "../custom-button/custom-button.component";

const StyledSignIn = styled.form``;

const SignIn = () => {
	const [email, emailInput] = useState();
	const [password, passwordInput] = useState("");

	return (
		<StyledSignIn>
			<Label>Email</Label>
			<input type="email" required />
			<Label>Password</Label>
			<input type="password" required />
			<Button>Sign In</Button>
		</StyledSignIn>
	);
};

export default SignIn;
