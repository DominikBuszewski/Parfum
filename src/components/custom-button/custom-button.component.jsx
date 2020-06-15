import React from "react";
import styled from "styled-components";
import { colors } from "../../theme/main-styles.styles";

const CustomButton = styled.button`
	/* position: relative;
	background-color: ${(props) =>
		props.primary ? `${colors.dark}` : `${colors.light}`};
	color: ${(props) => (props.primary ? `${colors.light}` : `${colors.dark}`)};
	height: 50px;
	padding: 5px 15px;
	font-size: 0.8em;
	min-width: 150px;
	border: ${(props) => (props.primary ? `2px solid ${colors.dark}` : "none")};
	text-transform: uppercase;
	overflow: hidden;
	transition: 1s all ease; */
		cursor: pointer;
		position: relative;
		display: block;
		color: ${(props) => (props.primary ? `${colors.light}` : `${colors.dark}`)};;
		font-size: 14px;
		font-family: "montserrat";
		text-decoration: none;
		border: 2px solid ${colors.dark};
		min-width: 120px;
		padding: 14px 20px;
		text-transform: uppercase;
		overflow: hidden;
		transition: 0.5s all ease;
		z-index: 2;
		background: ${(props) =>
			props.primary ? `${colors.dark}` : `${colors.light}`};;

	&:hover {
		color: ${(props) => (props.primary ? `${colors.dark}` : `${colors.light}`)};;
		
	}		

	&::before {
		background: ${(props) =>
			props.primary ? `${colors.light}` : `${colors.dark}`};;
		
 		content: "";
  		position: absolute;
  		top: 50%;
  		left: 0%;
  		transform: translate(-0%,-50%);
  		z-index: -1;
  		transition: all 0.8s ease;
  		width: 0%;
  		height: 100%;
	}

	:hover:before {
		width: 100%;

	}

	/* &:hover {
		cursor: pointer;
		background-color: ${(props) =>
			props.primary ? `${colors.dark}` : `${colors.dark}`};
		color: ${(props) => (props.primary ? `${colors.dark}` : `${colors.dark}`)};
	} */
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
