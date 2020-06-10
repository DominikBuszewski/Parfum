import React from "react";
import Slider from "infinite-react-carousel";
import blue from "../../assets/images/bleu-de-chanel-parfum.jpg";
import styled from "styled-components";
import { device } from "../../theme/main-styles.styles";

const SliderContainer = styled.div`
	width: 100%;

	@media ${device.desktop} {
		width: 50%;
	}
`;
const BlueDeChanelImage = styled.img`
	width: 100%;
	/* margin-left: 5%; */
	margin-top: 2vh;
	padding-left: 35px;
	padding-right: 35px;
`;

const CommercialSlider = () => (
	<SliderContainer>
		<Slider
			autoplaySpeed={6000}
			dots={true}
			duration={500}
			shift={5}
			wheel={false}
		>
			<div>
				<BlueDeChanelImage src={blue} />
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
