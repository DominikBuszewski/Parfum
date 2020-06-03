import React from "react";
import Slider from "infinite-react-carousel";
import blue from "../../assets/images/bleu-de-chanel-parfum.jpg";
import styled from "styled-components";

const BlueDeChanelImage = styled.img`
	width: 100%;
	/* margin-left: 5%; */
	margin-top: 2vh;
`;

const CommercialSlider = () => (
	<Slider autoplaySpeed={6000} dots={true} duration={500} shift={5}>
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
);

export default CommercialSlider;