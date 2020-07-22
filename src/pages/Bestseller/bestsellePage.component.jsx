import React, { useEffect, useContext } from "react";
import { BestsellerContext } from "./bestseller.context";
import { Link } from "react-router-dom";
import {
	StyledBestsellerContainer,
	BanerContainer,
} from "./bestsellerPage.styles";
import { firestore } from "../../firebase/firebase";
import Button from "../../components/custom-button/custom-button.component";

const BestsellerPage = () => {
	const bestCtx = useContext(BestsellerContext);

	useEffect(() => {
		const fetchData = async () => {
			const data = await firestore
				.collection("items")
				.where("status", "==", "bestseller")
				.get();
			const mapData = data.docs.map((doc) => doc.data());
			bestCtx.setBestItems(mapData);
		};
		fetchData();
	});
	return (
		<div>
			<BanerContainer>
				<img
					alt="bnanner"
					src="https://www.biotage.com/uploads/photos/perfume_banner.jpg"
				/>
				<h4>Bestsellers</h4>
			</BanerContainer>
			<StyledBestsellerContainer>
				<h3>Bestsellers:</h3>
				<main>
					{bestCtx.bestItems.map((bestItem) => (
						<div key={bestItem.id}>
							<section>
								<img alt="" src={bestItem.imageUrl} />
							</section>
							<section>
								<p>{bestItem.brand}</p>
								<p>{bestItem.name}</p>
								<p>{bestItem.price}$</p>
							</section>
							<section>
								<Link to={`/shop/${bestItem.id}`}>
									<Button name={"Learn more"} primary />
								</Link>
							</section>
						</div>
					))}
				</main>
			</StyledBestsellerContainer>
		</div>
	);
};

export default BestsellerPage;
