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
		padding: 2em;
	}
`;

const StyledContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
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
	width: 100%;
	padding: 1em;
	display: flex;
	flex-wrap: wrap;
`;

const ShopDirectory = () => {
	const [items, setItems] = useState([]);
	const [sort, setSort] = useState("id");

	const sortBy = () => {
		let selector = document.getElementById("sorting");
		setSort(selector.value);
	};

	useEffect(() => {
		const fetchData = async () => {
			const data = await firestore.collection("items").orderBy(`${sort}`).get();
			setItems(data.docs.map((doc) => doc.data()));
		};
		fetchData();
	}, [sort]);

	return (
		<StyledDirectoryContainer>
			<StyledDirectoryMenu>
				<div>
					<FooterOption
						title={"Filter by:"}
						props={["Brand", "Note", "Type"]}
						styles
					/>
				</div>
			</StyledDirectoryMenu>
			<StyledContainer>
				<StyledDirectoryHeader>
					<h3>Category</h3>

					<p>Sorty by:</p>
					<select id="sorting" name="sort-by" onChange={sortBy}>
						<option value="id">Default</option>
						<option value="name">Alphabetical</option>
						<option value="price">Ascending Price</option>
					</select>
				</StyledDirectoryHeader>

				<StyledDirectory id="box">
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
