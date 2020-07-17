import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { device, colors } from "../../theme/main-styles.styles";
import { BestsellerContext } from "../../pages/Bestseller/bestseller.context";
import { NewContext } from "../../pages/New/newPage.context";
import { firestore } from "../../firebase/firebase";
import Button from "../custom-button/custom-button.component";

const Headline = styled.h1`
	font-size: 1.3em;
	text-align: center;
	margin-top: 15px;
	margin-bottom: 10px;
	height: 20%;

	@media ${device.desktop} {
		font-size: 2.5em;
		margin-top: 35px;
		margin-bottom: 20px;
	}
`;

const PreviewImage = styled.img`
	height: 10vh;

	@media ${device.desktop} {
		height: 15vh;
	}
`;

const StyledSlider = styled.div`
	min-height: 35vh;
	width: 90%;
	border-top: 1px solid ${colors.secondary};
	border-bottom: 1px solid ${colors.secondary};
	display: flex;
	flex-direction: column;

	@media ${device.desktop} {
		width: 100%;
	}
`;

const StyledSliderElement = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 20vh;

	h4 {
		text-align: center;
	}

	p {
		text-align: center;
	}

	:hover {
		cursor: pointer;
		border-bottom: 2px solid ${colors.secondary};
	}
`;

const Slider = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	justify-content: center;
	height: 65vh;

	@media ${device.desktop} {
		display: flex;
		height: 25vh;
		align-items: center;
		margin: 1em auto;
	}

	a {
		text-decoration: none;
		color: ${colors.dark};
	}
`;
const PreviewSlider = () => {
	const newCtx = useContext(NewContext);
	const bestCtx = useContext(BestsellerContext);
	useEffect(() => {
		const fetchData = async () => {
			const data = await firestore
				.collection("items")
				.where("status", "==", "bestseller")
				.limit(5)
				.get();
			const mapData = data.docs.map((doc) => doc.data());
			bestCtx.setBestItems(mapData);
		};
		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			const data = await firestore
				.collection("items")
				.where("status", "==", "new")
				.limit(5)
				.get();
			const mapData = data.docs.map((doc) => doc.data());
			newCtx.setNewItems(mapData);
		};
		fetchData();
	}, []);

	return (
		<StyledSlider>
			<Headline>Bestsellers</Headline>
			<Slider>
				{bestCtx.bestItems.map((bestItem) => (
					<Link to={`/shop/${bestItem.id}`} key={bestItem.id}>
						<StyledSliderElement>
							<PreviewImage src={bestItem.imageUrl} />
							<h4>{bestItem.brand}</h4>
							<p>{bestItem.name}</p>
							<p>{bestItem.price}$</p>
						</StyledSliderElement>
					</Link>
				))}
				<Link to={"/bestseller"}>
					<Button name={"see all"} />
				</Link>
			</Slider>
			<Headline>New</Headline>
			<Slider>
				{newCtx.newItems.map((newItem) => (
					<Link to={`/shop/${newItem.id}`} key={newItem.id}>
						<StyledSliderElement>
							<PreviewImage src={newItem.imageUrl} />
							<h4>{newItem.brand}</h4>
							<p>{newItem.name}</p>
							<p>{newItem.price}$</p>
						</StyledSliderElement>
					</Link>
				))}
				<Link to={"/new"}>
					<Button name={"see all"} />
				</Link>
			</Slider>
		</StyledSlider>
	);
};

export default PreviewSlider;
