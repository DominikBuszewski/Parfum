import React from "react";
import styled from "styled-components";
import aqua from "../../assets/images/aquadigioparfum.png";
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

const StyledSliderElement = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h4 {
		text-align: center;
	}

	p {
		text-align: center;
	}

	:hover {
		cursor: pointer;
		border: 1px solid black;
	}
`;

const PreviewSlider = () => {
	const settings = {
		arrows: false,
		dotsScroll: 4,
		slidesToShow: 2,
		swipe: true,
		wheel: false,
		dots: true,
		centerMode: true,
	};
	return (
		<StyledSlider>
			<Headline>Bestsellers</Headline>
			<Slider {...settings}>
				<StyledSliderElement>
					<PreviewImage src={aqua} />
					<h4>Giorgio Armani</h4>
					<p>Aqua Di Gio Profumo</p>
					<p>34.50$ / 50ml</p>
				</StyledSliderElement>
				<div>
					<PreviewImage src={aqua} />
				</div>
				<div>
					<PreviewImage src={aqua} />
				</div>
				<div>
					<PreviewImage src={aqua} />
				</div>
				<div>
					<PreviewImage src={aqua} />
				</div>
				<div>
					<PreviewImage src={aqua} />
				</div>
				<div>
					<PreviewImage src={aqua} />
				</div>
				<div>
					<PreviewImage src={aqua} />
				</div>
				<div>
					<PreviewImage src={aqua} />
				</div>
				<div>
					<PreviewImage src={aqua} />
				</div>
			</Slider>
		</StyledSlider>
	);
};

export default PreviewSlider;
