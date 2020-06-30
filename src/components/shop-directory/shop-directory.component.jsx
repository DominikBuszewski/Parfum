import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors, device } from "../../theme/main-styles.styles";
import FooterOption from "../footer-option/footer-option";
import ShopItem from "../shop-item/shop-item.component";

import { firestore } from "../../firebase/firebase";
import { Link } from "react-router-dom";

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
	padding: 1em;
	display: grid;
	grid-auto-flow: row;
	grid-template-columns: repeat(2, 50%);

	@media ${device.desktop} {
		grid-template-columns: repeat(4, 1fr);
	}
`;

const ShopDirectory = () => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const data = await firestore.collection("items").orderBy("id").get();
			setItems(data.docs.map((doc) => doc.data()));
		};
		fetchData();
	}, []);

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
						<option value="id">Standard</option>
						<option value="name">Alfabetycznie</option>
					</select>
				</StyledDirectoryHeader>

				<StyledDirectory>
					{items.map(({ id, name, brand, imageUrl, price }) => (
						<Link to={`/shop/${id}`} key={id}>
							<ShopItem
								key={id}
								name={name}
								brand={brand}
								imageUrl={imageUrl}
								price={price}
							/>
						</Link>
					))}
				</StyledDirectory>
			</StyledContainer>
		</StyledDirectoryContainer>
	);
};

export default ShopDirectory;

// <ShopItem
// name={"Aqua di Gio"}
// brand={"Armani"}
// imageUrl={aqua}
// price={"34.99"}
// />

// {items.map((item) => (
// 	<ShopItem
// 		key={item.id}
// 		name={item.name}
// 		brand={item.brand}
// 		imageUrl={item.imageUrl}
// 		price={item.price}
// 	/>
// ))}
