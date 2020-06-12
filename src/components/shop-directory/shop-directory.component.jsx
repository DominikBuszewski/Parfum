import React from "react";
import styled from "styled-components";
import { colors, device } from "../../theme/main-styles.styles";
import FooterOption from "../footer-option/footer-option";
import ShopItem from "../shop-item/shop-item.component";
import aqua from "../../assets/images/aquadigioparfum.png";

const StyledDirectoryContainer = styled.main`
	background-color: ${colors.light};
	width: 94%;
	display: flex;
	flex-direction: column;
	min-height: 80vh;
	padding: 10px;
	margin-top: 50px;

	@media ${device.desktop} {
		flex-direction: row;
		width: 80%;
		padding: 50px;
	}
`;

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media ${device.desktop} {
		width: 85%;
	}
`;

const StyledDirectoryMenu = styled.nav`
	display: flex;
	overflow: visible;
	width: 100%;
	height: 10%;

	div {
		width: 100%;
	}

	@media ${device.desktop} {
		width: 15%;
	}
`;

const StyledDirectoryHeader = styled.header`
	height: 7vh;

	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid black;

	h3 {
		width: 50%;

		@media ${device.desktop} {
			width: 60%;
		}
	}

	select {
		border: none;
	}
`;

const StyledDirectory = styled.section`
	padding: 15px;

	display: grid;
	grid-template-columns: repeat(2, 50%);

	@media ${device.desktop} {
		grid-template-columns: repeat(4, 25%);
	}
`;

const ShopDirectory = () => {
	return (
		<StyledDirectoryContainer>
			<StyledDirectoryMenu>
				<div>
					<FooterOption
						title={"FIlter by:"}
						props={["Brand", "Note", "Type"]}
						styles
					/>
				</div>
			</StyledDirectoryMenu>
			<StyledContainer>
				<StyledDirectoryHeader>
					<h3>Category</h3>

					<p>Sorty by:</p>
					<select name="sort-by">
						<option value="Popularity">Popularity</option>
						<option value="Price high">Price from highest</option>
						<option value="Price low">Price from lowest</option>
					</select>
				</StyledDirectoryHeader>

				<StyledDirectory>
					<ShopItem
						name={"Aqua di Gio"}
						brand={"Armani"}
						imageUrl={aqua}
						price={"34.99"}
					/>
					<ShopItem
						name={"Aqua di Gio"}
						brand={"Armani"}
						imageUrl={aqua}
						price={"34.99"}
					/>
					<ShopItem
						name={"Aqua di Gio"}
						brand={"Armani"}
						imageUrl={aqua}
						price={"34.99"}
					/>
					<ShopItem
						name={"Aqua di Gio"}
						brand={"Armani"}
						imageUrl={aqua}
						price={"34.99"}
					/>
					<ShopItem
						name={"Aqua di Gio"}
						brand={"Armani"}
						imageUrl={aqua}
						price={"34.99"}
					/>
					<ShopItem
						name={"Aqua di Gio"}
						brand={"Armani"}
						imageUrl={aqua}
						price={"34.99"}
					/>
					<ShopItem
						name={"Aqua di Gio"}
						brand={"Armani"}
						imageUrl={aqua}
						price={"34.99"}
					/>
					<ShopItem
						name={"Aqua di Gio"}
						brand={"Armani"}
						imageUrl={aqua}
						price={"34.99"}
					/>
					<ShopItem
						name={"Aqua di Gio"}
						brand={"Armani"}
						imageUrl={aqua}
						price={"34.99"}
					/>
					<ShopItem
						name={"Aqua di Gio"}
						brand={"Armani"}
						imageUrl={aqua}
						price={"34.99"}
					/>
				</StyledDirectory>
			</StyledContainer>
		</StyledDirectoryContainer>
	);
};

export default ShopDirectory;
