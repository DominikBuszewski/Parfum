import React from "react";
import styled from "styled-components";
import CommercialSlider from "../../components/commercial-slider/commercial-slider.component";
import PreviewSlider from "../../components/preview-slider/preview-slider.component.jsx";

const Directory = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Homepage = () => {
	return (
		<Directory>
			<CommercialSlider />
			<PreviewSlider />
		</Directory>
	);
};
export default Homepage;
