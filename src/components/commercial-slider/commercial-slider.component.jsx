import React from "react";
import Slider from "infinite-react-carousel";
import armani from "../../assets/images/armani.jpg";
import libre from "../../assets/images/libre.jpg";
import lndl from "../../assets/images/ysly.jpg";
import alien from "../../assets/images/alien.jpg";
import styled from "styled-components";
import { device } from "../../theme/main-styles.styles";
import { Link } from "react-router-dom";

const SliderContainer = styled.div`
	width: 96vw;
	padding: 1em;

	@media ${device.desktop} {
		width: 80vw;
	}
`;
const StyledImage = styled.img`
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
			autoplay={true}
			autoplaySpeed={6000}
			dots={true}
			duration={500}
			shift={5}
			wheel={false}
			arrows={false}
		>
			<div>
				<Link to="/shop/15">
					<StyledImage src={libre} />
				</Link>
			</div>
			<div>
				<Link to="/shop/1">
					<StyledImage src={armani} />
				</Link>
			</div>
			<div>
				<Link to="/shop/14">
					<StyledImage src={lndl} />
				</Link>
			</div>
			<div>
				<Link to="/shop/16">
					<StyledImage src={alien} />
				</Link>
			</div>
		</Slider>
	</SliderContainer>
);

export default CommercialSlider;
