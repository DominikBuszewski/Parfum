import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
	background-color: transparent;
	height: 50px;
	font-size: 1em;
	min-width: 150px;
	border: 1px solid black;

	&:hover {
		cursor: pointer;
	}
`;

// interface Props {
// 	name: string;
// }

// const Button: React.FC<Props> = ({ name }) => (
// 	<CustomButton>{name}</CustomButton>
// );

const Button = ({ name }) => <CustomButton>{name}</CustomButton>;

export default Button;
