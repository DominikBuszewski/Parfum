import React from "react";
import styled from "styled-components";
import blue from "../../assets/images/bleu-de-chanel-parfum.jpg";
import Slider from "infinite-react-carousel";

// const PreviewWrapper = styled.div`
// 	height: 40vh;
// 	width: 100%;
// 	border: 1px solid green;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	align-items: center;
// `;

// const PreviewContainer = styled.div`
// 	width: 100%;
// 	height: 80%;
// 	border: 1px solid blue;
// 	overflow-x: scroll;
// `;

const Headline = styled.h1`
	font-size: 1.3em;
	text-align: center;
	margin-top: 15px;
	margin-bottom: 10px;
`;

// const PreviewCollection = styled.div`
// 	width: 50%;
// 	height: 95%;
// 	display: flex;
// `;

const PreviewImage = styled.img`
	width: 100%;
	height: 100%;
	padding-left: 15px;
	padding-right: 15px;
`;

const StyledSlider = styled.div``;

const PreviewSlider = () => {
	const settings = {
		arrows: false,
		dotsScroll: 4,
		slidesToShow: 2,
		wheel: true,
		dots: true,
	};
	return (
		<StyledSlider>
			<Headline>Bestsellers</Headline>
			<Slider {...settings}>
				<div>
					<PreviewImage src={blue} />
				</div>
				<div>
					<PreviewImage src={blue} />
				</div>
				<div>
					<PreviewImage src={blue} />
				</div>
				<div>
					<PreviewImage src={blue} />
				</div>
				<div>
					<PreviewImage src={blue} />
				</div>
				<div>
					<PreviewImage src={blue} />
				</div>
				<div>
					<PreviewImage src={blue} />
				</div>
				<div>
					<PreviewImage src={blue} />
				</div>
				<div>
					<PreviewImage src={blue} />
				</div>
				<div>
					<PreviewImage src={blue} />
				</div>
			</Slider>
		</StyledSlider>
	);
};

export default PreviewSlider;
