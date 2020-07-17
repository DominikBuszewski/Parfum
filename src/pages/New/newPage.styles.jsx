import styled from "styled-components";
import { colors, device } from "../../theme/main-styles.styles";

export const NewPageContainer = styled.main`
	width: 80%;
	min-height: 40vh;
	margin: 5em auto;

	main {
		display: grid;
		grid-template-columns: 1fr;
		@media ${device.desktop} {
			grid-template-columns: 1fr 1fr;
		}

		div {
			display: flex;
			border: 1px solid ${colors.secondary};
			margin: 1em;
			align-items: center;
			section {
				margin: 1em auto;
				width: 50%;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-items: center;
				a {
					text-decoration: none;
					color: ${colors.dark};
				}
			}
		}

		p {
			align-self: flex-start;
			margin-left: 0.5em;
		}
		img {
			width: 8vh;

			@media ${device.desktop} {
				width: 33%;
				margin: 0 auto;
			}
		}
	}

	@media ${device.desktop} {
	}
`;
