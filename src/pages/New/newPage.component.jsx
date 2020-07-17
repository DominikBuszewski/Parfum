import React, { useEffect, useContext } from "react";
import { NewPageContainer } from "./newPage.styles";
import { BanerContainer } from "../Bestseller/bestsellerPage.styles";
import { Link } from "react-router-dom";
import { firestore } from "../../firebase/firebase";
import Button from "../../components/custom-button/custom-button.component";
import { NewContext } from "./newPage.context";

const NewPage = () => {
	const newCtx = useContext(NewContext);

	useEffect(() => {
		const fetchData = async () => {
			const data = await firestore
				.collection("items")
				.where("status", "==", "new")
				.get();
			const mapData = data.docs.map((doc) => doc.data());
			newCtx.setNewItems(mapData);
		};
		fetchData();
	}, []);
	return (
		<div>
			<BanerContainer>
				<img
					alt="bnanner"
					src="https://www.loreperfumery.com.au/wp-content/uploads/2019/03/lore_brideblog_row4.jpg"
				/>
				<h4>New</h4>
			</BanerContainer>
			<NewPageContainer>
				<h3>New:</h3>
				<main>
					{newCtx.newItems.map((newItem) => (
						<div key={newItem.id}>
							<section>
								<p>Brand: {newItem.brand}</p>
								<p>Name: {newItem.name}</p>
								<p>Price: {newItem.price}$</p>
							</section>
							<section>
								<img alt="" src={newItem.imageUrl} />
								<Link to={`/shop/${newItem.id}`}>
									<Button name={"Buy now!"} />
								</Link>
							</section>
						</div>
					))}
				</main>
			</NewPageContainer>
		</div>
	);
};

export default NewPage;
