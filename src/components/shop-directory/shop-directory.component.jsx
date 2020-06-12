import React from "react";
import styled from "styled-components";
import { colors, device } from "../../theme/main-styles.styles";
import FooterOption from "../footer-option/footer-option";

const StyledDirectoryContainer = styled.main`
	width: 94%;
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(2, 50%);
	grid-template-rows: repeat(10, 10%);

	@media ${device.desktop} {
		width: 70%;
		height: 80vh;

		grid-template-columns: repeat(5, 20%);
	}
`;

const StyledDirectoryMenu = styled.nav`
	grid-row: 1 / span 1;
	display: flex;
	position: relative;
	overflow: visible;
	justify-content: center;

	@media ${device.desktop} {
		grid-row: 1 / span 6;
		overflow: hidden;
		align-items: center;
		width: 100%;
	}

	div {
		width: 100%;
		/* height: 100%; */
		position: absolute;
		top: 0px;
		left: 0px;

		@media ${device.desktop} {
			top: 37px;
		}
	}
`;

const StyledDirectoryHeader = styled.header`
	grid-column: 2 /2;
	grid-row: 1/2;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid black;
	border-top: 1px solid black;
	border-right: 1px solid black;
	height: 95%;

	h3 {
		display: none;
	}

	@media ${device.desktop} {
		grid-column: 2 / 6;
		grid-row: 1/2;
		flex-direction: row;
		align-items: flex-end;
		border-top: none;
		border-right: none;
		height: 100%;

		h3 {
			display: block;

			width: 70%;
		}

		select {
			border: none;
		}
	}
`;

const StyledDirectory = styled.section`
	grid-column: 1 / span 2;
	grid-row: 2 / span 10;
	padding: 15px;

	@media ${device.desktop} {
		grid-column: 2 / span 10;
	}
`;

const ShopDirectory = () => {
	return (
		<StyledDirectoryContainer>
			<StyledDirectoryHeader>
				<h3>Category</h3>

				<p>Sorty by:</p>
				<select name="sort-by">
					<option value="Popularity">Popularity</option>
					<option value="Price high">Price from highest</option>
					<option value="Price low">Price from lowest</option>
				</select>
			</StyledDirectoryHeader>
			<StyledDirectoryMenu>
				<div>
					<FooterOption
						title={"FIlter by:"}
						props={["Brand", "Note", "Type"]}
						styles
					/>
				</div>
			</StyledDirectoryMenu>
			<StyledDirectory></StyledDirectory>
		</StyledDirectoryContainer>
	);
};

export default ShopDirectory;
