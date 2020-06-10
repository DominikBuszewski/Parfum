import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
	background-color: ${(props) => (props.primary ? "black" : "white")};
	color: ${(props) => (props.primary ? "white" : "black")};
	height: 50px;
	font-size: 1em;
	min-width: 150px;
	border: ${(props) => (props.primary ? "none" : "1px solid black")};

	&:hover {
		cursor: pointer;
		background-color: ${(props) => (props.primary ? "white" : "black")};
		color: ${(props) => (props.primary ? "black" : "white")};
	}
`;

// interface Props {
// 	name: string;
// }

// const Button: React.FC<Props> = ({ name }) => (
// 	<CustomButton>{name}</CustomButton>
// );

const Button = ({ primary, name, ...otherProps }) => (
	<CustomButton primary={primary} {...otherProps}>
		{name}
	</CustomButton>
);

export default Button;
