import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { colors, device } from "../../theme/main-styles.styles";

import ShopItem from "../shop-item/shop-item.component";
import { FilterContext } from "./shop-directory-context";
import { firestore } from "../../firebase/firebase";
import { Link } from "react-router-dom";
import ShopDirectoryFilterMenu from "../shop-directory-filter-menu/shop-directory-filter-menu.component";

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
	text-decoration: none;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
`;
const ShopDirectory = () => {
	const [items, setItems] = useState([]);
	const [sort, setSort] = useState("id");
	const filterCtx = useContext(FilterContext);

	const sortBy = () => {
		let selector = document.getElementById("sorting");
		setSort(selector.value);
	};

	useEffect(() => {
		if (filterCtx.filter === "") {
			const fetchData = async () => {
				const data = await firestore
					.collection("items")
					.orderBy(`${sort}`)
					.get();
				setItems(data.docs.map((doc) => doc.data()));
			};
			fetchData();
		} else {
			const fetchData = async () => {
				const data = await firestore
					.collection("items")
					.where(`${filterCtx.category}`, "==", `${filterCtx.filter}`)
					.orderBy(`${sort}`)
					.get();
				setItems(data.docs.map((doc) => doc.data()));
			};
			console.log(filterCtx.filter);
			console.log(filterCtx.category);
			fetchData();
		}

		// else if (filterCtx.filter === "Man") {
		// 	const fetchFilteredForManData = async () => {
		// 		const data = await firestore
		// 			.collection("items")
		// 			.where("for", "==", "man")
		// 			.orderBy(`${sort}`)
		// 			.get();
		// 		setItems(data.docs.map((doc) => doc.data()));
		// 	};
		// 	fetchFilteredForManData();
		// } else if (filterCtx.filter === "Woman") {
		// 	const fetchFilteredForWomanData = async () => {
		// 		const data = await firestore
		// 			.collection("items")
		// 			.where("for", "==", "woman")
		// 			.orderBy(`${sort}`)
		// 			.get();
		// 		setItems(data.docs.map((doc) => doc.data()));
		// 	};
		// 	fetchFilteredForWomanData();
		// } else {
		// 	const fetchData = async () => {
		// 		const data = await firestore
		// 			.collection("items")
		// 			.orderBy(`${sort}`)
		// 			.get();
		// 		setItems(data.docs.map((doc) => doc.data()));
		// 	};
		// 	fetchData();
		// }
	}, [filterCtx, sort]);

	return (
		<StyledDirectoryContainer>
			<StyledDirectoryMenu>
				<div>
					<ShopDirectoryFilterMenu />
				</div>
			</StyledDirectoryMenu>
			<StyledContainer>
				<StyledDirectoryHeader>
					<h3>Category: {filterCtx.filter}</h3>

					<p>Sorty by:</p>
					<select id="sorting" name="sort-by" onChange={sortBy}>
						<option value="id">Default</option>
						<option value="name">Alphabetical</option>
						<option value="price">Ascending Price</option>
					</select>
				</StyledDirectoryHeader>

				<StyledDirectory id="box">
					{items.map(({ id, name, brand, imageUrl, price }) => (
						<StyledLink to={`/shop/${id}`} key={id}>
							<ShopItem
								key={id}
								name={name}
								brand={brand}
								imageUrl={imageUrl}
								price={price}
							/>
						</StyledLink>
					))}
				</StyledDirectory>
			</StyledContainer>
		</StyledDirectoryContainer>
	);
};

export default ShopDirectory;
