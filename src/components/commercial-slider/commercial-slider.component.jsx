import React from "react";
import Slider from "infinite-react-carousel";
import blue from "../../assets/images/bleu-de-chanel-parfum.jpg";
import chanel from "../../assets/images/chanel.jpeg";
import styled from "styled-components";
import { device } from "../../theme/main-styles.styles";

const SliderContainer = styled.div`
	width: 100%;
	padding: 1em;

	@media ${device.desktop} {
		width: 40%;
	}
`;
const BlueDeChanelImage = styled.img`
	width: 100%;
	margin-top: 2vh;
	padding: 1em;

	@media ${device.desktop} {
		width: 100%;
	}
`;

const CommercialSlider = () => (
	<SliderContainer>
		<Slider
			autoplaySpeed={6000}
			dots={true}
			duration={500}
			shift={5}
			wheel={false}
			arrows={false}
		>
			<div>
				<BlueDeChanelImage src={chanel} />
			</div>
			<div>
				<BlueDeChanelImage src={blue} />
			</div>
			<div>
				<BlueDeChanelImage src={blue} />
			</div>
		</Slider>
	</SliderContainer>
);

export default CommercialSlider;
