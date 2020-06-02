import React from "react";
import styled from "styled-components";

// interface Props {
// 	name: string;
// }

const CustomInvertedButton = styled.button`
	background-color: black;
	color: white;
	height: 50px;
	font-size: 1em;
	min-width: 150px;
	border: 1px solid white;

	&:hover {
		cursor: pointer;
	}
`;

// const InvertedButton: React.FC<Props> = ({ name }) => (
// 	<CustomInvertedButton>{name}</CustomInvertedButton>
// );

const InvertedButton = ({ name }) => (
	<CustomInvertedButton>{name}</CustomInvertedButton>
);

export default InvertedButton;
