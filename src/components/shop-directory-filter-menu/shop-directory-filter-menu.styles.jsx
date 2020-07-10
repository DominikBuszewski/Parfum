import styled from "styled-components";
import { device, colors } from "../../theme/main-styles.styles";

export const StyledDirectoryFilterMenu = styled.div`
	width: 98%;
	min-height: 20vh;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: flex-start;
`;

export const StyledUl = styled.ul`
	list-style: none;
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: flex-start;

	@media ${device.desktop} {
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
`;
