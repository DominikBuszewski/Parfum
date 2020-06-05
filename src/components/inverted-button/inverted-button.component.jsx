import React from "react";
import styled from "styled-components";

// interface Props {
// 	name: string;
// }

const StyledInvertedButton = styled.button`
	background-color: black;
	color: white;
	height: 50px;
	font-size: 1em;
	min-width: 150px;
	border: 1px solid white;

	&:hover {
		cursor: pointer;
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

// const InvertedButton: React.FC<Props> = ({ name }) => (
// 	<CustomInvertedButton>{name}</CustomInvertedButton>
// );

const InvertedButton = ({ name }) => (
	<StyledInvertedButton>{name}</StyledInvertedButton>
);

export default InvertedButton;
