import React from "react";
import styled from "styled-components";
import blue from "../../assets/images/bleu-de-chanel-parfum.jpg";
import Slider from "infinite-react-carousel";
import { device } from "../../theme/main-styles.styles";

const Headline = styled.h1`
	font-size: 1.3em;
	text-align: center;
	margin-top: 15px;
	margin-bottom: 10px;

	@media ${device.desktop} {
		font-size: 2.5em;
		margin-top: 35px;
		margin-bottom: 20px;
	}
`;

const PreviewImage = styled.img`
	width: 100%;
	height: 100%;
	padding-left: 15px;
	padding-right: 15px;
`;

const StyledSlider = styled.div`
	height: 100%;
	width: 100%;

	@media ${device.desktop} {
		height: 80%;
		width: 30%;
	}
`;

const PreviewSlider = () => {
	const settings = {
		arrows: false,
		dotsScroll: 4,
		slidesToShow: 2,
		wheel: false,
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
