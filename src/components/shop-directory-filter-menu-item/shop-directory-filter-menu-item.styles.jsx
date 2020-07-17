import styled from "styled-components";
import { colors, device } from "../../theme/main-styles.styles";

export const StyledLi = styled.li`
	list-style: none;
	text-decoration: none;
	width: 30%;
	padding: 2px;
	background-color: ${colors.light};
	-webkit-box-shadow: 0px 1px 11px -9px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 1px 11px -9px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 1px 11px -9px rgba(0, 0, 0, 0.75);

	:hover {
		cursor: pointer;

		ul {
			height: 100%;
		}
	}

	@media ${device.desktop} {
		width: 100%;
		margin: 0.4px 0px 0.4em 0px;
	}

	div {
		:hover {
			border-left: 3px solid ${colors.secondary};
		}

		@media ${device.desktop} {
			height: 4vh;
			display: flex;
			align-items: center;
		}

		p {
			margin-left: 0.5em;
			font-size: 1.3em;
		}
	}

	ul {
		display: ${({ toggleMenu }) => (toggleMenu ? "block" : "none")};
		list-style: none;
		height: 0%;
		margin: 1em 0px 0px 1em;

		li {
			margin: 0.5em;
			list-style: none;
			text-decoration: none;

			@media ${device.desktop} {
				width: 60%;
			}

			:hover {
				cursor: pointer;
				border-right: 2px solid ${colors.secondary};
			}
		}
	}
`;

export const StyledDiv = styled.div`
	:hover {
		border-left: 3px solid ${colors.secondary};
	}

	@media ${device.desktop} {
		height: 4vh;
		display: flex;
		align-items: center;
	}

	p {
		margin-left: 0.5em;
		font-size: 1.3em;
	}
`;
