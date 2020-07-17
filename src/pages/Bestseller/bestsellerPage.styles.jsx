import styled from "styled-components";
import { colors, device } from "../../theme/main-styles.styles";

export const BanerContainer = styled.div`
	margin: 3em auto;
	width: 90%;
	position: relative;

	@media ${device.desktop} {
		width: 50%;
	}

	img {
		width: 100%;

		@media ${device.desktop} {
			width: 100%;
		}
	}

	h4 {
		position: absolute;
		top: 30px;
		left: 30px;
		color: ${colors.light};
		font-size: 1em;

		@media ${device.desktop} {
			font-size: 2em;
		}
	}
`;
export const StyledBestsellerContainer = styled.div`
	width: 80%;
	min-height: 40vh;
	margin: 5em auto;

	h3 {
		margin: 1em 1em;
	}

	main {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.2em;
		@media ${device.desktop} {
			grid-template-columns: 1fr 1fr;
		}

		div {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			border: 1px solid ${colors.secondary};
			section {
				width: 33%;
				text-align: center;
				p {
					font-size: 0.8em;
					@media ${device.desktop} {
						font-size: 1em;
					}
				}
			}

			img {
				width: 6em;

				@media ${device.desktop} {
					width: 8em;
				}
			}

			a {
				text-decoration: none;
				color: ${colors.dark};
			}
		}
	}
`;
