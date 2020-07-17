import styled from "styled-components";
import { device } from "../../theme/main-styles.styles";

export const StyledDirectoryFilterMenu = styled.div`
	width: 98%;
	min-height: 10vh;
	position: relative;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	@media ${device.desktop} {
		justify-content: flex-start;
	}
`;

export const StyledUl = styled.ul`
	position: absolute;
	top: 7vh;
	left: 0vw;
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
